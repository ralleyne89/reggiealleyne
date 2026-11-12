import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";
import type { Plugin } from "vite";

const SITE = "https://reggiealleyne.com";

type RouteMeta = { path: string; title: string; description: string };
type ProjectLike = {
  slug?: string;
  title: string;
  description: string;
  image: string;
  year: string;
  role?: string;
  category?: string | null;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const clip = (value: string, max = 160) =>
  value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`;

const setMeta = (html: string, attr: "name" | "property", key: string, content: string) =>
  html.replace(
    new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`),
    `$1${escapeHtml(content)}$2`,
  );

/** Link previews handle PNG and JPG most reliably, so prefer the original over its WebP copy. */
const shareImageFor = (root: string, image: string) => {
  if (!image.endsWith(".webp")) return image;
  const base = image.slice(0, -".webp".length);
  const original = [".png", ".jpg", ".jpeg"].find((extension) =>
    fs.existsSync(path.join(root, "public", `${base}${extension}`)),
  );
  return original ? `${base}${original}` : image;
};

type PageInput = RouteMeta & {
  image?: string;
  imageAlt?: string;
  jsonLd?: object[];
  /** Plain HTML for readers that do not run JavaScript. */
  fallback?: string;
};

const breadcrumb = (trail: Array<[name: string, pagePath: string]>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, pagePath], index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: `${SITE}${pagePath}`,
  })),
});

const withFallback = (html: string, fallback?: string) =>
  fallback
    ? html.replace('<div id="root"></div>', `<noscript>${fallback}</noscript>\n    <div id="root"></div>`)
    : html;

const withJsonLd = (html: string, blocks: object[] = []) =>
  blocks.reduce(
    (result, block) =>
      result.replace(
        "</head>",
        `  <script type="application/ld+json">${JSON.stringify(block)}</script>\n  </head>`,
      ),
    html,
  );

