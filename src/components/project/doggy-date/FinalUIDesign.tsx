
import React from "react";
import FinalUIDesignComponent from "../common/FinalUIDesign";
import { doggyDateData } from "@/projects/doggy-date/data/doggyDateData";

interface FinalUIDesignProps {
  handleImageClick?: (imageSrc: string) => void;
}

const FinalUIDesign = ({ handleImageClick }: FinalUIDesignProps) => {
  const uiData = {
    title: "Interface Design",
    introduction: doggyDateData.finalDesign.description[0],
    designHighlights: doggyDateData.finalDesign.features.map(feature => ({
      text: `${feature.title}: ${feature.description}`
    })),
    uiFeatures: [],
    uiImages: doggyDateData.finalDesign.images.map((image, index) => ({
      src: image,
      alt: `Doggy Date Design ${index + 1}`,
      title: `Screen ${index + 1}`
    }))
  };

  return (
    <FinalUIDesignComponent
      {...uiData}
      handleImageClick={handleImageClick}
    />
  );
};

export default FinalUIDesign;
