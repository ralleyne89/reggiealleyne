import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, LucideIcon } from "lucide-react";

export interface DesignHighlight {
  text: string;
}

export interface DesignFeature {
  title: string;
  description: string;
  tags: string[];
}

export interface UIFeature {
  title: string;
  description: string;
  icon: LucideIcon;
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
  designFeatures: DesignFeature[];
  mainImageSrc?: string;
  mainImageAlt?: string;
  imageCaption?: string;
  uiImages?: UIImage[];
  uiFeatures: UIFeature[];
  highlightsTitle?: string;
  featuresTitle?: string;
  handleImageClick?: (imageSrc: string) => void;
}

const FinalUIDesign: React.FC<FinalUIDesignProps> = ({
  title = "Final UI Design",
  introduction,
  designHighlights,
  designFeatures,
  mainImageSrc,
  mainImageAlt,
  imageCaption,
  uiImages,
  uiFeatures,
  highlightsTitle = "Design Execution Highlights",
  featuresTitle = "Key UI Features",
  handleImageClick,
}) => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>

          <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
            {introduction}
          </p>

          <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5 mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">
              {highlightsTitle}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {designHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {designFeatures.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {feature.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {uiImages ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                {uiImages.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-primary font-medium mb-2">
                      {image.title}
                    </h4>
                    <div
                      className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                      onClick={() => {
                        console.log("Image clicked:", image.src);
                        if (handleImageClick) {
                          console.log(
                            "Calling handleImageClick with:",
                            image.src
                          );
                          handleImageClick(image.src);
                        } else {
                          console.log("handleImageClick is undefined");
                        }
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : mainImageSrc ? (
              <>
                <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 mb-3">
                  <img
                    src={mainImageSrc}
                    alt={mainImageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-sm text-center">
                  {imageCaption}
                </p>
              </>
            ) : null}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              {featuresTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {uiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-white font-medium">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FinalUIDesign;
