
import React from "react";

interface DesignHighlight {
  text: string;
}

interface UIFeature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface UIImage {
  src: string;
  alt: string;
  title: string;
}

interface FinalUIDesignProps {
  title: string;
  introduction: string;
  designHighlights: DesignHighlight[];
  uiFeatures: UIFeature[];
  uiImages: UIImage[];
  handleImageClick?: (imageSrc: string) => void;
}

const FinalUIDesign = ({ 
  title, 
  introduction, 
  designHighlights, 
  uiFeatures, 
  uiImages, 
  handleImageClick 
}: FinalUIDesignProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </div>

        {/* Design Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Design Highlights
          </h3>
          <div className="space-y-4">
            {designHighlights.map((highlight, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* UI Images */}
        {uiImages && uiImages.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
              Interface Screenshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {uiImages.map((image, index) => (
                <div key={index} className="space-y-4">
                  <div 
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleImageClick?.(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-center">{image.title}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* UI Features */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalUIDesign;
