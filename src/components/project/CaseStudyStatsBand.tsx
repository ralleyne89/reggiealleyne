import { motion, useReducedMotion } from "framer-motion";
import CountUp from "@/components/motion/CountUp";
import { getCaseStudyTldr } from "@/config/portfolioCuration";
import { DUR, EASE, STAGGER } from "@/lib/motion";
import type { ProjectType } from "@/types/project";

type CaseStudyStatsBandProps = {
  project: ProjectType;
};

/**
 * TLDR + quantified proof band below the case study hero. Renders only what
 * exists in the data: no TLDR → nothing; TLDR without metrics → columns only.
 */
const CaseStudyStatsBand = ({ project }: CaseStudyStatsBandProps) => {
  const shouldReduceMotion = useReducedMotion();
  const tldr = getCaseStudyTldr(project.slug);

  if (!tldr) {
    return null;
  }

  const listText = (items?: string[] | null, limit = 4) =>
    items?.filter(Boolean).slice(0, limit).join(", ") || "";
  const description =
    project.fullDescription || project.description || project.summary;
  const columns = [
    { label: "Project", value: description },
    { label: "Role", value: tldr.role || project.role },
    {
      label: "Tools",
      value: listText(tldr.tools?.length ? tldr.tools : project.techStack),
    },
    {
      label: "Owned",
      value: listText(tldr.owned?.length ? tldr.owned : project.deliverables),
    },
  ].filter((column) => Boolean(column.value));

  const hasMetrics = Boolean(tldr.metrics?.length);

  return (
    <section
      aria-label="Case study at a glance"
      className="border-y border-white/10 bg-gray-950 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div
          className={
            hasMetrics
              ? "grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start"
              : "grid gap-10"
          }
        >
          <div>
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.22em] text-purple-200">
              Project details
            </p>
            <dl className="grid gap-6 sm:grid-cols-2">
              {columns.map((column, index) => (
                <motion.div
                  key={column.label}
                  className="min-w-0"
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: DUR.base,
                    delay: index * STAGGER.base,
                    ease: EASE.out,
                  }}
                >
                  <dt className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-purple-200">
                    {column.label}
                  </dt>
                  <dd className="mt-3 text-sm leading-6 text-gray-300">
                    {column.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>

          {hasMetrics ? (
            <div className="grid gap-3 sm:grid-cols-3 lg:border-l lg:border-white/10 lg:pl-10">
              {tldr.metrics?.map((metric) => (
                <div key={metric.label} className="min-w-0">
                  <CountUp
                    value={metric.value}
                    className="block text-[clamp(1.8rem,2.4vw,2.3rem)] font-medium leading-[1.05] tracking-tight text-purple-200"
                  />
                  <p className="mt-2 text-xs font-semibold leading-5 text-gray-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyStatsBand;
