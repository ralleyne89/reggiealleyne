import {
  ArrowLeft,
  Lightbulb,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectConclusionProps {
  conclusion: {
    impact: string | null;
    learnings: string | null;
    nextSteps: string | null;
  };
}

const ProjectConclusion = ({
  conclusion,
}: ProjectConclusionProps) => {
  const items = [
    {
      label: "Impact",
      value: conclusion.impact,
      icon: TrendingUp,
    },
    {
      label: "What I learned",
      value: conclusion.learnings,
      icon: Lightbulb,
    },
    {
      label: "What could come next",
      value: conclusion.nextSteps,
      icon: Star,
    },
  ].filter((item): item is {
    label: string;
    value: string;
    icon: LucideIcon;
  } => Boolean(item.value));

  if (items.length === 0) {
    return null;
  }

  return (
    <EditorialSection
      eyebrow="Closeout"
      title="Where it landed."
      className="border-b border-gray-200"
      tone="soft"
    >
      {items.length > 0 ? (
        <div className="grid min-w-0 gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-950">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {item.value}
                </p>
              </article>
            );
          })}
        </div>
      ) : null}

      <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-8 sm:flex-row sm:items-center">
        <Link
          to="/works"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-gray-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          View more projects
        </Link>
      </div>
    </EditorialSection>
  );
};

export default ProjectConclusion;
