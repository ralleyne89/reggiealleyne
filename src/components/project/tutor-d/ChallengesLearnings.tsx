import React from "react";
import ChallengesLearningsComponent from "../common/ChallengesLearnings";
import { tutorDChallengesData } from "@/data/projects/tutorDData";

const ChallengesLearnings = () => {
  return <ChallengesLearningsComponent {...tutorDChallengesData} />;
};

export default ChallengesLearnings;
