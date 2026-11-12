import { useEffect, useLayoutEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePageMeta } from "@/lib/pageMeta";
import { ABOUT_ROUTE_META } from "@/config/routeMeta";
import Footer from "@/components/layout/Footer";
import ToolStackSection from "@/components/home/ToolStackSection";
import SelectionFrame from "@/components/project/SelectionFrame";
import { scrollToTop } from "@/components/layout/SmoothScroll";
import TextReveal from "@/components/motion/TextReveal";
import { DUR, EASE, STAGGER } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const portraitBase = "/images/figma/hero-white";

const careerTimeline = [
  {
    period: "11/2016 - Present",
    role: "Product Designer & Frontend Developer",
    organization: "Freelance / Self-Employed",
    location: "Los Angeles",
    detail:
      "I design and build responsive web products and AI-enabled tools, moving from user flows and prototypes into React, TypeScript, and deployed interfaces.",
  },
  {
    period: "04/2022 - 07/2025",
    role: "Principal UX/UI Designer",
    organization: "Blue Shield of California",
    location: "Oakland",
    detail:
      "I led UX strategy for regulated healthcare web and mobile work, partnering with product, engineering, research, compliance, and business teams.",
  },
  {
    period: "05/2020 - 02/2022",
    role: "Frontend Engineer",
    organization: "CLLCTVE Inc. (Techstars Startup)",
    location: "Los Angeles",
    detail:
      "I built mobile-first React interfaces and reusable Ant Design components, supported user research, and helped prioritize product improvements for a creator platform.",
  },
  {
    period: "09/2018 - 10/2019",
    role: "UX/UI Designer",
    organization: "IMPROV Learning",
    location: "Woodland Hills",
    detail:
      "I improved responsive layouts, marketing funnels, email campaigns, and A/B-tested journeys using research and performance data.",
  },
  {
    period: "04/2017 - 07/2017",
    role: "Freelance UX/UI Designer",
    organization: "A Different Kind of Creative - Doggy Date",
    location: "Los Angeles",
    detail:
      "I managed the UX/UI lifecycle for an iOS social product and partnered with an iOS developer to deliver specifications and assets through Zeplin.",
  },
  {
    period: "11/2016 - 12/2016",
    role: "Freelance UX/UI Designer",
    organization: "Tech Noir",
    location: "Los Angeles",
    detail:
      "I researched wearable technology buying behavior and designed the primary flow and discovery pages for a specialized marketplace.",
  },
];

/** Read like the properties panel for the selected layer. */
const inspector = [
  { label: "Role", value: "Senior UX/UI Designer" },
  { label: "Practice", value: "Design and code" },
  { label: "Experience", value: "10+ years" },
  { label: "Based in", value: "Los Angeles" },
];

// Core competencies, kept as plain text for search and AI parsing.
const coreCompetencies = [
  { label: "Gen AI Prototyping", description: "Designing and testing AI workflows in working UI" },
  { label: "Design Systems", description: "Scalable component libraries and design tokens" },
  { label: "User Research", description: "Qualitative & quantitative research methods" },
  { label: "0-1 Product Design", description: "Early product framing through shipped UX" },
  { label: "Accessibility (WCAG)", description: "Keyboard, contrast, structure, and readable states" },
  { label: "React Prototyping", description: "React prototypes teams can test" },
];

const principles = [
  {
    title: "Making AI legible",
    body: "I keep coming back to the black-box problem in AI. How do we show enough reasoning, uncertainty, and context that a person can make a good call?",
  },
  {
    title: "Concrete collaboration",
    body: "I like cross-functional work that gets specific quickly. I ask developers what the system can support, bring options back to the team, and keep the tradeoffs visible.",
  },
  {
    title: "Shipping over perfection",
    body: "I dig into user research, prototype quickly, and revise based on what the team learns. A clean mockup matters, but the work is not done until someone can use it.",
  },
];

const interests = [
  { label: "Gaming", description: "From indie gems to AAA titles" },
  { label: "Anime", description: "Studio Ghibli to Attack on Titan" },
  { label: "Sushi", description: "Always hunting for the best spots" },
  { label: "Learning", description: "New tools, frameworks, and techniques" },
];

const opportunitySignals = [
  "Trust-first AI products",
  "Platform tools",
  "Creative systems",
  "Healthcare, education, entertainment",
];

const collaborationSignals = [
  { label: "Best fit", value: "Product teams turning ambiguity into something buildable" },
  { label: "Working style", value: "Evidence, fast prototypes, and thoughtful critique" },
  { label: "Leverage", value: "Making complex technology feel useful and human" },
];

/**
 * The About page reads as the file's spec page: the portrait is the selected
 * layer with its properties beside it, the process is two frames joined by a
 * prototype connector, and experience is the version history.
 */
