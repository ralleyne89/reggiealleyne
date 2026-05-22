import { Calendar, Clock, User, Users, type LucideIcon } from "lucide-react";
import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectDetailsProps {
  role: string;
  duration: string;
  year: string;
  teamSize?: string | null;
  methodologies?: string[] | null;
  summary: string;
  problem?: string | null;
  solution?: string | null;
}

const ProjectDetails = ({
  role,
  duration,
  year,
  teamSize,
  methodologies,
  summary,
  problem,
  solution,
}: ProjectDetailsProps) => {
  const facts = [
    { label: "Role", value: role, icon: User },
    { label: "Timeline", value: duration, icon: Clock },
    { label: "Year", value: year, icon: Calendar },
    { label: "Team", value: teamSize, icon: Users },
  ].filter((item): item is { label: string; value: string; icon: LucideIcon } =>
    Boolean(item.value),
  );

  const hasProblemSolution = Boolean(problem || solution);

  return (
    <EditorialSection
      eyebrow="Project snapshot"
      title="What the work had to prove."
      description={summary}
      className="project-cinema-snapshot border-b border-gray-200"
      contentClassName="max-w-7xl"
    >
      <div className="project-cinema-snapshot__grid">
        <aside className="project-cinema-snapshot__aside" aria-hidden="true">
          <span>01</span>
          <p>Snapshot</p>
        </aside>

        <div className="project-cinema-snapshot__body">
          <dl className="project-cinema-facts">
            {facts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.label} className="project-cinema-fact">
                  <dt>
                    <Icon className="h-4 w-4" />
                    {fact.label}
                  </dt>
                  <dd>{fact.value}</dd>
                </div>
              );
            })}
          </dl>

          {hasProblemSolution ? (
            <div className="project-cinema-briefs">
              {problem ? (
                <article>
                  <p>Problem</p>
                  <h3>{problem}</h3>
                </article>
              ) : null}

              {solution ? (
                <article>
                  <p>Response</p>
                  <h3>{solution}</h3>
                </article>
              ) : null}
            </div>
          ) : null}

          {methodologies && methodologies.length > 0 ? (
            <div className="project-cinema-methods">
              <p>Tools and methods</p>
              <div>
                {methodologies.map((methodology) => (
                  <span key={methodology}>{methodology}</span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </EditorialSection>
  );
};

export default ProjectDetails;
