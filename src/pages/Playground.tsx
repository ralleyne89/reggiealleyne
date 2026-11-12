import { useEffect, useLayoutEffect, useRef } from "react";
import { ArrowLeft, ArrowUpRight, GripVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { scrollToTop } from "@/components/layout/SmoothScroll";
import Footer from "@/components/layout/Footer";
import TextReveal from "@/components/motion/TextReveal";
import { experiments } from "@/config/playgroundExperiments";
import { DUR, EASE, STAGGER } from "@/lib/motion";
import { usePageMeta } from "@/lib/pageMeta";
import { PLAYGROUND_ROUTE_META } from "@/config/routeMeta";

gsap.registerPlugin(Draggable);

/** Resting tilt per artboard, so the canvas reads as work in progress. */
const RESTING_ROTATION = [-2.2, 1.4, -1.1, 2];

/**
 * The playground is an open canvas: each experiment is an artboard with a
 * layer tag you can drag by. Links inside the artboards stay ordinary links.
 */
const Playground = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  usePageMeta(PLAYGROUND_ROUTE_META);

  useEffect(() => {
    scrollToTop();
  }, []);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const canDrag = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine)",
    ).matches;
    const draggables: Draggable[] = [];

    const context = gsap.context(() => {
      const boards = gsap.utils.toArray<HTMLElement>("[data-pg-board]");

      if (!shouldReduceMotion) {
        gsap.from(boards, {
          y: 60,
          autoAlpha: 0,
          rotation: 0,
          duration: DUR.reveal,
          ease: EASE.gsapBack,
          stagger: STAGGER.loose,
          delay: 0.2,
        });
      }

      if (!canDrag) return;

      boards.forEach((board, index) => {
        gsap.set(board, {
          rotation: shouldReduceMotion ? 0 : RESTING_ROTATION[index % 4],
        });
        draggables.push(
          ...Draggable.create(board, {
            type: "x,y",
            bounds: canvas,
            trigger: board.querySelector("[data-pg-handle]"),
            edgeResistance: 0.8,
            zIndexBoost: true,
            onPress() {
              gsap.to(board, { rotation: 0, scale: 1.02, duration: DUR.fast });
            },
            onRelease() {
              gsap.to(board, { scale: 1, duration: DUR.base, ease: EASE.gsapBack });
            },
          }),
        );
      });
    }, canvas);

    return () => {
      draggables.forEach((draggable) => draggable.kill());
      context.revert();
    };
  }, [shouldReduceMotion]);

  return (
    <div className="pg-page">
      <main>
        <section className="pg-shell pg-header" data-layer="Intro">
          <Link to="/" className="cs-back">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <p className="cs-eyebrow">Building for fun</p>
          <TextReveal as="h1" split="lines" trigger="mount" className="pg-title">
            Coded product experiments you can inspect.
          </TextReveal>
          <p className="cs-lede">
            A focused set of prototypes, creative systems, and AI work. Each one
            shows how a rough idea becomes a usable product surface.
          </p>
          <p className="pg-hint" aria-hidden="true">
            <GripVertical size={14} />
            Drag an artboard by its tag to rearrange the canvas.
          </p>
        </section>

        <section className="pg-canvas-wrap" data-layer="Canvas" aria-label="Experiments">
          <div ref={canvasRef} className="pg-canvas">
            {experiments.map((experiment, index) => (
              <article
                key={experiment.title}
                className="pg-board"
                data-pg-board
                data-layer={experiment.title}
              >
                <div className="pg-board__tag" data-pg-handle>
                  <GripVertical size={12} aria-hidden="true" />
                  <span>
                    {String(index + 1).padStart(2, "0")} / {experiment.title}
                  </span>
                  <span className="pg-board__status">{experiment.status}</span>
                </div>

                <div className="pg-board__frame">
                  {experiment.previewImage ? (
                    <img
                      src={experiment.previewImage}
                      alt={`${experiment.title} preview`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                    />
                  ) : null}
                  <span className="sel-frame__handle sel-frame__handle--tl" aria-hidden="true" />
                  <span className="sel-frame__handle sel-frame__handle--tr" aria-hidden="true" />
                  <span className="sel-frame__handle sel-frame__handle--bl" aria-hidden="true" />
                  <span className="sel-frame__handle sel-frame__handle--br" aria-hidden="true" />
                </div>

                <div className="pg-board__body">
                  <h2 className="pg-board__title">{experiment.title}</h2>
                  <p className="pg-board__copy">{experiment.description}</p>
                  <p className="pg-board__signal">{experiment.proofSignal}</p>
                  <ul className="pg-board__tags" aria-label="Built with">
                    {experiment.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="pg-board__links">
                    {experiment.detailPath ? (
                      <Link to={experiment.detailPath} className="pg-board__link">
                        View details
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>
                    ) : null}
                    {experiment.liveUrl ? (
                      <a
                        href={experiment.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pg-board__link pg-board__link--quiet"
                      >
                        Open live
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
