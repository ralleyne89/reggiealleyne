import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Target } from "lucide-react";

const ProblemSpace = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Problem Space</h2>
          </div>
          
          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-6">
            72% of Americans search online first when sick—often encountering conflicting information and misdiagnosing themselves.
          </p>
          
          <h3 className="text-xl font-semibold text-white mb-4">Challenges Identified</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <AlertCircle className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-white font-medium">Trust Deficit</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Users lack trust in existing symptom checkers, often questioning their accuracy and reliability.
              </p>
            </div>
            
            <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <AlertCircle className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-white font-medium">Fragmented Experience</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Traditional health plan portals are fragmented, confusing, and difficult to navigate.
              </p>
            </div>
            
            <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <AlertCircle className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-white font-medium">Unnecessary Care</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Members often default to urgent care or ER unnecessarily, increasing costs and wait times.
              </p>
            </div>
            
            <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <AlertCircle className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-white font-medium">Missed Opportunities</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Health plans miss the opportunity to guide users early in their care journey.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Design Goals</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Build Trust</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Create an empathetic, conversational UI that users feel comfortable sharing health information with.
                </p>
              </div>
              
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Reduce Friction</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Streamline the symptom assessment process to make it intuitive and efficient.
                </p>
              </div>
              
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Increase Self-Service</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Encourage appropriate self-care without sacrificing medical accuracy.
                </p>
              </div>
              
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Seamless Integration</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Connect with existing care tools (telehealth, coaching, in-network finders).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProblemSpace;
