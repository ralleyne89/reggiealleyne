import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Clock, Image, Monitor } from "lucide-react";

const ProjectOverview = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Project Overview</h2>
          </div>
          
          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-6">
            Symptom Checkr is a digital triage and symptom-checking tool designed to improve the way users access care. 
            The tool leverages conversational AI and clinical intelligence to guide users from "I don't feel well" to 
            appropriate care in a seamless, intuitive, and personalized way.
          </p>
          
          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-8">
            In response to the COVID-19 pandemic and rising telehealth demand, we were tasked with reimagining the digital 
            "front door" to healthcare for a major health insurer. Our goal: create a compelling, trustworthy, and user-friendly 
            interface for symptom checking that enhances health outcomes while reducing unnecessary care utilization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-3">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Role</p>
                      <p className="text-white">UX/UI Designer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Team</p>
                      <p className="text-white">Product Strategist, Clinical Innovation Lead, AI Engineer, Marketing Analyst</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white">8 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-3">Tools & Platform</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Image className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Design Tools</p>
                      <p className="text-white">Figma, Miro, Adobe Suite, After Effects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Monitor className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Platform</p>
                      <p className="text-white">Web + Mobile App</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Client</p>
                      <p className="text-white">Confidential U.S. Health Plan Provider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProjectOverview;
