
import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { wristbandProblemSpaceData } from "@/projects/wristband/data/wristbandData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...wristbandProblemSpaceData} />;
};

export default ProblemSpace;
