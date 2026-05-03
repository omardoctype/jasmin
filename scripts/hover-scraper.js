import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_OUTPUT_FILE = './scraping-results/hover-results.json';
const DEFAULT_HOVER_SELECTORS = [
  '[data-tooltip]',
  '[data-tippy-content]',
  '[title]',
  '[aria-label]',
  '[aria-describedby]',
  '[data-hover]',
  '[data-hovercard]',
  'button',
  'a',
];
const DEFAULT_TOOLTIP_SELECTORS = [
  '[role="tooltip"]',
  '.tooltip',
  '.tippy-box',
  '.popover',
  '.popper',
  '.hover-content',
  '.tooltip-content',
];

function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function parseCliArgs(argv) {
  const options = {
    configPath: path.resolve(process.cwd(), './scripts/hover-scraper.config.js'),
    outputFile: null,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--config' && argv[index + 1]) {
      options.configPath = path.resolve(process.cwd(), argv[index + 1]);
      index += 1;
      continue;
    }

    if (token === '--output' && argv[index + 1]) {
      options.outputFile = path.resolve(process.cwd(), argv[index + 1]);
      index += 1;
    }
  }

  return options;
}

async function loadConfig(configPath) {
  try {
    const moduleUrl = pathToFileURL(configPath).href;
    const configModule = await import(moduleUrl);
    return configModule.default ?? configModule;
  } catch (error) {
    throw new Error(`Unable to load config file at ${configPath}: ${error.message}`);
  }
}

async function ensureDirectory(filePath) {
  const directory = path.dirname(filePath);
  await fs.mkdir(directory, { recursive: true });
}

function mergePageConfig(globalConfig, pageConfig) {
  return {
    waitUntil: 'networkidle2',
    waitAfterHoverMs: 400,
    maxElementsPerSelector: 25,
    hoverSelectors: globalConfig.hoverSelectors ?? DEFAULT_HOVER_SELECTORS,
    tooltipSelectors: globalConfig.tooltipSelectors ?? DEFAULT_TOOLTIP_SELECTORS,
    ...pageConfig,
  };
}

async function collectTargets(page, selectors, maxElementsPerSelector) {
  const targets = [];
  const seenKeys = new Set();

  for (const selector of selectors) {
    await page.waitForSelector('body');
    const handles = await page.$$(selector);

    for (let index = 0; index < Math.min(handles.length, maxElementsPerSelector); index += 1) {
      const handle = handles[index];

      try {
        const metadata = await handle.evaluate((element, selectorValue, selectorIndex) => {
          const rect = element.getBoundingClientRect();
          const styles = window.getComputedStyle(element);
          const visible =
            rect.width > 0 &&
            rect.height > 0 &&
            styles.visibility !== 'hidden' &&
            styles.display !== 'none';

          const trimmedText = (element.innerText || element.textContent || '')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 240);

          const attributes = {};
          for (const attribute of element.getAttributeNames()) {
            attributes[attribute] = element.getAttribute(attribute);
          }

          return {
            selector: selectorValue,
            selectorIndex,
            tagName: element.tagName.toLowerCase(),
            visible,
            text: trimmedText,
            attributes,
            key: JSON.stringify({
              selector: selectorValue,
              selectorIndex,
              tagName: element.tagName.toLowerCase(),
              text: trimmedText,
              id: element.id || null,
              className: element.className || null,
            }),
          };
        }, selector, index);

        if (!metadata.visible || seenKeys.has(metadata.key)) {
          await handle.dispose();
          continue;
        }

        seenKeys.add(metadata.key);
        targets.push({
          handle,
          metadata,
        });
      } catch (error) {
        await handle.dispose();
        console.warn(`Skipping target ${selector}#${index}: ${error.message}`);
      }
    }
  }

  return targets;
}

