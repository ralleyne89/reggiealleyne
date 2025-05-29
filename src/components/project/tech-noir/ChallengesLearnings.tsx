
import React from "react";
import ChallengesLearningsComponent from "../common/ChallengesLearnings";
import { techNoirData } from "@/projects/tech-noir/data/techNoirData";

const ChallengesLearnings = () => {
  return <ChallengesLearningsComponent {...techNoirData.challenges} />;
};

export default ChallengesLearnings;
