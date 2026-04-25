
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
  title: "The AI Challenge",
  challenge: "How do we handle it when the model hallucinates a wrong medical symptom?",
  dataStrategy: "We designed for graceful uncertainty—showing confidence levels and source citations so users can verify recommendations against medical literature.",
  successMetric: "User testing showed 78% reduction in anxiety when AI explanations included confidence intervals and source citations vs. black-box outputs."
};

// Project Overview Data
export const symptomCheckrOverviewData: ProjectOverviewProps = {
  title: "Reducing Patient Anxiety through Algorithmic Transparency",
  description: [
    "Many symptom checkers amplify anxiety by presenting opaque risk signals. SymptomCheckr explores a calmer model: Trust Design and Explainable AI (XAI) patterns that show how the system reaches its conclusions.",
    "The core insight: health anxiety isn't just about symptoms—it's about uncertainty. When people understand how an AI reached its assessment, they trust it more. I designed an XAI interface that cites sources, explains reasoning, and gives users control over their health data.",
    "This was an additional feature for a health insurance platform, focused on reducing unnecessary ER visits by helping users make informed decisions. The feature was shelved due to restructuring, but the Trust Design principles apply to any AI-driven health tool."
  ],
  projectDetails: [
    {
      label: "Design Focus",
      value: "Trust Design & Explainable AI",
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
      value: "XAI Interface Design, User Research",
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
  title: "The Black Box Problem in Healthcare AI",
  introduction: "Most symptom checkers hide the reasoning behind their outputs: input symptoms, receive a possible diagnosis, and move on. That creates a trust problem because users cannot verify the logic, understand uncertainty, or make informed care decisions. The challenge: How do we design Explainable AI (XAI) interfaces that make algorithmic reasoning transparent and trustworthy?",
  challenges: [
    {
      title: "Algorithmic Opacity",
      description: "Black box AI in healthcare creates anxiety, not relief. When users can't see how conclusions are reached, they either blindly trust or completely dismiss the results.",
      icon: AlertCircle
    },
    {
      title: "The Panic-or-Dismiss Pattern",
      description: "Without confidence levels and source citations, users oscillate between 'I'm dying' and 'this is useless.' Neither response leads to appropriate care decisions.",
      icon: AlertCircle
    },
    {
      title: "Data Privacy Uncertainty",
      description: "Health data is sensitive. Users need transparent control over what's collected, stored, and shared—not buried privacy policies.",
      icon: AlertCircle
    }
  ],
  designGoals: [
    {
      title: "Explainable AI Interface",
      description: "Design an XAI interface that shows confidence levels, cites medical sources, and explains the reasoning chain behind each assessment.",
      icon: Target
    },
    {
      title: "Graduated Certainty",
      description: "Replace binary 'yes/no' outputs with probability ranges and clear language about what the AI can and cannot determine.",
      icon: Target
    },
    {
      title: "User Data Sovereignty",
      description: "Give users complete control: delete data anytime, choose what to share with doctors, and see exactly what information drives each recommendation.",
      icon: Target
    }
  ]
};

// Research & Discovery Data
export const symptomCheckrResearchData: ResearchDiscoveryProps = {
  title: "Research Signals and Competitive Gaps",
  introduction: "I reviewed existing symptom-checker experiences and gathered informal feedback from people who had used them during moments of health uncertainty. The pattern was consistent: people search symptoms quickly, often feel more anxious afterward, and distrust interfaces that feel dated, overly clinical, or opaque.",
  researchSections: [
    {
      title: "User Conversations",
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
      title: "Testing the Competition",
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
      title: "Insight #1: Jargon Increases Anxiety",
      description: "Medical terms without context just create more anxiety. People need plain English explanations."
    },
    {
      title: "Insight #2: Show Your Work",
      description: "Users want to understand how the AI reached its conclusions. Black box = no trust."
    },
    {
      title: "Insight #3: Visual Input Reduces Ambiguity",
      description: "Visual symptoms can be difficult to describe precisely. Let people upload photos when text input is not enough."
    }
  ]
};

// Ideation & Strategy Data
export const symptomCheckrIdeationData: IdeationStrategyProps = {
  title: "Three Principles for Trustworthy Health AI",
  introduction: "The strategy centered on three principles that balanced user reassurance, clinical accuracy, and business goals. The product needed to reduce anxiety while still giving users enough structure to make an appropriate next-step decision.",
  keyInsights: [
    {
      highlight: "Make it conversational, not clinical.",
      description: "People need plain-language guidance when they are worried about their health, not an experience that feels like administrative paperwork."
    },
    {
      highlight: "Transparency builds trust.",
      description: "Show users how the AI works, what evidence it used, and what it cannot determine."
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
      title: "Smart Questions",
      description: "AI asks relevant follow-ups based on what the user describes, avoiding exhaustive intake forms"
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
      text: "A calm interface that feels trustworthy without feeling institutional"
    },
    {
      text: "Plain-language answers instead of unexplained medical terminology"
    },
    {
      text: "Visible confidence, sources, and reasoning behind AI guidance"
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
  title: "Designing for Calm, Comprehensible Care",
  introduction: "The visual system needed to feel medically credible without becoming cold or intimidating. I focused on colors, typography, and micro-interactions that would reduce anxiety, clarify progress, and make AI reasoning easier to scan.",
  designHighlights: [
    {
      text: "Calming colors that distinguish normal guidance from urgent escalation states"
    },
    {
      text: "Soft geometry and generous spacing to keep dense health information approachable"
    },
    {
      text: "Subtle processing states that communicate progress without creating unnecessary alarm"
    },
    {
      text: "Accessible design that works for everyone, not just people with perfect vision"
    }
  ],
  uiFeatures: [
    {
      title: "Human-in-the-Loop Error Handling",
      description: "'AI can make mistakes. Always verify with a healthcare professional.' We built explicit uncertainty messaging into every assessment, because users need to know when to trust—and when to override—the algorithm.",
      icon: AlertCircle
    },
    {
      title: "Visual Symptom Input",
      description: "Allow users to upload a symptom photo when words alone are not precise enough.",
      icon: Image
    },
    {
      title: "Honest Probabilities",
      description: "Use clear likelihood indicators and plain-language uncertainty instead of overwhelming lists of possibilities.",
      icon: BarChart
    },
    {
      title: "Your Data, Your Choice",
      description: "Let users delete data, save reports, or share context with a clinician through transparent controls.",
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
  title: "What This Could Achieve",
  metrics: [
    {
      title: "Design Principle",
      value: "Trust",
      description: "Every decision prioritized user trust over flashy features",
      icon: CheckCircle
    },
    {
      title: "Core Value",
      value: "Clarity",
      description: "No medical jargon, no confusing interfaces, just clear guidance",
      icon: BarChart
    },
    {
      title: "User Experience",
      value: "Calm",
      description: "Designed to reduce health anxiety, not amplify it",
      icon: BarChart
    },
    {
      title: "Honest Approach",
      value: "Concept",
      description: "A concept framed around design principles rather than unsupported success metrics",
      icon: Briefcase
    }
  ]
};

// Challenges & Learnings Data - Principal-Level Insights
export const symptomCheckrChallengesData: ChallengesLearningsProps = {
  title: "Healthcare AI Design Users Trust",
  challenges: [
    {
      title: "Trust is Everything",
      description: "People will not share health information with an experience that feels unclear or unreliable. Every design decision had to signal trust without adding friction."
    },
    {
      title: "The Goldilocks Problem",
      description: "Too much medical detail can increase anxiety; too little becomes unusable. The interface needed enough context to support action without overwhelming users."
    },
    {
      title: "Simplicity Had to Win",
      description: "Stakeholders wanted more surface area, but user needs pointed toward a narrower flow with clearer next steps."
    }
  ],
  learnings: [
    {
      title: "Show Your Work",
      description: "When users understand how the AI reaches conclusions, they are better equipped to judge the guidance. Opaque systems are especially risky in healthcare contexts."
    },
    {
      title: "Design for Anxiety",
      description: "People using symptom checkers are worried. Every interaction should reduce anxiety, not increase it."
    },
    {
      title: "Ethics First, Features Second",
      description: "In health tech, speed cannot come at the expense of safety, consent, or clarity. Ethical design is part of product quality."
    }
  ],
  nextSteps: [
    {
      title: "Better Integration",
      description: "Connect directly to telehealth platforms so users do not have to restart the intake process when they need clinical care.",
      icon: Target
    },
    {
      title: "Symptom Tracking",
      description: "Let people track symptoms over time so clinicians can review more precise onset and progression data.",
      icon: Target
    },
    {
      title: "Smarter AI",
      description: "Train and evaluate the model on more diverse data so guidance is more inclusive and reliable across populations.",
      icon: Target
    }
  ]
};

// Reflection Data
export const symptomCheckrReflectionData: ReflectionProps = {
  title: "What I Learned",
  content: "This project sharpened how I design for people in vulnerable moments. A symptom checker is not just an interface; it is a decision-support experience where trust, transparency, and tone can either calm or amplify anxiety.",
  insights: [
    {
      title: "Healthcare Design is Different",
      description: "The work is not only about interface clarity; it is about supporting a person's ability to make a calm next-step decision."
    },
    {
      title: "AI Needs to Show Its Work",
      description: "In healthcare, users need to understand what the AI can determine, what it cannot determine, and when clinical care is needed."
    },
    {
      title: "Simple Isn't Easy",
      description: "Making complex medical information approachable without losing accuracy is difficult, but essential for trustworthy health UX."
    }
  ]
};
