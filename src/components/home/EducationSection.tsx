import { motion } from "framer-motion";
import { Code2, Layers3, PenTool, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type EducationItem = {
  year: string;
  title: string;
  school: string;
  description: string;
  focus: string;
  outcome: string;
  Icon: LucideIcon;
  accent: string;
  chip: string;
};

const education: EducationItem[] = [
  {
    year: "2014",
    title: "Graphic Design",
    school: "Art Institute of California - Los Angeles",
    description:
      "Built the visual foundation for hierarchy, composition, interaction, and brand systems.",
    focus: "Visual craft",
    outcome: "Clearer interfaces through stronger layout, type, and storytelling.",
    Icon: PenTool,
    accent: "bg-primary text-white",
    chip: "bg-primary/10 text-primary",
  },
  {
    year: "2016",
    title: "UX/UI Design",
    school: "General Assembly",
    description:
      "Practiced research, journey mapping, wireframing, prototyping, and usability testing.",
    focus: "Product sense",
    outcome: "User flows that make complex decisions feel understandable.",
    Icon: Layers3,
    accent: "bg-emerald-500 text-white",
    chip: "bg-emerald-50 text-emerald-700",
  },
  {
    year: "2020",
    title: "Fullstack Web Development",
    school: "UCLA Extension",
    description:
      "Connected design intent to production code across front-end systems and application logic.",
    focus: "Build fluency",
    outcome: "React prototypes that can prove product ideas with real interaction.",
    Icon: Code2,
    accent: "bg-amber-500 text-white",
    chip: "bg-amber-50 text-amber-700",
  },
];

const applicationSignals = [
  "AI product framing",
  "Design systems",
  "Production React",
];

const EducationSection = () => {
  return (
    <section id="education" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:88px_88px] opacity-35" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase text-primary">
              Learning arc
            </p>
            <h2 className="font-display text-[2.25rem] font-semibold leading-tight text-gray-950 sm:text-[3rem]">
              Training that connects design craft to product systems.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            My education moved in layers: visual design first, then user
            experience methods, then full-stack implementation. That mix is why
            I can shape an idea, test the flow, and build enough of the product
            to make the decision real.
          </motion.p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl shadow-gray-950/[0.06]">
          <div className="grid gap-0 lg:grid-cols-3">
            {education.map((item, index) => {
              const Icon = item.Icon;

              return (
                <motion.article
                  key={item.title}
                  className="group relative min-h-[22rem] border-b border-gray-200 p-6 transition-colors duration-300 hover:bg-gray-50 sm:p-7 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.accent} shadow-lg shadow-gray-950/10`}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${item.chip}`}
                    >
                      {item.year}
                    </span>
                  </div>

                  <p className="mt-8 text-sm font-semibold uppercase text-gray-500">
                    {item.focus}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-gray-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    {item.school}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-gray-200 pt-5">
                    <p className="text-sm font-semibold uppercase text-gray-500">
                      Applied outcome
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      {item.outcome}
                    </p>
                  </div>

                  <span className="pointer-events-none absolute bottom-4 right-5 font-display text-6xl font-semibold leading-none text-gray-950/[0.04]">
                    0{index + 1}
                  </span>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            className="grid gap-5 border-t border-gray-200 bg-gray-950 p-6 text-white sm:p-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-primary">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase text-white/55">
                  How it shows up now
                </p>
                <h3 className="font-display text-xl font-semibold">
                  Strategic design that can also ship.
                </h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {applicationSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white/85"
                >
                  {signal}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
