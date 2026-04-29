# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog site using GitHub Issues as the content source. Built on the [Gossip](https://github.com/qianxi0410/gossip) architecture. Issues tagged with `published` label are rendered as blog posts.

**Stack**: Next.js 16 (React 19) + TypeScript + Tailwind CSS 4 + Octokit (GitHub API)

## Commands

```bash
pnpm dev          # Development server (localhost:3000)
pnpm build        # Static export to out/
pnpm start        # Preview production build
pnpm lint         # ESLint check
pnpm fix          # ESLint with auto-fix
```

## Environment Variables

Create `.env.local` with:
- `OWNER` - GitHub username (required)
- `REPO` - Repository name (required)
- `ACCESS_TOKEN` - GitHub PAT with repo scope (required)
- `GOOGLE_ANALYTICS_ID` - GA tracking ID (optional)
- `DEPLOY_TARGET` - Set to `gh-pages` for GitHub Pages deployment

## Architecture

**Data Flow**: GitHub Issues → Octokit API → `lib/post.ts` → Static pages at build time

**Key Directories**:
- `pages/` - Next.js pages router with dynamic routes for posts (`[id].tsx`) and tags (`tag/[id].tsx`)
- `lib/` - Core data fetching logic
  - `cli.ts` - Octokit client initialization
  - `post.ts` - Fetch posts, tags, and paths from GitHub Issues API
- `components/` - React components (markdown renderer, header, footer, comments, theme toggle)
- `gossip.d.ts` - Type definitions for Post, User, and custom NextPageWithLayout

**Configuration**: Site settings in `next.config.js` under `env`:
- `comment` - Enable Utterances comments (`'true'`/`'false'`)
- `theme` - Theme mode (`'light'`/`'dark'`/`'both'`)
- `rss` - Generate RSS feed (`'true'`/`'false'`)
- `back2top` - Show back-to-top button
- `mail`, `twitter`, `bio` - User info display

**Deployment**: Uses `output: "export"` for static site generation. For GitHub Pages with non-username.github.io repos, `basePath` is auto-configured.