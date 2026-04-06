# Repository Guidelines

## Project Purpose
This repository is a Next.js 16 App Router sandbox used to define and test the cyberpunk visual language for a portfolio site that mixes React on the frontend with Node.js-backed services. The goal of this codebase is not feature completeness yet; it is to establish the technical baseline, UI direction, and reusable frontend patterns that later portfolio work will inherit.

## Core Stack
- Next.js 16 with App Router only
- React 19
- TypeScript in strict mode
- Tailwind CSS v4 as the primary styling system
- Global design tokens in CSS custom properties
- Docker multi-stage builds with Next.js `standalone` output
- Vercel as the primary deployment target
- MongoDB Atlas as the planned hosted database

## Architecture Rules
- Use App Router conventions exclusively. New routes belong under `app/`.
- Prefer Server Components by default. Only add `'use client'` when interactivity, browser APIs, or client-side state genuinely require it.
- Keep route segments small and composable. Extract reusable UI into feature-oriented component folders.
- Put cross-cutting helpers in `src/lib/` and shared presentational components in `src/components/`.
- Keep styling co-located with components when it improves clarity, but define theme primitives centrally in `app/globals.css`.
- Do not introduce additional CSS frameworks unless the repository documentation is updated with a clear rationale.
- Preserve `output: 'standalone'` in Next.js config so the Docker image remains compatible with the deployment plan.
- Treat MongoDB Atlas integration as an infrastructure boundary. Database clients and access code should be isolated under `src/lib/` or `src/server/` once introduced.
- Optimize for accessibility alongside aesthetics: visible focus states, keyboard reachability, semantic HTML, and sufficient contrast must remain intact even in neon-heavy UI.

## Recommended Structure
- `app/` for routes, layouts, and route-level UI
- `src/components/` for reusable UI components and section primitives
- `src/lib/` for utilities, configuration, and future service integrations
- `public/` for static assets
- `docs/` for design notes, references, and architectural decisions
- `docs/ai-style-guidelines.md` as the canonical AI-facing visual style reference
- `tests/` for automated test coverage when introduced

## Cyberpunk Visual Direction
- Colors: deep violet and black surfaces, electric purple primary glow, strong magenta and hot-pink accents, softer lavender support tones
- Typography: geometric or techno display styles for headings, cleaner readable sans-serif for body copy
- Glow usage: reserved for emphasis, active states, and framing accents rather than every element
- Spacing: generous section spacing with compact component internals to create dense control panels on breathable layouts
- Borders: thin high-contrast strokes, clipped corners, panel outlines, and selective inner highlights
- Backgrounds: moderately opaque panels and overlays so layers feel atmospheric without becoming muddy
- Interaction mood: precise, tactical, slightly arcade-like; transitions should feel fast and deliberate, not soft or playful

## AI Style Reference
- When generating or editing UI, use [docs/ai-style-guidelines.md](/docs/ai-style-guidelines.md) as the canonical source for palette and typography details.
- When writing hero titles or headings, treat the current light heading tone used by the main page title as the default pattern.
- Before creating any components, decide between server-side and client-side based on [docs/server-side-or-client-side.md](/docs/server-side-or-client-side.md).
- When creating server-side components, follow the guidelines at [docs/server-side-components-guidelines.md](/docs/server-side-components-guidelines.md).
- When creating client-side components, follow the guidelines at [docs/client-side-components-guidelines.md](/docs/client-side-components-guidelines.md).
- When documenting new components (just do it when prompted manually), [docs/storybooking-components-guidelines.md](/docs/storybooking-components-guidelines.md) use as component documentation guidelines.
- If this file and inline guidance diverge, ask for human guidance in the prompt.

## AI Commands
- Custom AI command phrase: `check component docs`
- Expected behavior: review newly created or changed reusable components, verify whether matching Storybook stories exist, and if they do not, create or update concise component documentation before finishing the task.

## Commands
- `npm install` to install dependencies
- `npm run dev` to start the Next.js development server
- `npm run build` to create the production build
- `npm run start` to run the production server

## Delivery Notes
- Keep top-level clutter low. Add new root files only when they support tooling, deployment, or project governance.
- Update `README.md`, `AGENTS.md`, `GEMINI.md` and `CLAUDE.md` together when architecture or workflow decisions materially change.
- Do not commit secrets. Store runtime configuration in ignored environment files such as `.env.local`.
