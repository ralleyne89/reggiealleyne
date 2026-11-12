import { useEffect } from "react";
import { pageMetadata } from "../lib/pageMetadata";
import { SITE_ORIGIN } from "../lib/projectRoutes";

/** Keep client-side navigation consistent with the HTML emitted at build time. */
export function usePageMetadata(path: string) {
  useEffect(() => {
    const metadata = pageMetadata[path];
    if (!metadata) return;
    document.title = metadata.title;
    const values = [
      ['meta[name="description"]', metadata.description],
      ['meta[name="robots"]', 'index, follow'],
      ['meta[property="og:type"]', 'website'],
      ['meta[property="og:image"]', `${SITE_ORIGIN}/images/reggie-alleyne-portfolio-og-20260915.jpg`],
      ['meta[property="og:image:alt"]', 'Reggie Alleyne, UX/UI Designer and Frontend Developer'],
      ['meta[name="twitter:card"]', 'summary_large_image'],
      ['meta[name="twitter:image"]', `${SITE_ORIGIN}/images/reggie-alleyne-portfolio-og-20260915.jpg`],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description],
      ['meta[property="og:url"]', `${SITE_ORIGIN}${path}`],
      ['meta[name="twitter:title"]', metadata.title],
      ['meta[name="twitter:description"]', metadata.description],
    ];
    for (const [selector, content] of values) {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const [, attribute, value] = selector.match(/\[(name|property)="([^"]+)"\]/)!;
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_ORIGIN}${path}`);
  }, [path]);
}
