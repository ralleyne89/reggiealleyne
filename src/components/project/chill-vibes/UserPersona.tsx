
import React from "react";
import UserPersonaComponent from "../common/UserPersona";
import { chillVibesPersonaData } from "@/projects/chill-vibes/data/chillVibesData";

const UserPersona = () => {
  return <UserPersonaComponent {...chillVibesPersonaData} />;
};

export default UserPersona;
