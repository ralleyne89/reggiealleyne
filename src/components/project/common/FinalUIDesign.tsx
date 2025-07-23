import React from "react";

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
  introduction,
  designHighlights,
  uiFeatures,
  uiImages,
  handleImageClick,
}: FinalUIDesignProps) => {
  return (
    <section className="mb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Interface Design
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </div>

        {/* UI Images */}
        <div className="mb-16">
          {uiImages && uiImages.length > 0 && (
            <div>
              {uiImages.length === 1 ? (
                <div className="w-full">
                  <div
                    className="w-full overflow-hidden rounded-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50"
                    onClick={() => handleImageClick?.(uiImages[0].src)}
                  >
                    <img
                      src={uiImages[0].src}
                      alt={uiImages[0].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {uiImages.map((image, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        {image.title}
                      </h4>
                      <div
                        className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50"
                        onClick={() => handleImageClick?.(image.src)}
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
              )}
            </div>
          )}
        </div>

        {/* Design Highlights */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
            Design Highlights
          </h3>
          <ul className="space-y-3 text-gray-700">
            {designHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                <span className="leading-relaxed">{highlight.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* UI Features */}
        {uiFeatures && uiFeatures.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalUIDesign;
