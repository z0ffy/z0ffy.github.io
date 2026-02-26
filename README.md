# Tome & Jerry 😄

> A personal site powered by [Gossip](https://github.com/qianxi0410/gossip), using GitHub Issues as the content source. Supports static export and GitHub Pages deployment.

<div align="center">
  <img src="https://github.com/z0ffy/z0ffy.github.io/blob/master/public/Tom&Jerry.gif?raw=true" width=100% alt="Tome&Jerry" />
</div>

---

## Tech Stack

- **Framework**: Next.js 16 (React 19) + TypeScript
- **Styling**: Tailwind CSS 4
- **Data**: GitHub API (Octokit); Issues are treated as posts
- **Features**: Light/dark theme, Markdown + GFM, code highlighting, Utterances comments, RSS, Sitemap

## Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or yarn

## Quick Start

### 1. Install dependencies

```bash
pnpm install
```

### 2. Environment variables

Create `.env.local` in the project root, for example:

```env
# GitHub (required)
OWNER=your-github-username
REPO=repository-name (e.g. z0ffy.github.io)
ACCESS_TOKEN=Personal Access Token with repo scope

# Optional
GOOGLE_ANALYTICS_ID=G-xxxx   # Leave empty to disable GA
DEPLOY_TARGET=gh-pages       # Set when deploying to GitHub Pages (for basePath, etc.)
```

### 3. Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build and preview

```bash
pnpm build   # Static export to out/
pnpm start   # Preview production build locally (if needed)
```

## Configuration

Site behaviour can be tuned in `next.config.js` under `env`:

| Variable | Description | Example |
|----------|-------------|---------|
| `comment` | Enable Utterances comments | `'true'` / `'false'` |
| `theme` | Theme mode | `'light'` / `'dark'` / `'both'` |
| `rss` | Generate RSS on build | `'true'` / `'false'` |
| `back2top` | Show back-to-top button | `'true'` / `'false'` |
| `mail` | Email to display | string |
| `twitter` | Twitter handle to display | string |
| `bio` | Homepage bio (overrides GitHub bio) | string |

**Posts**: Issues in the repo with the `LABELS` label (default `published`) are shown as posts; the Issue title is the post slug.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Static build (postbuild runs sitemap generation) |
| `pnpm start` | Run production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm fix` | ESLint with auto-fix |

## Deployment

- The project uses `output: "export"` for a static site. Deploy the `out/` directory to any static host.
- For **GitHub Pages**, set `DEPLOY_TARGET=gh-pages`. If the repo name is not `{OWNER}.github.io`, `basePath` is set automatically.

## License

[MIT](LICENSE) © zoffy
