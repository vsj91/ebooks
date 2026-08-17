# Beginner Books — Build 6

A GitHub Pages-ready interactive learning library with **30 original beginner books × 100 pages each = 3,000 reading pages**.

Features:
- AI Tutor automatically connected to the configured Cloudflare Worker
- Browser-native Read Aloud
- Q&A and mini quiz on every page
- Saved reading progress and bookmarks
- Category filters for Technology, Language, Career, Money, Growth, Health and Wisdom
- Mobile, iPad and laptop responsive reader

## Copyright / content note
The library does **not** reproduce modern copyrighted books such as *Atomic Habits* or *The Psychology of Money*. Instead it contains original courses on habit building and money psychology. The Bhagavad Gita book uses original beginner commentary rather than copying a modern translation.

## Health note
Health books are general education only. They do not diagnose or treat disease. The Detox Myths book is deliberately safety-first: evidence reviews from the U.S. NCCIH report no compelling evidence that commercial detox diets remove toxins or provide lasting weight-management benefits, and some cleanses can be unsafe. Nutrition content follows broad WHO healthy-diet principles such as adequacy, balance, moderation and diversity.

## Deployment
Upload all files to the repository root. GitHub Pages can publish from `main` / root, or use the included GitHub Actions workflow.

AI endpoint: `https://ebooks-ai.vinaysjain-ec.workers.dev/api/chat`
