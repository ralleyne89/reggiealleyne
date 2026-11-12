import {
  useEffect,
  useLayoutEffect,
  useRef,
  type MouseEvent,
  type SyntheticEvent,
} from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToTop } from "@/components/layout/SmoothScroll";
import { usePageMeta } from "@/lib/pageMeta";
import { WORK_ROUTE_META } from "@/config/routeMeta";
import Footer from "@/components/layout/Footer";
import TextReveal from "@/components/motion/TextReveal";
import SelectionFrame from "@/components/project/SelectionFrame";
import { getAllProjects } from "@/services/api";
import { getAllPredefinedProjectsSync } from "@/services/api/predefinedProjects";
import {
  getFeaturedConfig,
  isFeaturedProject,
  isPrimaryWorksProject,
  orderFeaturedProjects,
  sortProjectsNewestFirst,
} from "@/config/portfolioCuration";
import { getProjectPath } from "@/lib/projectRoutes";
import { startScreenHandoff } from "@/lib/screenHandoff";
import { DUR, EASE, STAGGER } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const pad = (value: number) => String(value).padStart(2, "0");

const fallbackImage = (event: SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.src = "/placeholder.svg";
};

/** Carries the clicked screen onto the case-study cover across the route change. */
const handoff = (event: MouseEvent<HTMLAnchorElement>) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
  startScreenHandoff(event.currentTarget.querySelector("img"));
};

/**
 * The Work page is the file's frame index: three lead artboards laid out on
 * the canvas, then every other frame as a grid you select by hovering.
 */
