import { useEffect } from "react";
import { SITE_ORIGIN } from "@/lib/projectRoutes";

interface PageMeta {
  title: string;
  description: string;
  /** Route path, e.g. "/work". Used for the canonical and og:url. */
  path: string;
  /** Keep the page out of search results (404 and similar). */
  noindex?: boolean;
}

const setAttr = (
  selector: string,
  create: () => HTMLElement,
  attr: string,
  value: string,
) => {
  let element = document.head.querySelector<HTMLElement>(selector);
  const created = !element;

  if (!element) {
    element = create();
    document.head.appendChild(element);
  }

  const previous = element.getAttribute(attr);
  element.setAttribute(attr, value);

  return () => {
    if (created) {
      element?.remove();
    } else if (previous === null) {
      element?.removeAttribute(attr);
    } else {
      element?.setAttribute(attr, previous);
    }
  };
};

const meta = (key: "name" | "property", value: string) => () => {
  const element = document.createElement("meta");
  element.setAttribute(key, value);
  return element;
};

/**
 * Sets the title, description, canonical and share tags for a top-level
 * route, and restores the index.html defaults when the route unmounts.
 */
export const usePageMeta = ({ title, description, path, noindex }: PageMeta) => {
  useEffect(() => {
    const url = `${SITE_ORIGIN}${path}`;
    const previousTitle = document.title;
    document.title = title;

    const restore = [
      setAttr(
        'link[rel="canonical"]',
        () => {
          const link = document.createElement("link");
          link.setAttribute("rel", "canonical");
          return link;
        },
        "href",
        url,
      ),
      setAttr('meta[name="description"]', meta("name", "description"), "content", description),
      setAttr('meta[property="og:title"]', meta("property", "og:title"), "content", title),
      setAttr('meta[property="og:description"]', meta("property", "og:description"), "content", description),
      setAttr('meta[property="og:url"]', meta("property", "og:url"), "content", url),
      setAttr('meta[name="twitter:title"]', meta("name", "twitter:title"), "content", title),
      setAttr('meta[name="twitter:description"]', meta("name", "twitter:description"), "content", description),
      setAttr(
        'meta[name="robots"]',
        meta("name", "robots"),
        "content",
        noindex ? "noindex, follow" : "index, follow",
      ),
    ];

    return () => {
      document.title = previousTitle;
      restore.forEach((undo) => undo());
    };
  }, [title, description, path, noindex]);
};
