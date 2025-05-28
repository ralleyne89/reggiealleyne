
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
  title: "The Challenge",
  description: [
    "Picture this: You wake up with a weird rash, your kid has a fever, or you've got chest pain that's probably nothing but... what if it's not? Most people's first instinct is to Google their symptoms and spiral into WebMD doom. 72% of Americans do exactly this—and usually end up more confused than when they started.",
    "A major health insurer asked me to design something better: a symptom checker that actually helps instead of terrifies. The goal? Guide people from \"I don't feel well\" to the right care without the panic-inducing detour through Dr. Google's house of horrors."
  ],
  projectDetails: [
    {
      label: "My Role",
      value: "UI/UX Designer",
      icon: Briefcase
    },
    {
      label: "Team Size",
      value: "4",
      icon: Users
    },
    {
      label: "Timeline",
      value: "8 weeks of intense problem-solving",
      icon: Clock
    }
  ],
  toolDetails: [
    {
      label: "Design Tools",
      value: "Figma for design, React for reality",
      icon: Image
    },
    {
      label: "Platform",
      value: "Desktop & Mobile responsive",
      icon: Monitor
    },
    {
      label: "Client",
      value: "Major health insurer (can't name names)",
      icon: Briefcase
    }
  ]
};

// Problem Space Data
export const symptomCheckrProblemSpaceData: ProblemSpaceProps = {
  title: "The Real Problem",
  introduction: "Existing symptom checkers are basically digital hypochondriac factories. They either tell you everything is cancer or that you're fine when you're clearly not. People don't trust them, and honestly, they shouldn't.",
  challenges: [
    {
      title: "The Trust Issue",
      description: "Would you trust a symptom checker that looks like it was designed in 2003? Neither would your users. Most tools feel clinical, cold, and about as trustworthy as a fortune cookie.",
      icon: AlertCircle
    },
    {
      title: "The Panic Problem",
      description: "Current tools either send everyone to the ER or tell them they're fine. There's no middle ground, no nuance, and definitely no chill.",
      icon: AlertCircle
    },
    {
      title: "The Fragmentation Frustration",
      description: "Health portals are digital mazes. Users get lost trying to find what they need, give up, and just go to urgent care instead.",
      icon: AlertCircle
    }
  ],
  designGoals: [
    {
      title: "Make It Human",
      description: "Design something that feels like talking to a knowledgeable friend, not filling out a medical form.",
      icon: Target
    },
    {
      title: "Build Actual Trust",
      description: "Be transparent about how the AI works and what it can't do. Honesty is the best UX policy.",
      icon: Target
    },
    {
      title: "Guide, Don't Guess",
      description: "Help people make informed decisions instead of wild guesses about their health.",
      icon: Target
    }
  ]
};

// Research & Discovery Data
export const symptomCheckrResearchData: ResearchDiscoveryProps = {
  title: "Research & Discovery",
  introduction: "I talked to 8 people about their symptom-checking habits and audited every major competitor. Spoiler alert: everyone's doing it wrong.",
  researchSections: [
    {
      title: "User Interviews",
      description: "Insights from 8 participants about their symptom-checking habits and pain points.",
      items: [
        {
          text: "People Google symptoms first, panic second, then either ignore it or rush to urgent care"
        },
        {
          text: "They want something that feels trustworthy but not intimidating (think helpful nurse, not robot doctor)"
        },
        {
          text: "Visual symptoms are hard to describe in text—they want to show, not tell"
        }
      ]
    },
    {
      title: "Competitive Analysis",
      description: "I tested Ada, Buoy, K Health, and others. Here's what I found:",
      items: [
        {
          text: "Ada: Accurate but feels like taking a medical exam"
        },
        {
          text: "Buoy: Friendly at first, then becomes a cold questionnaire"
        },
        {
          text: "K Health: Good integration but looks like a 2015 startup"
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
  title: "The Strategy",
  introduction: "After mapping out the user journey (and realizing how broken the current experience is), I focused on three core principles that would make this actually useful.",
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
  imageSrc: "/lovable-uploads/Sarah-Mitchell-Persona.png",
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
  title: "The Final Design",
  introduction: "I designed something that feels more like a helpful conversation than a medical interrogation. Soft colors, clear language, and just enough personality to make people feel comfortable sharing their health concerns.",
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
      src: "/lovable-uploads/Symptom-Checkr-Home-Final.jpg",
      alt: "SymptomCheckr Home screen"
    },
    {
      title: "My Reports - Saved",
      src: "/lovable-uploads/Symptom-Checkr-My-Reports-Saved-Final.jpg",
      alt: "SymptomCheckr My Reports with saved reports"
    },
    {
      title: "My Reports - Empty",
      src: "/lovable-uploads/Symptom-Checkr-My-Reports-Empty-Final.jpg",
      alt: "SymptomCheckr My Reports empty state"
    },
    {
      title: "Contact Screen",
      src: "/lovable-uploads/Symptom-Checkr-Contact-Final.jpg",
      alt: "SymptomCheckr Contact screen"
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
  title: "What I Learned",
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
