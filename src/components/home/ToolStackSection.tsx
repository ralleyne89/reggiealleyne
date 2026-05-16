import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Code2, GitBranch, PanelsTopLeft } from "lucide-react";

type ToolTone = "figma" | "react" | "supabase" | "vscode" | "codex" | "tailwind" | "typescript" | "framer" | "github";

type ToolItem = {
  name: string;
  role: string;
  proof: string;
  tone: ToolTone;
  layout: ToolTone;
};

const tools: ToolItem[] = [
  {
    name: "Figma",
    role: "Design systems, flows, and prototype states.",
    proof: "Where product shape gets clear before build.",
    tone: "figma",
    layout: "figma",
  },
  {
    name: "React",
    role: "Production frontends and testable prototypes.",
    proof: "Turns interface decisions into working behavior.",
    tone: "react",
    layout: "react",
  },
  {
    name: "Supabase",
    role: "Auth, data, storage, and product backends.",
    proof: "Enough backend to make the interface real.",
    tone: "supabase",
    layout: "supabase",
  },
  {
    name: "VS Code",
    role: "Daily build environment.",
    proof: "Fast iteration, debugging, and code review.",
    tone: "vscode",
    layout: "vscode",
  },
  {
    name: "Codex",
    role: "AI pair-programming and repo inspection.",
    proof: "Useful for audits, refactors, and implementation passes.",
    tone: "codex",
    layout: "codex",
  },
  {
    name: "Tailwind CSS",
    role: "Responsive UI systems.",
    proof: "Keeps spacing, states, and polish close to code.",
    tone: "tailwind",
    layout: "tailwind",
  },
  {
    name: "TypeScript",
    role: "Safer product logic.",
    proof: "Contracts for UI state, data, and edge cases.",
    tone: "typescript",
    layout: "typescript",
  },
  {
    name: "Framer Motion",
    role: "Quiet interaction polish.",
    proof: "Motion that supports hierarchy instead of distracting from it.",
    tone: "framer",
    layout: "framer",
  },
  {
    name: "GitHub",
    role: "Versioning and shipping discipline.",
    proof: "Keeps implementation traceable.",
    tone: "github",
    layout: "github",
  },
];

const toolCardLayout: Record<ToolTone, string> = {
  figma: "md:col-span-6 lg:col-span-5",
  react: "md:col-span-6 lg:col-span-4",
  supabase: "md:col-span-3 lg:col-span-3",
  vscode: "md:col-span-3 lg:col-span-3",
  codex: "md:col-span-6 lg:col-span-6",
  tailwind: "md:col-span-3 lg:col-span-3",
  typescript: "md:col-span-2 lg:col-span-4",
  framer: "md:col-span-2 lg:col-span-4",
  github: "md:col-span-2 lg:col-span-4",
};

const toolCardSurface: Record<ToolTone, string> = {
  figma: "bg-white",
  react: "bg-white",
  supabase: "bg-white",
  vscode: "bg-white",
  codex: "bg-[linear-gradient(135deg,oklch(var(--color-ink)),oklch(0.24_0.03_268))] text-white",
  tailwind: "bg-white",
  typescript: "bg-white",
  framer: "bg-white",
  github: "bg-white",
};

const iconWrapTone: Record<ToolTone, string> = {
  figma: "bg-[#2f1b3c] text-white",
  react: "bg-[#082f49] text-cyan-200",
  supabase: "bg-[#073127] text-emerald-200",
  vscode: "bg-[#082f49] text-sky-200",
  codex: "bg-gray-950 text-purple-100",
  tailwind: "bg-[#0f3443] text-cyan-100",
  typescript: "bg-[#173463] text-blue-100",
  framer: "bg-[#17142c] text-violet-100",
  github: "bg-gray-950 text-gray-100",
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

  if (tone === "typescript") {
    return <Code2 className="h-7 w-7" />;
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
      className="relative overflow-hidden border-t border-gray-200 bg-gray-50 py-14 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,58,237,0.08),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(20,184,166,0.08),transparent_24%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid min-w-0 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase leading-5 text-primary sm:text-sm">
              Tools I use
            </p>
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {tools.map((tool, index) => {
            const isDark = tool.tone === "codex";

            return (
              <motion.article
                key={tool.name}
                className={[
                  "group flex min-h-[12.5rem] min-w-0 flex-col justify-between overflow-hidden rounded-[1.25rem] border p-5 shadow-sm shadow-gray-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
                  isDark ? "border-gray-950/20" : "border-gray-200",
                  toolCardSurface[tool.tone],
                  toolCardLayout[tool.layout],
                ].join(" ")}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: index * 0.035 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <span
                    className={[
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm",
                      iconWrapTone[tool.tone],
                    ].join(" ")}
                  >
                    <ToolIcon tone={tool.tone} />
                  </span>
                  <ArrowUpRight
                    className={[
                      "mt-1 h-4 w-4 shrink-0 transition-colors group-hover:text-primary",
                      isDark ? "text-white/30 group-hover:text-primary-light" : "text-gray-300",
                    ].join(" ")}
                  />
                </div>

                <div className="mt-6 min-w-0">
                  <h3
                    className={[
                      "break-words font-display text-xl leading-tight transition-colors group-hover:text-primary",
                      isDark ? "text-white" : "text-gray-950",
                    ].join(" ")}
                  >
                    {tool.name}
                  </h3>
                  <p
                    className={[
                      "mt-2 text-sm leading-6",
                      isDark ? "text-white/70" : "text-gray-600",
                    ].join(" ")}
                  >
                    {tool.role}
                  </p>
                  <p
                    className={[
                      "mt-4 border-t pt-4 text-xs font-semibold uppercase leading-5",
                      isDark ? "border-white/10 text-white/55" : "border-gray-200 text-gray-500",
                    ].join(" ")}
                  >
                    {tool.proof}
                  </p>
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
