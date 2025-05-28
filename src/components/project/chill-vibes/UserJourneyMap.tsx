
import React from "react";
import UserJourneyMapComponent from "../common/UserJourneyMap";
import { chillVibesJourneyData } from "@/projects/chill-vibes/data/chillVibesData";

const UserJourneyMap = () => {
  return <UserJourneyMapComponent {...chillVibesJourneyData} />;
};

export default UserJourneyMap;
