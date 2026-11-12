import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Frame, Layers } from "lucide-react";
import { getLenis } from "@/components/layout/SmoothScroll";
import { cn } from "@/lib/utils";

type Layer = {
  name: string;
  element: HTMLElement;
};

const PAGE_NAMES: Record<string, string> = {
  "/": "Home",
  "/work": "Work",
  "/about": "About",
  "/playground": "Playground",
};

const getPageName = (pathname: string) => {
  if (PAGE_NAMES[pathname]) return PAGE_NAMES[pathname];
  if (pathname.startsWith("/project/")) return "Case study";
  return "Page";
};

const collectLayers = (): Layer[] => {
  const named = Array.from(
    document.querySelectorAll<HTMLElement>("[data-layer]"),
  ).map((element) => ({ name: element.dataset.layer || "Layer", element }));

  // Pages that name only their footer (or nothing) fall back to their headings.
  if (named.length > 2) return named;

  const headings = Array.from(
    document.querySelectorAll<HTMLElement>(".route-motion-shell h1, .route-motion-shell h2"),
  )
    .filter((element) => element.innerText.trim().length > 0)
    .map((element) => ({
      name: element.innerText.trim().replace(/\s+/g, " ").slice(0, 34),
      element,
    }));

  return [...headings, ...named].sort((a, b) =>
    a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : 1,
  );
};

/**
 * The file chrome that makes the site read as an open design file: rulers
 * that track scroll and pointer, a page and scroll readout, and a layers
 * panel that lists the current page's sections and jumps to them. Wide
 * screens with a mouse only; it is decoration plus a shortcut, never the only
 * way to reach anything.
 */
const DesignFileChrome = () => {
  const { pathname } = useLocation();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const percentRef = useRef<HTMLSpanElement | null>(null);
  const [open, setOpen] = useState(false);
  const [layers, setLayers] = useState<Layer[]>([]);
  const [activeLayer, setActiveLayer] = useState(0);

  // Rulers and readout are driven by CSS variables so nothing re-renders on scroll.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    let frame = 0;
    let pointerX = -100;
    let pointerY = -100;

    const paint = () => {
      frame = 0;
      const scroll = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--file-scroll", `${-scroll}px`);
      root.style.setProperty("--file-x", `${pointerX}px`);
      root.style.setProperty("--file-y", `${pointerY}px`);
      if (percentRef.current) {
        percentRef.current.textContent = `${Math.round(
          max > 0 ? (scroll / max) * 100 : 0,
        )}%`;
      }
    };
    const request = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      request();
    };

    paint();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const refreshLayers = useCallback(() => {
    const next = collectLayers();
    setLayers(next);

    const middle = window.innerHeight / 2;
    let current = 0;
    next.forEach((layer, index) => {
      if (layer.element.getBoundingClientRect().top <= middle) current = index;
    });
    setActiveLayer(current);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    refreshLayers();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("scroll", refreshLayers, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", refreshLayers);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, refreshLayers]);

  const jumpTo = (layer: Layer) => {
    // Land the section just under the floating nav.
    const top = Math.max(
      0,
      layer.element.getBoundingClientRect().top + window.scrollY - 96,
    );
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(top);
    } else {
      window.scrollTo({ top });
    }
  };

  return (
    <div ref={rootRef} className="file-chrome">
      <div className="file-ruler file-ruler--top" aria-hidden="true">
        <span className="file-ruler__mark file-ruler__mark--x" />
      </div>
      <div className="file-ruler file-ruler--left" aria-hidden="true">
        <span className="file-ruler__mark file-ruler__mark--y" />
      </div>
      <div className="file-ruler__corner" aria-hidden="true" />

      <div className="file-status">
        <button
          type="button"
          className="file-status__button"
          aria-expanded={open}
          aria-controls="file-layers"
          onClick={() => setOpen((value) => !value)}
        >
          <Layers size={14} aria-hidden="true" />
          Layers
        </button>
        <span className="file-status__page">{getPageName(pathname)}</span>
        <span ref={percentRef} className="file-status__percent" aria-hidden="true">
          0%
        </span>
      </div>

      {open ? (
        <nav id="file-layers" className="file-layers" aria-label="Sections on this page">
          <p className="file-layers__title">{getPageName(pathname)}</p>
          {layers.length > 0 ? (
            <ul>
              {layers.map((layer, index) => (
                <li key={`${layer.name}-${index}`}>
                  <button
                    type="button"
                    className={cn(
                      "file-layers__item",
                      index === activeLayer && "is-active",
                    )}
                    aria-current={index === activeLayer ? "true" : undefined}
                    onClick={() => jumpTo(layer)}
                  >
                    <Frame size={13} aria-hidden="true" />
                    {layer.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="file-layers__empty">No sections on this page.</p>
          )}
        </nav>
      ) : null}
    </div>
  );
};

export default DesignFileChrome;
