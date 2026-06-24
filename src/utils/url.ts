// ============================================================================
// withBase() — prefixes a root-relative path (e.g. "/icons/x.svg") with the
// site's configured `base` (see astro.config.mjs), so local assets resolve
// correctly whether the site is deployed at a domain root (base: "/") or
// under a GitHub Pages project sub-path (e.g. base: "/n8n-portfolio").
//
// Without this, hardcoded paths in src/data/site.ts (icons, cv.pdf, workflow
// JSON) and src/layouts/Base.astro (favicon) would 404 on GitHub Pages,
// because the real deployed path becomes /n8n-portfolio/icons/x.svg, not
// /icons/x.svg.
//
// DESIRED OUTPUT: every local asset URL still resolves after switching
//   deploy targets — no hardcoded "/icons/..." 404s on a project sub-path.
// DEBUG: `import.meta.env.BASE_URL` is inlined at build time, not visible at
//   runtime in the console — inspect the rendered <img src>, <link href>, or
//   data-workflow-src attribute in devtools to confirm the prefix is there.
// ============================================================================
export function withBase(path: string): string {
  // leave absolute URLs and mailto: links untouched
  if (/^https?:\/\//.test(path) || path.startsWith('mailto:')) return path;

  const base = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
