
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

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
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
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

          {/* Design Highlights */}
          <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5 mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">
              Design Highlights
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

          {/* UI Images */}
          {uiImages && uiImages.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Interface Screenshots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {uiImages.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <h4 className="text-primary font-medium mb-2">{image.title}</h4>
                    <div 
                      className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                      onClick={() => handleImageClick?.(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* UI Features */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-white font-medium">{feature.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default FinalUIDesign;
