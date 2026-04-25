import { CheckCircle2 } from "lucide-react";
import { getCaseStudyBrief, getFeaturedConfig } from "@/config/portfolioCuration";
import type { ProjectType } from "@/types/project";
import { EditorialSection } from "./EditorialProjectLayout";

interface CaseStudyAtGlanceProps {
  project: ProjectType;
}

const glanceVisuals: Record<
  string,
  {
    image: string;
    alt: string;
    label: string;
    proofPoints: string[];
  }
> = {
  "litmus-ai": {
    image: "/images/litmus-ai-at-a-glance.jpg",
    alt: "Abstract AI literacy product dashboard with assessment, learning path, and evidence panels",
    label: "Product evidence map",
    proofPoints: ["Adaptive assessment", "Credible signal", "Shipped MVP"],
  },
  "cllctve-platform": {
    image: "/images/cllctve-gen-z-card.jpg",
    alt: "Abstract Gen Z creator portfolio platform visual with mobile profile cards and creator network panels",
    label: "Creator platform system",
    proofPoints: ["Mobile-first bet", "Creator loops", "Design system"],
  },
  "symptom-checkr": {
    image: "/images/symptomcheckr-trust-ai-card.jpg",
    alt: "Abstract explainable health AI dashboard with confidence, source, and reasoning panels",
    label: "Trust design system",
    proofPoints: ["Confidence", "Citations", "Reasoning"],
  },
};

const CaseStudyAtGlance = ({ project }: CaseStudyAtGlanceProps) => {
  const brief = getCaseStudyBrief(project.slug);
  const config = getFeaturedConfig(project.slug);
  const visual = project.slug ? glanceVisuals[project.slug] : undefined;

  if (!brief && !config) {
    return null;
  }

  const details = [
    { label: "Role", value: project.role },
    { label: "Audience", value: brief?.audience },
    { label: "Constraint", value: brief?.constraint },
    { label: "Decision", value: brief?.coreDecision },
    { label: "Evidence", value: brief?.evidence || config?.impactSummary },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value),
  );

  return (
    <EditorialSection className="border-b border-gray-200" tone="soft">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-5 text-primary">
              Quick read
            </p>
            <h2 className="mt-3 max-w-xl break-words font-display text-3xl leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
              The short version before you dig in.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              A quick pass at the audience, constraint, decision, and proof
              behind the work.
            </p>

            {visual ? (
              <div className="mt-7 overflow-hidden rounded-lg border border-gray-200 bg-gray-950 shadow-sm">
                <div className="relative aspect-[16/10] min-h-[15rem]">
                  <img
                    src={visual.image}
                    alt={visual.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="text-xs font-semibold text-white/70">
                      {visual.label}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {visual.proofPoints.map((point) => (
                        <span
                          key={point}
                          className="rounded-md border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
            {details.map((item) => (
              <div
                key={item.label}
                className="min-w-0 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <dt className="text-xs font-semibold text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-2 break-words text-sm leading-6 text-gray-900">
                  {item.value}
                </dd>
              </div>
            ))}

            {brief?.artifacts ? (
              <div className="min-w-0 rounded-lg border border-primary/20 bg-primary/5 p-4 sm:col-span-2">
                <dt className="text-xs font-semibold text-primary">
                  Key artifacts
                </dt>
                <dd className="mt-3 grid min-w-0 gap-2 sm:grid-cols-3">
                  {brief.artifacts.map((artifact) => (
                    <span
                      key={artifact}
                      className="inline-flex items-start gap-2 text-sm leading-6 text-gray-800"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      {artifact}
                    </span>
                  ))}
                </dd>
              </div>
            ) : null}
          </div>
        </div>
    </EditorialSection>
  );
};

export default CaseStudyAtGlance;
