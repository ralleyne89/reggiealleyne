import React from "react";
import FinalUIDesignComponent from "../common/FinalUIDesign";
import { techNoirData } from "@/projects/tech-noir/data/techNoirData";

interface FinalUIDesignProps {
  handleImageClick?: (imageSrc: string) => void;
}

const FinalUIDesign = ({ handleImageClick }: FinalUIDesignProps) => {
  const uiData = {
    title: "Interface Design",
    introduction: techNoirData.finalDesign.description[0],
    designHighlights: techNoirData.finalDesign.features.map((feature) => ({
      text: `${feature.title}: ${feature.description}`,
    })),
    uiFeatures: [],
    uiImages: techNoirData.finalDesign.images.map((image, index) => ({
      src: image,
      alt: `Tech Noir Design ${index + 1}`,
      title: `Screen ${index + 1}`,
    })),
  };

  return (
    <FinalUIDesignComponent {...uiData} handleImageClick={handleImageClick} />
  );
};

export default FinalUIDesign;
