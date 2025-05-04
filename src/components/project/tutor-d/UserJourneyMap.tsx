import React from "react";
import UserJourneyMapComponent from "../common/UserJourneyMap";
import { tutorDJourneyData } from "@/projects/tutor-d/data/tutorDData";

const UserJourneyMap = () => {
  return <UserJourneyMapComponent {...tutorDJourneyData} />;
};

export default UserJourneyMap;
