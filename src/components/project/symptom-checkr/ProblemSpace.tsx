import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { symptomCheckrProblemSpaceData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...symptomCheckrProblemSpaceData} />;
};

export default ProblemSpace;
