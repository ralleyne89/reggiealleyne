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
  title: "Visualizing the Invisible: Security Data Made Actionable",
  description: [
    "Enterprise security teams are drowning in data. Traditional compliance dashboards are often cluttered, difficult to navigate, and fail to provide actionable insights. Security analysts need a tool that not only visualizes the invisible network of third-party scripts but also helps them remediate vulnerabilities instantly.",
    "The challenge was to design an interface that balances 'Cyber-Security Brutalism' with the polish of a trusted enterprise product, making complex risk data intuitive and manageable.",
    "I designed and built Vault.js Validate, a high-fidelity security monitoring dashboard that bridges the gap between raw security data and user-centric design by introducing an AI-powered remediation engine."
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
  title: "The Alert Fatigue Problem",
  introduction: "Security analysts face a constant barrage of warnings, alerts, and data points. The problem isn't a lack of information—it's an overload of it. Users are overwhelmed by red warning lights without clear paths to resolution. My goal was to shift the focus from 'Problem Finding' to 'Problem Solving.'",
  challenges: [
    {
      title: "Information Overload",
      description: "Security dashboards overwhelm users with raw data, making it difficult to identify and prioritize actual threats among the noise.",
      icon: AlertTriangle
    },
    {
      title: "Lack of Actionable Insights",
      description: "Traditional tools excel at finding problems but fail to provide clear remediation paths, leaving security teams stuck in analysis paralysis.",
      icon: Target
    },
    {
      title: "Visual Complexity",
      description: "Complex network relationships and data flows are difficult to visualize in ways that are both accurate and comprehensible.",
      icon: Eye
    }
  ],
  designGoals: [
    {
      title: "From Problem Finding to Problem Solving",
      description: "Create a tool that doesn't just flag issues but explains them in plain English and generates code fixes automatically.",
      icon: Zap
    },
    {
      title: "Cyber-Security Brutalism Aesthetic",
      description: "Balance technical precision with enterprise polish using a design language that evokes modern, high-tech security.",
      icon: Shield
    },
    {
      title: "Intuitive Data Visualization",
      description: "Transform abstract JSON data into meaningful charts that reveal third-party vendor relationships and data leakage paths.",
      icon: TrendingUp
    }
  ]
};

// Research & Discovery Data
export const vaultjsResearchData: ResearchDiscoveryProps = {
  title: "Understanding Security Tool Pain Points",
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
      title: "Finding #1: Context is King",
      description: "Security alerts without context are noise. Users need to understand not just what's wrong, but why it matters and how to fix it."
    },
    {
      title: "Finding #2: AI Can Bridge the Gap",
      description: "Modern LLMs can translate technical vulnerabilities into plain English explanations and generate targeted code fixes."
    },
    {
      title: "Finding #3: Aesthetics Build Trust",
      description: "A polished, modern interface signals competence and increases user confidence in the tool's recommendations."
    }
  ]
};

// Ideation & Strategy Data
export const vaultjsIdeationData: IdeationStrategyProps = {
  title: "The 'Vault' Aesthetic: Cyber-Security Brutalism",
  introduction: "To match the brand identity of a cutting-edge security firm, I developed a design language I call 'Cyber-Security Brutalism'—a balance of technical precision and modern polish that evokes trust while maintaining visual interest.",
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
      description: "JetBrains Mono for data and code emphasizes precision, paired with Inter for UI readability and accessibility."
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
  introduction: "The final dashboard is a fully functional frontend application that demonstrates complex data visualization, AI integration patterns, and high-performance UI. The design proves that security tools don't have to sacrifice usability for capability.",
  designHighlights: [
    {
      text: "Deep Void Navy (#050A14) canvas with Neon Green (#00FF94) for active states and Signal Red (#FF2A2A) for critical threats"
    },
    {
      text: "Thin, 1px technical borders with glowing effects and frosted glass panels create depth and visual hierarchy"
    },
    {
      text: "JetBrains Mono for data/code precision paired with Inter for UI readability and accessibility"
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
      src: "/images/vaultjs-1.jpg",
      alt: "Vault.js Validate case study overview",
      title: "Case Study Overview"
    },
    {
      src: "/images/vaultjs-2.jpg",
      alt: "Key features and design process",
      title: "Features & Process"
    },
    {
      src: "/images/vaultjs-3.jpg",
      alt: "Visual identity and prototyping",
      title: "Visual Identity & Results"
    },
    {
      src: "/images/vaultjs-4.jpg",
      alt: "Tech stack and final implementation",
      title: "Tech Stack"
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
      title: "Animation as Communication",
      description: "The scanning simulation isn't just eye candy—it communicates progress and builds trust that the tool is working."
    },
    {
      title: "AI Should Explain, Not Just Act",
      description: "Users trust AI recommendations more when they understand the reasoning. Plain English explanations before code fixes build confidence."
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
  title: "Reflections on Security UX Design",
  content: "This project demonstrates my ability to take a complex technical domain—web security—and turn it into an intuitive, empowering user experience. It's not just about making data look good; it's about making it actionable. The 'Cyber-Security Brutalism' aesthetic proved that security tools can be both functional and visually compelling.",
  insights: [
    {
      title: "Design Language Matters",
      description: "The 'Vault' aesthetic wasn't just decoration—it established credibility and trust. Users expect security tools to look secure."
    },
    {
      title: "AI as Partner, Not Replacement",
      description: "The most successful AI integrations augment human decision-making rather than trying to automate it entirely. Explain, then suggest."
    },
    {
      title: "Speed Enables Iteration",
      description: "Moving directly from sketches to code allowed rapid testing of interactions. The 'Apply Fix' button went through 5 iterations in 2 weeks."
    }
  ]
};
