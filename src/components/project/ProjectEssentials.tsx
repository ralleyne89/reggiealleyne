import { useMemo, useState } from "react";
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
import type { ProjectType, ProjectVisual } from "@/types/project";
import {
  EditorialSection,
  ProjectLightboxModal,
} from "./EditorialProjectLayout";

interface ProjectEssentialsProps {
  project: ProjectType;
}

const firstText = (...values: Array<string | null | undefined>) =>
  values.find((value) => Boolean(value?.trim()))?.trim() || "";

const compactItems = (items?: string[] | null, limit = 4) =>
  items?.filter(Boolean).slice(0, limit) || [];

const SELECTED_VISUAL_LIMIT = 5;

const getUniqueVisuals = (project: ProjectType) => {
  const imageSet = new Set(
    [project.image, ...(project.images || [])].filter(Boolean),
  );

  return Array.from(imageSet);
};

const getProjectVisuals = (project: ProjectType): ProjectVisual[] => {
  if (project.visuals?.length) {
    const seen = new Set<string>();

    return project.visuals.filter((visual) => {
      if (!visual.src || seen.has(visual.src)) {
        return false;
      }

      seen.add(visual.src);
      return true;
    });
  }

  return getUniqueVisuals(project)
    .slice(1, SELECTED_VISUAL_LIMIT + 1)
    .map((src, index) => ({
      src,
      label: `Project visual ${index + 2}`,
    }));
};

const ProjectEssentials = ({ project }: ProjectEssentialsProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
  const decisionPath = [
    {
      label: "User need",
      value: firstText(
        brief?.audience,
        tldr?.problem,
        project.problemSolved,
        project.problem,
        project.challenge,
      ),
    },
    {
      label: "Constraint",
      value: firstText(brief?.constraint, project.problem, project.challenge),
    },
    {
      label: "Product move",
      value: firstText(tldr?.decision, brief?.coreDecision, project.solution),
    },
    {
      label: "Proof point",
      value: firstText(
        brief?.evidence,
        tldr?.outcome,
        project.conclusion?.impact,
        featured?.impactSummary,
      ),
    },
  ].filter((item) => item.value);
  const processNotes = compactItems(project.process, 3);
  const visualStrip = useMemo(() => getProjectVisuals(project), [project]);
  const hasLabeledVisuals = Boolean(project.visuals?.length);

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
      className="project-essentials border-b border-gray-200"
      contentClassName="project-essentials__content"
      tone="soft"
    >
      <div className="project-essentials__grid">
        <aside className="project-essentials__aside" aria-label="Project facts">
          <p>Essentials</p>
          <dl>
            {metadata.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="project-essentials__body">
          <div className="project-essentials__summary">
            {essentials.map((item) => (
              <article key={item.label}>
                <p>{item.label}</p>
                <h2>{item.value}</h2>
              </article>
            ))}
          </div>
        </div>

        {decisionPath.length || processNotes.length ? (
          <section className="project-essentials__thinking">
            <div className="project-essentials__thinking-header">
              <p>Thought process</p>
              <h2>What shaped the work</h2>
            </div>

            <div className="project-essentials__thinking-grid">
              {decisionPath.length ? (
                <div className="project-essentials__decision-path">
                  {decisionPath.map((item) => (
                    <article key={item.label}>
                      <p>{item.label}</p>
                      <h3>{item.value}</h3>
                    </article>
                  ))}
                </div>
              ) : null}

              {processNotes.length ? (
                <div className="project-essentials__process">
                  <p>Build path</p>
                  <ol>
                    {processNotes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        <div className="project-essentials__support">
          {tools.length ? (
            <div className="project-essentials__group">
              <p>Tools</p>
              <div>
                {tools.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ) : null}

          {built.length ? (
            <div className="project-essentials__group">
              <p>Built</p>
              <div>
                {built.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ) : null}

          {links.length ? (
            <div className="project-essentials__links">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.tone === "dark" ? undefined : "_blank"}
                    rel={link.tone === "dark" ? undefined : "noopener noreferrer"}
                    className={
                      link.tone === "dark"
                        ? "project-essentials__link project-essentials__link--dark"
                        : "project-essentials__link"
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>

        {visualStrip.length ? (
          <div className="project-essentials__visuals">
            <p>Selected visuals</p>
            <div>
              {visualStrip.map((visual) => (
                <button
                  key={visual.src}
                  type="button"
                  className={
                    hasLabeledVisuals
                      ? "project-essentials__visual-button--labeled"
                      : undefined
                  }
                  onClick={() => setSelectedImage(visual.src)}
                >
                  <span className="sr-only">
                    Open {visual.label}
                  </span>
                  <img
                    src={visual.src}
                    alt={`${project.title}: ${visual.label}`}
                    loading="lazy"
                    decoding="async"
                  />
                  {hasLabeledVisuals ? (
                    <span className="project-essentials__visual-caption">
                      <strong>{visual.label}</strong>
                      {visual.note ? <em>{visual.note}</em> : null}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <ProjectLightboxModal
        imageSrc={selectedImage}
        alt={`${project.title} visual`}
        onClose={() => setSelectedImage(null)}
      />
    </EditorialSection>
  );
};

export default ProjectEssentials;
