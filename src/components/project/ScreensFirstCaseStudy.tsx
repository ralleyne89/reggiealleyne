import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import CountUp from "@/components/motion/CountUp";
import TextReveal from "@/components/motion/TextReveal";
import {
  getCaseStudyImpact,
  getCaseStudyNarrative,
  getCaseStudyTldr,
} from "@/config/portfolioCuration";
import { DUR, EASE, SCRUB, STAGGER } from "@/lib/motion";
import { getProjectLiveLabel } from "@/lib/projectLiveLabels";
import { cn } from "@/lib/utils";
import type { ProjectType } from "@/types/project";
import { getPlatformScreens } from "./ProjectInterfaceEvidence";
import FigmaCanvasSection from "./FigmaCanvasSection";
import SelectionFrame from "./SelectionFrame";
import TechNoirInteractiveDemo from "./TechNoirInteractiveDemo";

gsap.registerPlugin(ScrollTrigger, SplitText);

type ScreensFirstCaseStudyProps = {
  project: ProjectType;
};

const isGenericLabel = (label: string) => label.startsWith("Interface view");

const padIndex = (index: number) => String(index + 1).padStart(2, "0");

/**
 * Screens-first case study: one large screen up top, a three-part brief, a
 * walkthrough where the screen holds still while the captions scroll, and a
 * dark proof band. Copy comes from the curated narrative; nothing is invented
 * here.
 */
