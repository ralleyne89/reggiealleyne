import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Brain, Code2, ShieldCheck } from "lucide-react";
import SectionRule from "@/components/motion/SectionRule";
import TextReveal from "@/components/motion/TextReveal";
import RollingText from "@/components/motion/RollingText";
import { DUR, EASE, STAGGER } from "@/lib/motion";

const fitSignals = [
  {
    label: "Best fit",
    value: "AI and complex product teams turning ambiguity into usable flows.",
    Icon: Brain,
  },
  {
    label: "Working style",
    value: "Evidence, prototypes, critique, and clear product tradeoffs.",
    Icon: ShieldCheck,
  },
  {
    label: "Leverage",
    value: "Design systems and React prototypes that make decisions buildable.",
    Icon: Code2,
  },
];

const principles = [
  {
    step: "01",
    chip: "Frame",
    title: "Find the decision the interface has to make easier.",
    text: "The work starts by naming the user, the constraint, and the proof a reviewer should be able to inspect.",
  },
  {
    step: "02",
    chip: "Shape",
    title: "Turn rough product intent into a visible path.",
    text: "Flows, wireframes, and prototypes make the tradeoffs concrete before the team spends energy building the wrong thing.",
  },
  {
    step: "03",
    chip: "Build",
    title: "Use code when it clarifies the product.",
    text: "React prototypes and shipped frontends help the design survive real data, responsive behavior, and edge cases.",
  },
  {
    step: "04",
    chip: "Prove",
    title: "Keep evidence close to every claim.",
    text: "Case studies should show what changed, what shipped, and what can be opened, tested, or inspected.",
  },
];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 } as const,
    transition: { duration: DUR.base, delay, ease: EASE.out },
  });

  return (
    <section
      id="about"
      className="relative border-t border-gray-200 bg-[oklch(var(--color-surface-soft))] py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionRule index="05" label="About Reggie" className="mb-6" />

        <TextReveal
          as="h2"
          split="lines"
          className="max-w-4xl break-words font-display text-[2.25rem] font-semibold leading-[1.05] text-gray-950 sm:text-display-md"
        >
          Product judgment, UX craft, and frontend proof in the same loop.
        </TextReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="min-w-0">
            <motion.p
              {...fadeUp()}
              className="max-w-xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8"
            >
              I design interfaces for AI tools, dashboards, and mobile-first
              platforms, then prototype enough behavior to help teams see what
              works before they overbuild.
            </motion.p>

            <motion.div {...fadeUp(0.08)} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="rolling-trigger inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark"
              >
                <RollingText>Read more about me</RollingText>
                <ArrowRight size={16} />
              </Link>
              <a
                href="#contact"
                className="rolling-trigger inline-flex min-h-12 items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition-colors hover:border-primary hover:text-primary"
              >
                <RollingText>Reach out</RollingText>
              </a>
            </motion.div>

            <motion.dl
              {...fadeUp(0.14)}
              className="mt-12 divide-y divide-gray-200 border-y border-gray-200"
            >
              {fitSignals.map(({ label, value, Icon }) => (
                <div key={label} className="grid gap-2 py-5">
                  <dt className="flex items-center gap-2 font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-primary">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="text-sm leading-6 text-text-secondary">
                    {value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="min-w-0 divide-y divide-gray-200 border-y border-gray-200">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.step}
                {...fadeUp(index * STAGGER.tight)}
                className="group grid min-w-0 gap-3 py-7 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6"
              >
                <div className="flex items-baseline gap-3 sm:flex-col sm:gap-2">
                  <span
                    aria-hidden="true"
                    className="font-mono text-[2rem] font-medium leading-none tracking-tight text-primary/30 transition-colors duration-300 group-hover:text-primary"
                  >
                    {principle.step}
                  </span>
                  <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-text-muted">
                    {principle.chip}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="break-words font-display text-xl font-semibold leading-snug text-gray-950 sm:text-heading-md">
                    {principle.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
                    {principle.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
