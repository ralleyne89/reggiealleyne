import { motion } from "framer-motion";
import { Bot, GitBranch, PanelsTopLeft, PenTool } from "lucide-react";
import SectionRule from "@/components/motion/SectionRule";

type ToolTone = "figma" | "react" | "supabase" | "vscode" | "codex" | "tailwind" | "adobe" | "framer" | "github";

type ToolItem = {
  name: string;
  role: string;
  proof: string;
  tone: ToolTone;
};

const tools: ToolItem[] = [
  {
    name: "Figma",
    role: "Design systems, flows, and prototype states.",
    proof: "Where product shape gets clear before build.",
    tone: "figma",
  },
  {
    name: "React",
    role: "Production frontends and testable prototypes.",
    proof: "Turns interface decisions into working behavior.",
    tone: "react",
  },
  {
    name: "Supabase",
    role: "Auth, data, storage, and product backends.",
    proof: "Enough backend to make the interface real.",
    tone: "supabase",
  },
  {
    name: "VS Code",
    role: "Daily build environment.",
    proof: "Fast iteration, debugging, and code review.",
    tone: "vscode",
  },
  {
    name: "Codex",
    role: "AI pair-programming and repo inspection.",
    proof: "Useful for audits, refactors, and implementation passes.",
    tone: "codex",
  },
  {
    name: "Tailwind CSS",
    role: "Responsive UI systems.",
    proof: "Keeps spacing, states, and polish close to code.",
    tone: "tailwind",
  },
  {
    name: "Adobe Suites",
    role: "Visual systems, mockups, and asset polish.",
    proof: "Photoshop, Illustrator, and XD for polished handoff.",
    tone: "adobe",
  },
  {
    name: "Framer Motion",
    role: "Quiet interaction polish.",
    proof: "Motion that supports hierarchy instead of distracting from it.",
    tone: "framer",
  },
  {
    name: "GitHub",
    role: "Versioning and shipping discipline.",
    proof: "Keeps implementation traceable.",
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
        <ellipse cx="20" cy="20" rx="15" ry="5.8" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="20" cy="20" rx="15" ry="5.8" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="15" ry="5.8" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(120 20 20)" />
      </svg>
    );
  }

  if (tone === "supabase") {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-8 w-8">
        <path d="M23.5 4 9 22.3h11.2L16.5 36 31 17.7H19.8L23.5 4Z" fill="currentColor" />
      </svg>
    );
  }

  if (tone === "vscode") {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-8 w-8">
        <path d="M29.5 5.5 14.7 17.1 7.4 11.5 4.5 14.1l6.4 5.9-6.4 5.9 2.9 2.6 7.3-5.6 14.8 11.6 5.5-2.3V7.8l-5.5-2.3Zm-.4 9.4v10.2L21.8 20l7.3-5.1Z" fill="currentColor" />
      </svg>
    );
  }

  if (tone === "codex") {
    return <Bot className="h-7 w-7" />;
  }

  if (tone === "tailwind") {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-8 w-8">
        <path d="M20 12c-4.7 0-7.7 2.3-9 7 1.8-2.3 3.8-3.2 6-2.7 1.2.3 2.1 1.2 3.1 2.1 1.7 1.7 3.7 3.6 7.9 3.6 4.7 0 7.7-2.3 9-7-1.8 2.3-3.8 3.2-6 2.7-1.2-.3-2.1-1.2-3.1-2.1C26.2 13.9 24.2 12 20 12Zm-8 6c-4.7 0-7.7 2.3-9 7 1.8-2.3 3.8-3.2 6-2.7 1.2.3 2.1 1.2 3.1 2.1 1.7 1.7 3.7 3.6 7.9 3.6 4.7 0 7.7-2.3 9-7-1.8 2.3-3.8 3.2-6 2.7-1.2-.3-2.1-1.2-3.1-2.1C18.2 19.9 16.2 18 12 18Z" fill="currentColor" />
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
  return (
    <section
      id="tools"
      className="relative border-t border-gray-200 bg-white py-14 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid min-w-0 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionRule index="04" label="Tools I use" className="mb-4" />
            <h2 className="break-words font-display text-[2rem] font-semibold leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
              The stack behind the prototypes, systems, and product screens.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-2xl text-base leading-7 text-text-secondary lg:justify-self-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
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
              className="group grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-x-4 gap-y-1 py-5 transition-colors duration-300 hover:bg-gray-50/80 sm:grid-cols-[3.5rem_2.75rem_minmax(0,14rem)_minmax(0,1fr)] sm:gap-x-6 sm:px-2 sm:py-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: index * 0.03 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span
                aria-hidden="true"
                className="hidden font-mono text-sm font-medium tracking-[0.18em] text-text-muted sm:block"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={[
                  "flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 [&>svg]:h-6 [&>svg]:w-6 group-hover:scale-110",
                  iconTone[tool.tone],
                ].join(" ")}
              >
                <ToolIcon tone={tool.tone} />
              </span>

              <h3 className="break-words font-display text-lg leading-tight text-gray-950 transition-colors duration-300 group-hover:text-primary sm:text-heading-md">
                {tool.name}
              </h3>

              <div className="col-span-2 min-w-0 sm:col-span-1 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-baseline sm:gap-6">
                <p className="text-sm leading-6 text-gray-600">{tool.role}</p>
                <p className="mt-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] leading-5 text-gray-400 sm:mt-0 sm:text-right">
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
