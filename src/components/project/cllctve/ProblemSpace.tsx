
import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { cllctveProblemSpaceData } from "@/projects/cllctve/data/cllctveData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...cllctveProblemSpaceData} />;
};

export default ProblemSpace;
