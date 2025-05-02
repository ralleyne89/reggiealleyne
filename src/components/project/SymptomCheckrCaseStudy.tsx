import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  AlertCircle,
  BarChart,
  Users,
  Target,
  Lightbulb,
  Workflow,
  FileText,
  Layers,
  Image,
  CheckCircle,
  Lock,
  Briefcase,
  Clock,
  Monitor,
  Smartphone,
  Code,
} from "lucide-react";

const SymptomCheckrCaseStudy = () => {
  return (
    <div className="mt-8 mb-16">
      {/* Project Overview Section */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Project Overview
              </h2>
            </div>

            <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-6">
              Symptom Checkr is a digital triage and symptom-checking tool
              designed to improve the way users access care. The tool leverages
              conversational AI and clinical intelligence to guide users from "I
              don't feel well" to appropriate care in a seamless, intuitive, and
              personalized way.
            </p>

            <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-8">
              In response to the COVID-19 pandemic and rising telehealth demand,
              we were tasked with reimagining the digital "front door" to
              healthcare for a major health insurer. Our goal: create a
              compelling, trustworthy, and user-friendly interface for symptom
              checking that enhances health outcomes while reducing unnecessary
              care utilization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Project Details
                  </h3>
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
                        <p className="text-white">
                          Product Strategist, Clinical Innovation Lead, AI
                          Engineer, Marketing Analyst
                        </p>
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
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Tools & Platform
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                        <Image className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Design Tools</p>
                        <p className="text-white">
                          Figma, Miro, Adobe Suite, After Effects
                        </p>
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
                        <p className="text-white">
                          Confidential U.S. Health Plan Provider
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Problem Space Section */}
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
              72% of Americans search online first when sick—often encountering
              conflicting information and misdiagnosing themselves.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              Challenges Identified
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <AlertCircle className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Trust Deficit</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Users lack trust in existing symptom checkers, often
                  questioning their accuracy and reliability.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <AlertCircle className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">
                    Fragmented Experience
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Traditional health plan portals are fragmented, confusing, and
                  difficult to navigate.
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
                  Members often default to urgent care or ER unnecessarily,
                  increasing costs and wait times.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <AlertCircle className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">
                    Missed Opportunities
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Health plans miss the opportunity to guide users early in
                  their care journey.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Design Goals
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Build Trust</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Create an empathetic, conversational UI that users feel
                    comfortable sharing health information with.
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
                    Streamline the symptom assessment process to make it
                    intuitive and efficient.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      Increase Self-Service
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Encourage appropriate self-care without sacrificing medical
                    accuracy.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      Seamless Integration
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Connect with existing care tools (telehealth, coaching,
                    in-network finders).
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Research & Discovery Section */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Research & Discovery
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">
                The research phase began with a comprehensive analysis of how
                users seek care when symptoms arise and a competitive audit of
                existing symptom checker tools.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    User Research
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Interviewed 8 members (ages 25–60) about how they seek
                        care when symptoms arise
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Synthesized data into key personas like Sarah Mitchell
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Reviewed behavioral data on search and care-seeking
                        habits
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Competitive Audit
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Analyzed tools like Ada, Buoy, Conversa, and K Health. Key
                    findings:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Ada showed the highest accuracy but had a dense UX
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Buoy had a friendly tone but felt impersonal after the
                        first interaction
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Conversa had strong provider integration but lacked
                        visual polish
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Finding 1
                  </h3>
                  <p className="text-gray-300">
                    Existing tools often provide too much medical jargon without
                    explaining implications clearly.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Finding 2
                  </h3>
                  <p className="text-gray-300">
                    Users want transparency about how symptom analysis works to
                    build trust in the results.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Finding 3
                  </h3>
                  <p className="text-gray-300">
                    Most competitors lack visual input options, limiting
                    accessibility for certain symptoms.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5 mt-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Internal Stakeholder Goals
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Encourage early engagement with health resources
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reduce ER visits and medical spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Integrate with existing care resources and analytics
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Ideation & Strategy Section */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Ideation & Strategy
              </h2>
            </div>

            <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-6">
              We used a whiteboarding session to map the end-to-end care journey
              and develop the strategy for the symptom checker experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Key Insights
                </h3>
                <div className="space-y-3">
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <p className="text-gray-300">
                      <span className="text-primary font-medium">
                        Users must feel guided and in control.
                      </span>{" "}
                      The interface should provide clear direction while
                      allowing users to feel they're making informed decisions
                      about their health.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <p className="text-gray-300">
                      <span className="text-primary font-medium">
                        Triaging must feel human, not like a form.
                      </span>{" "}
                      The conversational interface should adapt to user
                      responses and feel like a helpful consultation rather than
                      a clinical questionnaire.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <p className="text-gray-300">
                      <span className="text-primary font-medium">
                        Success hinges on cross-platform consistency.
                      </span>{" "}
                      The experience must be equally effective on mobile and
                      desktop to meet users where they are when symptoms arise.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Interaction Flow
                </h3>
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-0.5 shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          Symptom Onset → Opens app or mobile web
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                          User experiences symptoms and accesses the tool
                          through their health plan portal or direct link
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-0.5 shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          Conversational Assessment → AI asks adaptive questions
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                          The system guides users through relevant questions
                          based on their initial symptom description
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-0.5 shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          Triaged Recommendation → Actionable next steps
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                          User receives personalized care options (self-care,
                          telehealth, in-network clinic)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-0.5 shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          Optional Follow-up → Share report with PCP
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                          Users can save or share their symptom report with
                          healthcare providers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Persona Section */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">User Persona</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img
                  src="/lovable-uploads/4086d5d5-7778-4d3d-bf84-232e19d977f2.png"
                  alt="Sarah Mitchell Persona"
                  className="rounded-lg w-full"
                />
              </div>

              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Sarah Mitchell
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">Age</p>
                    <p className="text-white">38</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Occupation</p>
                    <p className="text-white">
                      Working Parent, Marketing Manager
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Tech Comfort</p>
                    <p className="text-white">Medium-High</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Health Behavior</p>
                    <p className="text-white">
                      Cautious, researches before seeking care
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-primary font-semibold mb-3">Goals</h4>
                    <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Understand symptoms quickly without rushing to urgent
                          care
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Save time and avoid unnecessary appointments
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Feel reassured she's making the right call</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-primary font-semibold mb-3">
                      Frustrations
                    </h4>
                    <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Medical sites are overwhelming or vague</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Doesn't want to self-diagnose, but needs guidance
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Worries about trusting unknown health tools</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-primary font-semibold mb-3">Needs</h4>
                    <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          A clean, friendly UI that feels trustworthy and
                          private
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Fast results with actionable advice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Transparency about how AI works</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* User Journey Map */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Workflow className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                User Journey Map
              </h2>
            </div>

            <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
              This journey map follows Sarah as she navigates SymptomCheckr when
              concerned about her child's rash and fever. It highlights key
              emotional states and opportunities for design intervention.
            </p>

            <div className="overflow-x-auto pb-4">
              <img
                src="/lovable-uploads/8f53157c-f6d4-46bf-9e0f-173619ca60c1.png"
                alt="User Journey Map"
                className="rounded-lg w-full min-w-[800px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Trigger</h4>
                <p className="text-gray-300 text-sm">
                  Design for initial anxiety with reassuring UI
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">
                  Search & Entry
                </h4>
                <p className="text-gray-300 text-sm">
                  Simple forms with privacy assurances
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Analysis</h4>
                <p className="text-gray-300 text-sm">
                  Transparent loading with clear explanation
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Results</h4>
                <p className="text-gray-300 text-sm">
                  Clear presentation with trust indicators
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Follow-up</h4>
                <p className="text-gray-300 text-sm">
                  Save options and next step guidance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sitemap & Wireframes */}
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
                    <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center" style={{border: '1px solid #9B87F5'}}>
                      Symptom Input
                    </div>
                    <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center" style={{border: '1px solid #9B87F5'}}>
                      My Reports
                    </div>
                    <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center" style={{border: '1px solid #9B87F5'}}>
                      How It Works
                    </div>
                    <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center" style={{border: '1px solid #9B87F5'}}>
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

      {/* Final UI Design */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Final UI Design</h2>
            </div>

            <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
              The final UI design emphasizes clarity, trust, and accessibility.
              A calming color palette with clear visual hierarchies guides users
              through the symptom checking process while minimizing anxiety.
            </p>

            <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5 mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">
                Design Execution Highlights
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Soft color palette for approachability and reduced clinical
                    feel
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Rounded UI elements to reduce clinical stiffness and create
                    a more friendly interface
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Micro-animations signal thinking, responding, and guidance
                    for user state
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Design system aligned with WCAG 2.1 AA accessibility
                    standards
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    Text & Image Input
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Users can choose between text description or image upload
                    for symptoms, increasing accessibility and accuracy.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      Dual Input Methods
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      Privacy First
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      Accessibility
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    Likelihood-Based Results
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Results are clearly organized by likelihood, with actionable
                    next steps for each potential cause.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      Clear Hierarchy
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      Actionable Information
                    </span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      No Alarmism
                    </span>
                  </div>
                </div>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 mb-3">
                <img
                  src="/lovable-uploads/8faa2a57-61a6-4ad4-a3c4-77c15b8982c8.png"
                  alt="SymptomCheckr Final UI"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400 text-sm text-center">
                Final UI design showcasing the symptom input and results screens
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Key UI Features
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Image className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      Dual Input Options
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Text description or image upload for different types of
                    symptoms and user preferences.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BarChart className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      Likelihood Indicators
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Visual scales showing probability of each potential cause
                    based on symptom analysis.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Lock className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Privacy Controls</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Clear consent flows and options to delete data after each
                    session.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How It Works */}
      {/* <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <AlertCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">How It Works</h2>
            </div>

            <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
              A dedicated "How It Works" section was designed to provide
              transparency about the AI system's functioning, building user
              trust through education.
            </p>

            <div className="space-y-6">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">
                  AI Analysis Explained
                </h3>
                <p className="text-gray-300">
                  SymptomCheckr uses a medically-trained machine learning model
                  that compares user-reported symptoms against a database of
                  conditions and their typical presentations. The system is
                  regularly updated with peer-reviewed medical literature and
                  has been validated against known diagnoses.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Data Privacy</h3>
                <p className="text-gray-300">
                  User privacy is prioritized through encryption, data
                  minimization principles, and optional anonymous usage. All
                  symptom information can be automatically deleted after
                  analysis, and the system provides clear consent options at
                  each step.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">
                  Ethical Considerations
                </h3>
                <p className="text-gray-300">
                  The system is designed with clear limitations and medical
                  disclaimers. It emphasizes that results are possibilities
                  rather than diagnoses and encourages appropriate medical
                  consultation. The UI avoids alarmist language and provides
                  balanced, actionable information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section> */}

      {/* Outcomes & Impact */}
      {/* <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <BarChart className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Outcomes & Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BarChart className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      Telehealth Utilization
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-primary">
                      +42%
                    </span>
                    <p className="text-gray-300 text-sm ml-3">
                      increase in telehealth utilization among pilot group
                    </p>
                  </div>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BarChart className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      ER Visit Reduction
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-primary">
                      -16%
                    </span>
                    <p className="text-gray-300 text-sm ml-3">
                      ER visits for minor symptoms in test region
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      User Satisfaction
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-primary">94%</span>
                    <p className="text-gray-300 text-sm ml-3">
                      user satisfaction rate from in-app surveys
                    </p>
                  </div>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Business Impact</h4>
                  </div>
                  <p className="text-gray-300">
                    New contracts secured with two national employer groups
                    based on digital capabilities
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section> */}

      {/* Challenges & Learnings */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Key Insights & Learnings
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Insights
                </h3>

                <div className="space-y-4">
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">
                      Building User Trust
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Creating a health tool that users would trust with
                      sensitive information required extensive research on trust
                      indicators and transparent design.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">
                      Balancing Detail vs. Clarity
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Finding the right level of medical detail without
                      overwhelming users or oversimplifying conditions was a
                      constant challenge.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">
                      Avoiding Unused Features
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Initial testing revealed that several planned features
                      were rarely used, requiring a streamlined redesign to
                      focus on core functionality.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Learnings
                </h3>

                <div className="space-y-4">
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">
                        Transparency Builds Trust
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Users were far more willing to trust the system when they
                      understood how the AI worked and its limitations.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">
                        Visual Communication is Key
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Visual hierarchy and clear iconography significantly
                      improved user comprehension of medical information.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">
                        Ethical Design is Non-Negotiable
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      In health tech, ethical considerations must be built into
                      every aspect of the design process, not added as an
                      afterthought.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Next Steps & Improvements
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      Telehealth Integration
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Connect users with healthcare providers for follow-up when
                    symptoms warrant medical attention.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Symptom Tracking</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Allow users to monitor symptoms over time to identify
                    patterns and changes for more accurate assessments.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      Expanded AI Training
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Further train the AI model on diverse datasets to improve
                    accuracy across different demographics and conditions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Reflection Section */}
      {/* <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Reflection</h2>
            </div>

            <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
              <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">
                Symptom Checkr taught me how to design for complexity with
                compassion. It pushed my skillset in systems thinking,
                accessibility, and human-centered AI. I'm proud that we not only
                created a better interface but helped people feel more informed
                and supported in a moment of vulnerability.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[rgba(35,35,35,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <span className="text-primary font-medium block mb-2">
                      Healthcare Design Insight
                    </span>
                    Designing for healthcare means balancing clarity and empathy
                    at every click.
                  </p>
                </div>

                <div className="bg-[rgba(35,35,35,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <span className="text-primary font-medium block mb-2">
                      Conversational UI
                    </span>
                    Chat-based UIs must manage tone, not just logic.
                  </p>
                </div>

                <div className="bg-[rgba(35,35,35,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <span className="text-primary font-medium block mb-2">
                      Collaboration
                    </span>
                    Cross-functional input (especially from clinical partners)
                    is essential early in the design process.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section> */}
    </div>
  );
};

export default SymptomCheckrCaseStudy;
