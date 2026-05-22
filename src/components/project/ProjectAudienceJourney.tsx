import { getProjectPersonaJourney } from "@/config/portfolioCuration";
import type { ProjectType } from "@/types/project";
import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectAudienceJourneyProps {
  project: ProjectType;
}

const personaDetails = [
  ["Context", "context"],
  ["Goal", "goal"],
  ["Friction", "friction"],
] as const;

const ProjectAudienceJourney = ({ project }: ProjectAudienceJourneyProps) => {
  const audienceJourney = getProjectPersonaJourney(project.slug);

  if (!audienceJourney) return null;

  const { persona, journey } = audienceJourney;

  return (
    <EditorialSection
      eyebrow="Audience"
      title="Persona and journey"
      description="A compact view of who the project was shaped around and how the core experience moves from need to action."
      className="project-audience-journey border-b border-gray-200"
      contentClassName="project-audience-journey__content"
      headerClassName="project-audience-journey__header"
      tone="white"
    >
      <div className="project-audience-journey__grid">
        <section
          className="project-audience-journey__persona"
          aria-label={`${project.title} persona snapshot`}
        >
          <div className="project-audience-journey__persona-intro">
            <p>Primary persona</p>
            <h3>{persona.role}</h3>
          </div>

          <div className="project-audience-journey__need">
            <span>Needs</span>
            <p>{persona.need}</p>
          </div>
        </section>

        <section
          className="project-audience-journey__path"
          aria-label={`${project.title} user journey`}
        >
          <div className="project-audience-journey__path-header">
            <p>Journey path</p>
            <h3>From concern to next step</h3>
          </div>

          <ol>
            {journey.map((step) => (
              <li key={step.label}>
                <span>{step.label}</span>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <dl className="project-audience-journey__signals">
          {personaDetails.map(([label, key]) => (
            <div key={key}>
              <dt>{label}</dt>
              <dd>{persona[key]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </EditorialSection>
  );
};

export default ProjectAudienceJourney;
