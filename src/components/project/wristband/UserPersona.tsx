
import React from "react";
import UserPersonaComponent from "../common/UserPersona";
import { wristbandPersonaData } from "@/projects/wristband/data/wristbandData";

const UserPersona = () => {
  return <UserPersonaComponent {...wristbandPersonaData} />;
};

export default UserPersona;
