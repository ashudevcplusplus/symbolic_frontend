<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Synergize SaaS

Modern React + Vite app with a premium landing experience and theme system. Includes optimized builds, PWA-ready plugins, and Tailwind-on-CDN for zero-config styling.

## Quick Start

Prerequisites: Node.js 18+ and a package manager (npm, pnpm, or yarn).

1. Install dependencies
   - npm: `npm install`
   - pnpm: `pnpm install`
   - yarn: `yarn`

2. Configure environment
   Create a file named `.env.local` in the project root and set your Gemini key:
   
   ```bash
   GEMINI_API_KEY=your_key_here
   ```
   
   This is injected at build/dev time via Vite and available as `process.env.GEMINI_API_KEY`.

3. Run the dev server
   - `npm run dev`
   - Opens Vite at `http://localhost:5173` by default.

## Scripts

Defined in `package.json`:

- `dev`: Start Vite dev server
- `build`: Production build
- `preview`: Preview the production build
- `format`: Prettier format for code and docs

Example with pnpm:
```bash
pnpm dev
pnpm build
pnpm preview
```

## Tech Stack

- React 19, React DOM 19
- Vite 6 for bundling and dev server
- TypeScript 5
- Tailwind CSS via CDN (no build step needed)
- PWA + compression plugins configured for production

Key entry points:
- `index.html` sets up Tailwind CDN and theme tokens
- `index.tsx` boots the React app
- `App.tsx` lazy-loads visual components and the long landing page

## Environment Variables

The Vite config maps the following at build time:
- `GEMINI_API_KEY` → `process.env.GEMINI_API_KEY`

Ensure `.env.local` exists for local runs. For CI, export the variable or provide an `.env` for the appropriate mode.

## Build and Preview

```bash
npm run build
npm run preview
```

This outputs to `dist/` with compressed assets (gzip + brotli) and sensible chunking.

## Deploy

Any static host that serves `dist/` works (e.g., Netlify, Vercel, GitHub Pages). A typical flow:

1. Build: `npm run build`
2. Deploy the `dist/` directory
3. Set `GEMINI_API_KEY` in your hosting provider’s environment variables if the value needs to be bundled per environment

Note: When changing env values, rebuild to propagate them.

## License

MIT
