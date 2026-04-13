export default {
  outputFile: './scraping-results/hover-results.json',
  browser: {
    headless: true,
    slowMo: 0,
    defaultTimeout: 15000,
    viewport: {
      width: 1440,
      height: 960,
    },
  },
  pages: [
    {
      url: 'https://example.com',
      waitUntil: 'networkidle2',
      pageName: 'example-home',
      hoverSelectors: [
        '[data-tooltip]',
        '[title]',
        '[aria-label]',
        '[aria-describedby]',
        '[data-hover]',
        'button',
        'a',
      ],
      tooltipSelectors: [
        '[role="tooltip"]',
        '.tooltip',
        '.tippy-box',
        '.popover',
        '.hover-content',
      ],
      waitAfterHoverMs: 500,
      maxElementsPerSelector: 20,
    },
  ],
};
