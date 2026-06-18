import CountUp from "@/components/motion/CountUp";
import { getCaseStudyImpact } from "@/config/portfolioCuration";
import type { ProjectType } from "@/types/project";
import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectImpactSectionProps {
  project: ProjectType;
}

const ProjectImpactSection = ({ project }: ProjectImpactSectionProps) => {
  const impact = getCaseStudyImpact(project.slug);

  if (!impact) return null;

  return (
    <EditorialSection
      className="border-b border-gray-200 bg-gray-950 text-white"
      contentClassName="max-w-[82rem] px-4 sm:px-6 lg:px-0"
      tone="white"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start">
        <div>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-purple-200">
            Impact
          </p>
          <h2 className="font-display text-3xl leading-tight text-white [text-wrap:balance] sm:text-heading-xl">
            {impact.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            {impact.summary}
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {impact.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <CountUp
                  value={metric.value}
                  className="block text-[clamp(2rem,4vw,3rem)] font-medium leading-none tracking-tight text-purple-200"
                />
                <p className="mt-3 text-sm font-semibold leading-5 text-gray-300">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {impact.notes.map((note) => (
              <li key={note} className="py-5 text-base leading-7 text-gray-300">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </EditorialSection>
  );
};

export default ProjectImpactSection;
