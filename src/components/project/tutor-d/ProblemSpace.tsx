import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { tutorDProblemSpaceData } from "@/data/projects/tutorDData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...tutorDProblemSpaceData} />;
};

export default ProblemSpace;
