import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Smartphone, Monitor, Layers, Zap } from "lucide-react";
interface TechnicalImplementationProps {
  handleImageClick: (imageSrc: string) => void;
}
const TechnicalImplementation = ({
  handleImageClick
}: TechnicalImplementationProps) => {
  const technicalHighlights = [{
    icon: Code,
    title: "React.js with Redux",
    description: "Built scalable frontend architecture with Redux middleware for state management and real-time updates.",
    details: ["Component-based architecture", "Centralized state management", "Real-time data synchronization"]
  }, {
    icon: Database,
    title: "MongoDB + Redis Integration",
    description: "Implemented robust backend infrastructure to handle SMS processing and teacher dashboard updates.",
    details: ["Document-based data storage", "Real-time caching with Redis", "Scalable message queuing"]
  }, {
    icon: Smartphone,
    title: "SMS Gateway Integration",
    description: "Connected platform to SMS services for reliable message delivery to students with basic phones.",
    details: ["Character limit optimization", "Delivery status tracking", "Error handling and retries"]
  }, {
    icon: Monitor,
    title: "Responsive Dashboard Design",
    description: "Created intuitive interfaces using Ant Design components optimized for teacher workflows.",
    details: ["Mobile-responsive layouts", "Accessible design patterns", "Consistent UI components"]
  }];
  const architectureFeatures = [{
    title: "Lesson Planner Interface",
    description: "Intuitive tools for creating SMS-optimized educational content with character count indicators and formatting guides."
  }, {
    title: "Progress Analytics Dashboard",
    description: "Real-time visualizations showing student engagement metrics, response rates, and completion tracking."
  }, {
    title: "Automated Messaging System",
    description: "Scheduling and delivery system for assignments, reminders, and feedback through SMS channels."
  }, {
    title: "Student Management Tools",
    description: "Comprehensive interfaces for organizing classes, tracking individual progress, and managing contact information."
  }];
  return <motion.section initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
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
            Technical Implementation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The technical architecture of TutorD was designed to handle the unique challenges of SMS-based education delivery while providing teachers with powerful, easy-to-use tools for student engagement and progress tracking.
          </p>
        </motion.div>

        {/* Technical Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {technicalHighlights.map((highlight, index) => {
          const IconComponent = highlight.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {highlight.description}
                    </p>
                    <ul className="space-y-1">
                      {highlight.details.map((detail, detailIndex) => <li key={detailIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {detail}
                        </li>)}
                    </ul>
                  </div>
                </div>
              </motion.div>;
        })}
        </div>

        {/* Platform Features */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mb-12">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Platform Features & Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectureFeatures.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5 + index * 0.1
          }} className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Visual Examples */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }}>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">Interface Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            src: "/lovable-uploads/TutorD-Landing-Page-Final.jpg",
            alt: "TutorD Landing Page Final Design",
            title: "Landing Page"
          }, {
            src: "/lovable-uploads/TutorD-Dashboard-Final.jpg",
            alt: "TutorD Dashboard Final Design",
            title: "Teacher Dashboard"
          }, {
            src: "/lovable-uploads/TutorD-Lesson-Planner-Final.jpg",
            alt: "TutorD Lesson Planner Final Design",
            title: "Lesson Planner"
          }].map((image, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7 + index * 0.1
          }} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => handleImageClick(image.src)}>
                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">{image.title}</h4>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </motion.section>;
};
export default TechnicalImplementation;