const Works = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  usePageMeta(WORK_ROUTE_META);

  useEffect(() => {
    scrollToTop();
  }, []);

  const { data: projects = [], error } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    placeholderData: getAllPredefinedProjectsSync,
    retry: 1,
  });

  const uniqueProjects = projects.filter(
    (project, index, self) =>
      project &&
      project.title &&
      index === self.findIndex((item) => item?.title === project?.title),
  );

  const leadProjects = orderFeaturedProjects(uniqueProjects);
  const moreProjects = sortProjectsNewestFirst(
    uniqueProjects.filter(
      (project) => isPrimaryWorksProject(project) && !isFeaturedProject(project),
    ),
  );
  const frameCount = leadProjects.length + moreProjects.length;

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || shouldReduceMotion || frameCount === 0) return undefined;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-wk-lead]").forEach((lead) => {
        const frame = lead.querySelector("[data-wk-frame]");
        const image = lead.querySelector("img");
        const chrome = lead.querySelectorAll(".sel-frame__tag, .sel-frame__handle");
        const copy = lead.querySelectorAll("[data-wk-copy] > *");

        const timeline = gsap.timeline({
          defaults: { ease: EASE.gsapOut },
          scrollTrigger: { trigger: lead, start: "top 82%", once: true },
        });

        timeline
          .from(frame, { clipPath: "inset(100% 0% 0% 0%)", duration: DUR.reveal })
          .from(image, { scale: 1.16, duration: DUR.reveal * 1.3 }, 0)
          .from(
            chrome,
            { scale: 0, autoAlpha: 0, duration: DUR.base, ease: EASE.gsapBack, stagger: 0.04 },
            DUR.reveal * 0.55,
          )
          .from(
            copy,
            { y: 28, autoAlpha: 0, duration: DUR.slow, stagger: STAGGER.base },
            0.15,
          );

        gsap.to(image, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: { trigger: lead, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      ScrollTrigger.batch("[data-wk-tile]", {
        start: "top 88%",
        once: true,
        onEnter: (tiles) =>
          gsap.from(tiles, {
            y: 40,
            autoAlpha: 0,
            duration: DUR.slow,
            ease: EASE.gsapOut,
            stagger: STAGGER.base,
          }),
      });
    }, page);

    return () => context.revert();
  }, [shouldReduceMotion, frameCount]);

  return (
    <div ref={pageRef} className="wk-page">
      <main>
        <section className="pg-shell pg-header" data-layer="Intro">
          <Link to="/" className="cs-back">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <p className="cs-eyebrow">Work</p>
          <TextReveal as="h1" split="lines" trigger="mount" className="pg-title wk-title">
            The product decisions behind the interface.
          </TextReveal>
          <p className="cs-lede">
            The featured case studies focus on AI and product-design judgment.
            Each one shows the problem, constraint, decision, and evidence
            behind the interface.
          </p>
          <p className="wk-count">
            <span>{pad(leadProjects.length)} lead case studies</span>
            <span aria-hidden="true">/</span>
            <span>{pad(moreProjects.length)} more frames</span>
          </p>
        </section>

        {error && frameCount === 0 ? (
          <section className="pg-shell wk-error" role="alert">
            <h2>Error loading projects</h2>
            <p>
              Please refresh the page or use the contact link if the issue
              persists.
            </p>
          </section>
        ) : null}

        <section
          className="wk-canvas"
          data-layer="Lead case studies"
          aria-labelledby="wk-lead-title"
        >
          <div className="wk-canvas__inner">
            <h2 id="wk-lead-title" className="wk-rule">
              <span>01</span> Featured case studies
            </h2>

            <ol className="wk-leads">
              {leadProjects.map((project, index) => (
                <li key={project.id} className="wk-lead" data-wk-lead>
                  <Link
                    to={getProjectPath(project)}
                    className="wk-lead__link"
                    data-cursor-label="View case study"
                    onClick={handoff}
                  >
                    <SelectionFrame
                      label={`${pad(index + 1)} / ${project.title}`}
                      className="wk-lead__frame"
                    >
                      <div className="wk-lead__media" data-wk-frame>
                        <img
                          src={project.image}
                          alt={`${project.title} product screen`}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          onError={fallbackImage}
                        />
                      </div>
                    </SelectionFrame>

                    <div className="wk-lead__copy" data-wk-copy>
                      <p className="wk-lead__eyebrow">{project.curation.eyebrow}</p>
                      <h3 className="wk-lead__title">
                        {project.curation.featuredTitle || project.title}
                      </h3>
                      <p className="wk-lead__summary">
                        {project.curation.impactSummary}
                      </p>
                      <dl className="wk-props">
                        <div>
                          <dt>Year</dt>
                          <dd>{project.year}</dd>
                        </div>
                        <div>
                          <dt>Role</dt>
                          <dd>{project.role}</dd>
                        </div>
                      </dl>
                      <span className="wk-lead__cta">
                        View case study
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="pg-shell wk-more"
          data-layer="More frames"
          aria-labelledby="wk-more-title"
        >
          <h2 id="wk-more-title" className="wk-rule">
            <span>02</span> Additional selected work
          </h2>

          <ul className="wk-grid">
            {moreProjects.map((project) => {
              const eyebrow =
                getFeaturedConfig(project.slug)?.eyebrow ||
                project.category ||
                project.tags?.[0] ||
                "Product design";

              return (
                <li key={project.id} data-wk-tile>
                  <Link
                    to={getProjectPath(project)}
                    className="wk-tile"
                    data-cursor-label="View case study"
                    onClick={handoff}
                  >
                    <span className="wk-tile__tag" aria-hidden="true">
                      {project.title}
                    </span>
                    <span className="wk-tile__frame">
                      <img
                        src={project.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        onError={fallbackImage}
                      />
                      <span className="wk-tile__handle wk-tile__handle--tl" aria-hidden="true" />
                      <span className="wk-tile__handle wk-tile__handle--tr" aria-hidden="true" />
                      <span className="wk-tile__handle wk-tile__handle--bl" aria-hidden="true" />
                      <span className="wk-tile__handle wk-tile__handle--br" aria-hidden="true" />
                    </span>
                    <span className="wk-tile__body">
                      <span className="wk-tile__title">{project.title}</span>
                      <span className="wk-tile__meta">
                        {[eyebrow, project.year].filter(Boolean).join(" · ")}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Works;
