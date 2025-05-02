import React from "react";

interface TestImageClickProps {
  handleImageClick?: (imageSrc: string) => void;
}

const TestImageClick: React.FC<TestImageClickProps> = ({ handleImageClick }) => {
  const testImages = [
    {
      src: "/lovable-uploads/TutorD-Landing-Page-Final.jpg",
      alt: "Test Image 1",
      title: "Test Image 1"
    },
    {
      src: "/lovable-uploads/TutorD-Dashboard-Final.jpg",
      alt: "Test Image 2",
      title: "Test Image 2"
    }
  ];

  return (
    <div className="mt-8 mb-16">
      <h2 className="text-2xl font-bold text-white mb-6">Test Image Click</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testImages.map((image, index) => (
          <div key={index} className="space-y-2">
            <h4 className="text-primary font-medium mb-2">{image.title}</h4>
            <div 
              className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              onClick={() => handleImageClick && handleImageClick(image.src)}
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
    </div>
  );
};

export default TestImageClick;
