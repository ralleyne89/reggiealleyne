
import React from "react";
import ChallengesLearningsComponent from "@/projects/shared/ChallengesLearnings";
import { wristbandChallengesData } from "@/projects/wristband/data/wristbandData";

const ChallengesLearnings = () => {
  return <ChallengesLearningsComponent {...wristbandChallengesData} />;
};

export default ChallengesLearnings;
