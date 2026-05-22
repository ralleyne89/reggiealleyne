import {
  getCaseStudyBrief,
  getCaseStudyTldr,
  getFeaturedConfig,
} from "@/config/portfolioCuration";
import { getProjectLiveLabel } from "@/lib/projectLiveLabels";
import type { ProjectType } from "@/types/project";
import { Code, ExternalLink } from "lucide-react";
import { EditorialSection } from "./EditorialProjectLayout";

interface ReviewerSnapshotProps {
  project: ProjectType;
}

const compactItems = (items?: string[] | null, limit = 4) =>
  items?.filter(Boolean).slice(0, limit) || [];

const getReviewerLinks = (project: ProjectType) =>
  [
    {
      label: getProjectLiveLabel(project.slug),
      href: project.liveUrl,
      kind: "live",
    },
    {
      label: "View Source Code",
      href: project.githubUrl,
      kind: "source",
    },
  ].filter((item): item is { label: string; href: string; kind: string } =>
    Boolean(item.href),
  );

const ReviewerSnapshot = ({ project }: ReviewerSnapshotProps) => {
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
  const links = getReviewerLinks(project);
  const problem =
    tldr?.problem ||
    project.problemSolved ||
    project.problem ||
    project.challenge ||
    brief?.audience;
  const audience = brief?.audience || config?.reviewerSignal;
  const decision = tldr?.decision || brief?.coreDecision;
  const outcome =
    tldr?.outcome ||
    brief?.evidence ||
    project.conclusion?.impact ||
    config?.impactSummary ||
    project.summary;

  const details = [
    { label: "Audience", value: audience },
    { label: "Problem", value: problem },
    { label: "Decision", value: decision },
    { label: "Outcome", value: outcome },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value),
  );

  return (
    <EditorialSection
      className="reviewer-cinema border-b border-gray-200"
      contentClassName="max-w-7xl"
      tone="soft"
    >
      <div className="project-cinema-snapshot__grid reviewer-cinema__grid">
        <aside className="project-cinema-snapshot__aside" aria-hidden="true">
          <span>01</span>
          <p>Fast context</p>
        </aside>

        <div className="reviewer-cinema__body">
          <div className="reviewer-cinema__intro">
            <p>
              Reviewer snapshot
            </p>
            <h2>
              Proof, product judgment, and artifacts at a glance.
            </h2>
          </div>

          <dl className="reviewer-cinema__details">
            {details.map((item) => (
              <div key={item.label}>
                <dt>
                  {item.label}
                </dt>
                <dd>
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="reviewer-cinema__support">
            {tools.length ? (
              <SnapshotGroup tone="neutral" title="Tools" items={tools} />
            ) : null}

            {owned.length ? (
              <SnapshotGroup tone="primary" title="Owned artifacts" items={owned} />
            ) : null}

            {links.length ? (
              <div className="reviewer-cinema__group reviewer-cinema__links">
                <p>
                  Links
                </p>
                <div>
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.kind === "source" ? "_blank" : undefined}
                      rel={link.kind === "source" ? "noopener noreferrer" : undefined}
                      className={
                        link.kind === "live"
                          ? "reviewer-cinema__link reviewer-cinema__link--live"
                          : "reviewer-cinema__link"
                      }
                    >
                      {link.kind === "source" ? <Code className="h-4 w-4" /> : null}
                      <span>{link.label}</span>
                      {link.kind === "live" ? <ExternalLink className="h-4 w-4" /> : null}
                    </a>
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

interface SnapshotGroupProps {
  title: string;
  items: string[];
  tone: "neutral" | "primary";
}

const SnapshotGroup = ({ title, items, tone }: SnapshotGroupProps) => (
  <div className="reviewer-cinema__group">
    <p>
      {title}
    </p>
    <div>
      {items.map((item) => (
        <span
          key={item}
          className={
            tone === "primary"
              ? "reviewer-cinema__pill reviewer-cinema__pill--primary"
              : "reviewer-cinema__pill"
          }
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default ReviewerSnapshot;
