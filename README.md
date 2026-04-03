# Cyberpunk CSS Style Test

This repository is the style sandbox for a portfolio website. It defines the Day 1 baseline: a Next.js 16 App Router project, the initial cyberpunk design direction, and the deployment/runtime choices that later portfolio work will inherit.

This is a style playground, not the final portfolio. The current page exists to validate visual direction and stack decisions before moving into design tokens, component experiments, and reusable UI primitives.

## Day 1 Deliverables
- Next.js 16 sandbox initialized in-place
- App Router selected as the only routing architecture
- Tailwind CSS v4 selected as the styling approach
- Docker multi-stage build configured around `output: 'standalone'`
- Documentation aligned in `README.md`, `AGENTS.md`, and `CLAUDE.md`
- Initial cyberpunk style baseline implemented in the starter page

## Chosen Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Docker multi-stage build
- Vercel deployment
- MongoDB Atlas for persistence

## Architecture Direction
This project uses the modern App Router architecture:
- Route files live under `app/`.
- Server Components are the default.
- Client Components should be introduced only for interactivity, browser APIs, or local UI state that cannot stay on the server.

Planned structure:
- `app/` for routes and layouts
- `src/components/` for reusable UI components
- `src/lib/` for utilities and future integrations
- `public/` for static assets
- `docs/` for design notes and architectural decisions
- `docs/ai-style-guidelines.md` for the canonical AI-facing visual reference
- `tests/` for automated tests when added

## Frameworks used (so far)

| Candidate | Reason |
| --- | --- |
| Tailwind CSS v4 | Fast iteration, strong utility ergonomics, easy token layering with CSS variables, works well for experimental UI systems |

## Cyberpunk Visual Direction
- Palette: purple-led surfaces with punk-red emphasis and selective cyan highlights
- Titles and headings: use the lighter lavender-pink heading tone seen in the main hero title as the default title treatment
- Background treatment: moderately opaque panels and overlays so the interface keeps visible layering without looking muddy or overly transparent
- Typography: mono-forward, technical, readable, and consistent with the project style guide
- Glow usage: selective rather than constant, focused on active controls, key labels, separators, and hover/focus states
- Spacing: roomy page sections with denser control-group spacing inside components
- Borders: thin luminous outlines, clipped corners, panel frames, and subtle inner strokes
- Interaction mood: tactical, precise, high-tech, and slightly arcade-inspired

Detailed palette and typography instructions for AI tools live in [docs/ai-style-guidelines.md](/docs/ai-style-guidelines.md).

## Deployment and Runtime Notes

### Docker
The repository includes a multi-stage Dockerfile. Production builds use Next.js standalone output to keep the final image smaller and self-contained.

### Vercel
Vercel is the planned primary deployment platform. The repository is structured to stay compatible with Vercel defaults while retaining a Docker path for containerized deployment.

### MongoDB Atlas
MongoDB Atlas is the planned hosted database. No database integration is implemented on Day 1, but the repository structure and documentation already reserve `src/lib/` or `src/server/` for future data-access boundaries.

## Commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`
