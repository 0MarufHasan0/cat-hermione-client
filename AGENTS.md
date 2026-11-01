<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Instructions

Next.js 16 (App Router) + React 19 + TypeScript, in `src/`. No tests, no CI, no backend routes. `README.md` is create-next-app boilerplate — ignore it.

## Commands
- `npm run dev` — dev server (http://localhost:3000)
- `npm run lint` — ESLint (flat config: `eslint-config-next` core-web-vitals + typescript)
- `npx tsc --noEmit` — typecheck (no npm script for this)
- `npm run build` — production build (also verifies types); run after changes when feasible
- Only `npm` is used; there is a `package-lock.json`.

## Toolchain gotchas
- **React Compiler is ON** (`reactCompiler: true` in `next.config.ts`). Don't add manual memoization (`useMemo`, `useCallback`, `React.memo`) — it's unnecessary and inconsistent with the invariant codebase.
- **Tailwind v4, Turbopack**: no `tailwind.config.*`. Theme, tokens, and the dark variant are defined in `src/app/globals.css` via `@theme inline` / `@custom-variant`. Tailwind is wired through a Turbopack rule in `next.config.ts`; don't "fix" this setup without reading it.
- **shadcn/ui uses `@base-ui/react` primitives, NOT Radix** — style "base-nova" per `components.json`. Standard shadcn/Radix imports like `@radix-ui/react-*` or Radix prop names (`onOpenChange`) will not work here; check an existing component in `src/components/ui/` first and follow its API. Add new UI primitives with the shadcn CLI (`npx shadcn add <component>`) instead of hand-writing them.
- `cn` is imported from the `cn` package directly (`import { cn } from "cn"`). `@/lib/utils` only re-exports it for alias compatibility.
- Icons come from `lucide-react`.

## Layout / conventions
- Path alias `@/*` → `src/*` (`tsconfig.json`).
- `src/components/ui/` is generated/vendor shadcn code — don't restructure or restyle these files; they use `data-slot` attributes.
- App pages live in `src/app/`; Server Components by default, `"use client"` only where needed.
- Keep changes small and beginner-simple; don't add packages or abstractions the task doesn't require. Forms: `Object.fromEntries(new FormData(event.currentTarget).entries())`, minimal validation.
