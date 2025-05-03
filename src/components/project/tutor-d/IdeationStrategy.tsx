import React from "react";
import IdeationStrategyComponent from "../common/IdeationStrategy";
import { tutorDIdeationData } from "@/projects/tutor-d/data/tutorDData";

const IdeationStrategy = () => {
  return <IdeationStrategyComponent {...tutorDIdeationData} />;
};

export default IdeationStrategy;
