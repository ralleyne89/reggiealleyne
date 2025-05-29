
import React from "react";
import ChallengesLearningsComponent from "../common/ChallengesLearnings";
import { doggyDateData } from "@/projects/doggy-date/data/doggyDateData";

const ChallengesLearnings = () => {
  return <ChallengesLearningsComponent {...doggyDateData.challenges} />;
};

export default ChallengesLearnings;
