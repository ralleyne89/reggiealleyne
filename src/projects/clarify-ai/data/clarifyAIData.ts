import {
  Briefcase,
  Users,
  Clock,
  Monitor,
  Target,
  Brain,
  Award,
  TrendingUp,
  Zap,
  Shield,
  BookOpen,
  CheckCircle,
  Code,
  Sparkles,
  FileText,
  Search,
  AlertTriangle,
  ThumbsUp,
  Scale,
  Eye,
  Layers
} from "lucide-react";
import { ProjectOverviewProps } from "@/components/project/common/ProjectOverview";
import { ProblemSpaceProps } from "@/components/project/common/ProblemSpace";
import { ResearchDiscoveryProps } from "@/components/project/common/ResearchDiscovery";
import { IdeationStrategyProps } from "@/components/project/common/IdeationStrategy";
import { FinalUIDesignProps } from "@/components/project/common/FinalUIDesign";
import { OutcomesImpactProps } from "@/components/project/common/OutcomesImpact";
import { ChallengesLearningsProps } from "@/components/project/common/ChallengesLearnings";
import { ReflectionProps } from "@/components/project/common/Reflection";
import { UserPersonaProps } from "@/components/project/common/UserPersona";

// Project Overview Data
export const clarifyAIOverviewData: ProjectOverviewProps = {
  title: "Reducing Risk in Healthcare Claims with RAG",
  description: [
    "In the high-stakes world of health insurance, speed usually comes at the cost of accuracy. Senior Adjusters spend up to 40% of their day manually cross-referencing member claim history against 100+ page 'Evidence of Coverage' PDFs. Standard chatbots fail here because 'hallucinations' create legal liability.",
    "I designed Clarify AI, a Retrieval-Augmented Generation (RAG) workspace that keeps the Human-in-the-Loop. Instead of a simple chat, I built a Three-Pane Console that provides immediate context, AI-powered synthesis, and verifiable evidence—all in one interface.",
    "The innovation: an Interactive Citation System where every AI assertion is hyperlinked. Hovering over a citation highlights the raw legal text in the Evidence pane, transforming the AI from an Oracle into a Librarian."
  ],
  projectDetails: [
    {
      label: "My Role",
      value: "AI Product Designer / Solutions Architect",
      icon: Briefcase
    },
    {
      label: "Industry",
      value: "Health Insurance / Payer Organization",
      icon: Shield
    },
    {
      label: "Timeline",
      value: "December 2025",
      icon: Clock
    }
  ],
  toolDetails: [
    {
      label: "Core Concept",
      value: "'Glass Box' RAG with cited sources",
      icon: Eye
    },
    {
      label: "Design System",
      value: "Accessible Lavender Theme",
      icon: Layers
    },
    {
      label: "Platform",
      value: "Enterprise Web Console",
      icon: Monitor
    }
  ]
};

// Problem Space Data
export const clarifyAIProblemSpaceData: ProblemSpaceProps = {
  title: "The 50-Page PDF Problem",
  introduction: "Claims adjusters spend 40% of their time searching documents while members wait on hold. The challenge: how do you accelerate claims processing without introducing legal liability from AI errors? Standard chatbots fail because hallucinations in healthcare claims create compliance nightmares.",
  challenges: [
    {
      title: "The Black Box Problem",
      description: "Traditional AI assistants provide answers without sources, making it impossible for adjusters to verify accuracy before acting on recommendations.",
      icon: AlertTriangle
    },
    {
      title: "Document Overload",
      description: "Adjusters must cross-reference member plan documents, clinical policies, and state regulations across 100+ page PDFs for every coverage decision.",
      icon: FileText
    },
    {
      title: "Compliance Requirements",
      description: "Zero tolerance for errors in healthcare—every claim decision must be auditable and traceable to official policy documentation.",
      icon: Scale
    }
  ],
  designGoals: [
    {
      title: "Verifiable AI Responses",
      description: "Every AI assertion must include clickable citations linking directly to source PDF text, enabling visual verification.",
      icon: CheckCircle
    },
    {
      title: "Policy Conflict Detection",
      description: "Automatically flag when documents are outdated or conflict with state-specific regulations.",
      icon: AlertTriangle
    },
    {
      title: "Jurisdiction Awareness",
      description: "Ensure retrieved policies match the member's state (NY vs TX requirements differ significantly).",
      icon: Target
    }
  ]
};

// User Personas
export const clarifyAIPersona1: UserPersonaProps = {
  title: "Primary User Persona",
  imageSrc: "/images/Sarah-Mitchell-Persona.png",
  imageAlt: "Jordan Chen - Senior Claims Adjuster persona",
  name: "Jordan Chen – Senior Claims Adjuster",
  details: [
    { label: "Experience", value: "8 years in claims processing" },
    { label: "Risk Tolerance", value: "Moderate" },
    { label: "Daily Workload", value: "45-60 claims" }
  ],
  goals: [
    { text: "Reduce handle time without sacrificing accuracy" },
    { text: "Avoid 're-work' from appeals and corrections" },
    { text: "Quickly triangulate coverage across multiple documents" }
  ],
  frustrations: [
    { text: "Spending 40% of time on document searches" },
    { text: "Members waiting on hold during complex lookups" },
    { text: "Complex boolean search strings for basic questions" }
  ],
  needs: [
    { text: "Natural language queries for coverage questions" },
    { text: "Instant access to relevant policy sections" },
    { text: "Confidence in AI recommendations before acting" }
  ]
};

