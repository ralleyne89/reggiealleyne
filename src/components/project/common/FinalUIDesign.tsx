import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

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
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            {title}
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </div>

        {/* Design Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 pb-3 border-b border-gray-800">
            {highlightsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  {highlight.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* UI Images Gallery */}
        {uiImages && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 pb-3 border-b border-gray-800">
              Interface Showcase
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uiImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      {image.title}
                    </h4>
                    <div
                      className="aspect-[9/16] w-full overflow-hidden rounded-xl border border-gray-800 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 group-hover:scale-[1.02]"
                      onClick={() => {
                        if (handleImageClick) {
                          handleImageClick(image.src);
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
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Main Image (if no uiImages) */}
        {!uiImages && mainImageSrc && (
          <div className="mb-16">
            <div
              className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-gray-800 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              onClick={() => {
                if (handleImageClick && mainImageSrc) {
                  handleImageClick(mainImageSrc);
                }
              }}
            >
              <img
                src={mainImageSrc}
                alt={mainImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {imageCaption && (
              <p className="text-gray-400 text-center mt-4">{imageCaption}</p>
            )}
          </div>
        )}

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 pb-3 border-b border-gray-800">
            {featuresTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-white font-semibold text-lg leading-tight">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FinalUIDesign;
