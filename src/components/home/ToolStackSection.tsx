import { motion, useReducedMotion } from "framer-motion";
import { Bot, GitBranch, PanelsTopLeft, PenTool } from "lucide-react";
import SectionRule from "@/components/motion/SectionRule";

type ToolTone =
  | "figma"
  | "react"
  | "supabase"
  | "vscode"
  | "codex"
  | "tailwind"
  | "adobe"
  | "framer"
  | "github";

type ToolItem = {
  name: string;
  role: string;
  proof: string;
  tone: ToolTone;
};

const tools: ToolItem[] = [
  {
    name: "Figma",
    role:
      "I map flows, pressure-test states, and get the product shape clear before build.",
    proof: "Used before code when the decision needs to be visible.",
    tone: "figma",
  },
  {
    name: "React",
    role:
      "I turn interface decisions into working screens people can click, test, and critique.",
    proof: "Used when fidelity needs real behavior.",
    tone: "react",
  },
  {
    name: "Supabase",
    role:
      "I use it to give prototypes real accounts, data, storage, and submission paths.",
    proof: "Used when the UI needs real product constraints.",
    tone: "supabase",
  },
  {
    name: "VS Code",
    role:
      "I live here while building, debugging, reviewing diffs, and tightening the last details.",
    proof: "Used for day-to-day implementation.",
    tone: "vscode",
  },
  {
    name: "Codex",
    role:
      "I use it to inspect repos, catch weak spots, and move faster through focused implementation passes.",
    proof: "Used for audits, fixes, and refactors.",
    tone: "codex",
  },
  {
    name: "Tailwind CSS",
    role:
      "I keep spacing, responsive behavior, and visual polish close to the component code.",
    proof: "Used when speed and consistency both matter.",
    tone: "tailwind",
  },
  {
    name: "Adobe Suites",
    role:
      "I clean up assets, prep visuals, and handle the design details that need extra finish.",
    proof: "Used for polish, mockups, and handoff assets.",
    tone: "adobe",
  },
  {
    name: "Framer Motion",
    role:
      "I add motion when it clarifies hierarchy, pacing, or feedback instead of decorating the page.",
    proof: "Used for purposeful interaction polish.",
    tone: "framer",
  },
  {
    name: "GitHub",
    role:
      "I use it to keep changes reviewable, traceable, and ready to ship without mystery.",
    proof: "Used for versioning and release discipline.",
    tone: "github",
  },
];

const iconTone: Record<ToolTone, string> = {
  figma: "text-gray-950",
  react: "text-[#149eca]",
  supabase: "text-[#3ecf8e]",
  vscode: "text-[#0098e0]",
  codex: "text-primary",
  tailwind: "text-[#38bdf8]",
  adobe: "text-[#e11d48]",
  framer: "text-violet-500",
  github: "text-gray-950",
};

const ToolIcon = ({ tone }: { tone: ToolTone }) => {
  if (tone === "figma") {
    return (
      <svg aria-hidden="true" viewBox="0 0 36 36" className="h-7 w-7">
        <circle cx="13" cy="8" r="5" fill="#F24E1E" />
        <circle cx="23" cy="8" r="5" fill="#FF7262" />
        <circle cx="13" cy="18" r="5" fill="#A259FF" />
        <circle cx="23" cy="18" r="5" fill="#1ABCFE" />
        <circle cx="13" cy="28" r="5" fill="#0ACF83" />
      </svg>
    );
  }

  if (tone === "react") {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-8 w-8">
        <circle cx="20" cy="20" r="3.2" fill="currentColor" />
        <ellipse
          cx="20"
          cy="20"
          rx="15"
          ry="5.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="15"
          ry="5.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          transform="rotate(60 20 20)"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="15"
          ry="5.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          transform="rotate(120 20 20)"
        />
      </svg>
    );
  }

  if (tone === "supabase") {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-8 w-8">
        <path
          d="M23.5 4 9 22.3h11.2L16.5 36 31 17.7H19.8L23.5 4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (tone === "vscode") {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-8 w-8">
        <path
          d="M29.5 5.5 14.7 17.1 7.4 11.5 4.5 14.1l6.4 5.9-6.4 5.9 2.9 2.6 7.3-5.6 14.8 11.6 5.5-2.3V7.8l-5.5-2.3Zm-.4 9.4v10.2L21.8 20l7.3-5.1Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (tone === "codex") {
    return <Bot className="h-7 w-7" />;
  }

  if (tone === "tailwind") {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-8 w-8">
        <path
          d="M20 12c-4.7 0-7.7 2.3-9 7 1.8-2.3 3.8-3.2 6-2.7 1.2.3 2.1 1.2 3.1 2.1 1.7 1.7 3.7 3.6 7.9 3.6 4.7 0 7.7-2.3 9-7-1.8 2.3-3.8 3.2-6 2.7-1.2-.3-2.1-1.2-3.1-2.1C26.2 13.9 24.2 12 20 12Zm-8 6c-4.7 0-7.7 2.3-9 7 1.8-2.3 3.8-3.2 6-2.7 1.2.3 2.1 1.2 3.1 2.1 1.7 1.7 3.7 3.6 7.9 3.6 4.7 0 7.7-2.3 9-7-1.8 2.3-3.8 3.2-6 2.7-1.2-.3-2.1-1.2-3.1-2.1C18.2 19.9 16.2 18 12 18Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (tone === "adobe") {
    return <PenTool className="h-7 w-7" />;
  }

  if (tone === "framer") {
    return <PanelsTopLeft className="h-7 w-7" />;
  }

  return <GitBranch className="h-7 w-7" />;
};

const ToolStackSection = () => {
  const reduceMotion = useReducedMotion();
  const headerMotionProps = reduceMotion
    ? { initial: false, whileInView: undefined }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
      };
  const rowMotionProps = reduceMotion
    ? { initial: false, whileInView: undefined }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="tools"
      className="relative border-t border-gray-200 bg-white py-14 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid min-w-0 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            {...headerMotionProps}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionRule index="03" label="Tools I use" className="mb-4" />
            <h2 className="break-words font-display text-[2rem] font-semibold leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
              The stack behind the prototypes, systems, and product screens.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-2xl text-base leading-7 text-text-secondary lg:justify-self-end"
            {...headerMotionProps}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            A practical mix for designing the product, building the interface,
            and checking whether the thing actually holds up.
          </motion.p>
        </div>

        <div className="min-w-0 divide-y divide-gray-200 border-y border-gray-200">
          {tools.map((tool, index) => (
            <motion.article
              key={tool.name}
              className="home-tools-row group transition-colors duration-300 hover:bg-gray-50/80"
              {...rowMotionProps}
              transition={{
                duration: 0.42,
                delay: reduceMotion ? 0 : index * 0.03,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span
                aria-hidden="true"
                className="home-tools-row__number font-mono text-sm font-medium tracking-[0.18em] text-text-muted"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={[
                  "home-tools-row__icon flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 [&>svg]:h-6 [&>svg]:w-6 group-hover:scale-110",
                  iconTone[tool.tone],
                ].join(" ")}
              >
                <ToolIcon tone={tool.tone} />
              </span>

              <h3 className="home-tools-row__title break-words font-display leading-tight text-gray-950 transition-colors duration-300 group-hover:text-primary">
                {tool.name}
              </h3>

              <div className="home-tools-row__body">
                <p className="text-sm leading-6 text-gray-600">{tool.role}</p>
                <p className="home-tools-row__proof font-mono text-[0.65rem] font-medium uppercase leading-5 tracking-[0.16em] text-gray-400">
                  {tool.proof}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;
