import { Award, BarChart2, Check, Layers, Lightbulb, Users } from "lucide-react";
import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectProcessProps {
  challenge?: string | null;
  process?: string[] | null;
  problem?: string | null;
  problemSolved?: string | null;
  technicalHighlights?: string[] | null;
  keyAchievements?: string[] | null;
  methodologies?: string[] | null;
}

const stepNames = [
  "Research and discovery",
  "Planning and strategy",
  "Design and prototyping",
  "Development",
  "Testing and refinement",
  "Launch",
  "Iteration",
];

const ProjectProcess = ({
  challenge,
  process,
  problem,
  problemSolved,
  technicalHighlights,
  keyAchievements,
  methodologies,
}: ProjectProcessProps) => {
  const displayChallenge = challenge || problem;
  const showProblemSolved =
    problemSolved && problemSolved !== displayChallenge && problemSolved !== "";
  const hasProcess = Boolean(process?.length);
  const hasMethods = Boolean(methodologies?.length);
  const hasTechnical = Boolean(technicalHighlights?.length);
  const hasAchievements = Boolean(keyAchievements?.length);

  if (
    !displayChallenge &&
    !showProblemSolved &&
    !hasProcess &&
    !hasMethods &&
    !hasTechnical &&
    !hasAchievements
  ) {
    return null;
  }

  return (
    <>
      {(displayChallenge || showProblemSolved) && (
        <EditorialSection
          eyebrow="Context"
          title="What made the work worth doing."
          className="border-b border-gray-200"
          tone="soft"
        >
          <div className="grid min-w-0 gap-6 lg:grid-cols-2">
            {displayChallenge ? (
              <article className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-950">
                  The challenge
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  {displayChallenge}
                </p>
              </article>
            ) : null}

            {showProblemSolved ? (
              <article className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-950">
                  What changed
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  {problemSolved}
                </p>
              </article>
            ) : null}
          </div>
        </EditorialSection>
      )}

      {hasProcess ? (
        <EditorialSection
          eyebrow="Process"
          title="How the project moved from question to answer."
          className="border-b border-gray-200"
        >
          <ol className="grid min-w-0 gap-4">
            {process!.map((step, index) => (
              <li
                key={`${stepNames[index % stepNames.length]}-${index}`}
                className="grid min-w-0 gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:grid-cols-[4rem_1fr] sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-950 text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <h3 className="break-words text-lg font-semibold text-gray-950">
                    {stepNames[index % stepNames.length]}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-700">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </EditorialSection>
      ) : null}

      {hasMethods ? (
        <EditorialSection
          eyebrow="Ways of working"
          title="Tools and methods used along the way."
          className="border-b border-gray-200"
          tone="soft"
        >
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {methodologies!.map((methodology) => (
              <div
                key={methodology}
                className="flex min-w-0 items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <Users className="h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0 break-words text-sm font-medium text-gray-700">
                  {methodology}
                </span>
              </div>
            ))}
          </div>
        </EditorialSection>
      ) : null}

      {(hasTechnical || hasAchievements) && (
        <EditorialSection
          eyebrow="Evidence"
          title="Signals that the work held together."
          className="border-b border-gray-200"
        >
          <div className="grid min-w-0 gap-6 lg:grid-cols-2">
            {hasTechnical ? (
              <EvidenceList
                icon={<Layers className="h-5 w-5" />}
                title="Technical highlights"
                items={technicalHighlights!}
              />
            ) : null}
            {hasAchievements ? (
              <EvidenceList
                icon={<BarChart2 className="h-5 w-5" />}
                title="Key achievements"
                items={keyAchievements!}
              />
            ) : null}
          </div>
        </EditorialSection>
      )}
    </>
  );
};

interface EvidenceListProps {
  title: string;
  items: string[];
  icon: JSX.Element;
}

const EvidenceList = ({ title, items, icon }: EvidenceListProps) => (
  <article className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-950">{title}</h3>
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-start gap-3">
          <Award className="mt-1 h-4 w-4 shrink-0 text-primary" />
          <span className="min-w-0 text-sm leading-6 text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </article>
);

export default ProjectProcess;
