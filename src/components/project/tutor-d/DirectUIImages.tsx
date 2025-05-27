
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface DirectUIImagesProps {
  handleImageClick: (imageSrc: string) => void;
}

const DirectUIImages: React.FC<DirectUIImagesProps> = ({ handleImageClick }) => {
  const images = [
    {
      src: "/lovable-uploads/TutorD-Landing-Page-Final.jpg",
      alt: "TutorD Landing Page Final UI Design",
      title: "Landing Page"
    },
    {
      src: "/lovable-uploads/TutorD-Dashboard-Final.jpg",
      alt: "TutorD Dashboard Final UI Design",
      title: "Teacher Dashboard"
    },
    {
      src: "/lovable-uploads/TutorD-Lesson-Planner-Final.jpg",
      alt: "TutorD Lesson Planner Final UI Design",
      title: "Lesson Planner"
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
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Final UI Design</h2>
          </div>

          <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
            The final UI design for TutorD focuses on clarity, efficiency, and accessibility. Using Ant Design components, we created a clean interface that helps teachers quickly create and manage SMS-based lessons.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {images.map((image, index) => (
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
                  onClick={() => handleImageClick(image.src)}
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
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default DirectUIImages;
