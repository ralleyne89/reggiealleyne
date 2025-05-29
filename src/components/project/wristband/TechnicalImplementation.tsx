
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Palette, Database } from "lucide-react";
import ProjectVideo from "@/components/project/ProjectVideo";

interface TechnicalImplementationProps {
  handleImageClick: (imageSrc: string) => void;
}

const TechnicalImplementation: React.FC<TechnicalImplementationProps> = ({
  handleImageClick
}) => {
  const technicalHighlights = [
    {
      title: "React Native Framework",
      description: "Cross-platform mobile development ensuring consistent experience across iOS and Android devices.",
      icon: Smartphone
    },
    {
      title: "Figma Design System",
      description: "Comprehensive design system built in Figma for maintaining consistency across all story interfaces and character designs.",
      icon: Palette
    },
    {
      title: "Content Management System",
      description: "Custom CMS for content creators to upload and manage their stories, characters, and multimedia assets.",
      icon: Database
    },
    {
      title: "Interactive Choice Engine",
      description: "Branching narrative system that tracks user choices and creates personalized story paths for each user.",
      icon: Code
    }
  ];

  const processImages = [
    {
      src: "/lovable-uploads/d2ac6921-78b3-46b5-bbb2-7022018530ad.png",
      alt: "WRISTBAND App Interface Showcase",
      title: "Main Interface Design"
    },
    {
      src: "/lovable-uploads/aab1244b-de80-4758-8cbe-165d2b66ec19.png",
      alt: "WRISTBAND Story Selection Screen",
      title: "Story Selection Interface"
    },
    {
      src: "/lovable-uploads/abd0fcfb-d3c7-4ea0-9f8c-05c8cf2759e9.png",
      alt: "WRISTBAND Character Design System",
      title: "Character Design System"
    },
    {
      src: "/lovable-uploads/8ccc7ee6-c4de-44cc-8729-4090d34c7895.png",
      alt: "WRISTBAND Interactive Story Flow",
      title: "Interactive Story Flow"
    }
  ];

  return (
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Technical Implementation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-8">
            WRISTBAND was built using React Native for cross-platform compatibility, with a focus on creating smooth interactive storytelling experiences and supporting diverse content creators.
          </p>
        </motion.div>

        {/* Project Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <ProjectVideo 
            videoUrl="https://drive.google.com/file/d/1jB5GJrLwyqUL8KAaPd9_TirxRrW7vI8r/view?usp=sharing"
            projectTitle="WRISTBAND"
          />
        </motion.div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Technical Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Design Process Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Design & Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleImageClick(image.src)}
              >
                <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 text-center">{image.title}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechnicalImplementation;
