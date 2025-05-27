
import React from "react";
import ChallengesLearningsComponent from "../common/ChallengesLearnings";
import { cllctveChallengesData } from "@/projects/cllctve/data/cllctveData";

const ChallengesLearnings = () => {
  return <ChallengesLearningsComponent {...cllctveChallengesData} />;
};

export default ChallengesLearnings;
