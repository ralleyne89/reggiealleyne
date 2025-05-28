
import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { chillVibesProblemSpaceData } from "@/projects/chill-vibes/data/chillVibesData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...chillVibesProblemSpaceData} />;
};

export default ProblemSpace;