const About = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  usePageMeta(ABOUT_ROUTE_META);

  useEffect(() => {
    scrollToTop();
  }, []);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || shouldReduceMotion) return undefined;

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: EASE.gsapOut }, delay: 0.25 });
      intro
        .from("[data-ab-portrait]", { clipPath: "inset(100% 0% 0% 0%)", duration: DUR.reveal })
        .from("[data-ab-portrait] img", { scale: 1.14, duration: DUR.reveal * 1.3 }, 0)
        .from(
          ".ab-intro .sel-frame__tag, .ab-intro .sel-frame__handle",
          { scale: 0, autoAlpha: 0, duration: DUR.base, ease: EASE.gsapBack, stagger: 0.04 },
          DUR.reveal * 0.55,
        )
        .from(
          "[data-ab-prop]",
          { x: 24, autoAlpha: 0, duration: DUR.slow, stagger: STAGGER.tight },
          0.3,
        );

      ScrollTrigger.batch("[data-ab-reveal]", {
        start: "top 86%",
        once: true,
        onEnter: (items) =>
          gsap.from(items, {
            y: 36,
            autoAlpha: 0,
            duration: DUR.slow,
            ease: EASE.gsapOut,
            stagger: STAGGER.base,
          }),
      });

      // The prototype connector draws itself between the two frames.
      gsap.from("[data-ab-noodle]", {
        strokeDashoffset: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-ab-process]",
          start: "top 78%",
          end: "top 38%",
          scrub: true,
        },
      });

      gsap.from("[data-ab-history] > li", {
        y: 28,
        autoAlpha: 0,
        duration: DUR.slow,
        ease: EASE.gsapOut,
        stagger: STAGGER.tight,
        scrollTrigger: { trigger: "[data-ab-history]", start: "top 84%", once: true },
      });
    }, page);

    return () => context.revert();
  }, [shouldReduceMotion]);

  return (
    <div ref={pageRef} className="ab-page">
      <main>
        <section className="pg-shell pg-header ab-intro" data-layer="Intro">
          <div className="ab-intro__copy">
            <Link to="/" className="cs-back">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to home
            </Link>
            <p className="cs-eyebrow">Senior UX/UI Designer · Code + AI</p>
            <TextReveal as="h1" split="chars" trigger="mount" className="pg-title ab-title">
              Reggie Alleyne
            </TextReveal>
            <p className="cs-lede">
              10+ years designing for education and healthcare, industries
              where bad UX has real consequences.
            </p>
          </div>

          <div className="ab-intro__layer">
            <SelectionFrame label="Portrait" className="ab-portrait">
              <div className="ab-portrait__media" data-ab-portrait>
                <img
                  src={`${portraitBase}/portrait-768.webp`}
                  srcSet={`${portraitBase}/portrait-384.webp 384w, ${portraitBase}/portrait-768.webp 768w`}
                  sizes="(min-width: 1024px) 22rem, 70vw"
                  alt="Reggie Alleyne"
                  width={768}
                  height={959}
                  decoding="async"
                />
              </div>
            </SelectionFrame>

            <dl className="ab-inspector" aria-label="At a glance">
              {inspector.map((property) => (
                <div key={property.label} data-ab-prop>
                  <dt>{property.label}</dt>
                  <dd>{property.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="ab-pov" data-layer="Point of view" aria-labelledby="ab-pov-title">
          <div className="pg-shell ab-pov__grid">
            <div data-ab-reveal>
              <p className="cs-eyebrow cs-eyebrow--on-dark">How I think about AI tools</p>
              <h2 id="ab-pov-title" className="ab-pov__title">
                Building AI tools people can question
              </h2>
            </div>
            <div className="ab-pov__body">
              <p data-ab-reveal>
                Most AI interfaces ask people to trust an answer without showing
                how the system got there. That is a product problem: people
                cannot rely on a tool they cannot inspect.
              </p>
              <p data-ab-reveal>
                I design for <strong>algorithmic transparency</strong>. When an
                AI makes a recommendation, people should see the reasoning, the
                uncertainty, and the inputs that shaped the answer. When it
                needs more data, it should ask instead of guessing.
              </p>
              <p data-ab-reveal>
                The goal is not to make AI feel friendly. It is to make the
                system <strong>legible</strong>, so people know when to trust
                it, challenge it, or override it.
              </p>
            </div>
          </div>
        </section>

        <section
          className="ab-process"
          data-layer="Process"
          data-ab-process
          aria-labelledby="ab-process-title"
        >
          <div className="pg-shell">
            <h2 id="ab-process-title" className="wk-rule">
              <span>01</span> The process
            </h2>

            <div className="ab-flow">
              <SelectionFrame label="Design" className="ab-flow__frame">
                <div className="ab-flow__card">
                  <p className="ab-flow__name">Design</p>
                  <p className="ab-flow__steps">Research → Prototype</p>
                </div>
              </SelectionFrame>

              <svg
                className="ab-flow__noodle"
                viewBox="0 0 200 80"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  data-ab-noodle
                  d="M4 22 C 70 22, 130 22, 196 22"
                  pathLength={1}
                />
                <path
                  data-ab-noodle
                  d="M196 58 C 130 58, 70 58, 4 58"
                  pathLength={1}
                />
                <path className="ab-flow__arrow" d="M186 14 L196 22 L186 30" />
                <path className="ab-flow__arrow" d="M14 50 L4 58 L14 66" />
              </svg>

              <SelectionFrame label="Code" className="ab-flow__frame">
                <div className="ab-flow__card">
                  <p className="ab-flow__name">Code</p>
                  <p className="ab-flow__steps">Build → Validate</p>
                </div>
              </SelectionFrame>
            </div>

            <p className="ab-process__note" data-ab-reveal>
              Coding is part of how I design. The fastest way to test an
              interaction is to build enough of it to feel the state changes,
              edge cases, and handoff details. I prototype in React because
              static screens miss that.
            </p>
          </div>
        </section>

        <section
          className="pg-shell ab-section"
          data-layer="Experience"
          aria-labelledby="experience-heading"
        >
          <h2 id="experience-heading" className="wk-rule">
            <span>02</span> Selected experience
          </h2>

          <ol className="ab-history" data-ab-history>
            {careerTimeline.map((entry) => (
              <li key={`${entry.organization}-${entry.period}`}>
                <p className="ab-history__period">{entry.period}</p>
                <div>
                  <h3 className="ab-history__role">{entry.role}</h3>
                  <p className="ab-history__org">
                    {entry.organization}, {entry.location}
                  </p>
                </div>
                <p className="ab-history__detail">{entry.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="ab-components"
          data-layer="Core competencies"
          aria-labelledby="ab-components-title"
        >
          <div className="pg-shell">
            <h2 id="ab-components-title" className="wk-rule">
              <span>03</span> Core competencies
            </h2>
            <ul className="ab-components__grid">
              {coreCompetencies.map((competency) => (
                <li key={competency.label} className="ab-component" data-ab-reveal>
                  <span className="ab-component__tag" aria-hidden="true">
                    <span className="ab-component__mark" />
                    Component
                  </span>
                  <h3>{competency.label}</h3>
                  <p>{competency.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pg-shell ab-section ab-split" data-layer="Background">
          <div>
            <h2 className="wk-rule">
              <span>04</span> Background
            </h2>
            <div className="ab-prose">
              <p data-ab-reveal>
                10+ years designing for <strong>education and healthcare</strong>,
                industries where bad UX has real consequences. I've built tools
                for teachers managing 30 students, patients navigating health
                anxiety, and HR leaders trying to assess AI literacy at scale.
              </p>
              <p data-ab-reveal>
                Born and raised in LA, I care about the everyday side of product
                work: listening well, making constraints explicit, and helping
                teams ship without losing sight of the person using the thing.
              </p>
              <p data-ab-reveal>
                <strong>Interactive interface craft:</strong> Gaming and anime
                shaped how I think about motion, spatial cues, pacing, and
                feedback. I like interfaces where the system teaches you through
                use instead of making you read a manual.
              </p>
            </div>
          </div>

          <div>
            <h2 className="wk-rule">
              <span>05</span> What I'm about
            </h2>
            <ol className="ab-principles">
              {principles.map((principle, index) => (
                <li key={principle.title} data-ab-reveal>
                  <span className="ab-principles__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="pg-shell ab-section"
          data-layer="Off the clock"
          aria-labelledby="ab-interests-title"
        >
          <h2 id="ab-interests-title" className="wk-rule">
            <span>06</span> When I'm not designing
          </h2>
          <ul className="ab-interests">
            {interests.map((interest) => (
              <li key={interest.label} data-ab-reveal>
                <h3>{interest.label}</h3>
                <p>{interest.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="ab-fit"
          data-layer="Opportunity fit"
          aria-labelledby="ab-fit-title"
        >
          <div className="pg-shell ab-fit__grid">
            <div data-ab-reveal>
              <p className="cs-eyebrow cs-eyebrow--on-dark">Opportunity fit</p>
              <h2 id="ab-fit-title" className="ab-pov__title">
                What I'm looking for
              </h2>
              <p className="ab-fit__lede">
                I want to join a team that is <strong>working on a real problem</strong>,
                especially AI products, platform tools, and experiences where
                trust and clarity determine whether the product works.
              </p>
              <Link to="/#contact" className="ab-fit__cta">
                Start the conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="ab-fit__hint">
                Send a note with the problem, timeline, and what needs to get
                clearer first.
              </p>
            </div>

            <div data-ab-reveal>
              <dl className="ab-fit__signals">
                {collaborationSignals.map((signal) => (
                  <div key={signal.label}>
                    <dt>{signal.label}</dt>
                    <dd>{signal.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="ab-fit__note">
                Give me ambiguous systems, a real user problem, and partners
                who want to make the product better together.
              </p>
              <ul className="ab-fit__chips">
                {opportunitySignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <ToolStackSection index="//" />
      <Footer />
    </div>
  );
};

export default About;
