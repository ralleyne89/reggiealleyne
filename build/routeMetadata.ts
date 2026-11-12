import fs from "node:fs/promises";
import path from "node:path";
import type { Plugin } from "vite";
import { pageMetadata, type PageMetadata } from "../src/lib/pageMetadata";
import { getAllPredefinedProjectsSync } from "../src/services/api/predefinedProjects";
import { SITE_ORIGIN } from "../src/lib/projectRoutes";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[char]!);

/** Emit real route-specific HEAD tags for crawlers that do not execute React.
 * This is metadata generation, not full content prerendering.
 */
export function routeMetadata(): Plugin {
  let outDir: string;
  return {
    name: "portfolio-route-metadata",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const template = await fs.readFile(path.join(outDir, "index.html"), "utf8");
      const routes: Record<string, PageMetadata> = { ...pageMetadata };
      for (const project of getAllPredefinedProjectsSync()) {
        routes[`/project/${project.slug}`] = {
          title: `${project.title} | Reggie Alleyne`,
          description: project.fullDescription || project.description || project.summary || "",
        };
      }
      for (const [route, metadata] of Object.entries(routes)) {
        const url = `${SITE_ORIGIN}${route}`;
        let html = template.replace(/<title>[^<]*<\/title>/, () => `<title>${escapeHtml(metadata.title)}</title>`);
        const replacements: Array<[RegExp, string]> = [
          [/(<meta name="description" content=")[^"]*/, metadata.description],
          [/(<meta property="og:title" content=")[^"]*/, metadata.title],
          [/(<meta property="og:description" content=")[^"]*/, metadata.description],
          [/(<meta property="og:url" content=")[^"]*/, url],
          [/(<meta name="twitter:title" content=")[^"]*/, metadata.title],
          [/(<meta name="twitter:description" content=")[^"]*/, metadata.description],
          [/(<link rel="canonical" href=")[^"]*/, url],
        ];
        for (const [pattern, value] of replacements) {
          if (!pattern.test(html)) throw new Error(`Missing metadata tag: ${pattern}`);
          html = html.replace(pattern, (_match, prefix: string) => `${prefix}${escapeHtml(value)}`);
        }
        const destination = route === "/" ? outDir : path.join(outDir, route.slice(1));
        await fs.mkdir(destination, { recursive: true });
        await fs.writeFile(path.join(destination, "index.html"), html);
        // Vite's clean-URL fallback checks route.html; directory-only output
        // otherwise returns the homepage for /about but works for /about/.
        if (route !== "/") {
          await fs.writeFile(path.join(outDir, `${route.slice(1)}.html`), html);
        }
      }
      // Netlify serves this body with a real HTTP 404 for unmatched paths.
      const notFoundHtml = template
        .replace(/<title>[^<]*<\/title>/, "<title>Page not found | Reggie Alleyne</title>")
        .replace(/<meta name="robots"[^>]*>/g, "")
        .replace(/<link rel="canonical"[^>]*>/g, "")
        .replace(/<meta (?:property="og:[^"]*"|name="twitter:[^"]*")[^>]*>/g, "")
        .replace(/<meta name="description"[^>]*>/, '<meta name="description" content="This portfolio page has moved or does not exist. Explore Reggie Alleyne’s current work.">')
        .replace("</head>", '<meta name="robots" content="noindex, follow">\n</head>');
      await fs.writeFile(path.join(outDir, "404.html"), notFoundHtml);
      // Retain existing curation: the sitemap lists navigation-linked pages and projects.
      const unlisted = new Set(["/services", "/project/doggy-date", "/project/improv-learning"]);
      const urls = Object.keys(routes).filter(route => !unlisted.has(route));
      await fs.writeFile(path.join(outDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(route => `  <url><loc>${SITE_ORIGIN}${route}</loc></url>`).join("\n")}\n</urlset>\n`);
      await fs.writeFile(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`);
    },
  };
}
