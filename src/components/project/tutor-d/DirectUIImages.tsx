import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
interface DirectUIImagesProps {
  handleImageClick: (imageSrc: string) => void;
}
const DirectUIImages: React.FC<DirectUIImagesProps> = ({
  handleImageClick
}) => {
  const images = [{
    src: "/lovable-uploads/TutorD-Landing-Page-Final.jpg",
    alt: "TutorD Landing Page Final UI Design",
    title: "Landing Page"
  }, {
    src: "/lovable-uploads/TutorD-Dashboard-Final.jpg",
    alt: "TutorD Dashboard Final UI Design",
    title: "Teacher Dashboard"
  }, {
    src: "/lovable-uploads/TutorD-Lesson-Planner-Final.jpg",
    alt: "TutorD Lesson Planner Final UI Design",
    title: "Lesson Planner"
  }];
  return <motion.section className="mb-16" initial={{
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
      
    </motion.section>;
};
export default DirectUIImages;