async function hoverAndExtract(page, target, pageConfig) {
  const { handle, metadata } = target;
  const tooltipSelectors = pageConfig.tooltipSelectors ?? DEFAULT_TOOLTIP_SELECTORS;
  const waitAfterHoverMs = pageConfig.waitAfterHoverMs ?? 400;

  try {
    await handle.evaluate((element) => {
      element.scrollIntoView({
        behavior: 'instant',
        block: 'center',
        inline: 'center',
      });
    });

    await sleep(150);

    const preHoverState = await page.evaluate((selectors) => {
      const visibleTexts = [];

      for (const selector of selectors) {
        const nodes = document.querySelectorAll(selector);
        for (const node of nodes) {
          const rect = node.getBoundingClientRect();
          const styles = window.getComputedStyle(node);
          const visible =
            rect.width > 0 &&
            rect.height > 0 &&
            styles.visibility !== 'hidden' &&
            styles.display !== 'none' &&
            styles.opacity !== '0';

          if (visible) {
            const text = (node.innerText || node.textContent || '').replace(/\s+/g, ' ').trim();
            if (text) {
              visibleTexts.push(text);
            }
          }
        }
      }

      return visibleTexts;
    }, tooltipSelectors);

    await handle.hover();
    await sleep(waitAfterHoverMs);

    try {
      await page.waitForFunction(
        ({ selectors, previousTexts }) => {
          for (const selector of selectors) {
            const nodes = document.querySelectorAll(selector);
            for (const node of nodes) {
              const rect = node.getBoundingClientRect();
              const styles = window.getComputedStyle(node);
              const visible =
                rect.width > 0 &&
                rect.height > 0 &&
                styles.visibility !== 'hidden' &&
                styles.display !== 'none' &&
                styles.opacity !== '0';

              if (!visible) {
                continue;
              }

              const text = (node.innerText || node.textContent || '').replace(/\s+/g, ' ').trim();
              if (text && !previousTexts.includes(text)) {
                return true;
              }
            }
          }

          return false;
        },
        { timeout: waitAfterHoverMs + 1500 },
        { selectors: tooltipSelectors, previousTexts: preHoverState },
      );
    } catch {
      // It is valid for hover content to come from attributes like title/aria-label.
    }

    const extracted = await page.evaluate(
      ({ selectors, targetSelector, targetIndex }) => {
        const getVisibleNodes = (selector) => {
          const nodes = Array.from(document.querySelectorAll(selector));
          return nodes.filter((node) => {
            const rect = node.getBoundingClientRect();
            const styles = window.getComputedStyle(node);
            return (
              rect.width > 0 &&
              rect.height > 0 &&
              styles.visibility !== 'hidden' &&
              styles.display !== 'none' &&
              styles.opacity !== '0'
            );
          });
        };

        const targetNode = document.querySelectorAll(targetSelector)[targetIndex] ?? null;
        const targetAttributes = {};

        if (targetNode) {
          for (const attribute of targetNode.getAttributeNames()) {
            targetAttributes[attribute] = targetNode.getAttribute(attribute);
          }
        }

        const tooltipEntries = selectors.flatMap((selector) =>
          getVisibleNodes(selector).map((node) => ({
            selector,
            text: (node.innerText || node.textContent || '').replace(/\s+/g, ' ').trim(),
            html: node.innerHTML.slice(0, 500),
            attributes: Object.fromEntries(node.getAttributeNames().map((name) => [name, node.getAttribute(name)])),
          })),
        );

        return {
          tooltipEntries,
          targetAttributes,
          targetText: targetNode
            ? (targetNode.innerText || targetNode.textContent || '').replace(/\s+/g, ' ').trim()
            : '',
          title: targetNode?.getAttribute('title') ?? null,
          ariaLabel: targetNode?.getAttribute('aria-label') ?? null,
          ariaDescribedBy: targetNode?.getAttribute('aria-describedby') ?? null,
        };
      },
      {
        selectors: tooltipSelectors,
        targetSelector: metadata.selector,
        targetIndex: metadata.selectorIndex,
      },
    );

    await page.mouse.move(0, 0);
    await sleep(100);

    return {
      ...metadata,
      hoverData: {
        tooltipEntries: extracted.tooltipEntries.filter((entry) => entry.text || entry.html),
        title: extracted.title,
        ariaLabel: extracted.ariaLabel,
        ariaDescribedBy: extracted.ariaDescribedBy,
      },
      elementSnapshot: {
        text: extracted.targetText,
        attributes: extracted.targetAttributes,
      },
    };
  } catch (error) {
    return {
      ...metadata,
      error: error.message,
    };
  } finally {
    await handle.dispose();
  }
}

async function scrapePage(browser, pageConfig) {
  const page = await browser.newPage();

  try {
    const defaultTimeout = pageConfig.browser?.defaultTimeout ?? 15000;
    await page.setViewport(pageConfig.browser?.viewport ?? { width: 1440, height: 960 });
    page.setDefaultTimeout(defaultTimeout);

    console.log(`Opening ${pageConfig.url}`);
    await page.goto(pageConfig.url, { waitUntil: pageConfig.waitUntil });
    await sleep(1000);

    const targets = await collectTargets(
      page,
      pageConfig.hoverSelectors ?? DEFAULT_HOVER_SELECTORS,
      pageConfig.maxElementsPerSelector ?? 25,
    );

    console.log(`Found ${targets.length} hover candidates on ${pageConfig.url}`);

    const items = [];
    for (let index = 0; index < targets.length; index += 1) {
      const target = targets[index];
      console.log(
        `Hovering ${index + 1}/${targets.length} on ${pageConfig.pageName ?? pageConfig.url} with selector ${target.metadata.selector}`,
      );
      const result = await hoverAndExtract(page, target, pageConfig);
      items.push(result);
    }

    return {
      pageName: pageConfig.pageName ?? null,
      url: pageConfig.url,
      scrapedAt: new Date().toISOString(),
      totalCandidates: targets.length,
      items,
    };
  } finally {
    await page.close();
  }
}

async function main() {
  const options = parseCliArgs(process.argv.slice(2));
  const userConfig = await loadConfig(options.configPath);

  if (!userConfig?.pages?.length) {
    throw new Error('The config file must export an object with a non-empty "pages" array.');
  }

  const outputFile = options.outputFile ?? path.resolve(process.cwd(), userConfig.outputFile ?? DEFAULT_OUTPUT_FILE);
  const browserConfig = {
    headless: userConfig.browser?.headless ?? true,
    slowMo: userConfig.browser?.slowMo ?? 0,
  };

  const browser = await puppeteer.launch(browserConfig);

  try {
    const results = [];

    for (const pageEntry of userConfig.pages) {
      const pageConfig = mergePageConfig(userConfig, pageEntry);
      pageConfig.browser = userConfig.browser ?? {};

      try {
        const pageResult = await scrapePage(browser, pageConfig);
        results.push(pageResult);
      } catch (error) {
        console.error(`Failed to scrape ${pageEntry.url}: ${error.message}`);
        results.push({
          pageName: pageEntry.pageName ?? null,
          url: pageEntry.url,
          scrapedAt: new Date().toISOString(),
          error: error.message,
          items: [],
        });
      }
    }

    const payload = {
      generatedAt: new Date().toISOString(),
      configUsed: {
        outputFile,
        pages: userConfig.pages.map((pageEntry) => ({
          pageName: pageEntry.pageName ?? null,
          url: pageEntry.url,
        })),
      },
      results,
    };

    await ensureDirectory(outputFile);
    await fs.writeFile(outputFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

    console.log(`Saved scraping results to ${outputFile}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(`Hover scraping failed: ${error.message}`);
  process.exitCode = 1;
});
