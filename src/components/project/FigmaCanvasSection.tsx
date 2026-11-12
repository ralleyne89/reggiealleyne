import { useEffect, useRef, useState } from "react";
import { Frame, Maximize2, Minus, MousePointer2, Plus } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { figmaFrameSrc, getFigmaFile } from "@/config/figmaCanvas";
import type { FigmaCanvasApi } from "./figmaCanvasScene";

type FigmaCanvasSectionProps = { slug: string; title: string };

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

/** The 3D canvas is for desktops with a mouse; everyone else gets the strip. */
const useCanvasCapable = () => {
  const shouldReduceMotion = useReducedMotion();
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    setCapable(
      window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches &&
        !connection?.saveData &&
        supportsWebGL(),
    );
  }, [shouldReduceMotion]);

  return capable;
};

/**
 * The project's Figma file, opened on the page. On a capable desktop the
 * frames deal out onto a three.js canvas you can pan, zoom and click into;
 * otherwise the same frames sit in a scrollable strip.
 */
const FigmaCanvasSection = ({ slug, title }: FigmaCanvasSectionProps) => {
  const file = getFigmaFile(slug);
  const capable = useCanvasCapable();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const labelLayerRef = useRef<HTMLDivElement | null>(null);
  const apiRef = useRef<FigmaCanvasApi | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(100);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const labelLayer = labelLayerRef.current;
    if (!file || !capable || !viewport || !labelLayer) return undefined;

    let cancelled = false;
    let api: FigmaCanvasApi | null = null;

    void import("./figmaCanvasScene").then(({ createFigmaCanvasScene }) => {
      if (cancelled) return;
      api = createFigmaCanvasScene(viewport, labelLayer, slug, file, {
        onReady: () => setReady(true),
        onHover: setHoverIndex,
        onFocus: setFocusIndex,
        onZoom: setZoom,
      });
      apiRef.current = api;
    });

    return () => {
      cancelled = true;
      api?.dispose();
      apiRef.current = null;
      setReady(false);
    };
  }, [capable, file, slug]);

  if (!file) return null;

  const page = file.pages[pageIndex];
  const live = capable && ready;

  const choosePage = (index: number) => {
    setPageIndex(index);
    setFocusIndex(null);
    apiRef.current?.setPage(index);
  };

  const chooseFrame = (index: number) => {
    apiRef.current?.focusFrame(focusIndex === index ? null : index);
  };

  return (
    <section className="fc" data-layer="Figma file" aria-labelledby="fc-title">
      <div className="cs-shell">
        <p className="cs-eyebrow cs-eyebrow--on-dark">Source file</p>
        <h2 id="fc-title" className="cs-h2 cs-h2--on-dark" data-cs-reveal>
          Inside the Figma file
        </h2>
        <p className="fc-lede">
          The working file for {title}, laid out the way it sits in Figma.
          {capable
            ? " Switch pages, drag to pan, and click a frame to zoom in."
            : " Switch pages and swipe through the frames."}
        </p>
      </div>

      <div className="fc-shell">
        <div
          className={cn("fc-app", capable && "fc-app--live")}
          onKeyDown={(event) => {
            if (event.key === "Escape") apiRef.current?.fit();
          }}
        >
          <div className="fc-bar">
            <span className="fc-bar__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <p className="fc-bar__file">
              <span>{file.project}</span>
              <span aria-hidden="true">/</span>
              <strong>{file.fileName}</strong>
            </p>
            {capable ? (
              <div className="fc-zoom" role="group" aria-label="Zoom">
                <button type="button" onClick={() => apiRef.current?.zoomBy(1 / 1.4)} aria-label="Zoom out">
                  <Minus size={14} aria-hidden="true" />
                </button>
                <span aria-live="off">{zoom}%</span>
                <button type="button" onClick={() => apiRef.current?.zoomBy(1.4)} aria-label="Zoom in">
                  <Plus size={14} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => apiRef.current?.fit()} aria-label="Zoom to fit">
                  <Maximize2 size={13} aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>

          <div className="fc-body">
            <aside className="fc-panel">
              <p className="fc-panel__title" id="fc-pages">
                Pages
              </p>
              <ul className="fc-pages" aria-labelledby="fc-pages">
                {file.pages.map((item, index) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      className="fc-row"
                      aria-pressed={index === pageIndex}
                      onClick={() => choosePage(index)}
                    >
                      {item.name}
                      <span>{item.frames.length}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {capable ? (
                <>
                  <p className="fc-panel__title" id="fc-layers">
                    Layers
                  </p>
                  <ul className="fc-layers" aria-labelledby="fc-layers" data-lenis-prevent>
                    {page.frames.map((frame, index) => (
                      <li key={frame.file}>
                        <button
                          type="button"
                          className={cn("fc-row fc-row--layer", hoverIndex === index && "fc-row--hover")}
                          aria-pressed={focusIndex === index}
                          disabled={!live}
                          onClick={() => chooseFrame(index)}
                        >
                          <Frame size={12} aria-hidden="true" />
                          <span>{frame.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </aside>

            {capable ? (
              <div ref={viewportRef} className="fc-viewport" data-ready={ready}>
                <div ref={labelLayerRef} className="fc-labels" aria-hidden="true" />
                <p className="fc-status" aria-hidden="true">
                  Opening {file.fileName}…
                </p>
                <p className="fc-hint" aria-hidden="true">
                  <MousePointer2 size={12} />
                  Drag to pan · Ctrl/⌘ + scroll to zoom · Click a frame · Esc to fit
                </p>
              </div>
            ) : (
              <ul className="fc-strip" aria-label={`${page.name} frames`} tabIndex={0}>
                {page.frames.map((frame) => (
                  <li key={frame.file}>
                    <figure>
                      <figcaption>{frame.name}</figcaption>
                      <img
                        src={figmaFrameSrc(slug, frame)}
                        alt={`${frame.name}, from the ${page.name} page`}
                        width={frame.width}
                        height={frame.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaCanvasSection;
