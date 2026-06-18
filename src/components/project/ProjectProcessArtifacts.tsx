import { useState } from "react";
import {
  Eye,
  GitBranch,
  LayoutTemplate,
  Map,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  getCaseStudyProcessArtifacts,
  type CaseStudyProcessArtifactType,
} from "@/config/portfolioCuration";
import { cn } from "@/lib/utils";
import type { ProjectType } from "@/types/project";
import {
  EditorialSection,
  ProjectLightboxModal,
} from "./EditorialProjectLayout";

interface ProjectProcessArtifactsProps {
  project: ProjectType;
}

const artifactTypeMeta: Record<
  CaseStudyProcessArtifactType,
  { label: string; icon: LucideIcon }
> = {
  sitemap: { label: "Sitemap", icon: Map },
  "user-flow": { label: "User flow", icon: GitBranch },
  wireframe: { label: "Wireframe", icon: LayoutTemplate },
};

const processArtifactCopyBySlug: Record<
  string,
  {
    title: string;
    description: string;
    sourceTitle: string;
    sourceDescription: string;
  }
> = {
  "cllctve-platform": {
    title: "How the persona became a product path.",
    description:
      "These maps connect Maya's creator needs to the product routes, flows, and screen structure that made CLLCTVE more than a static portfolio.",
    sourceTitle: "Mapped from the CLLCTVE app",
    sourceDescription:
      "The structure follows the actual app surfaces: landing, creator discovery, profile, login, signup, and challenge paths.",
  },
  "litmus-ai": {
    title: "How the assessment became a learning path.",
    description:
      "These maps connect Priya's need for a fast readiness signal to the assessment, training, certification, billing, and admin surfaces that made the MVP usable.",
    sourceTitle: "Mapped from the LitmusAI app",
    sourceDescription:
      "The structure follows the actual app routes: home, assessment, training, certification, billing, dashboard, profile, login, and registration.",
  },
};

const ProjectProcessArtifacts = ({ project }: ProjectProcessArtifactsProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const artifacts = getCaseStudyProcessArtifacts(project.slug);

  if (!artifacts?.length) return null;

  const copy = processArtifactCopyBySlug[project.slug] || {
    title: "How the product path came together.",
    description:
      "These maps connect user needs to the routes, flows, and screen structure behind the final product direction.",
    sourceTitle: `Mapped from ${project.title}`,
    sourceDescription:
      "The structure follows the product surfaces shown in the case study and supporting interface evidence.",
  };

  return (
    <EditorialSection
      className="border-b border-gray-200"
      contentClassName="max-w-[82rem] px-4 sm:px-6 lg:px-0"
      tone="white"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(18rem,0.36fr)_minmax(0,1fr)] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Process artifacts
          </p>
          <h2 className="font-display text-3xl leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
            {copy.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {copy.description}
          </p>

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-white text-primary">
                <Workflow className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold leading-5 text-gray-950">
                {copy.sourceTitle}
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {copy.sourceDescription}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {artifacts.map((artifact, index) => {
            const meta = artifactTypeMeta[artifact.type];
            const Icon = meta.icon;

            return (
              <article
                key={artifact.title}
                className={cn(
                  "group min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm",
                  index < 2 && "md:col-span-2",
                )}
              >
                <button
                  type="button"
                  className="relative block w-full overflow-hidden bg-gray-950 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  onClick={() => setSelectedImage(artifact.image)}
                  data-cursor-label="Inspect"
                >
                  <span
                    className={cn(
                      "block bg-gray-950",
                      index < 2 ? "aspect-[16/9]" : "aspect-[4/3]",
                    )}
                  >
                    <img
                      src={artifact.image}
                      alt={artifact.alt}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                      decoding="async"
                      sizes={
                        index < 2
                          ? "(min-width: 1024px) 56rem, 100vw"
                          : "(min-width: 1024px) 28rem, (min-width: 768px) 50vw, 100vw"
                      }
                    />
                  </span>
                  <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-gray-950 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    View full size
                  </span>
                </button>

                <div className="grid gap-4 border-t border-gray-200 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <p className="text-xs font-semibold uppercase leading-5 text-primary">
                        {meta.label}
                      </p>
                    </div>
                    <span className="font-display text-3xl leading-none text-gray-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-950">
                      {artifact.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {artifact.insight}
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-semibold uppercase leading-5 text-gray-500">
                      Persona to business need
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      {artifact.connectsPersonaNeedTo}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectLightboxModal
        imageSrc={selectedImage}
        alt="Full size process artifact"
        onClose={() => setSelectedImage(null)}
        imageClassName="bg-gray-950"
      />
    </EditorialSection>
  );
};

export default ProjectProcessArtifacts;
