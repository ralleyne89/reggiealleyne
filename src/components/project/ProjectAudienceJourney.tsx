import type { CSSProperties } from "react";
import {
  getProjectPersonaJourney,
  getProjectPersonaProfile,
} from "@/config/portfolioCuration";
import type { ProjectType } from "@/types/project";
import { EditorialSection } from "./EditorialProjectLayout";

interface ProjectAudienceJourneyProps {
  project: ProjectType;
}

const ProjectAudienceJourney = ({ project }: ProjectAudienceJourneyProps) => {
  const audienceJourney = getProjectPersonaJourney(project.slug);
  const personaProfile = getProjectPersonaProfile(project.slug);

  if (!audienceJourney || !personaProfile) return null;

  const { persona, journey } = audienceJourney;
  const personaCardStyle = {
    "--persona-bg": personaProfile.theme.background,
    "--persona-panel": personaProfile.theme.panel,
    "--persona-line": personaProfile.theme.line,
    "--persona-ink": personaProfile.theme.ink,
    "--persona-muted": personaProfile.theme.muted,
    "--persona-accent": personaProfile.theme.accent,
    "--persona-shadow": personaProfile.theme.shadow,
  } as CSSProperties;

  return (
    <EditorialSection
      eyebrow="Discovery"
      title="Persona and audience context"
      description="The persona connects creator behavior to product structure: what the user needed, where the business needed repeat activity, and which flow could serve both."
      className="project-audience-journey border-b border-gray-200"
      contentClassName="project-audience-journey__content"
      headerClassName="project-audience-journey__header"
      tone="white"
    >
      <article
        className="project-persona-card"
        style={personaCardStyle}
        aria-label={`${project.title} persona dossier`}
      >
        <div className="project-persona-card__media">
          <img
            src={personaProfile.image}
            alt={personaProfile.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="project-persona-card__body">
          <div className="project-persona-card__intro">
            <p>Persona</p>
            <h3>{personaProfile.name}</h3>
            <span>{personaProfile.title}</span>
          </div>

          <div className="project-persona-card__details">
            <section className="project-persona-card__section project-persona-card__section--about">
              <h4>About</h4>
              <dl>
                {personaProfile.about.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="project-persona-card__section project-persona-card__section--motivations">
              <h4>Motivations</h4>
              <p>{persona.goal}</p>
            </section>

            <section className="project-persona-card__section project-persona-card__section--attributes">
              <h4>Behavior signals</h4>
              <ul>
                {personaProfile.attributes.map((attribute) => (
                  <li key={attribute.label}>
                    <span>{attribute.label}</span>
                    <i
                      aria-hidden="true"
                      style={
                        {
                          "--persona-score": `${attribute.score}%`,
                        } as CSSProperties
                      }
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section className="project-persona-card__section project-persona-card__section--needs">
              <h4>Core needs</h4>
              <p>{persona.need}</p>
            </section>

            <section className="project-persona-card__section project-persona-card__section--pain">
              <h4>Pain points</h4>
              <p>{persona.friction}</p>
            </section>

            <section className="project-persona-card__section project-persona-card__section--journey">
              <div>
                <h4>Journey path</h4>
                <p>{persona.context}</p>
              </div>
              <ol>
                {journey.map((step) => (
                  <li key={step.label}>
                    <span>{step.label}</span>
                    <p className="sr-only">{step.description}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </article>
    </EditorialSection>
  );
};

export default ProjectAudienceJourney;
