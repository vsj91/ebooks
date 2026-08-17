# Beginner Books — Build 4

A reader-friendly static ebook website for GitHub Pages with **AI Tutor** and **Read Aloud**.

## Books

- **Software Testing for Beginners** — 100 reading pages across 10 modules
- **English for Beginners** — 100 reading pages across 10 modules

Every page includes a beginner explanation, practical example, exercise, Q&A and mini quiz.

## Reader features

- 200 learning pages total
- Responsive mobile, iPad and laptop layout
- Module-based table of contents
- Search, bookmarks and completion tracking
- Saved progress with localStorage
- Paper, light and dark themes
- Small/medium/large fonts
- **Read Aloud** using the browser speech engine
- Voice selection and 0.8× / 1× / 1.2× / 1.4× speed
- **AI Tutor** that receives the current page as context

## 1. GitHub Pages

Upload the site files to the repository root. The included `.github/workflows/pages.yml` can deploy the site when GitHub Pages Source is set to **GitHub Actions**.

Project URL: `https://vsj91.github.io/ebooks/`

## 2. Deploy the AI Tutor Worker

The website itself remains static. AI requests go to the Cloudflare Worker in `/worker`, so no API token is exposed in browser JavaScript.

### Wrangler method

```bash
cd worker
npm install
npx wrangler login
npm run deploy
```

The deployment prints a URL similar to:

```text
https://ebooks-ai.<your-subdomain>.workers.dev
```

Your chatbot endpoint is:

```text
https://ebooks-ai.<your-subdomain>.workers.dev/api/chat
```

Open the ebook site → **Aa (Reading settings)** → **AI tutor endpoint**, paste that URL, and save it.

Alternatively, put the URL in `ai-config-v4.js` and commit it.

### Cloudflare configuration

`worker/wrangler.jsonc` already defines the Workers AI binding as `AI` and allows requests from `https://vsj91.github.io`.

The Worker uses `@cf/zai-org/glm-4.7-flash`. If you later use a custom domain, change `ALLOWED_ORIGIN` in `worker/wrangler.jsonc` to that site's origin.

## Voice reader

Read Aloud does not call the AI Worker. It uses `window.speechSynthesis` and the voices installed/provided by the user's browser/device. Voice availability therefore varies by device and browser.
