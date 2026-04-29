import {
  getCaseStudyBrief,
  getCaseStudyTldr,
  getFeaturedConfig,
} from "@/config/portfolioCuration";
import type { ProjectType } from "@/types/project";
import { EditorialSection } from "./EditorialProjectLayout";

interface CaseStudyAtGlanceProps {
  project: ProjectType;
}

const compactItems = (items?: string[] | null, limit = 4) =>
  items?.filter(Boolean).slice(0, limit) || [];

const CaseStudyAtGlance = ({ project }: CaseStudyAtGlanceProps) => {
  const tldr = getCaseStudyTldr(project.slug);
  const brief = getCaseStudyBrief(project.slug);
  const config = getFeaturedConfig(project.slug);

  if (!tldr && !brief && !config) {
    return null;
  }

  const tools =
    tldr?.tools?.length
      ? tldr.tools
      : compactItems(project.techStack || project.methodologies);
  const owned =
    tldr?.owned?.length
      ? tldr.owned
      : compactItems(brief?.artifacts || project.deliverables);
  const problem =
    tldr?.problem ||
    project.problemSolved ||
    project.problem ||
    project.challenge ||
    brief?.audience;
  const outcome =
    tldr?.outcome ||
    brief?.evidence ||
    project.conclusion?.impact ||
    config?.impactSummary ||
    project.summary;

  const details = [
    { label: "Role", value: tldr?.role || project.role },
    { label: "Problem", value: problem },
    { label: "Outcome", value: outcome },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value),
  );

  return (
    <EditorialSection
      className="border-b border-gray-200 py-5 sm:py-7"
      contentClassName="max-w-7xl"
      tone="soft"
    >
      <div className="min-w-0 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-6 lg:p-6">
        <div className="min-w-0 border-b border-gray-200 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
          <p className="text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-primary">
            TL;DR
          </p>
          <h2 className="mt-2 break-words font-display text-2xl leading-tight text-gray-950 sm:text-3xl">
            Quick read for reviewers
          </h2>
        </div>

        <div className="min-w-0 pt-4 lg:pt-0">
          <dl className="grid min-w-0 gap-4 sm:grid-cols-3">
            {details.map((item) => (
              <div key={item.label} className="min-w-0">
                <dt className="text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-1 break-words text-sm leading-6 text-gray-900">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-2">
            {tools.length ? (
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-gray-500">
                  Tools
                </p>
                <div className="mt-2 flex min-w-0 flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold leading-5 text-gray-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {owned.length ? (
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-gray-500">
                  What I owned
                </p>
                <div className="mt-2 flex min-w-0 flex-wrap gap-2">
                  {owned.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-semibold leading-5 text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </EditorialSection>
  );
};

export default CaseStudyAtGlance;
