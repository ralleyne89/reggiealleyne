
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

// Project Overview Data
export const symptomCheckrOverviewData: ProjectOverviewProps = {
  title: "Reducing Patient Anxiety through Algorithmic Transparency",
  description: [
    "WebMD scares people. SymptomCheckr informs them. I designed a symptom checker that prioritizes Trust Design and Explainable AI (XAI)—showing users exactly how the algorithm reaches its conclusions rather than hiding behind a black box.",
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
  introduction: "Most symptom checkers treat AI like magic—input symptoms, output diagnosis, no explanation. This creates a fundamental trust problem: users can't verify the reasoning, can't question the logic, and can't make informed decisions. The challenge: How do we design Explainable AI (XAI) interfaces that make algorithmic reasoning transparent and trustworthy?",
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
  title: "What I Learned from Digging Into the Mess",
  introduction: "I spent time looking at existing symptom checkers and talking to people who actually use them. The patterns were pretty clear: everyone Googles symptoms, most tools make you feel worse, and nobody trusts anything that looks like it was built by a hospital IT department in 2005.",
  researchSections: [
    {
      title: "Conversations with Real People",
      description: "I talked to friends, family, and anyone who'd tell me about their last symptom-checking adventure.",
      items: [
        {
          text: "Pretty much everyone starts with Google, gets scared, then either ignores it completely or rushes to urgent care"
        },
        {
          text: "People want something that feels like asking a knowledgeable friend, not filling out a medical form"
        },
        {
          text: "Visual symptoms are impossible to describe. 'It's kind of red and bumpy' doesn't help anyone"
        }
      ]
    },
    {
      title: "Testing the Competition",
      description: "I went through the major symptom checkers with fresh eyes, pretending I had various symptoms.",
      items: [
        {
          text: "Ada is clinically solid but feels like talking to a robot. The interface screams 'medical device' instead of 'helpful tool'"
        },
        {
          text: "Buoy starts friendly but becomes exhausting with its endless questions. You lose steam halfway through"
        },
        {
          text: "K Health has the medical credibility but looks outdated. Trust is hard when the design feels abandoned"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Insight #1: Jargon is the Enemy",
      description: "Medical terms without context just create more anxiety. People need plain English explanations."
    },
    {
      title: "Insight #2: Show Your Work",
      description: "Users want to understand how the AI reached its conclusions. Black box = no trust."
    },
    {
      title: "Insight #3: Pictures Worth 1000 Words",
      description: "Rashes, bumps, and weird spots are hard to describe. Let people upload photos."
    }
  ]
};

// Ideation & Strategy Data
export const symptomCheckrIdeationData: IdeationStrategyProps = {
  title: "Three Simple Ideas That Could Change Everything",
  introduction: "After all that research, I landed on three core principles that felt right. The product team wanted bells and whistles, the clinical team wanted accuracy, and the business team wanted cost savings. But really, we just needed to not make people feel terrible about being worried.",
  keyInsights: [
    {
      highlight: "Make it conversational, not clinical.",
      description: "Nobody wants to feel like they're filling out insurance paperwork when they're worried about their health."
    },
    {
      highlight: "Transparency builds trust.",
      description: "Show users how the AI works and what it can't do. Mystery algorithms are scary algorithms."
    },
    {
      highlight: "Mobile-first, anxiety-second.",
      description: "People check symptoms on their phones at 2 AM. Design for that moment of worry, not the doctor's office."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Something's Wrong",
      description: "User notices symptoms and opens the app instead of Googling 'is this cancer'"
    },
    {
      number: 2,
      title: "Smart Questions",
      description: "AI asks relevant follow-ups based on what they describe (no 50-question surveys)"
    },
    {
      number: 3,
      title: "Clear Guidance",
      description: "Get specific next steps: self-care, telehealth, or 'yes, go to the ER now'"
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
      value: "Mom of 3, juggling everything"
    },
    {
      label: "Tech Skills",
      value: "Pretty good, but no time for complicated apps"
    },
    {
      label: "Health Style",
      value: "Cautious but practical"
    }
  ],
  goals: [
    {
      text: "Figure out if her kid's fever is 'call the doctor' serious or 'give it a day' normal"
    },
    {
      text: "Avoid the urgent care waiting room if possible (have you seen those germs?)"
    },
    {
      text: "Make smart health decisions without a medical degree"
    }
  ],
  frustrations: [
    {
      text: "WebMD thinks everything is either nothing or cancer"
    },
    {
      text: "Health portals are designed by people who clearly never use them"
    },
    {
      text: "Can't tell if symptoms are 'normal parent worry' or 'actual concern'"
    }
  ],
  needs: [
    {
      text: "Something that doesn't look like it was designed in a hospital"
    },
    {
      text: "Straight answers, not medical riddles"
    },
    {
      text: "Confidence that the AI isn't just guessing"
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
  title: "Designing for Humans, Not Hospitals",
  introduction: "The visual design had to nail the sweet spot between 'medical professional' and 'approachable friend.' I spent a lot of time thinking about colors, typography, and micro-interactions that would calm anxiety instead of amplifying it. Here's how I approached bringing this concept to life.",
  designHighlights: [
    {
      text: "Calming colors that don't scream 'MEDICAL EMERGENCY' at every interaction"
    },
    {
      text: "Rounded corners because sharp edges feel aggressive when you're already anxious"
    },
    {
      text: "Subtle animations that show the AI is 'thinking' (because waiting in silence is terrifying)"
    },
    {
      text: "Accessible design that works for everyone, not just people with perfect vision"
    }
  ],
  uiFeatures: [
    {
      title: "Show, Don't Tell",
      description: "Upload a photo of that weird rash instead of trying to describe it. Sometimes a picture really is worth a thousand words.",
      icon: Image
    },
    {
      title: "Honest Probabilities",
      description: "No more 'you might have 47 different diseases.' Clear likelihood indicators for each possibility.",
      icon: BarChart
    },
    {
      title: "Your Data, Your Choice",
      description: "Delete everything when you're done, or save it to share with your doctor. Total transparency, no hidden data collection.",
      icon: Lock
    }
  ],
  uiImages: [
    {
      title: "Home Screen",
      src: "/images/Symptom-Checkr-Home-Final.jpg",
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
      description: "This is my take on what could work, not claiming fake success metrics",
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
      description: "People won't share health info with something that looks sketchy. Every design decision had to scream 'trustworthy' without being boring."
    },
    {
      title: "The Goldilocks Problem",
      description: "Too much medical detail = panic. Too little = useless. Finding the 'just right' amount of information was like threading a needle."
    },
    {
      title: "Feature Creep is Real",
      description: "Stakeholders wanted to add everything. Users wanted simplicity. Guess who won? (Hint: it wasn't the stakeholders.)"
    }
  ],
  learnings: [
    {
      title: "Show Your Work",
      description: "When users understand how the AI reaches conclusions, they trust it more. Black boxes are scary in healthcare."
    },
    {
      title: "Design for Anxiety",
      description: "People using symptom checkers are worried. Every interaction should reduce anxiety, not increase it."
    },
    {
      title: "Ethics First, Features Second",
      description: "In health tech, 'move fast and break things' can literally break people. Ethical design isn't optional."
    }
  ],
  nextSteps: [
    {
      title: "Better Integration",
      description: "Connect directly to telehealth platforms so users don't have to start over when they need a real doctor.",
      icon: Target
    },
    {
      title: "Symptom Tracking",
      description: "Let people track symptoms over time to spot patterns (because 'it started Tuesday' is more helpful than 'recently').",
      icon: Target
    },
    {
      title: "Smarter AI",
      description: "Train the model on more diverse data so it works better for everyone, not just the people in the original dataset.",
      icon: Target
    }
  ]
};

// Reflection Data
export const symptomCheckrReflectionData: ReflectionProps = {
  title: "What I Learned",
  content: "This project was a masterclass in designing for people at their most vulnerable. There's something humbling about creating something for someone who's worried about their health at 2 AM. It made me think differently about trust, transparency, and how design can either calm or amplify anxiety.",
  insights: [
    {
      title: "Healthcare Design is Different",
      description: "You're not just designing an interface—you're designing for someone's peace of mind."
    },
    {
      title: "AI Needs to Show Its Work",
      description: "In healthcare, mysterious algorithms are terrifying. People need to understand what the AI can and can't do."
    },
    {
      title: "Simple Isn't Easy",
      description: "Making complex medical information feel approachable without losing accuracy is incredibly hard—but worth it."
    }
  ]
};
