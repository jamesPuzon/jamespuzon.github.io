# jamespuzon.github.io

James Puzon's personal website — live at [jamespuzon.com](https://jamespuzon.com).

## Stack

Static HTML/CSS/JS site hosted on GitHub Pages. No build step required.

## Structure

```
├── index.html          # Home
├── about.html          # About
├── portfolio.html      # Portfolio listing
├── contact.html        # Contact
├── content.json        # All page content — edit this to update the site
├── styles.css          # Global styles
├── navigation.js       # Sticky banner + mobile menu
├── content.js          # Shared content loader (fetch + copyright year)
├── home.js             # Home page content rendering
├── about.js            # About page content rendering
├── portfolio.js        # Portfolio page content rendering
├── contact.js          # Contact page content rendering
├── images/             # All image assets
└── portfolio/          # Individual project pages
    └── docs/           # Project documents (PDFs, .docx)
```

## Updating content

All text, images, and links are controlled by [`content.json`](content.json). See [`CONTENT-GUIDE.md`](CONTENT-GUIDE.md) for full instructions.

## Running locally

Open any `.html` file via a local server (e.g. `npx serve .` or VS Code Live Server). Direct file:// access won't work because `content.json` is loaded via `fetch`.

## Pre-push validation

A git hook validates `content.json` before every push. If it fails, fix the JSON syntax error before pushing.

