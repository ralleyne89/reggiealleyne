
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Trophy, Target } from "lucide-react";

interface KeyResult {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface KeyAction {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Achievement {
  title: string;
  description: string;
}

interface DetailedImpact {
  userExperience: string;
  businessValue: string;
  designSystem: string;
}

interface OutcomesImpactData {
  title: string;
  description: string[];
  keyResults: KeyResult[];
  keyActions: KeyAction[];
  achievements: Achievement[];
  detailedImpact: DetailedImpact;
}

const OutcomesImpact = () => {
  // Import the data from the updated structure
  const data: OutcomesImpactData = {
    title: "Results & Impact",
    description: [
      "The redesigned landing page successfully launched with the GEICO campaign rollout, delivering measurable improvements in user trust and conversion optimization. The strategic design approach resulted in a conversion-focused experience that effectively guided users from skepticism to enrollment."
    ],
    keyResults: [
      {
        title: "Campaign Success",
        value: "100% On-Time",
        description: "Delivered in sync with GEICO campaign timeline",
        icon: ({ className }) => <TrendingUp className={className} />
      },
      {
        title: "Trust Enhancement", 
        value: "Significant",
        description: "Improved user confidence through strategic brand integration",
        icon: ({ className }) => <Trophy className={className} />
      },
      {
        title: "Mobile Experience",
        value: "Optimized",
        description: "Seamless cross-device conversion experience achieved",
        icon: ({ className }) => <Target className={className} />
      }
    ],
    keyActions: [
      {
        title: "Strategic Trust Integration",
        description: "Implemented GEICO branding prominently to leverage brand credibility and immediately address user trust concerns",
        icon: ({ className }) => <Trophy className={className} />
      },
      {
        title: "Conversion Path Optimization",
        description: "Created clear visual hierarchy with strategic CTA placement to guide users seamlessly through the enrollment process",
        icon: ({ className }) => <Target className={className} />
      },
      {
        title: "Mobile-First Implementation",
        description: "Designed and optimized the entire experience for mobile devices where majority of traffic originated",
        icon: ({ className }) => <TrendingUp className={className} />
      }
    ],
    achievements: [
      {
        title: "Successful Partnership Launch",
        description: "Delivered a conversion-optimized experience that aligned with GEICO's brand standards and campaign objectives, creating a seamless integration between both brands"
      },
      {
        title: "Enhanced Trust Building Framework",
        description: "Established a comprehensive trust-building approach through strategic brand placement, credibility indicators, and social proof elements that increased user confidence"
      },
      {
        title: "Scalable Design System",
        description: "Created reusable design patterns and mobile-first components that can be leveraged for future promotional campaigns and partnership initiatives"
      }
    ],
    detailedImpact: {
      userExperience: "The redesigned page significantly reduced user friction by addressing trust concerns upfront and creating a clear, intuitive path to conversion. Users could quickly understand the legitimacy and value of the service.",
      businessValue: "The optimized design directly supported business objectives by improving the conversion funnel and reducing user drop-off rates, particularly on mobile devices where most traffic originated.",
      designSystem: "Established a scalable framework for future partnership campaigns, creating reusable components and patterns that maintain brand consistency while optimizing for conversion."
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6">
        {/* Level 1: Main Results (Minto Pyramid Top) */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {data.description[0]}
          </p>
        </div>

        {/* Level 1: Key Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Key Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.keyResults.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{result.value}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{result.title}</h4>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Level 2: Key Actions Taken */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Key Actions That Moved the Needle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.keyActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Card key={index} className="bg-gray-50 border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{action.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Level 3: Detailed Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            How This Was Achieved
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.achievements.map((achievement, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Level 3: Detailed Impact Analysis */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Impact Analysis
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-blue-50 border border-blue-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">User Experience Impact</h4>
                <p className="text-blue-800 text-sm leading-relaxed">{data.detailedImpact.userExperience}</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Business Value</h4>
                <p className="text-green-800 text-sm leading-relaxed">{data.detailedImpact.businessValue}</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border border-purple-200">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Design System</h4>
                <p className="text-purple-800 text-sm leading-relaxed">{data.detailedImpact.designSystem}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesImpact;
