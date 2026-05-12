
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
  Lock
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
import { AIProductThinkingProps } from "@/components/project/common/AIProductThinking";

// AI PM Lens Data
export const symptomCheckrAIPMData: AIProductThinkingProps = {
  title: "The hard part",
  challenge: "How should a symptom checker respond when its guidance might be wrong?",
  dataStrategy: "I designed the flow around uncertainty. Each result shows confidence, sources, and plain-language reasoning so users can see what shaped the recommendation.",
  successMetric: "Prototype feedback pointed in one clear direction: people felt more comfortable when the product explained its uncertainty instead of presenting a single answer."
};

// Project Overview Data
export const symptomCheckrOverviewData: ProjectOverviewProps = {
  title: "Helping people check symptoms without spiraling",
  description: [
    "Most symptom checkers move too quickly from input to possible diagnosis. That can make a worried user feel like they are being handed a verdict instead of guidance.",
    "SymptomCheckr takes a different approach. I designed the experience to show confidence levels, source links, and the reasoning behind each recommendation, so users can understand uncertainty instead of filling in the blanks themselves.",
    "The concept began as an additional feature for a health insurance platform. It was meant to help members decide whether to monitor symptoms, book telehealth, or seek urgent care. The feature was later shelved during restructuring, but the design work still shows how I approach sensitive AI products."
  ],
  projectDetails: [
    {
      label: "Design Focus",
      value: "Health UX & AI Guidance",
      icon: Briefcase
    },
    {
      label: "Team Size",
      value: "4",
      icon: Users
    },
    {
      label: "Timeline",
      value: "8 weeks",
      icon: Clock
    }
  ],
  toolDetails: [
    {
      label: "Methodology",
      value: "Guidance Flow, User Research",
      icon: Image
    },
    {
      label: "Platform",
      value: "Desktop & Mobile responsive",
      icon: Monitor
    },
    {
      label: "Sector",
      value: "Healthcare / InsurTech",
      icon: Briefcase
    }
  ]
};

// Problem Space Data
export const symptomCheckrProblemSpaceData: ProblemSpaceProps = {
  title: "When symptom checkers feel too certain",
  introduction: "A symptom checker can create more stress when it gives possible causes without showing how it got there. Users need to know what the system considered, how confident it is, and when a clinician should be involved. The design question was simple: how can an AI-assisted tool give useful guidance without sounding more certain than it is?",
  challenges: [
    {
      title: "Hidden reasoning",
      description: "When users cannot see how a recommendation was formed, they have to choose between trusting it blindly or dismissing it completely.",
      icon: AlertCircle
    },
    {
      title: "The panic-or-ignore loop",
      description: "Symptom search often pushes people toward worst-case thinking or total skepticism. Neither response helps someone make a calm care decision.",
      icon: AlertCircle
    },
    {
      title: "Unclear privacy control",
      description: "Health data is sensitive. Users need to know what is collected, what is saved, and what they can delete or share.",
      icon: AlertCircle
    }
  ],
  designGoals: [
    {
      title: "Explain the recommendation",
      description: "Show confidence levels, cite sources, and explain why a result appears on the screen.",
      icon: Target
    },
    {
      title: "Graduated Certainty",
      description: "Replace yes-or-no language with probability ranges and clear limits around what the tool can determine.",
      icon: Target
    },
    {
      title: "Control over health data",
      description: "Let users delete data, choose what to share with a doctor, and see which inputs shaped each recommendation.",
      icon: Target
    }
  ]
};

