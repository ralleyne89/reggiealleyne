import {
  Briefcase,
  Users,
  Clock,
  Image,
  Monitor,
  AlertCircle,
  Target,
  Smartphone,
  Search,
  MessageSquare,
  FileText,
  CheckCircle,
  Frown,
  Smile,
  Meh,
  BarChart,
  Lock,
  Lightbulb
} from "lucide-react";
import { ProjectOverviewProps } from "@/components/project/common/ProjectOverview";
import { ProblemSpaceProps } from "@/components/project/common/ProblemSpace";
import { ResearchDiscoveryProps } from "@/components/project/common/ResearchDiscovery";
import { IdeationStrategyProps } from "@/components/project/common/IdeationStrategy";
import { UserPersonaProps } from "@/components/project/common/UserPersona";
import { UserJourneyMapProps } from "@/components/project/common/UserJourneyMap";
import { SitemapWireframesProps } from "@/components/project/common/SitemapWireframes";
import { FinalUIDesignProps } from "@/components/project/common/FinalUIDesign";
import { OutcomesImpactProps } from "@/components/project/common/OutcomesImpact";
import { ChallengesLearningsProps } from "@/components/project/common/ChallengesLearnings";
import { ReflectionProps } from "@/components/project/common/Reflection";

// Project Overview Data
export const symptomCheckrOverviewData: ProjectOverviewProps = {
  title: "Project Overview",
  description: [
    "Symptom Checkr is a digital triage and symptom-checking tool designed to improve the way users access care. The tool leverages conversational AI and clinical intelligence to guide users from \"I don't feel well\" to appropriate care in a seamless, intuitive, and personalized way.",
    "In response to the COVID-19 pandemic and rising telehealth demand, we were tasked with reimagining the digital \"front door\" to healthcare for a major health insurer. Our goal: create a compelling, trustworthy, and user-friendly interface for symptom checking that enhances health outcomes while reducing unnecessary care utilization."
  ],
  projectDetails: [
    {
      label: "Role",
      value: "UX/UI Designer & Frontend Developer",
      icon: Briefcase
    },
    {
      label: "Team",
      value: "1 member",
      icon: Users
    },
    {
      label: "Duration",
      value: "8 weeks",
      icon: Clock
    }
  ],
  toolDetails: [
    {
      label: "Tools",
      value: "Figma, React.js, Shadcn UI",
      icon: Image
    },
    {
      label: "Platform",
      value: "Web + Mobile App",
      icon: Monitor
    },
    {
      label: "Client",
      value: "Confidential Health Care Provider",
      icon: Briefcase
    }
  ]
};

// Problem Space Data
export const symptomCheckrProblemSpaceData: ProblemSpaceProps = {
  title: "Problem Space",
  introduction: "72% of Americans search online first when sick—often encountering conflicting information and misdiagnosing themselves.",
  challenges: [
    {
      title: "Trust Deficit",
      description: "Users lack trust in existing symptom checkers, often questioning their accuracy and reliability.",
      icon: AlertCircle
    },
    {
      title: "Fragmented Experience",
      description: "Traditional health plan portals are fragmented, confusing, and difficult to navigate.",
      icon: AlertCircle
    },
    {
      title: "Unnecessary Care",
      description: "Members often default to urgent care or ER unnecessarily, increasing costs and wait times.",
      icon: AlertCircle
    },
    {
      title: "Missed Opportunities",
      description: "Health plans miss the opportunity to guide users early in their care journey.",
      icon: AlertCircle
    }
  ],
  designGoals: [
    {
      title: "Build Trust",
      description: "Create an empathetic, conversational UI that users feel comfortable sharing health information with.",
      icon: Target
    },
    {
      title: "Reduce Friction",
      description: "Streamline the symptom assessment process to make it intuitive and efficient.",
      icon: Target
    },
    {
      title: "Increase Self-Service",
      description: "Encourage appropriate self-care without sacrificing medical accuracy.",
      icon: Target
    },
    {
      title: "Seamless Integration",
      description: "Connect with existing care tools (telehealth, coaching, in-network finders).",
      icon: Target
    }
  ]
};

