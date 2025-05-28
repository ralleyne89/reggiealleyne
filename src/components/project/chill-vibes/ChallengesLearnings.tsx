
import React from "react";
import ChallengesLearningsComponent from "../common/ChallengesLearnings";
import { chillVibesChallengesData } from "@/projects/chill-vibes/data/chillVibesData";

const ChallengesLearnings = () => {
  return <ChallengesLearningsComponent {...chillVibesChallengesData} />;
};

export default ChallengesLearnings;
