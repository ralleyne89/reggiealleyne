import React from "react";
import SitemapWireframesComponent from "../common/SitemapWireframes";
import { tutorDSitemapData } from "@/projects/tutor-d/data/tutorDData";

const SitemapWireframes = () => {
  return <SitemapWireframesComponent {...tutorDSitemapData} />;
};

export default SitemapWireframes;