export const clarifyAIPersona2: UserPersonaProps = {
  title: "Secondary User Persona",
  imageSrc: "/images/Ms-Rodriguez-Persona.png",
  imageAlt: "Elena Rodriguez - Compliance Director persona",
  name: "Elena Rodriguez – Compliance Director",
  details: [
    { label: "Experience", value: "15 years in healthcare compliance" },
    { label: "Risk Tolerance", value: "Zero tolerance for errors" },
    { label: "Primary Focus", value: "Auditability & Legal Protection" }
  ],
  goals: [
    { text: "Ensure all claim decisions are fully auditable" },
    { text: "Prevent use of expired or deprecated policies" },
    { text: "Maintain regulatory compliance across all states" }
  ],
  frustrations: [
    { text: "Black-box AI systems with no accountability" },
    { text: "Agents using outdated policy documents" },
    { text: "Inability to trace decisions to source materials" }
  ],
  needs: [
    { text: "Complete audit trail for every AI-assisted decision" },
    { text: "Automatic flagging of deprecated documents" },
    { text: "State-specific policy verification" }
  ]
};

// Research & Discovery Data
export const clarifyAIResearchData: ResearchDiscoveryProps = {
  title: "Understanding Claims Adjuster Workflows",
  introduction: "I conducted extensive research with claims adjusters, compliance officers, and healthcare IT leaders to understand the daily challenges of coverage verification. The goal was to identify where AI could add value without introducing unacceptable risk.",
  researchSections: [
    {
      title: "User Research",
      description: "Shadowed senior claims adjusters and interviewed compliance directors.",
      items: [
        {
          text: "Adjusters navigate between 3-5 different document systems for each complex claim"
        },
        {
          text: "Average time spent searching for policy information: 12-18 minutes per complex claim"
        },
        {
          text: "Compliance teams spend 30% of time reviewing decisions that relied on outdated policies"
        }
      ]
    },
    {
      title: "Competitive Analysis",
      description: "Evaluated existing AI solutions in healthcare claims processing.",
      items: [
        {
          text: "Most solutions are 'black boxes' with no citation or source verification"
        },
        {
          text: "Standard chatbots lack integration with document management systems"
        },
        {
          text: "No existing solution addresses state-specific policy variation automatically"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Finding #1: Trust Requires Transparency",
      description: "Adjusters will only adopt AI tools they can verify. The system must show its work, not just provide answers."
    },
    {
      title: "Finding #2: Context is Critical",
      description: "Decisions require simultaneous view of member status, AI response, and source documentation. Three-pane layout emerged as optimal."
    },
    {
      title: "Finding #3: Compliance is Non-Negotiable",
      description: "Any AI system must support full auditability. Every response needs traceable citations to survive legal review."
    }
  ]
};

// Ideation & Strategy Data
export const clarifyAIIdeationData: IdeationStrategyProps = {
  title: "The 'Glass Box' AI Approach",
  introduction: "Rather than building a traditional chatbot, I designed a transparent AI workspace that keeps humans in control. The 'Glass Box' approach ensures every AI recommendation can be verified before action.",
  keyInsights: [
    {
      highlight: "Citation-first design transforms trust.",
      description: "Every AI assertion hyperlinks to source text. Hovering a citation [1] highlights the exact policy language in the Evidence pane."
    },
    {
      highlight: "Three-pane layout reduces cognitive load.",
      description: "Context (member data), Synthesis (AI response), and Evidence (source PDFs) visible simultaneously eliminates window-switching."
    },
    {
      highlight: "Proactive safety prevents errors.",
      description: "System automatically flags deprecated policies and state jurisdiction mismatches before adjusters act on recommendations."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Context Loading",
      description: "Member profile, claim history, and plan details populate the left pane automatically"
    },
    {
      number: 2,
      title: "Natural Query",
      description: "Adjuster asks coverage question in plain English (e.g., 'Is bariatric surgery covered?')"
    },
    {
      number: 3,
      title: "RAG Synthesis",
      description: "AI retrieves relevant policy sections, synthesizes answer with inline citations"
    },
    {
      number: 4,
      title: "Citation Verification",
      description: "Adjuster hovers citations to highlight source text in Evidence pane"
    },
    {
      number: 5,
      title: "Confident Action",
      description: "Verified response enables fast, accurate claim decision with full audit trail"
    }
  ]
};

// Final UI Design Data
export const clarifyAIUIData: FinalUIDesignProps = {
  introduction: "The visual design balances enterprise professionalism with accessibility. The 'Accessible Lavender' theme creates a calm, focused environment for high-stakes decision-making while ensuring WCAG compliance.",
  designHighlights: [
    {
      text: "Three-Pane Console: Left (20%) for context/member data, Center (45%) for AI chat, Right (35%) for PDF evidence viewer"
    },
    {
      text: "Citation Pills: Small badges [1] inside chat that highlight corresponding text in the Evidence pane on hover"
    },
    {
      text: "Accessible Lavender Theme: Background #F8F9FA, Primary #6B46C1 (Deep Violet), AI Bubble #E9D8FD (Soft Lavender)"
    },
    {
      text: "Citation Highlights: #D6BCFA (Translucent Purple) to mark source text in PDF viewer"
    },
    {
      text: "Typography: Inter/Roboto for clean readability, consistent weight hierarchy for professional context"
    },
    {
      text: "Feedback Integration: Thumbs Up/Down on AI responses for continuous model fine-tuning"
    }
  ],
  uiFeatures: [
    {
      title: "Interactive Citation System",
      description: "Every AI assertion is hyperlinked. Hovering citations highlights raw legal text in the Evidence pane.",
      icon: Eye
    },
    {
      title: "Member Context Panel",
      description: "Immediate visibility of member status, plan details, and claim timeline in dedicated left pane.",
      icon: Users
    },
    {
      title: "Document Viewer Integration",
      description: "Dedicated right pane acts as 'Source of Truth' with synchronized highlighting from AI responses.",
      icon: FileText
    }
  ],
  uiImages: []
};

// Outcomes & Impact Data
export const clarifyAIOutcomesData: OutcomesImpactProps = {
  metrics: [
    {
      title: "Research Time Reduction",
      value: "~40%",
      description: "Estimated reduction in claims research time through instant RAG-powered policy retrieval",
      icon: TrendingUp
    },
    {
      title: "Compliance Confidence",
      value: "100%",
      description: "Full audit trail with every AI response traceable to source documentation",
      icon: Shield
    },
    {
      title: "Glass Box Transparency",
      value: "Every citation",
      description: "Interactive citation system links all AI assertions to source PDF text",
      icon: Eye
    },
    {
      title: "Human-in-the-Loop",
      value: "Zero automation",
      description: "AI assists but never acts—humans verify and make all claim decisions",
      icon: Users
    }
  ]
};

// Challenges & Learnings Data
export const clarifyAIChallengesData: ChallengesLearningsProps = {
  title: "Designing for Zero Tolerance Environments",
  challenges: [
    {
      title: "Building Trust in AI Recommendations",
      description: "The biggest challenge was convincing compliance stakeholders that AI could be used safely. Solution: The 'Glass Box' approach with mandatory citation verification before any action. AI suggests, humans decide."
    },
    {
      title: "PDF Integration Complexity",
      description: "Synchronizing AI responses with PDF highlights required careful chunking strategy and latency management. Solution: Pre-process documents with semantic chunking and use skeleton states during retrieval."
    },
    {
      title: "State-Specific Policy Variation",
      description: "Coverage rules vary significantly between states (NY vs TX). Solution: Automatic jurisdiction detection based on member profile with visual alerts when policies might not apply."
    }
  ],
  learnings: [
    {
      title: "Transparency Enables Adoption",
      description: "In regulated industries, showing your work is more important than being right. The citation system was the key to stakeholder buy-in."
    },
    {
      title: "Three Panes > One Chat",
      description: "Full-screen chat interfaces create cognitive overload for complex tasks. Simultaneous comparison of context, response, and evidence dramatically improves decision confidence."
    },
    {
      title: "Safety Guardrails are Features",
      description: "Prompt injection protection, deprecated document flags, and jurisdiction verification aren't limitations—they're the product's core value proposition."
    }
  ],
  nextSteps: [
    {
      title: "Expand Document Coverage",
      description: "Add clinical policy bulletins, provider contracts, and regulatory updates to the RAG corpus",
      icon: BookOpen
    },
    {
      title: "Team Analytics",
      description: "Build dashboard tracking citation verification rates and AI recommendation accuracy",
      icon: TrendingUp
    },
    {
      title: "Voice Interface",
      description: "Enable hands-free queries for adjusters handling phone calls with members",
      icon: Monitor
    }
  ]
};

// Reflection Data
export const clarifyAIReflectionData: ReflectionProps = {
  title: "Reflections on AI Trust Architecture",
  content: "Designing Clarify AI reinforced my core belief: AI is only as powerful as it is verifiable. In healthcare claims, the stakes are too high for black-box recommendations. The 'Glass Box' approach—where every assertion links to source text—transforms AI from an oracle into a librarian, and that's exactly what regulated industries need.",
  insights: [
    {
      title: "Human-in-the-Loop is Non-Negotiable",
      description: "In high-stakes environments, AI should amplify human judgment, not replace it. The three-pane console keeps humans central to every decision."
    },
    {
      title: "Citations Build Confidence",
      description: "The interactive citation system was the breakthrough. When adjusters can hover and verify, they trust the tool. Without citations, adoption would have been impossible."
    },
    {
      title: "Design for Auditors, Too",
      description: "In healthcare, every decision may be reviewed years later. Designing for auditability from day one prevented painful retrofitting."
    }
  ]
};
