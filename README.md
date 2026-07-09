# Marwane Toury — Portfolio

A bilingual (🇫🇷 / 🇬🇧), card-game-inspired personal portfolio. Skills score
"chips", projects are collectible "Jokers" with their own abilities, and the
whole thing is wrapped in a playful deck-of-cards visual language — while
staying recruiter-friendly.

**Live:** https://marwanetoury.github.io/Toury/

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- Custom CSS (3D card tilt, foil / negative "editions", pixel display font)
- Client-side **i18n** via React Context (French default, English toggle)
- Static export (`output: "export"`) deployed to **GitHub Pages**

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
```

Outputs a fully static site to `./out`.

## Deployment

Every push to `main` triggers the GitHub Actions workflow
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)), which builds the
static export and publishes it to GitHub Pages.

Because the site is served from a project subpath (`/Toury`), the production
build sets a `basePath`; asset URLs are resolved through the small helper in
[lib/asset.ts](lib/asset.ts) so they work both locally and when deployed.
