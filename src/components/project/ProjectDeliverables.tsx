import { Check, Eye } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  EditorialSection,
  ProjectLightboxModal,
} from "./EditorialProjectLayout";

interface ProjectDeliverablesProps {
  deliverables: string[];
  images: string[];
  projectId?: string | number;
}

const prettyPawsVisualLabels: Record<string, string> = {
  "/images/pretty-paws/interface/homepage.png": "Homepage",
  "/images/pretty-paws/interface/service-detail.png": "Service detail page",
  "/images/pretty-paws/interface/booking-request.png": "Booking request page",
};

const getVisualLabel = (
  projectId: string | number | undefined,
  image: string,
  index: number,
) => {
  if (projectId === "pretty-paws-grooming" || projectId === 15) {
    return prettyPawsVisualLabels[image] || `Pretty Paws screen ${index + 1}`;
  }

  return `Project visual ${index + 1}`;
};

const ProjectDeliverables = ({
  deliverables,
  images,
  projectId,
}: ProjectDeliverablesProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!deliverables?.length && !images?.length) {
    return null;
  }

  const uniqueImages =
    images?.filter(
      (image, index, self) => self.findIndex((item) => item === image) === index,
    ) || [];
  const visuals = uniqueImages.map((image, index) => ({
    image,
    label: getVisualLabel(projectId, image, index),
  }));

  const isDoggyDateProject = projectId === 4 || projectId === "doggy-date";
  const isChillVibesProject =
    projectId === 7 || projectId === "chill-vibes-music-player";

  return (
    <>
      {deliverables?.length > 0 ? (
        <EditorialSection
          eyebrow="Artifacts"
          title="What I made."
          className="border-b border-gray-200"
          tone="soft"
        >
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((deliverable) => (
              <div
                key={deliverable}
                className="flex min-w-0 items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0 text-sm leading-6 text-gray-700">
                  {deliverable}
                </span>
              </div>
            ))}
          </div>
        </EditorialSection>
      ) : null}

      {visuals.length > 0 && !isDoggyDateProject ? (
        <EditorialSection
          eyebrow="Visuals"
          title="Interface details."
          className="border-b border-gray-200"
        >
          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visuals.map(({ image, label }) => (
              <button
                key={image}
                type="button"
                className="group relative min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-left shadow-sm transition-colors hover:border-primary/50"
                onClick={() => setSelectedImage(image)}
              >
                <span className="sr-only">Open {label}</span>
                <span className="block aspect-video">
                  <img
                    src={image}
                    alt={`${label} screenshot`}
                    className={cn(
                      "h-full w-full transition-transform duration-500 group-hover:scale-[1.02]",
                      isChillVibesProject
                        ? "bg-gray-950 object-contain"
                        : "object-cover object-top",
                    )}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    onError={(event) => {
                      console.error(`Image failed to load: ${image}`);
                      event.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </span>
                <span className="block border-t border-gray-200 bg-white px-3 py-3 text-sm font-semibold text-gray-950">
                  {label}
                </span>
                <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-2 text-xs font-semibold text-gray-950 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                  <Eye className="h-4 w-4" />
                  View full size
                </span>
              </button>
            ))}
          </div>

          <ProjectLightboxModal
            imageSrc={selectedImage}
            onClose={() => setSelectedImage(null)}
            imageClassName={isChillVibesProject ? "bg-gray-950" : undefined}
          />
        </EditorialSection>
      ) : null}
    </>
  );
};

export default ProjectDeliverables;
