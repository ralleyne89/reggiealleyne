import {
  Briefcase,
  Users,
  Clock,
  Monitor,
  Target,
  Brain,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle,
  Code,
  Sparkles,
  Eye,
  AlertTriangle,
  Palette,
  FileCode
} from "lucide-react";
import { ProjectOverviewProps } from "@/components/project/common/ProjectOverview";
import { ProblemSpaceProps } from "@/components/project/common/ProblemSpace";
import { ResearchDiscoveryProps } from "@/components/project/common/ResearchDiscovery";
import { IdeationStrategyProps } from "@/components/project/common/IdeationStrategy";
import { FinalUIDesignProps } from "@/components/project/common/FinalUIDesign";
import { OutcomesImpactProps } from "@/components/project/common/OutcomesImpact";
import { ChallengesLearningsProps } from "@/components/project/common/ChallengesLearnings";
import { ReflectionProps } from "@/components/project/common/Reflection";

// Project Overview Data
export const vaultjsOverviewData: ProjectOverviewProps = {
  title: "Making third-party script risk easier to review",
  description: [
    "Enterprise security teams already have plenty of alerts. The harder problem is deciding which third-party script risk deserves attention, why it matters, and what to do next.",
    "The interface needed to feel credible for a security context without turning the dashboard into a dense wall of warnings.",
    "I designed and built Vault.js Validate as a security monitoring dashboard with risk scans, vendor-relationship visuals, plain-English vulnerability context, and an AI-assisted remediation path."
  ],
  projectDetails: [
    {
      label: "My Role",
      value: "UI/UX Designer & Frontend Developer",
      icon: Briefcase
    },
    {
      label: "Team Size",
      value: "1 (Solo Developer)",
      icon: Users
    },
    {
      label: "Timeline",
      value: "2 Weeks (Sprint)",
      icon: Clock
    }
  ],
  toolDetails: [
    {
      label: "Frontend",
      value: "React 18, TypeScript, Vite, Tailwind CSS",
      icon: Code
    },
    {
      label: "AI Integration",
      value: "OpenAI API via Supabase Edge Functions",
      icon: Brain
    },
    {
      label: "Visualization",
      value: "Recharts, Framer Motion",
      icon: Monitor
    }
  ]
};

// Problem Space Data
export const vaultjsProblemSpaceData: ProblemSpaceProps = {
  title: "The alert fatigue problem",
  introduction: "Security analysts deal with a constant stream of warnings, alerts, and data points. The problem is not a lack of information; it is the work required to sort signal from noise. My goal was to move the interface from problem finding toward problem solving.",
  challenges: [
    {
      title: "Information overload",
      description: "Security dashboards overwhelm users with raw data, making it difficult to identify and prioritize actual threats among the noise.",
      icon: AlertTriangle
    },
    {
      title: "Unclear next steps",
      description: "Many tools surface the problem but leave analysts to translate the finding into a remediation path.",
      icon: Target
    },
    {
      title: "Visual complexity",
      description: "Complex network relationships and data flows are difficult to visualize in ways that are both accurate and comprehensible.",
      icon: Eye
    }
  ],
  designGoals: [
    {
      title: "Move from finding to fixing",
      description: "Create a tool that flags issues, explains them in plain English, and gives analysts a concrete remediation option.",
      icon: Zap
    },
    {
      title: "Cyber-security brutalism aesthetic",
      description: "Balance technical precision with enterprise polish using a design language that evokes modern, high-tech security.",
      icon: Shield
    },
    {
      title: "Readable data visualization",
      description: "Turn abstract JSON data into charts that show third-party vendor relationships and data leakage paths.",
      icon: TrendingUp
    }
  ]
};

