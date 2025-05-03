import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Workflow } from "lucide-react";
import { TutorDJourneyMap } from "@/projects/tutor-d";

const UserJourneyMap = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Workflow className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">User Journey Map</h2>
          </div>

          <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
            This journey map follows Alex as he navigates the TutorD platform
            when struggling with a difficult programming assignment. It
            highlights key emotional states, pain points, and design
            opportunities, as well as learning outcomes and long-term benefits.
          </p>

          <div className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
            <TutorDJourneyMap />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default UserJourneyMap;
