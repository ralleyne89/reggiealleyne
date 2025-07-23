import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Eye, Lightbulb } from "lucide-react";
const OutcomesImpact = () => {
  return <section className="mb-16">
      <div className="bg-white">
        <div className="mb-12 px-[24px]">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Results & Impact
          </h2>
          
          {/* Level 1: Key Results & Impact */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
              What I Accomplished
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I created a complete MVP for TECH NOIR that solved the real problem of people not knowing how to style wearable tech. The designs were solid, the concept was unique, and I delivered everything within the 2-month timeline. Unfortunately, I didn't stick around to see how the actual product performed in the market.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">2 Months</div>
                <h4 className="text-gray-900 font-medium mb-2">Project Timeline</h4>
                <p className="text-gray-600 text-sm">From research to final MVP designs delivered on schedule</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">20+ Screens</div>
                <h4 className="text-gray-900 font-medium mb-2">Designed in Figma</h4>
                <p className="text-gray-600 text-sm">Complete user flows with interactions and prototyping</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">15 People</div>
                <h4 className="text-gray-900 font-medium mb-2">User Interviews</h4>
                <p className="text-gray-600 text-sm">Talked to real people to understand their wearable tech concerns</p>
              </div>
            </div>
          </div>

          {/* Level 2: Key Actions Taken */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
              Key Design Strategies That Moved the Needle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Educational Integration</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Integrated "How to Wear" guides and video modules that transformed shopping 
                    into a learning experience, addressing the core problem of user uncertainty.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Luxury Aesthetic</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Created a premium, dark-themed interface that elevated wearable tech 
                    to fashion-forward status, appealing to style-conscious consumers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">User-Centered Research</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Conducted comprehensive user research and persona development that 
                    directly informed design decisions and content strategy.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Visual Discovery Flow</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Designed an intuitive timeline flow (Discover → Learn → Try-On → Buy) 
                    that guides users through education to purchase decision.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Level 3: Detailed Achievement Breakdown */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
              How Success Was Achieved
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Research-Driven Design Process</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Through comprehensive surveys and field research, we identified that users had heard of wearable tech 
                  but lacked confidence in styling it. This insight directly shaped our educational approach and content strategy.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Conducted user surveys revealing 80% awareness but low styling confidence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Developed "Tech Tina" persona based on research findings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Identified preference for in-store purchases due to uncertainty</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Competitive Analysis & Innovation</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Analysis of premium e-commerce platforms like Net-A-Porter informed our clean layout and designer 
                  filters, while identifying the gap in educational content that Tech Noir uniquely filled.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Adopted best practices from luxury fashion e-commerce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Innovated with educational video modules and styling guides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Created unique value proposition in the wearable tech market</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Design Excellence & User Testing</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The final design combined luxury aesthetics with functional education, validated through user testing 
                  that confirmed improved confidence and positive reception of the styling modules.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Created high-fidelity prototypes with modular product pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Implemented AR try-on concept for enhanced user confidence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Validated design through comprehensive usability testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OutcomesImpact;