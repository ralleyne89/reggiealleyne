import React from "react";
import { tutorDUIData } from "@/data/projects/tutorDData";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface DebugFinalUIDesignProps {
  handleImageClick?: (imageSrc: string) => void;
}

const DebugFinalUIDesign: React.FC<DebugFinalUIDesignProps> = ({ handleImageClick }) => {
  const { 
    title, 
    introduction, 
    designHighlights, 
    designFeatures, 
    uiImages, 
    uiFeatures 
  } = tutorDUIData;

  const onImageClick = (imageSrc: string) => {
    console.log("Image clicked:", imageSrc);
    if (handleImageClick) {
      console.log("Calling handleImageClick with:", imageSrc);
      handleImageClick(imageSrc);
    } else {
      console.log("handleImageClick is undefined");
    }
  };

  return (
    <section className="mb-16">
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

          <h3 className="text-xl font-semibold text-white mb-4">Debug UI Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {uiImages && uiImages.map((image, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-primary font-medium mb-2">{image.title}</h4>
                <div 
                  className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  onClick={() => onImageClick(image.src)}
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
        </CardContent>
      </Card>
    </section>
  );
};

export default DebugFinalUIDesign;
