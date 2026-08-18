# AGENTS.md

## Project structure

Single Vite app lives in `products-app/`, not at repo root. All commands should be run from that directory.

## Commands (from `products-app/`)

- `npm run dev` — Vite dev server
- `npm run build` — production build
- `npm run lint` — oxlint (not ESLint)
- `npm run preview` — preview production build

No test runner, no typecheck command. This is plain JS (no TypeScript).

## Stack

- React 19 + Vite 8
- Redux Toolkit (`@reduxjs/toolkit`) for state
- React Router 7 for routing
- Axios for HTTP (api client in `src/api/productsApi.js`)
- oxlint for linting (config in `.oxlintrc.json`)

## Key conventions

- **UI language is Russian.** All user-facing strings are in Russian; keep them that way when editing.
- **Data source is external.** `dummyjson.com` API — no local backend. `ProductDetailPage` makes direct axios calls instead of using the Redux store (different pattern from `HomePage`).
- **ES modules.** `package.json` sets `"type": "module"`.
- **No TypeScript, no PropTypes.** Components are plain `.jsx` with no type annotations.

## Architecture notes

- Redux store: `src/store/store.js`, single `products` slice in `src/store/productsSlice.js`
- API layer: `src/api/productsApi.js` — thin axios wrapper
- Routes: `/` (catalog), `/product/:id` (detail), `/about`
- `dist/` is committed — do not modify it directly; use `npm run build`
