
import React from "react";
import UserJourneyMapComponent from "../common/UserJourneyMap";
import { wristbandJourneyData } from "@/projects/wristband/data/wristbandData";

const UserJourneyMap = () => {
  return <UserJourneyMapComponent {...wristbandJourneyData} />;
};

export default UserJourneyMap;