const ScreensFirstCaseStudy = ({ project }: ScreensFirstCaseStudyProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const narrative = getCaseStudyNarrative(project.slug);
  const tldr = getCaseStudyTldr(project.slug);
  const impact = getCaseStudyImpact(project.slug);

  const steps = useMemo(() => {
    const screens = getPlatformScreens(project);
    const withoutCover = screens.filter((screen) => screen.src !== project.image);
    return (withoutCover.length >= 2 ? withoutCover : screens).slice(0, 5);
  }, [project]);

  const brief = [
    { label: "Problem", body: tldr?.problem || narrative?.setup },
    { label: "Decision", body: tldr?.decision || narrative?.decision },
    { label: "Outcome", body: tldr?.outcome || narrative?.proof },
  ].filter((item): item is { label: string; body: string } =>
    Boolean(item.body),
  );

  const metrics = (impact?.metrics?.length ? impact.metrics : tldr?.metrics || []).slice(0, 3);
  const notes = (impact?.notes || []).slice(0, 3);
  const tools = (tldr?.tools?.length ? tldr.tools : project.techStack || []).slice(0, 4);
  const role = tldr?.role || project.role;
  const typeLabel = project.category || project.tags?.[0] || "Project";

  const meta = [
    { label: "Role", value: role },
    { label: "Year", value: project.year },
    { label: "Built with", value: tools.join(", ") },
  ].filter((item) => Boolean(item.value));

  // The screen that is centred in the viewport drives the pinned stage.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = stepRefs.current.indexOf(entry.target as HTMLLIElement);
          if (index >= 0) setActiveStep(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, [steps.length]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || shouldReduceMotion) return undefined;

    let split: SplitText | null = null;
    let cancelled = false;

    const context = gsap.context(() => {
      // Header: copy rises, then the cover opens from a cropped frame.
      gsap.from("[data-cs-rise]", {
        y: 24,
        autoAlpha: 0,
        duration: DUR.reveal,
        ease: EASE.gsapOut,
        stagger: STAGGER.base,
        delay: 0.25,
      });

      gsap.fromTo(
        "[data-cs-cover]",
        { clipPath: "inset(10% 6% 10% 6% round 20px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 14px)",
          ease: "none",
          scrollTrigger: {
            trigger: "[data-cs-cover]",
            start: "top 92%",
            end: "top 28%",
            scrub: SCRUB.tight,
          },
        },
      );
      gsap.fromTo(
        "[data-cs-cover] img",
        { scale: 1.16 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-cs-cover]",
            start: "top 92%",
            end: "bottom 30%",
            scrub: SCRUB.tight,
          },
        },
      );

      ScrollTrigger.batch("[data-cs-reveal]", {
        start: "top 86%",
        once: true,
        onEnter: (elements) =>
          gsap.from(elements, {
            y: 28,
            autoAlpha: 0,
            duration: DUR.slow,
            ease: EASE.gsapOut,
            stagger: STAGGER.base,
          }),
      });

      // Proof band: the project name drifts behind the figures.
      gsap.fromTo(
        "[data-cs-drift]",
        { xPercent: 6 },
        {
          xPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-cs-proof]",
            start: "top bottom",
            end: "bottom top",
            scrub: SCRUB.base,
          },
        },
      );
    }, root);

    // The thesis lights up word by word as it crosses the viewport.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      const thesis = root.querySelector<HTMLElement>("[data-cs-thesis]");
      if (!thesis) return;

      context.add(() => {
        split = SplitText.create(thesis, { type: "words", aria: "none" });
        gsap.fromTo(
          split.words,
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: {
              trigger: thesis,
              start: "top 82%",
              end: "bottom 48%",
              scrub: SCRUB.tight,
            },
          },
        );
      });
      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      split?.revert();
      context.revert();
    };
  }, [project.slug, shouldReduceMotion]);

  return (
    <div ref={rootRef} className="cs-page">
      <header className="cs-header" data-layer="Cover">
        <div className="cs-shell">
          <Link to="/work" className="cs-back" data-cs-rise>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Work
          </Link>

          <p className="cs-eyebrow" data-cs-rise>
            {project.year} / {typeLabel}
          </p>
          <TextReveal as="h1" split="lines" trigger="mount" className="cs-title">
            {project.title}
          </TextReveal>
          <p className="cs-lede" data-cs-rise>
            {project.description}
          </p>

          <dl className="cs-meta" data-cs-rise>
            {meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
            {project.liveUrl ? (
              <div>
                <dt>Live</dt>
                <dd>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-link"
                  >
                    {getProjectLiveLabel(project.slug)}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </div>

        <div className="cs-shell cs-shell--wide">
          <SelectionFrame label={`${project.title} / Cover`}>
            <div className="cs-cover" data-cs-cover>
              <img
                src={project.image}
                alt={`${project.title} interface`}
                loading="eager"
                decoding="async"
              />
            </div>
          </SelectionFrame>
        </div>
      </header>

      {project.slug === "tech-noir" ? <TechNoirInteractiveDemo /> : null}

      {brief.length > 0 ? (
        <section className="cs-shell cs-brief" aria-label="Project brief" data-layer="Brief">
          {brief.map((item, index) => (
            <div key={item.label} className="cs-brief__item" data-cs-reveal>
              <p className="cs-index">{padIndex(index)}</p>
              <h2 className="cs-brief__label">{item.label}</h2>
              <p className="cs-brief__body">{item.body}</p>
            </div>
          ))}
        </section>
      ) : null}

      {narrative?.hook ? (
        <section className="cs-shell cs-thesis-wrap" aria-label="Thesis" data-layer="Thesis">
          <p className="cs-eyebrow">The thesis</p>
          <p className="cs-thesis" data-cs-thesis>
            {narrative.hook}
          </p>
        </section>
      ) : null}

      {steps.length > 0 ? (
        <section className="cs-walk" aria-labelledby="cs-walk-title" data-layer="Walkthrough">
          <div className="cs-shell cs-shell--wide cs-walk__grid">
            <div className="cs-walk__stage" aria-hidden="true">
              <SelectionFrame
                label={
                  isGenericLabel(steps[activeStep]?.label || "")
                    ? `Screen ${padIndex(activeStep)}`
                    : steps[activeStep]?.label
                }
              >
                <div className="cs-stage">
                  {steps.map((step, index) => (
                    <img
                      key={step.src}
                      src={step.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "cs-stage__screen",
                        step.orientation === "tall" && "cs-stage__screen--tall",
                        index === activeStep && "is-active",
                      )}
                    />
                  ))}
                </div>
              </SelectionFrame>
              <p className="cs-stage__count">
                <span>{padIndex(activeStep)}</span> / {padIndex(steps.length - 1)}
              </p>
            </div>

            <div className="cs-walk__copy">
              <p className="cs-eyebrow">The product</p>
              <h2 id="cs-walk-title" className="cs-h2">
                Walk through the screens.
              </h2>
              <ol className="cs-steps">
                {steps.map((step, index) => {
                  const generic = isGenericLabel(step.label);
                  return (
                    <li
                      key={step.src}
                      ref={(element) => {
                        stepRefs.current[index] = element;
                      }}
                      className={cn("cs-step", index === activeStep && "is-active")}
                    >
                      <img
                        src={step.src}
                        alt={generic ? `${project.title} screen ${index + 1}` : step.label}
                        loading="lazy"
                        decoding="async"
                        className="cs-step__image"
                      />
                      <p className="cs-index">{padIndex(index)}</p>
                      <h3 className="cs-step__title">
                        {generic ? `Screen ${index + 1}` : step.label}
                      </h3>
                      {generic ? null : <p className="cs-step__note">{step.note}</p>}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>
      ) : null}

      <FigmaCanvasSection slug={project.slug} title={project.title} />

      <section className="cs-proof" data-layer="Proof" data-cs-proof aria-labelledby="cs-proof-title">
        <p className="cs-proof__drift" data-cs-drift aria-hidden="true">
          {project.title}
        </p>
        <div className="cs-shell cs-proof__inner">
          <p className="cs-eyebrow cs-eyebrow--on-dark">Proof</p>
          <h2 id="cs-proof-title" className="cs-h2 cs-h2--on-dark" data-cs-reveal>
            {impact?.title || "What it proved"}
          </h2>
          {impact?.summary ? (
            <p className="cs-proof__summary" data-cs-reveal>
              {impact.summary}
            </p>
          ) : null}

          {metrics.length > 0 ? (
            <dl className="cs-figures">
              {metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`} data-cs-reveal>
                  <dt>{metric.label}</dt>
                  <dd className="cs-figures__value">
                    <CountUp value={metric.value} />
                  </dd>
                  {metric.context ? (
                    <dd className="cs-figures__context">{metric.context}</dd>
                  ) : null}
                </div>
              ))}
            </dl>
          ) : null}

          {notes.length > 0 ? (
            <ul className="cs-notes">
              {notes.map((note) => (
                <li key={note} data-cs-reveal>
                  {note}
                </li>
              ))}
            </ul>
          ) : null}

          {narrative?.reflection ? (
            <div className="cs-reflection" data-cs-reveal>
              <h3>Reflection</h3>
              <p>{narrative.reflection}</p>
            </div>
          ) : null}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-cta"
              data-cs-reveal
            >
              {getProjectLiveLabel(project.slug)}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default ScreensFirstCaseStudy;
