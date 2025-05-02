import React from "react";
import IdeationStrategyComponent from "../common/IdeationStrategy";
import { tutorDIdeationData } from "@/data/projects/tutorDData";

const IdeationStrategy = () => {
  return <IdeationStrategyComponent {...tutorDIdeationData} />;
};

export default IdeationStrategy;