// Research & Discovery Data
export const symptomCheckrResearchData: ResearchDiscoveryProps = {
  title: "What the research pointed to",
  introduction: "I reviewed existing symptom-checker flows and talked with people who had searched symptoms during stressful moments. The same pattern kept showing up: people want quick help, but they lose trust when the experience feels clinical, outdated, or vague about how it reached a result.",
  researchSections: [
    {
      title: "User conversations",
      description: "I gathered informal feedback from people who had recently searched symptoms or used digital health tools.",
      items: [
        {
          text: "Most people start with Google, become more anxious, then either ignore the concern or seek urgent care without clear triage guidance"
        },
        {
          text: "People want guidance that feels plain-spoken and supportive without sacrificing clinical credibility"
        },
        {
          text: "Visual symptoms are difficult to describe accurately, making photo-supported input an important design opportunity"
        }
      ]
    },
    {
      title: "Competitive review",
      description: "I reviewed major symptom-checker flows to understand where trust, clarity, and completion break down.",
      items: [
        {
          text: "Ada felt clinically credible, but the experience leaned formal and system-led rather than reassuring"
        },
        {
          text: "Buoy starts approachable, but the long question flow can create fatigue before users reach useful guidance"
        },
        {
          text: "K Health has medical credibility, but visual polish and information hierarchy strongly affect perceived trust"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Medical jargon makes worry worse",
      description: "Medical terms can help, but only when the interface explains them in plain English."
    },
    {
      title: "People need to see the logic",
      description: "Users were more willing to consider guidance when they could see the evidence and uncertainty behind it."
    },
    {
      title: "Photos can reduce guesswork",
      description: "Some symptoms are hard to describe. Photo-supported input gives users another way to provide context."
    }
  ]
};

// Ideation & Strategy Data
export const symptomCheckrIdeationData: IdeationStrategyProps = {
  title: "Three rules for a safer-feeling flow",
  introduction: "The strategy had to balance reassurance, medical seriousness, and business goals. The product needed to help users move from worry to a next step without making the AI sound like a doctor.",
  keyInsights: [
    {
      highlight: "Make it conversational, not clinical.",
      description: "People need plain-language guidance when they are worried about their health, not an experience that feels like paperwork."
    },
    {
      highlight: "Transparency builds trust.",
      description: "Show users what evidence shaped the guidance and where the tool's limits are."
    },
    {
      highlight: "Design for the moment of worry.",
      description: "People often check symptoms on their phones during stressful moments, so the flow must be fast, calm, and easy to resume."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Symptom Concern",
      description: "User notices symptoms and opens the app instead of starting with an unstructured web search"
    },
    {
      number: 2,
      title: "Focused Follow-up Questions",
      description: "The system asks relevant follow-ups based on what the user describes instead of forcing a long intake form"
    },
    {
      number: 3,
      title: "Clear Guidance",
      description: "User receives clear next steps: self-care, telehealth, or urgent care escalation"
    },
    {
      number: 4,
      title: "Follow Through",
      description: "Save the report, share with doctors, or set reminders to check symptoms again"
    }
  ]
};

// User Persona Data
export const symptomCheckrPersonaData: UserPersonaProps = {
  title: "Meet Sarah",
  imageSrc: "/images/Sarah-Mitchell-Persona.png",
  imageAlt: "Sarah Mitchell Persona",
  name: "Sarah Mitchell",
  details: [
    {
      label: "Age",
      value: "30"
    },
    {
      label: "Life",
      value: "Parent managing a busy household"
    },
    {
      label: "Tech Skills",
      value: "Comfortable with mobile tools, low tolerance for complexity"
    },
    {
      label: "Health Style",
      value: "Cautious but practical"
    }
  ],
  goals: [
    {
      text: "Understand whether a child's fever requires clinical care or home monitoring"
    },
    {
      text: "Avoid unnecessary urgent-care visits while still acting quickly when care is needed"
    },
    {
      text: "Make informed health decisions without needing clinical expertise"
    }
  ],
  frustrations: [
    {
      text: "Search results tend to swing between reassurance and worst-case outcomes"
    },
    {
      text: "Health portals often feel slow, dated, or difficult to navigate"
    },
    {
      text: "Difficulty distinguishing routine concern from symptoms that require action"
    }
  ],
  needs: [
    {
      text: "A calm interface that feels credible without feeling like a hospital portal"
    },
    {
      text: "Plain-language answers instead of unexplained medical terminology"
    },
    {
      text: "Clear confidence, sources, and reasoning behind the guidance"
    }
  ]
};

// User Journey Map Data
export const symptomCheckrJourneyData: UserJourneyMapProps = {
  title: "User Journey Map",
  introduction: "This map follows Sarah as she uses SymptomCheckr after noticing her child's rash and fever. It tracks the points where the product needs to reduce worry, ask for the right context, and help her choose a next step.",
  journeyTitle: "Sarah checks a rash and fever",
  journeyDescription: "A parent moves from worry to a clearer care decision.",
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
      description: "Finds SymptomCheckr and enters basic information"
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
  wireframesDescription: "I used low-fidelity wireframes to work through the main screens before polishing the UI: symptom input, saved reports, and result presentation.",
  wireframeImages: [
    {
      title: "Symptom Checkr Homepage",
      imageSrc: "/images/Symptom-Checkr-Home.jpg",
      imageAlt: "Symptom Checkr Homepage Wireframe"
    },
    {
      title: "My Reports Saved",
      imageSrc: "/images/Symptom-Checkr-My-Reports-saved.jpg",
      imageAlt: "Results Screen Wireframe"
    }
  ]
};

// Final UI Design Data
export const symptomCheckrUIData: FinalUIDesignProps = {
  title: "Designing for care, not panic",
  introduction: "The visual system needed to feel credible without becoming cold. I focused on color, type, spacing, and small interaction states that could make a stressful health task easier to scan.",
  designHighlights: [
    {
      text: "Colors that separate routine guidance from urgent escalation states"
    },
    {
      text: "Soft geometry and generous spacing for dense health information"
    },
    {
      text: "Processing states that show progress without adding alarm"
    },
    {
      text: "Accessible design that works for everyone, not just people with perfect vision"
    }
  ],
  uiFeatures: [
    {
      title: "Clear safety limits",
      description: "'AI can make mistakes. Always verify with a healthcare professional.' That message appears in the assessment flow so users know the tool is guidance, not a diagnosis.",
      icon: AlertCircle
    },
    {
      title: "Visual Symptom Input",
      description: "Allow users to upload a symptom photo when words alone are not precise enough.",
      icon: Image
    },
    {
      title: "Confidence without false certainty",
      description: "Use likelihood indicators and plain-language uncertainty instead of long lists of possible conditions.",
      icon: BarChart
    },
    {
      title: "Clear control over health data",
      description: "Let users delete data, save reports, or share context with a clinician through visible controls.",
      icon: Lock
    }
  ],
  uiImages: [
    {
      title: "Home Screen",
      src: "/images/symptom-checkr-home-optimized.jpg",
      alt: "SymptomCheckr Home screen"
    },
    {
      title: "My Reports - Saved",
      src: "/images/Symptom-Checkr-My-Reports-Saved-Final.jpg",
      alt: "SymptomCheckr My Reports with saved reports"
    },
    {
      title: "My Reports - Empty",
      src: "/images/Symptom-Checkr-My-Reports-Empty-Final.jpg",
      alt: "SymptomCheckr My Reports empty state"
    },
    {
      title: "Contact Screen",
      src: "/images/Symptom-Checkr-Contact-Final.jpg",
      alt: "SymptomCheckr Contact screen"
    }
  ]
};

// Outcomes & Impact Data
export const symptomCheckrOutcomesData: OutcomesImpactProps = {
  title: "What the work clarified",
  metrics: [
    {
      title: "Design Principle",
      value: "Trust",
      description: "The interface had to earn confidence at each step",
      icon: CheckCircle
    },
    {
      title: "Core Value",
      value: "Clarity",
      description: "Plain-language guidance mattered more than medical-sounding polish",
      icon: BarChart
    },
    {
      title: "User Experience",
      value: "Calm",
      description: "The flow was written and paced to lower stress, not add to it",
      icon: BarChart
    },
    {
      title: "Honest Approach",
      value: "Concept",
      description: "A concept framed around design decisions, not inflated success claims",
      icon: Briefcase
    }
  ]
};

// Challenges & Learnings Data - Principal-Level Insights
export const symptomCheckrChallengesData: ChallengesLearningsProps = {
  title: "What this taught me about health AI",
  challenges: [
    {
      title: "Trust has to be designed into the details",
      description: "People will not share health information with an experience that feels unclear or unreliable. Every design decision had to build trust without slowing the flow down."
    },
    {
      title: "Too much detail can backfire",
      description: "Too much medical detail can increase anxiety; too little becomes unusable. The interface needed enough context to support action without overwhelming users."
    },
    {
      title: "The narrower flow was the better flow",
      description: "Stakeholders wanted more surface area, but the user need pointed toward fewer steps and clearer next actions."
    }
  ],
  learnings: [
    {
      title: "Explain the logic",
      description: "When users understand how the tool reached a recommendation, they are better equipped to decide what to do with it."
    },
    {
      title: "Design for Anxiety",
      description: "People using symptom checkers are already worried. Every screen should make the next step clearer."
    },
    {
      title: "Safety is part of product quality",
      description: "In health tech, speed cannot come at the expense of consent, clarity, or knowing when a person needs clinical care."
    }
  ],
  nextSteps: [
    {
      title: "Better Integration",
      description: "Connect directly to telehealth so users do not have to restart the intake process when they need clinical care.",
      icon: Target
    },
    {
      title: "Symptom Tracking",
      description: "Let people track symptoms over time so clinicians can review more precise onset and progression data.",
      icon: Target
    },
    {
      title: "More inclusive evaluation",
      description: "Evaluate the guidance against more diverse symptom presentations so the product can work better across populations.",
      icon: Target
    }
  ]
};

// Reflection Data
export const symptomCheckrReflectionData: ReflectionProps = {
  title: "What I Learned",
  content: "This project sharpened how I design for people in vulnerable moments. A symptom checker is not just an interface; it is a decision-support tool where tone, clarity, and restraint matter.",
  insights: [
    {
      title: "Healthcare Design is Different",
      description: "Interface clarity mattered, but the bigger job was helping someone make a calmer next-step decision."
    },
    {
      title: "AI has to explain its limits",
      description: "In healthcare, users need to understand what the tool can suggest, what it cannot know, and when clinical care is needed."
    },
    {
      title: "Simple Isn't Easy",
      description: "Making complex medical information approachable without losing accuracy is difficult, but it is the job."
    }
  ]
};
