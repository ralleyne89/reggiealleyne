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

type PageInput = RouteMeta & { image?: string; imageAlt?: string; jsonLd?: object };

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

  if (page.jsonLd) {
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>\n  </head>`,
    );
  }

  return html;
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
          export { STATIC_ROUTE_META } from "./src/config/routeMeta";
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
      STATIC_ROUTE_META: RouteMeta[];
    };

    const template = fs.readFileSync(templatePath, "utf8");
    const pages: PageInput[] = [...data.STATIC_ROUTE_META];

    data.getAllPredefinedProjectsSync().forEach((project) => {
      if (!project.slug) return;
      const pagePath = `/project/${project.slug}`;
      const description = clip(project.description);
      const image = shareImageFor(root, project.image);

      pages.push({
        path: pagePath,
        title: `${project.title} | Reggie Alleyne`,
        description,
        image,
        imageAlt: `${project.title} interface`,
        jsonLd: {
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

    console.log(`route-html: wrote ${pages.length} route pages`);
  },
});