// Research & Discovery Data
export const symptomCheckrResearchData: ResearchDiscoveryProps = {
  title: "Research & Discovery",
  introduction: "The research phase began with a comprehensive analysis of how users seek care when symptoms arise and a competitive audit of existing symptom checker tools.",
  researchSections: [
    {
      title: "User Research",
      items: [
        {
          text: "Interviewed 8 members (ages 25–60) about how they seek care when symptoms arise"
        },
        {
          text: "Synthesized data into key personas like \"Anxious Googler Anna\" and \"Busy Parent Ben\""
        },
        {
          text: "Reviewed behavioral data on search and care-seeking habits"
        }
      ]
    },
    {
      title: "Competitive Audit",
      description: "Analyzed tools like Ada, Buoy, Conversa, and K Health. Key findings:",
      items: [
        {
          text: "Ada showed the highest accuracy but had a dense UX"
        },
        {
          text: "Buoy had a friendly tone but felt impersonal after the first interaction"
        },
        {
          text: "Conversa had strong provider integration but lacked visual polish"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Key Finding 1",
      description: "Existing tools often provide too much medical jargon without explaining implications clearly."
    },
    {
      title: "Key Finding 2",
      description: "Users want transparency about how symptom analysis works to build trust in the results."
    },
    {
      title: "Key Finding 3",
      description: "Most competitors lack visual input options, limiting accessibility for certain symptoms."
    }
  ],
  stakeholderGoals: [
    {
      text: "Encourage early engagement with health resources"
    },
    {
      text: "Reduce ER visits and medical spend"
    },
    {
      text: "Integrate with existing care resources and analytics"
    }
  ]
};

// Ideation & Strategy Data
export const symptomCheckrIdeationData: IdeationStrategyProps = {
  title: "Ideation & Strategy",
  introduction: "We used a whiteboarding session to map the end-to-end care journey and develop the strategy for the symptom checker experience.",
  keyInsights: [
    {
      highlight: "Users must feel guided and in control.",
      description: "The interface should provide clear direction while allowing users to feel they're making informed decisions about their health."
    },
    {
      highlight: "Triaging must feel human, not like a form.",
      description: "The conversational interface should adapt to user responses and feel like a helpful consultation rather than a clinical questionnaire."
    },
    {
      highlight: "Success hinges on cross-platform consistency.",
      description: "The experience must be equally effective on mobile and desktop to meet users where they are when symptoms arise."
    }
  ],
  flowTitle: "Interaction Flow",
  flowSteps: [
    {
      number: 1,
      title: "Symptom Onset → Opens app or mobile web",
      description: "User experiences symptoms and accesses the tool through their health plan portal or direct link"
    },
    {
      number: 2,
      title: "Conversational Assessment → AI asks adaptive questions",
      description: "The system guides users through relevant questions based on their initial symptom description"
    },
    {
      number: 3,
      title: "Triaged Recommendation → Actionable next steps",
      description: "User receives personalized care options (self-care, telehealth, in-network clinic)"
    },
    {
      number: 4,
      title: "Optional Follow-up → Share report with PCP",
      description: "Users can save or share their symptom report with healthcare providers"
    }
  ]
};

// User Persona Data
export const symptomCheckrPersonaData: UserPersonaProps = {
  title: "User Persona",
  imageSrc: "/lovable-uploads/4086d5d5-7778-4d3d-bf84-232e19d977f2.png",
  imageAlt: "Sarah Mitchell Persona",
  name: "Sarah Mitchell",
  details: [
    {
      label: "Age",
      value: "38"
    },
    {
      label: "Occupation",
      value: "Working Parent, Marketing Manager"
    },
    {
      label: "Tech Comfort",
      value: "Medium-High"
    },
    {
      label: "Health Behavior",
      value: "Cautious, researches before seeking care"
    }
  ],
  goals: [
    {
      text: "Understand symptoms quickly without rushing to urgent care"
    },
    {
      text: "Save time and avoid unnecessary appointments"
    },
    {
      text: "Feel reassured she's making the right call"
    }
  ],
  frustrations: [
    {
      text: "Medical sites are overwhelming or vague"
    },
    {
      text: "Doesn't want to self-diagnose, but needs guidance"
    },
    {
      text: "Worries about trusting unknown health tools"
    }
  ],
  needs: [
    {
      text: "A clean, friendly UI that feels trustworthy and private"
    },
    {
      text: "Fast results with actionable advice"
    },
    {
      text: "Transparency about how AI works"
    }
  ]
};

// User Journey Map Data
export const symptomCheckrJourneyData: UserJourneyMapProps = {
  title: "User Journey Map",
  introduction: "This journey map follows Sarah as she navigates SymptomCheckr when concerned about her child's rash and fever. It highlights key emotional states and opportunities for design intervention.",
  journeyTitle: "User Journey: Sarah's Experience with Symptom Checkr",
  journeyDescription: "Following Sarah as she navigates the Symptom Checkr when concerned about her child's rash and fever.",
  stages: [
    { name: "Trigger" },
    { name: "Search & Entry" },
    { name: "Assessment" },
    { name: "Results" },
    { name: "Follow-up" }
  ],
  userActions: [
    {
      icon: Smartphone,
      description: "Child develops rash and fever; Sarah opens health plan app"
    },
    {
      icon: Search,
      description: "Finds Symptom Checkr and enters basic information"
    },
    {
      icon: MessageSquare,
      description: "Answers questions about symptoms and uploads photo of rash"
    },
    {
      icon: FileText,
      description: "Reviews possible causes and recommended actions"
    },
    {
      icon: CheckCircle,
      description: "Books telehealth appointment and saves symptom report"
    }
  ],
  emotionalStates: [
    {
      icon: Frown,
      iconColor: "text-red-400",
      description: "Worried & Anxious"
    },
    {
      icon: Meh,
      iconColor: "text-yellow-400",
      description: "Cautious & Uncertain"
    },
    {
      icon: Meh,
      iconColor: "text-yellow-400",
      description: "Engaged & Hopeful"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Relieved & Informed"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Confident & Satisfied"
    }
  ],
  painPoints: [
    {
      points: [
        "Initial anxiety about child's symptoms",
        "Unsure if she should go to ER"
      ]
    },
    {
      points: [
        "Concerned about privacy",
        "Skeptical of online tools"
      ]
    },
    {
      points: [
        "Unsure how detailed to be",
        "Worried about missing symptoms"
      ]
    },
    {
      points: [
        "Multiple possible causes",
        "Needs to decide on next steps"
      ]
    },
    {
      points: [
        "Wait time for appointment",
        "Wants to track symptoms"
      ]
    }
  ],
  designOpportunities: [
    {
      points: [
        "Reassuring welcome screen",
        "Clear indication of medical backing"
      ]
    },
    {
      points: [
        "Transparent privacy controls",
        "Simple, guided entry process"
      ]
    },
    {
      points: [
        "Adaptive questioning",
        "Visual symptom selection"
      ]
    },
    {
      points: [
        "Clear likelihood indicators",
        "In-network care options"
      ]
    },
    {
      points: [
        "Symptom tracking reminders",
        "Doctor report sharing"
      ]
    }
  ]
};

// Sitemap & Wireframes Data
export const symptomCheckrSitemapData: SitemapWireframesProps = {
  title: "Sitemap & Wireframes",
  sitemapTitle: "Sitemap",
  sitemapItems: [
    {
      name: "Home",
      isPrimary: true
    },
    {
      name: "Symptom Input"
    },
    {
      name: "My Reports"
    },
    {
      name: "How It Works"
    },
    {
      name: "Contact"
    }
  ],
  wireframesTitle: "Wireframes",
  wireframesDescription: "Low-fidelity wireframes were created to establish the basic structure of key screens, focusing on intuitive symptom input and clear result presentation.",
  wireframeImages: [
    {
      title: "Symptom Checkr Homepage",
      imageSrc: "/lovable-uploads/Symptom-Checkr-Home.jpg",
      imageAlt: "Symptom Checkr Homepage Wireframe"
    },
    {
      title: "My Reports Saved",
      imageSrc: "/lovable-uploads/Symptom-Checkr-My-Reports-saved.jpg",
      imageAlt: "Results Screen Wireframe"
    }
  ]
};

// Final UI Design Data
export const symptomCheckrUIData: FinalUIDesignProps = {
  title: "Final UI Design",
  introduction: "The final UI design emphasizes clarity, trust, and accessibility. A calming color palette with clear visual hierarchies guides users through the symptom checking process while minimizing anxiety.",
  designHighlights: [
    {
      text: "Soft color palette for approachability and reduced clinical feel"
    },
    {
      text: "Rounded UI elements to reduce clinical stiffness and create a more friendly interface"
    },
    {
      text: "Micro-animations signal thinking, responding, and guidance for user state"
    },
    {
      text: "Design system aligned with WCAG 2.1 AA accessibility standards"
    }
  ],
  designFeatures: [
    {
      title: "Text & Image Input",
      description: "Users can choose between text description or image upload for symptoms, increasing accessibility and accuracy.",
      tags: ["Dual Input Methods", "Privacy First", "Accessibility"]
    },
    {
      title: "Likelihood-Based Results",
      description: "Results are clearly organized by likelihood, with actionable next steps for each potential cause.",
      tags: ["Clear Hierarchy", "Actionable Information", "No Alarmism"]
    }
  ],
  mainImageSrc: "/lovable-uploads/8faa2a57-61a6-4ad4-a3c4-77c15b8982c8.png",
  mainImageAlt: "SymptomCheckr Final UI",
  imageCaption: "Final UI design showcasing the symptom input and results screens",
  uiFeatures: [
    {
      title: "Dual Input Options",
      description: "Text description or image upload for different types of symptoms and user preferences.",
      icon: Image
    },
    {
      title: "Likelihood Indicators",
      description: "Visual scales showing probability of each potential cause based on symptom analysis.",
      icon: BarChart
    },
    {
      title: "Privacy Controls",
      description: "Clear consent flows and options to delete data after each session.",
      icon: Lock
    }
  ]
};

// Outcomes & Impact Data
export const symptomCheckrOutcomesData: OutcomesImpactProps = {
  title: "Outcomes & Impact",
  metrics: [
    {
      title: "Telehealth Utilization",
      value: "+42%",
      description: "increase in telehealth utilization among pilot group",
      icon: BarChart
    },
    {
      title: "ER Visit Reduction",
      value: "-16%",
      description: "ER visits for minor symptoms in test region",
      icon: BarChart
    },
    {
      title: "User Satisfaction",
      value: "94%",
      description: "user satisfaction rate from in-app surveys",
      icon: CheckCircle
    },
    {
      title: "Business Impact",
      value: "2",
      description: "new contracts secured with national employer groups",
      icon: Briefcase
    }
  ]
};

// Challenges & Learnings Data
export const symptomCheckrChallengesData: ChallengesLearningsProps = {
  title: "Challenges & Learnings",
  challenges: [
    {
      title: "Building User Trust",
      description: "Creating a health tool that users would trust with sensitive information required extensive research on trust indicators and transparent design."
    },
    {
      title: "Balancing Detail vs. Clarity",
      description: "Finding the right level of medical detail without overwhelming users or oversimplifying conditions was a constant challenge."
    },
    {
      title: "Avoiding Unused Features",
      description: "Initial testing revealed that several planned features were rarely used, requiring a streamlined redesign to focus on core functionality."
    }
  ],
  learnings: [
    {
      title: "Transparency Builds Trust",
      description: "Users were far more willing to trust the system when they understood how the AI worked and its limitations."
    },
    {
      title: "Visual Communication is Key",
      description: "Visual hierarchy and clear iconography significantly improved user comprehension of medical information."
    },
    {
      title: "Ethical Design is Non-Negotiable",
      description: "In health tech, ethical considerations must be built into every aspect of the design process, not added as an afterthought."
    }
  ],
  nextSteps: [
    {
      title: "Telehealth Integration",
      description: "Connect users with healthcare providers for follow-up when symptoms warrant medical attention.",
      icon: Target
    },
    {
      title: "Symptom Tracking",
      description: "Allow users to monitor symptoms over time to identify patterns and changes for more accurate assessments.",
      icon: Target
    },
    {
      title: "Expanded AI Training",
      description: "Further train the AI model on diverse datasets to improve accuracy across different demographics and conditions.",
      icon: Target
    }
  ]
};

// Reflection Data
export const symptomCheckrReflectionData: ReflectionProps = {
  title: "Reflection",
  content: "Symptom Checkr taught me how to design for complexity with compassion. It pushed my skillset in systems thinking, accessibility, and human-centered AI. I'm proud that we not only created a better interface but helped people feel more informed and supported in a moment of vulnerability.",
  insights: [
    {
      title: "Healthcare Design Insight",
      description: "Designing for healthcare means balancing clarity and empathy at every click."
    },
    {
      title: "Conversational UI",
      description: "Chat-based UIs must manage tone, not just logic."
    },
    {
      title: "Collaboration",
      description: "Cross-functional input (especially from clinical partners) is essential early in the design process."
    }
  ]
};