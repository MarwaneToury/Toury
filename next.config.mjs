/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from https://<user>.github.io/Toury,
// so in production every asset must be prefixed with this base path.
// In local dev we keep it empty so the site runs at http://localhost:3000.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Toury" : "";

const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site into ./out for GitHub Pages.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  // No Next.js image optimization server on a static host.
  images: { unoptimized: true },
  // Expose the base path to client code (see lib/asset.ts).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Emit /path/index.html so directory URLs resolve on GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;
