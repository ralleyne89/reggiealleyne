import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export interface PersonaDetail {
  label: string;
  value: string;
}

export interface PersonaItem {
  text: string;
}

export interface PersonaSection {
  title: string;
  items: PersonaItem[];
}

export interface UserPersonaProps {
  title?: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  details: PersonaDetail[];
  goals: PersonaItem[];
  frustrations: PersonaItem[];
  needs: PersonaItem[];
}

const UserPersona: React.FC<UserPersonaProps> = ({
  title = "User Persona",
  imageSrc,
  imageAlt,
  name,
  details,
  goals,
  frustrations,
  needs
}) => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-lg w-full"
              />
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-2">
                {name}
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {details.map((detail, index) => (
                  <div key={index}>
                    <p className="text-gray-400 text-sm">{detail.label}</p>
                    <p className="text-white">{detail.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-primary font-semibold mb-3">Goals</h4>
                  <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                    {goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{goal.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-3">
                    Frustrations
                  </h4>
                  <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                    {frustrations.map((frustration, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{frustration.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-3">Needs</h4>
                  <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                    {needs.map((need, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{need.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default UserPersona;
