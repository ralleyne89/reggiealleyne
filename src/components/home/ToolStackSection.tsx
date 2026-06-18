import { motion, useReducedMotion } from "framer-motion";
import { Bot, Code2, Figma, GitBranch, Layers3, PanelsTopLeft } from "lucide-react";
import SectionRule from "@/components/motion/SectionRule";

const tools = [
  {
    name: "Figma",
    icon: Figma,
    use: "I map flows, pressure-test states, and get the product shape clear before build.",
  },
  {
    name: "React",
    icon: Code2,
    use: "I turn interface decisions into working screens people can click, test, and critique.",
  },
  {
    name: "Tailwind CSS",
    icon: Layers3,
    use: "I keep spacing, responsive behavior, and polish close to the component code.",
  },
  {
    name: "Framer Motion",
    icon: PanelsTopLeft,
    use: "I use motion when it clarifies hierarchy, pacing, or feedback.",
  },
  {
    name: "Codex",
    icon: Bot,
    use: "I use it to inspect repos, catch weak spots, and move faster through focused build passes.",
  },
  {
    name: "GitHub",
    icon: GitBranch,
    use: "I keep changes reviewable, traceable, and ready to ship without mystery.",
  },
];

const ToolStackSection = () => {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? { initial: false, whileInView: undefined }
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="tools"
      className="relative border-t border-gray-200 bg-[oklch(var(--color-surface-soft))] py-14 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid min-w-0 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            {...motionProps}
            transition={{ duration: 0.42 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionRule index="03" label="Tools I use" className="mb-4" />
            <h2 className="break-words font-display text-[2rem] font-semibold leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
              How the stack fits into the work.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-2xl text-base leading-7 text-text-secondary lg:justify-self-end"
            {...motionProps}
            transition={{ duration: 0.42, delay: reduceMotion ? 0 : 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            These are the tools I reach for when I need to clarify the product,
            build the interface, and tighten the shipped details.
          </motion.p>
        </div>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.article
                key={tool.name}
                className="group grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
                {...motionProps}
                transition={{
                  duration: 0.42,
                  delay: reduceMotion ? 0 : index * 0.035,
                }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl leading-tight text-gray-950">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{tool.use}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;
