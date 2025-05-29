
import React from "react";
import ChallengesLearningsComponent from "../common/ChallengesLearnings";
import { improvLearningChallengesData } from "@/projects/improv-learning/data/improvLearningData";

const ChallengesLearnings = () => {
  return <ChallengesLearningsComponent {...improvLearningChallengesData} />;
};

export default ChallengesLearnings;
