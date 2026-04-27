import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  Code,
  Heart,
  Layout,
  Search,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    title: "AI product strategy",
    description:
      "Turn loose AI ideas into sharper product bets, risk boundaries, and flows people can test.",
    proof: "Litmus AI / SymptomCheckr",
    Icon: Brain,
    accent: "text-cyan-400",
  },
  {
    title: "Trust and explainability",
    description:
      "Design confidence, citations, reasoning, and consent patterns for products that ask users to trust a recommendation.",
    proof: "Health AI / assessment systems",
    Icon: Shield,
    accent: "text-emerald-400",
  },
  {
    title: "Design systems and craft",
    description:
      "Create interface systems that hold up across teams, states, devices, and edge cases.",
    proof: "Tokens / components / QA",
    Icon: Layout,
    accent: "text-primary",
  },
  {
    title: "Production React prototypes",
    description:
      "Build testable frontends that help teams judge the real experience before the product hardens.",
    proof: "React / TypeScript / APIs",
    Icon: Code,
    accent: "text-sky-400",
  },
  {
    title: "Research and validation",
    description:
      "Use interviews, usability findings, analytics, and market constraints to separate taste from evidence.",
    proof: "Discovery / testing / iteration",
    Icon: Search,
    accent: "text-amber-400",
  },
  {
    title: "Accessible interaction design",
    description:
      "Make complex products more legible with clear hierarchy, keyboard paths, contrast, and reduced friction.",
    proof: "WCAG-minded UX",
    Icon: Users,
    accent: "text-fuchsia-300",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Frame",
    description: "Define the user, risk, constraint, and success signal.",
  },
  {
    step: "02",
    title: "Prototype",
    description: "Make the key workflow tangible enough to critique and test.",
  },
  {
    step: "03",
    title: "Validate",
    description: "Pressure-test assumptions against evidence and user behavior.",
  },
  {
    step: "04",
    title: "Ship",
    description: "Turn the chosen direction into UI that holds up in use.",
  },
];

const domainSignals = [
  { label: "AI literacy", Icon: Brain },
  { label: "Health AI", Icon: Heart },
  { label: "Creator platforms", Icon: Sparkles },
  { label: "Accessibility", Icon: Shield },
  { label: "Monetization", Icon: Activity },
  { label: "Design-to-code", Icon: Zap },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:88px_88px] opacity-25" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <motion.p
            className="mb-3 text-xs font-semibold uppercase leading-5 text-primary sm:text-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            How I work
          </motion.p>
          <motion.h2
            className="font-display text-display-md leading-tight text-gray-950"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Product judgment, interface craft, and code fluency in one workflow.
          </motion.h2>
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            I help teams decide what should be built, design the parts people
            need to trust, and prototype enough of the product to expose the
            hard questions early.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            className="overflow-hidden rounded-lg border border-gray-200 bg-gray-950 text-white shadow-xl shadow-gray-950/10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border-b border-white/10 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-white/50">
                    Core expertise
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                    The work I make clearer.
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70">
                  Built to inspect
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
              {capabilities.map(({ title, description, proof, Icon, accent }, index) => (
                <motion.div
                  key={title}
                  className={[
                    "min-w-0 border-white/10 p-5",
                    index < capabilities.length - 2 ? "md:border-b" : "",
                  ].join(" ")}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Icon className={`h-5 w-5 ${accent}`} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-lg font-semibold leading-6 text-white">
                        {title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        {description}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase text-white/45">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        {proof}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg shadow-gray-950/5 sm:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase text-primary">
              My process
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-gray-950 sm:text-3xl">
              A clear path from uncertainty to usable product.
            </h3>

            <div className="mt-8 space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative flex gap-4">
                  {index < processSteps.length - 1 ? (
                    <div className="absolute left-5 top-11 h-[calc(100%+1.5rem)] w-px bg-gray-200" />
                  ) : null}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
                    {step.step}
                  </div>
                  <div className="min-w-0 pb-1">
                    <h4 className="font-display text-lg font-semibold text-gray-950">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-xs font-semibold uppercase text-gray-500">
                Domain proof
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {domainSignals.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
