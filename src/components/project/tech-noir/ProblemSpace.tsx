
import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { techNoirData } from "@/projects/tech-noir/data/techNoirData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...techNoirData.problemSpace} />;
};

export default ProblemSpace;
