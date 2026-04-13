# Hover Scraper

This project now includes a reusable Puppeteer scraper for data that only appears when the mouse hovers interactive UI elements.

## Files

- `scripts/hover-scraper.js`: main scraper
- `scripts/hover-scraper.config.example.js`: example configuration

## Install

If Puppeteer is not yet available in your local environment, run:

```bash
npm install puppeteer
```

## Setup

Create a config file at `scripts/hover-scraper.config.js` by copying the example:

```js
import config from './hover-scraper.config.example.js';

export default config;
```

Then edit:

- `pages[].url`
- `pages[].hoverSelectors`
- `pages[].tooltipSelectors`
- `pages[].waitAfterHoverMs`

## Run

```bash
npm run scrape:hover
```

Optional CLI arguments:

```bash
node ./scripts/hover-scraper.js --config ./scripts/hover-scraper.config.js --output ./tmp/results.json
```

## Output

The scraper writes structured JSON including:

- page URL
- timestamp
- total hover candidates
- extracted tooltip entries
- target element text and attributes
- per-element errors when something fails

## Notes

- The script is designed for JavaScript-rendered pages.
- For best accuracy, tune `hoverSelectors` and `tooltipSelectors` per site.
- Generic discovery works reasonably well, but sites with custom hover behavior usually need explicit selectors.