const renderPage = (template: string, page: PageInput) => {
  const url = `${SITE}${page.path}`;
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${url}$2`,
    );

  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", page.title);
  html = setMeta(html, "name", "twitter:description", page.description);

  if (page.image) {
    const imageUrl = `${SITE}${page.image}`;
    html = setMeta(html, "property", "og:image", imageUrl);
    html = setMeta(html, "name", "twitter:image", imageUrl);
    if (page.imageAlt) {
      html = setMeta(html, "property", "og:image:alt", page.imageAlt);
      html = setMeta(html, "name", "twitter:image:alt", page.imageAlt);
    }
    // The stored dimensions describe the home share image only.
    html = html.replace(/\s*<meta property="og:image:(width|height|type)"[^>]*>/g, "");
  }

  return withFallback(withJsonLd(html, page.jsonLd), page.fallback);
};

/**
 * After the client bundle is written, emit one HTML file per route with that
 * route's own title, description, canonical and share tags. The app still
 * boots the same way; this only changes what is in the document before
 * JavaScript runs.
 */
export const routeHtml = (): Plugin => ({
  name: "route-html",
  apply: "build",
  async closeBundle() {
    const root = process.cwd();
    const dist = path.join(root, "dist");
    const templatePath = path.join(dist, "index.html");
    if (!fs.existsSync(templatePath)) return;

    const outfile = path.join(root, "node_modules", ".cache", "route-html", "data.mjs");
    await build({
      stdin: {
        contents: `
          export { getAllPredefinedProjectsSync } from "./src/services/api/predefinedProjects";
          export { HOME_ROUTE_META, STATIC_ROUTE_META, projectPageTitle } from "./src/config/routeMeta";
        `,
        resolveDir: root,
        loader: "ts",
      },
      outfile,
      bundle: true,
      format: "esm",
      platform: "node",
      alias: { "@": path.join(root, "src") },
      logLevel: "silent",
    });

    const data = (await import(`${pathToFileURL(outfile).href}?t=${Date.now()}`)) as {
      getAllPredefinedProjectsSync: () => ProjectLike[];
      HOME_ROUTE_META: RouteMeta;
      STATIC_ROUTE_META: RouteMeta[];
      projectPageTitle: (title: string) => string;
    };

    const template = fs.readFileSync(templatePath, "utf8");
    const projects = data.getAllPredefinedProjectsSync().filter((project) => project.slug);
    const projectLinks = projects
      .map(
        (project) =>
          `<li><a href="/project/${project.slug}">${escapeHtml(project.title)}</a>: ${escapeHtml(clip(project.description, 140))}</li>`,
      )
      .join("");
    const siteLinks =
      '<p><a href="/">Home</a> · <a href="/work">Work</a> · <a href="/about">About</a> · <a href="/playground">Playground</a></p>';

    const pages: PageInput[] = data.STATIC_ROUTE_META.map((route) => {
      const name = route.title.split(/[:|]/)[0].replace("About Reggie Alleyne", "About").trim();
      return {
        ...route,
        jsonLd: [breadcrumb([["Home", "/"], [name, route.path]])],
        fallback: `<main><h1>${escapeHtml(route.title.split(" | ")[0])}</h1><p>${escapeHtml(route.description)}</p>${route.path === "/about" ? "" : `<ul>${projectLinks}</ul>`}${siteLinks}</main>`,
      };
    });

    projects.forEach((project) => {
      const pagePath = `/project/${project.slug}`;
      const description = clip(project.description);
      const image = shareImageFor(root, project.image);
      const facts = [project.category, project.role, project.year].filter(Boolean).join(" · ");

      pages.push({
        path: pagePath,
        title: data.projectPageTitle(project.title),
        description,
        image,
        imageAlt: `${project.title} interface`,
        fallback: `<main><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(facts)}</p><p>${escapeHtml(project.description)}</p><p><img src="${image}" alt="${escapeHtml(project.title)} interface" width="800"></p>${siteLinks}</main>`,
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description,
            url: `${SITE}${pagePath}`,
            image: `${SITE}${image}`,
            dateCreated: project.year,
            author: {
              "@type": "Person",
              name: "Reggie Alleyne",
              url: SITE,
            },
          },
          breadcrumb([["Home", "/"], ["Work", "/work"], [project.title, pagePath]]),
        ],
      });
    });

    pages.forEach((page) => {
      const directory = path.join(dist, page.path);
      fs.mkdirSync(directory, { recursive: true });
      const html = renderPage(template, page);
      fs.writeFileSync(path.join(directory, "index.html"), html);
      // A sibling .html file lets hosts serve /work without a trailing-slash redirect.
      fs.writeFileSync(`${directory}.html`, html);
    });

    // Unknown paths are served this file with a real 404 status. The app
    // still boots from it, so client-only routes keep working.
    fs.writeFileSync(
      path.join(dist, "404.html"),
      setMeta(
        template
          .replace(/<title>[^<]*<\/title>/, "<title>Page not found | Reggie Alleyne</title>")
          .replace(/\s*<link rel="canonical"[^>]*>/, ""),
        "name",
        "robots",
        "noindex, follow",
      ),
    );

    // The home page keeps its own tags; it gains site data and a no-JS summary.
    const home = data.HOME_ROUTE_META;
    fs.writeFileSync(
      templatePath,
      withFallback(
        withJsonLd(template, [
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Reggie Alleyne",
            url: `${SITE}/`,
            description: home.description,
          },
        ]),
        `<main><h1>${escapeHtml(home.title.split(" | ").reverse().join(": "))}</h1><p>${escapeHtml(home.description)}</p><h2>Case studies</h2><ul>${projectLinks}</ul>${siteLinks}</main>`,
      ),
    );

    // One sitemap entry per indexable page, dated with this build.
    const today = new Date().toISOString().slice(0, 10);
    const urls = ["/", ...pages.map((page) => page.path)]
      .map((pagePath) => `  <url><loc>${SITE}${pagePath}</loc><lastmod>${today}</lastmod></url>`)
      .join("\n");
    fs.writeFileSync(
      path.join(dist, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    );

    console.log(`route-html: wrote ${pages.length} route pages and sitemap.xml`);
  },
});
