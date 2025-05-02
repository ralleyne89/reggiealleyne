import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";

const SitemapWireframes = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Sitemap & Wireframes
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="text-xl text-white font-semibold mb-4">Sitemap</h3>
            <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
              <div className="flex flex-col items-center">
                <div className="bg-primary/20 text-primary px-6 py-3 rounded-lg font-medium mb-4">
                  Home
                </div>
                <div className="w-px h-8 bg-gray-600"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                  <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center border border-[#9B87F5]">
                    Symptom Input
                  </div>
                  <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center border border-[#9B87F5]">
                    My Reports
                  </div>
                  <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center border border-[#9B87F5]">
                    How It Works
                  </div>
                  <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center border border-[#9B87F5]">
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-white font-semibold mb-4">
              Wireframes
            </h3>
            <p className="text-[rgba(200,200,200,0.9)] mb-6">
              Low-fidelity wireframes were created to establish the basic
              structure of key screens, focusing on intuitive symptom input
              and clear result presentation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary font-medium mb-3">
                  Symptom Checkr Homepage
                </h4>
                <img
                  src="/lovable-uploads/Symptom-Checkr-Home.jpg"
                  alt="Symptom Checkr Homepage Wireframe"
                  className="rounded-lg border border-gray-700"
                />
              </div>

              <div>
                <h4 className="text-primary font-medium mb-3">
                  My Reports Saved
                </h4>
                <img
                  src="/lovable-uploads/Symptom-Checkr-My-Reports-saved.jpg"
                  alt="Results Screen Wireframe"
                  className="rounded-lg border border-gray-700"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SitemapWireframes;
