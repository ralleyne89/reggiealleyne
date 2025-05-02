import React from "react";
import FinalUIDesignComponent from "../common/FinalUIDesign";
import { tutorDUIData } from "@/data/projects/tutorDData";

interface FinalUIDesignProps {
  handleImageClick?: (imageSrc: string) => void;
}

const FinalUIDesign: React.FC<FinalUIDesignProps> = ({ handleImageClick }) => {
  return (
    <FinalUIDesignComponent
      {...tutorDUIData}
      handleImageClick={handleImageClick}
    />
  );
};

export default FinalUIDesign;
