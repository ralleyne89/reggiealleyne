import {
  getCaseStudyPresentation,
  getProjectPersonaJourney,
} from "@/config/portfolioCuration";
import type { ProjectType } from "@/types/project";
import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectAudienceJourneyProps {
  project: ProjectType;
}

const evidenceLabels = {
  "cllctve-platform": "Documented creator behavior",
  "litmus-ai": "Assessment hypothesis",
  staybooked: "Host assumptions",
} as const;

const defaultValidationQuestions = [
  "Where does this audience hesitate, abandon the flow, or need more context?",
  "Which step creates enough value for them to continue or return?",
];

const ProjectAudienceJourney = ({ project }: ProjectAudienceJourneyProps) => {
  const audienceJourney = getProjectPersonaJourney(project.slug);
  const presentation = getCaseStudyPresentation(project.slug);

  if (!audienceJourney) return null;

  const { persona: audience, journey } = audienceJourney;
  const evidenceLabel =
    evidenceLabels[project.slug as keyof typeof evidenceLabels] ||
    "Audience hypothesis";
  const audienceEyebrow =
    presentation?.audienceEyebrow || "Evidence-aware audience model";
  const audienceTitle =
    presentation?.audienceTitle || "Audience assumptions to validate";
  const audienceDescription =
    presentation?.audienceDescription ||
    "This model connects the available project evidence to a workflow that still needs direct research.";
  const limitation =
    presentation?.limitation ||
    "The available project archive does not preserve participant counts, interview notes, or a research synthesis for this audience model. Treat it as a design hypothesis to test, not a measured persona.";
  const evidenceBasis =
    presentation?.evidenceBasis ||
    "The project archive supports the problem framing, intended workflow, and interface evidence shown in this case study. It does not establish how common these behaviors are across the broader audience.";
  const teamContext =
    presentation?.teamContext ||
    `The portfolio record identifies my role as ${project.role || "the project designer"}. The available archive does not preserve enough collaborator detail to attribute specific decisions beyond that role.`;
  const validationQuestions =
    presentation?.validationQuestions || defaultValidationQuestions;

  return (
    <EditorialSection
      eyebrow={audienceEyebrow}
      title={audienceTitle}
      description={audienceDescription}
      className="project-audience-journey border-b border-gray-200"
      contentClassName="max-w-[82rem] px-4 sm:px-6 lg:px-0"
      tone="white"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="grid gap-5">
          <article className="rounded-xl border border-gray-200 bg-gray-950 p-6 text-white shadow-sm sm:p-7">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-purple-200">
              {evidenceLabel}
            </p>
            <h3 className="mt-4 font-display text-2xl leading-tight text-white">
              {audience.role}
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-300">
              {audience.context}
            </p>

            <dl className="mt-7 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Working need
                </dt>
                <dd className="mt-2 text-sm leading-6 text-gray-200">
                  {audience.need}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Risk to test
                </dt>
                <dd className="mt-2 text-sm leading-6 text-gray-200">
                  {audience.friction}
                </dd>
              </div>
            </dl>
          </article>

          <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Evidence boundary
            </p>
            <p className="mt-3 text-base leading-7 text-gray-700">
              {limitation}
            </p>
          </article>
        </div>

        <div className="grid gap-5">
          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              What the sources support
            </p>
            <p className="mt-3 text-base leading-7 text-gray-700">
              {evidenceBasis}
            </p>
            <p className="mt-5 border-t border-gray-200 pt-5 text-sm leading-6 text-gray-600">
              {teamContext}
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Workflow to validate
            </p>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {journey.map((step, index) => (
                <li
                  key={step.label}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                >
                  <span className="font-mono text-xs text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 text-sm font-semibold text-gray-950">
                    {step.label}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Questions for the first study
            </p>
            <ul className="mt-4 grid gap-3">
              {validationQuestions.map((question) => (
                <li
                  key={question}
                  className="flex gap-3 text-sm leading-6 text-gray-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {question}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </EditorialSection>
  );
};

export default ProjectAudienceJourney;
