
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor } from "lucide-react";

export interface DesignFeature {
  title: string;
  description: string;
}

export interface FinalUIDesignProps {
  title?: string;
  description: string | string[];
  features: DesignFeature[];
  images: string[];
}

const FinalUIDesign: React.FC<FinalUIDesignProps> = ({
  title = "Final Design Solution",
  description,
  features,
  images
}) => {
  const descriptionText = Array.isArray(description) ? description.join(' ') : description;

  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Monitor className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          
          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-8">
            {descriptionText}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features && features.map((feature, index) => (
                <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h4 className="text-white font-medium mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {images && images.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Design Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                    <img 
                      src={image} 
                      alt={`Design ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default FinalUIDesign;
