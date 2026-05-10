# Kenneth Nicasens — Blog

A dark, editorial-style blog built with **Astro 5**, covering AI process design and the Microsoft Power Platform.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Available commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Adding a new post

1. Create a new `.md` file in `src/content/posts/`.
2. Add the required frontmatter:

```markdown
---
title: "Your Post Title"
excerpt: "A one- or two-sentence description shown in cards and SEO."
date: 2026-05-15
category: "AI · Process Design"
readTime: "5 min read"
visual: v1          # v1–v6, controls card header gradient
featured: false     # set true to pin in the featured slot
---

Your content here…
```

### Frontmatter reference

| Field      | Type                              | Required | Default |
| ---------- | --------------------------------- | -------- | ------- |
| `title`    | string                            | ✅        | —       |
| `excerpt`  | string                            | ✅        | —       |
| `date`     | date string (`YYYY-MM-DD`)        | ✅        | —       |
| `category` | string                            | ✅        | —       |
| `readTime` | string (e.g. `"6 min read"`)      | ✅        | —       |
| `visual`   | `v1` \| `v2` \| `v3` \| `v4` \| `v5` \| `v6` | ❌ | `v1` |
| `featured` | boolean                           | ❌        | `false` |

### Visual gradients

| Class | Colours                   |
| ----- | ------------------------- |
| `v1`  | Deep blue → Sky           |
| `v2`  | Purple → Amber            |
| `v3`  | Forest green → Mint       |
| `v4`  | Burnt brown → Pink        |
| `v5`  | Indigo → Violet           |
| `v6`  | Magenta → Blush           |

## Project structure

```
src/
├── content/posts/       ← Markdown blog posts
├── pages/
│   ├── index.astro      ← Homepage
│   └── posts/[...slug].astro
├── components/PostCard.astro
├── layouts/Base.astro
├── styles/global.css
└── content.config.ts
```

## Tech stack

- [Astro 5](https://astro.build) — static site generator
- Markdown content collections with glob loader
- Google Fonts: Fraunces, Inter Tight, JetBrains Mono
- CSS custom properties, glassmorphism, scroll-driven animations
- Zero JavaScript frameworks — vanilla JS only
