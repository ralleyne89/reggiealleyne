import React from "react";

interface SimpleImageTestProps {
  handleImageClick?: (imageSrc: string) => void;
}

const SimpleImageTest: React.FC<SimpleImageTestProps> = ({ handleImageClick }) => {
  return (
    <div className="mt-8 mb-16">
      <h2 className="text-2xl font-bold text-white mb-6">Simple Image Test</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <h4 className="text-primary font-medium mb-2">Landing Page</h4>
          <div 
            className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            onClick={() => {
              console.log("Image clicked: /lovable-uploads/TutorD-Landing-Page-Final.jpg");
              handleImageClick && handleImageClick("/lovable-uploads/TutorD-Landing-Page-Final.jpg");
            }}
          >
            <img
              src="/lovable-uploads/TutorD-Landing-Page-Final.jpg"
              alt="Landing Page"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-primary font-medium mb-2">Dashboard</h4>
          <div 
            className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            onClick={() => {
              console.log("Image clicked: /lovable-uploads/TutorD-Dashboard-Final.jpg");
              handleImageClick && handleImageClick("/lovable-uploads/TutorD-Dashboard-Final.jpg");
            }}
          >
            <img
              src="/lovable-uploads/TutorD-Dashboard-Final.jpg"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-primary font-medium mb-2">Lesson Planner</h4>
          <div 
            className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            onClick={() => {
              console.log("Image clicked: /lovable-uploads/TutorD-Lesson-Planner-Final.jpg");
              handleImageClick && handleImageClick("/lovable-uploads/TutorD-Lesson-Planner-Final.jpg");
            }}
          >
            <img
              src="/lovable-uploads/TutorD-Lesson-Planner-Final.jpg"
              alt="Lesson Planner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleImageTest;
