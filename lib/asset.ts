// Prefix a public asset path (e.g. "/logos/react.svg") with the deploy base
// path so it resolves both locally ("" base) and on GitHub Pages ("/Toury").
// Needed for raw <img src> / <a href> strings, which Next.js does NOT rewrite
// automatically (unlike next/image, next/link and _next bundles).
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
