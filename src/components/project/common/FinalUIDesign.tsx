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
  icon: React.ComponentType<{
    className?: string;
  }>;
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
  return <motion.section className="py-16 bg-white" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} viewport={{
    once: true,
    amount: 0.3
  }}>
      <div className="w-full px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Interface Design
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </motion.div>

        {/* UI Images */}
        {uiImages && uiImages.length > 0 && <div className="mb-16">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {uiImages.map((image, index) => <motion.div key={index} className="space-y-4" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {index === 0 ? "User Profile" : index === 1 ? "Homepage" : image.title}
                  </h4>
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50" onClick={() => handleImageClick?.(index === 0 ? "/lovable-uploads/bbf348a7-ca89-49ba-95b0-b836d12b8752.png" : index === 1 ? "/lovable-uploads/8a96d760-1e4f-4c90-a893-33c4538e3031.png" : image.src)}>
                    <img src={index === 0 ? "/lovable-uploads/bbf348a7-ca89-49ba-95b0-b836d12b8752.png" : index === 1 ? "/lovable-uploads/8a96d760-1e4f-4c90-a893-33c4538e3031.png" : image.src} alt={index === 0 ? "User Profile Interface" : index === 1 ? "Homepage Interface" : image.alt} className="w-full h-full object-cover" />
                  </div>
                </motion.div>)}
            </div>
          </div>}

        {/* Design Highlights */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
            Design Highlights
          </h3>
          <ul className="space-y-3 text-gray-700">
            {designHighlights.map((highlight, index) => <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                <span className="leading-relaxed">{highlight.text}</span>
              </li>)}
          </ul>
        </div>

        {/* UI Features */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8 text-left">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return <motion.div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true,
              amount: 0.3
            }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </div>
    </motion.section>;
};
export default FinalUIDesign;