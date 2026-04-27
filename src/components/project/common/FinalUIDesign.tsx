import React from "react";
import { CheckCircle2 } from "lucide-react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface DesignHighlight {
  text: string;
}

export interface UIFeature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface UIImage {
  src: string;
  alt: string;
  title: string;
}

export interface FinalUIDesignProps {
  title?: string;
  introduction: string;
  designHighlights: DesignHighlight[];
  uiFeatures: UIFeature[];
  uiImages: UIImage[];
  handleImageClick?: (imageSrc: string) => void;
}

const FinalUIDesign = ({
  title = "Interface design",
  introduction,
  designHighlights,
  uiFeatures,
  uiImages,
  handleImageClick,
}: FinalUIDesignProps) => {
  return (
    <EditorialSection
      eyebrow="Interface"
      title={title}
      description={introduction}
      className="border-b border-gray-200"
    >
      {uiImages && uiImages.length > 0 ? (
        <div className="mb-12">
          {uiImages.length === 1 ? (
            <button
              type="button"
              className="block w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-left shadow-sm transition-colors hover:border-primary/50"
              onClick={() => handleImageClick?.(uiImages[0].src)}
            >
              <span className="sr-only">Open {uiImages[0].title}</span>
              <img
                src={uiImages[0].src}
                alt={uiImages[0].alt}
                className="h-full w-full object-cover"
              />
            </button>
          ) : (
            <div className="grid min-w-0 gap-6 md:grid-cols-2">
              {uiImages.map((image) => (
                <div key={image.src} className="min-w-0">
                  <h3 className="mb-3 text-lg font-semibold text-gray-950">
                    {image.title}
                  </h3>
                  <button
                    type="button"
                    className="block aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-left shadow-sm transition-colors hover:border-primary/50"
                    onClick={() => handleImageClick?.(image.src)}
                  >
                    <span className="sr-only">Open {image.title}</span>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}

      {designHighlights.length > 0 ? (
        <div className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-5 sm:p-6">
          <h3 className="text-xl font-semibold text-gray-950">
            Design choices
          </h3>
          <ul className="mt-5 grid min-w-0 gap-3">
            {designHighlights.map((highlight) => (
              <li key={highlight.text} className="flex min-w-0 items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-6 text-gray-700">
                  {highlight.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {uiFeatures && uiFeatures.length > 0 ? (
        <div>
          <h3 className="mb-5 text-xl font-semibold text-gray-950">
            Key features
          </h3>
          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {uiFeatures.map((feature) => {
              const IconComponent = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-950">
                    {feature.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      ) : null}
    </EditorialSection>
  );
};

export default FinalUIDesign;
