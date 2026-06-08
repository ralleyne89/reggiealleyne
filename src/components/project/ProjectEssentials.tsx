import {
  Code,
  ExternalLink,
  Figma,
  MousePointer2,
  type LucideIcon,
} from "lucide-react";
import {
  getCaseStudyBrief,
  getCaseStudyTldr,
  getFeaturedConfig,
} from "@/config/portfolioCuration";
import { getProjectLiveLabel } from "@/lib/projectLiveLabels";
import { cn } from "@/lib/utils";
import type { ProjectType } from "@/types/project";
import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectEssentialsProps {
  project: ProjectType;
}

const firstText = (...values: Array<string | null | undefined>) =>
  values.find((value) => Boolean(value?.trim()))?.trim() || "";

const compactItems = (items?: string[] | null, limit = 4) =>
  items?.filter(Boolean).slice(0, limit) || [];

const ProjectEssentials = ({ project }: ProjectEssentialsProps) => {
  const tldr = getCaseStudyTldr(project.slug);
  const brief = getCaseStudyBrief(project.slug);
  const featured = getFeaturedConfig(project.slug);

  const essentials = [
    {
      label: "Problem",
      value: firstText(
        tldr?.problem,
        project.problemSolved,
        project.problem,
        project.challenge,
        brief?.audience,
        project.summary,
      ),
    },
    {
      label: "Decision",
      value: firstText(tldr?.decision, brief?.coreDecision, project.solution),
    },
    {
      label: "Outcome",
      value: firstText(
        tldr?.outcome,
        brief?.evidence,
        project.conclusion?.impact,
        featured?.impactSummary,
        project.summary,
      ),
    },
  ].filter((item) => item.value);

  const tools = compactItems(
    tldr?.tools?.length
      ? tldr.tools
      : project.techStack || project.methodologies || project.tags,
  );
  const built = compactItems(
    tldr?.owned?.length ? tldr.owned : brief?.artifacts || project.deliverables,
    3,
  );
  const metadata = [
    { label: "Role", value: tldr?.role || project.role },
    { label: "Year", value: project.year },
    { label: "Team", value: project.teamSize },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value),
  );
  const processNotes = compactItems(project.process, 3);

  const links = [
    {
      href: project.liveUrl,
      icon: ExternalLink,
      label: getProjectLiveLabel(project.slug),
      tone: "dark",
    },
    {
      href: project.githubUrl,
      icon: Code,
      label: "View Source",
      tone: "light",
    },
    {
      href: project.figmaUrl,
      icon: Figma,
      label: "Open Figma",
      tone: "light",
    },
    {
      href: project.prototypeUrl,
      icon: MousePointer2,
      label: "Open Prototype",
      tone: "light",
    },
  ].filter((item): item is {
    href: string;
    icon: LucideIcon;
    label: string;
    tone: string;
  } => Boolean(item.href));

  return (
    <EditorialSection
      className="border-b border-gray-200"
      contentClassName="max-w-[82rem] space-y-8 px-4 sm:px-6 lg:px-0"
      tone="soft"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold leading-5 text-primary">
            Project summary
          </p>
          <h2 className="font-display text-3xl leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
            What to inspect after the story
          </h2>
        </div>

        {links.length ? (
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.tone === "dark" ? undefined : "_blank"}
                  rel={link.tone === "dark" ? undefined : "noopener noreferrer"}
                  className={cn(
                    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-950 shadow-sm transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                    link.tone === "dark" &&
                      "border-gray-950 bg-gray-950 text-white hover:border-primary hover:bg-primary hover:text-white",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        ) : null}
      </div>

      <dl className="grid gap-5 border-b border-gray-200 pb-5 md:grid-cols-3 md:gap-8">
        {metadata.map((item) => (
          <div key={item.label} className="min-w-0">
            <dt className="text-xs font-semibold uppercase leading-5 text-primary">
              {item.label}
            </dt>
            <dd className="mt-2 text-base font-semibold leading-6 text-gray-950">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      {essentials.length ? (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="grid divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {essentials.map((item, index) => (
              <article
                key={item.label}
                className="grid min-h-[14rem] content-between gap-8 p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold leading-5 text-primary">
                    {item.label}
                  </p>
                  <span
                    className="font-display text-4xl leading-none text-gray-200"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-normal leading-8 text-gray-700 [text-wrap:pretty]">
                  {item.value}
                </h3>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {processNotes.length ? (
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm font-semibold leading-5 text-primary">
            Build receipts
          </p>
          <ol className="mt-5 grid gap-3 md:grid-cols-3">
            {processNotes.map((item, index) => (
              <li
                key={item}
                className="rounded-lg border border-gray-200 bg-white p-4 text-lg leading-8 text-gray-700"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {tools.length || built.length ? (
        <div className="grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-2">
          {tools.length ? (
            <div>
              <p className="text-sm font-semibold leading-5 text-primary">
                Tools
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {built.length ? (
            <div>
              <p className="text-sm font-semibold leading-5 text-primary">
                Built
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {built.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </EditorialSection>
  );
};

export default ProjectEssentials;
