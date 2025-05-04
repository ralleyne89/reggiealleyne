import React from "react";
import FinalUIDesignComponent from "../common/FinalUIDesign";
import { symptomCheckrUIData } from "@/projects/symptom-checkr/data/symptomCheckrData";

interface FinalUIDesignProps {
  handleImageClick?: (imageSrc: string) => void;
}

const FinalUIDesign = ({ handleImageClick }: FinalUIDesignProps) => {
  return (
    <FinalUIDesignComponent
      {...symptomCheckrUIData}
      handleImageClick={handleImageClick}
    />
  );
};

export default FinalUIDesign;
