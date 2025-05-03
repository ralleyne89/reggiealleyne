import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { tutorDProblemSpaceData } from "@/projects/tutor-d/data/tutorDData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...tutorDProblemSpaceData} />;
};

export default ProblemSpace;
