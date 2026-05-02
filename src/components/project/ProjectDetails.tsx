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
      title="What this project covers."
      description={summary}
      className="border-b border-gray-200"
    >
      <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => {
          const Icon = fact.icon;

          return (
            <div
              key={fact.label}
              className="min-w-0 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold text-gray-500">{fact.label}</p>
              <p className="mt-2 break-words text-sm font-semibold leading-6 text-gray-950">
                {fact.value}
              </p>
            </div>
          );
        })}
      </div>

      {hasProblemSolution ? (
        <div className="mt-12 grid min-w-0 gap-6 border-t border-gray-200 pt-10 lg:grid-cols-2">
          {problem ? (
            <article className="min-w-0">
              <p className="text-sm font-semibold text-primary">Problem</p>
              <p className="mt-3 text-base leading-7 text-gray-700">{problem}</p>
            </article>
          ) : null}

          {solution ? (
            <article className="min-w-0">
              <p className="text-sm font-semibold text-primary">Solution</p>
              <p className="mt-3 text-base leading-7 text-gray-700">{solution}</p>
            </article>
          ) : null}
        </div>
      ) : null}

      {methodologies && methodologies.length > 0 ? (
        <div className="mt-10 border-t border-gray-200 pt-8">
          <p className="text-sm font-semibold text-gray-950">Tools and methods</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {methodologies.map((methodology) => (
              <span
                key={methodology}
                className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700"
              >
                {methodology}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </EditorialSection>
  );
};

export default ProjectDetails;
