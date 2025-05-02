import React from "react";
import SitemapWireframesComponent from "../common/SitemapWireframes";
import { tutorDSitemapData } from "@/data/projects/tutorDData";

const SitemapWireframes = () => {
  return <SitemapWireframesComponent {...tutorDSitemapData} />;
};

export default SitemapWireframes;