// Research & Discovery Data
export const vaultjsResearchData: ResearchDiscoveryProps = {
  title: "Understanding security tool pain points",
  introduction: "I started by analyzing existing security tools and identified a common pain point: 'Alert Fatigue.' Users are overwhelmed by red warning lights without clear paths to resolution. The research revealed that security professionals spend more time interpreting data than acting on it.",
  researchSections: [
    {
      title: "Competitive Analysis",
      description: "Evaluated existing security dashboards and compliance tools",
      items: [
        {
          text: "Most dashboards prioritize data density over clarity, overwhelming users with metrics"
        },
        {
          text: "Remediation suggestions are typically vague or require switching to external documentation"
        },
        {
          text: "Visual design often feels dated, reducing trust in the tool's capabilities"
        }
      ]
    },
    {
      title: "User Pain Points",
      description: "Identified key frustrations from security analysts",
      items: [
        {
          text: "Alert fatigue leads to important warnings being ignored among the noise"
        },
        {
          text: "Time wasted translating technical findings into actionable fixes"
        },
        {
          text: "Difficulty communicating security risks to non-technical stakeholders"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Finding #1: context matters",
      description: "Security alerts without context are noise. Users need to understand what is wrong, why it matters, and how to fix it."
    },
    {
      title: "Finding #2: AI can translate the technical layer",
      description: "Modern LLMs can turn technical vulnerabilities into plain-English explanations and targeted code fixes."
    },
    {
      title: "Finding #3: visual tone affects trust",
      description: "A modern, controlled interface signals competence before the user reads the first finding."
    }
  ]
};

// Ideation & Strategy Data
export const vaultjsIdeationData: IdeationStrategyProps = {
  title: "The 'Vault' Aesthetic: Cyber-Security Brutalism",
  introduction: "To match the brand identity of a modern security firm, I developed a design language I call 'Cyber-Security Brutalism': technical, sharp, and controlled without burying the user in chrome.",
  keyInsights: [
    {
      highlight: "Dark Mode First.",
      description: "Deep Void Navy (#050A14) as the canvas creates focus and reduces eye strain during extended monitoring sessions."
    },
    {
      highlight: "Purposeful Color Accents.",
      description: "Neon Green (#00FF94) for active monitoring states, Signal Red (#FF2A2A) for critical threats—each color carries meaning."
    },
    {
      highlight: "Technical Typography.",
      description: "Tabular data treatments emphasize precision, paired with Poppins for UI readability and accessibility."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Scan Initiation",
      description: "Interactive hero section simulates scanning target websites"
    },
    {
      number: 2,
      title: "Vulnerability Detection",
      description: "Identify vulnerable third-party scripts, data leakage events, and compliance violations"
    },
    {
      number: 3,
      title: "AI Analysis",
      description: "Master-detail interface explains issues in plain English using OpenAI"
    },
    {
      number: 4,
      title: "Code Fix Generation",
      description: "AI generates code fixes automatically for identified vulnerabilities"
    },
    {
      number: 5,
      title: "Compliance Scoring",
      description: "Automated checks for GDPR, CCPA, and privacy policy with calculated score"
    }
  ]
};

// Final UI Design Data
export const vaultjsUIData: FinalUIDesignProps = {
  introduction: "The final dashboard is a working frontend application with data visualization, AI integration patterns, and performance-conscious UI. The design keeps security context readable while still feeling like a serious technical tool.",
  designHighlights: [
    {
      text: "Deep Void Navy (#050A14) canvas with Neon Green (#00FF94) for active states and Signal Red (#FF2A2A) for critical threats"
    },
    {
      text: "Thin, 1px technical borders with glowing effects and frosted glass panels create depth and visual hierarchy"
    },
    {
      text: "Tabular data treatments for precision paired with Poppins for UI readability and accessibility"
    },
    {
      text: "60fps animations achieved through Framer Motion optimization for smooth scanning simulations"
    },
    {
      text: "Master-detail pattern for AI remediation: issue list on left, detailed fix on right"
    },
    {
      text: "Interactive Recharts visualizations for third-party vendor relationships and data leakage paths"
    }
  ],
  uiFeatures: [
    {
      title: "Real-Time Attack Surface Scanning",
      description: "Interactive hero section that simulates scanning target websites, identifying vulnerable third-party scripts and compliance violations.",
      icon: Eye
    },
    {
      title: "AI Remediation Engine",
      description: "Master-detail interface that explains issues in plain English and generates code fixes automatically using OpenAI API.",
      icon: Brain
    },
    {
      title: "Dynamic Risk Visualization",
      description: "Interactive charts and network graphs built with Recharts that visualize vendor relationships and data leakage paths.",
      icon: TrendingUp
    }
  ],
  uiImages: [
    {
      src: "/images/vaultjs-hero.png",
      alt: "Vault.js Validate hero - Scan Your Attack Surface",
      title: "Hero: Scan Your Attack Surface"
    },
    {
      src: "/images/vaultjs-dashboard.png",
      alt: "Security Analysis Report with Risk Assessment Score",
      title: "Security Analysis Report"
    },
    {
      src: "/images/vaultjs-analysis.png",
      alt: "Third-Party Scripts and Privacy Analysis",
      title: "Third-Party Scripts Analysis"
    }
  ]
};

// Outcomes & Impact Data
export const vaultjsOutcomesData: OutcomesImpactProps = {
  metrics: [
    {
      title: "Sprint Delivery",
      value: "2 weeks",
      description: "Designed and built fully functional security dashboard from concept to deployment",
      icon: CheckCircle
    },
    {
      title: "AI Integration",
      value: "OpenAI API",
      description: "Implemented AI-powered remediation engine that generates code fixes automatically",
      icon: Brain
    },
    {
      title: "Performance",
      value: "60fps",
      description: "Achieved smooth animations and instant state updates through optimized React patterns",
      icon: Zap
    },
    {
      title: "Design System",
      value: "Cyber-Security Brutalism",
      description: "Created complete visual language balancing technical precision with enterprise polish",
      icon: Palette
    }
  ]
};

// Challenges & Learnings Data
export const vaultjsChallengesData: ChallengesLearningsProps = {
  title: "What I Learned Building Security UX",
  challenges: [
    {
      title: "Balancing Data Density",
      description: "Security dashboards need to show lots of information without overwhelming users. Solution: Progressive disclosure with master-detail patterns that let users drill down on demand."
    },
    {
      title: "AI UX Design",
      description: "Making AI feel helpful rather than intrusive required careful consideration. Solution: AI suggestions appear as recommendations, not requirements, with clear 'Apply Fix' interactions."
    },
    {
      title: "Performance with Complex Visualizations",
      description: "Interactive charts with real-time data updates can easily become laggy. Solution: React Query for efficient state management and careful Recharts optimization."
    }
  ],
  learnings: [
    {
      title: "Dark Mode Done Right",
      description: "Dark interfaces require careful contrast management. Pure black (#000) creates eye strain—deep navy provides depth while remaining comfortable."
    },
    {
      title: "Animation as communication",
      description: "The scanning simulation communicates progress and helps the user understand that the tool is actively working."
    },
    {
      title: "AI should explain before it acts",
      description: "Users trust AI recommendations more when they understand the reasoning. Plain-English explanations before code fixes build confidence."
    }
  ],
  nextSteps: [
    {
      title: "Expand Compliance Coverage",
      description: "Add SOC 2, HIPAA, and additional regulatory framework checks",
      icon: Shield
    },
    {
      title: "Team Collaboration Features",
      description: "Enable security teams to assign, track, and discuss remediation tasks",
      icon: Users
    },
    {
      title: "Historical Trend Analysis",
      description: "Build time-series visualizations showing security posture improvements over time",
      icon: TrendingUp
    }
  ]
};

// Reflection Data
export const vaultjsReflectionData: ReflectionProps = {
  title: "Reflections on security UX design",
  content: "This project pushed me to make a technical domain easier to inspect without softening the seriousness of the work. The strongest parts of the design came from pairing plain-language risk context with a visual system that still felt credible for security teams.",
  insights: [
    {
      title: "Design language matters",
      description: "The 'Vault' aesthetic worked as more than decoration. It helped the tool feel credible before users dug into the details."
    },
    {
      title: "AI as partner, not replacement",
      description: "The most successful AI integrations augment human decision-making rather than trying to automate it entirely. Explain, then suggest."
    },
    {
      title: "Speed enables iteration",
      description: "Moving directly from sketches to code allowed rapid testing of interactions. The 'Apply Fix' button went through 5 iterations in 2 weeks."
    }
  ]
};
