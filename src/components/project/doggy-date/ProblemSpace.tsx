
import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { doggyDateData } from "@/projects/doggy-date/data/doggyDateData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...doggyDateData.problemSpace} />;
};

export default ProblemSpace;
