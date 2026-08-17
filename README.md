# Beginner Books

A responsive, reader-friendly static ebook website with two interactive beginner books:

1. **Software Testing for Beginners**
2. **English for Beginners**

## Features

- iPad / laptop / mobile responsive reading layout
- Book library and chapter table of contents
- Lessons, practical examples, Q&A and mini quizzes
- Reading progress saved with `localStorage`
- Chapter bookmarks
- Search across both books
- Adjustable text size
- Paper, light and dark themes
- Print-friendly chapter layout
- Zero backend and zero build step
- Automatic GitHub Pages deployment from `main`

## GitHub Pages deployment

This repository includes `.github/workflows/pages.yml`.

For the first deployment only:

1. Open **Settings → Pages** in the GitHub repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`, or open **Actions → Deploy Beginner Books to GitHub Pages → Run workflow**.

After that, every push to `main` automatically redeploys the site.

Expected project Pages address for this repository:

`https://vsj91.github.io/ebooks/`

## Run locally

Open `index.html` directly, or run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Add another book

Open `books.js` and add another object to the `BOOKS` array using the same structure. The library, table of contents, search, progress and reader UI will pick it up automatically.

## Files

- `index.html` — application shell and dialogs
- `styles.css` — responsive ebook-reader styling
- `books.js` — all book content
- `app.js` — navigation, quizzes, progress, search and reader settings
- `.github/workflows/pages.yml` — automatic GitHub Pages deployment
