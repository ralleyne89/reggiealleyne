import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { symptomCheckrProblemSpaceData } from "@/data/projects/symptomCheckrData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...symptomCheckrProblemSpaceData} />;
};

export default ProblemSpace;
