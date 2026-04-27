import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, Layers3, ShieldCheck } from "lucide-react";

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

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-8 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase leading-5 text-primary sm:text-sm">
            About Reggie
          </p>
          <h2 className="break-words font-display text-[2rem] font-semibold leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
            A product designer who uses code to make AI and workflow ideas
            easier to trust.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            I design interfaces for AI tools, dashboards, and mobile-first
            platforms, then prototype enough of the behavior to help teams see
            what works before they overbuild.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/about"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Read more about me
              <ArrowRight size={18} />
            </Link>
            <a
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-950 transition-colors hover:border-primary hover:text-primary sm:w-auto"
            >
              Reach out
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid min-w-0 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Layers3 size={22} />
            </div>
            <p className="text-xs font-semibold uppercase text-primary">
              Best work
            </p>
            <h3 className="mt-2 break-words font-display text-2xl font-semibold leading-tight text-gray-950">
              Product strategy, UX/UI craft, and frontend fluency in the same
              loop.
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              I am strongest when the product model, interface details, and
              working prototype need to be shaped together. Here, that shows up
              in adaptive assessment, creator-platform strategy, and service
              workflow modeling.
            </p>
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-3">
            {fitSignals.map(({ label, value, Icon }) => (
              <article
                key={label}
                className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-4 text-xs font-semibold uppercase text-gray-500">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-800">{value}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
