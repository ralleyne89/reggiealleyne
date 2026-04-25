import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";

const heroProofPoints = [
  "Human-in-the-loop AI",
  "Design systems",
  "Production React prototypes",
];

const projectSignals = [
  {
    name: "Litmus AI",
    label: "AI literacy",
    signal: "Trust-first assessment",
    Icon: ShieldCheck,
  },
  {
    name: "CLLCTVE",
    label: "Creator platform",
    signal: "500+ creator network",
    Icon: PanelsTopLeft,
  },
  {
    name: "SymptomCheckr",
    label: "Health AI",
    signal: "Explainable guidance",
    Icon: Activity,
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pt-32 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:88px_88px] opacity-35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          <motion.div
            className="mx-auto w-full max-w-2xl min-w-0 text-center lg:mx-0 lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="mb-3 text-xs font-semibold uppercase leading-5 text-primary sm:mb-4 sm:text-sm">
              Reggie Alleyne / Product Designer & AI Technologist
            </p>

            <h1 className="break-words font-display text-[2.28rem] font-semibold leading-[1.03] tracking-normal text-gray-950 [text-wrap:balance] sm:text-[3.45rem] lg:text-[4.05rem]">
              Designing AI products people can understand, trust, and use.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-text-secondary sm:mt-6 sm:text-xl sm:leading-8 lg:mx-0">
              I turn ambiguous AI and platform ideas into clear product
              experiences, scalable design systems, and production-ready React
              prototypes.
            </p>

            <div className="mt-5 grid gap-3 text-left sm:mt-6 sm:grid-cols-3">
              {heroProofPoints.map((point) => (
                <div
                  key={point}
                  className="flex min-h-11 min-w-0 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark sm:w-auto"
              >
                View selected work
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-950 transition-colors hover:border-primary hover:text-primary sm:w-auto"
              >
                Start a conversation
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-md min-w-0 lg:max-w-xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <div className="relative px-1 pb-6 sm:px-8 sm:pb-8">
              <div className="absolute inset-x-3 bottom-0 top-0 rounded-[2rem] border border-primary/15 bg-primary/[0.06] shadow-inner shadow-primary/10 sm:inset-x-8" />

              <div className="relative z-10 mx-auto max-w-[20rem] sm:max-w-[26rem]">
                <div className="liquid-glass liquid-glass-dark hidden w-full items-center justify-between rounded-b-none rounded-t-[1.45rem] border border-b-0 border-white/10 px-4 py-3 text-white shadow-xl shadow-gray-950/15 sm:flex">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="h-2 w-2 rounded-full bg-white/25" />
                    <span className="h-2 w-2 rounded-full bg-white/25" />
                  </div>
                  <p className="text-xs font-semibold uppercase text-white/80">
                    Evidence-led product studio
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white bg-gray-100 shadow-2xl shadow-gray-950/15 sm:rounded-b-[2rem] sm:rounded-t-none sm:border-t-0">
                  <div className="relative aspect-[4/4.7] sm:aspect-[4/5]">
                    <img
                      src="/images/1686931266900.jpeg"
                      alt="Reggie Alleyne"
                      className="h-full w-full object-cover grayscale"
                    />
                    <div className="liquid-glass liquid-glass-dark absolute inset-x-3 bottom-3 rounded-2xl p-3 text-white sm:inset-x-4 sm:bottom-4 sm:p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.18)]" />
                        Trust-first AI product systems
                      </div>
                      <p className="mt-1 text-[0.7rem] text-white/70 sm:text-xs">
                        Research-backed flows / design systems / React
                        prototypes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-4 grid gap-3 sm:-mt-6 sm:grid-cols-3">
                {projectSignals.map(({ name, label, signal, Icon }) => (
                  <div
                    key={name}
                    className="liquid-glass min-w-0 rounded-2xl p-3"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={17} strokeWidth={2.2} />
                    </div>
                    <p className="text-xs font-semibold uppercase text-primary">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-950">
                      {name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {signal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
