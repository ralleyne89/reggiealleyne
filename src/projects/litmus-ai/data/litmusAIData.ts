import {
  Briefcase,
  Users,
  Clock,
  Image,
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
  Sparkles
} from "lucide-react";
import { ProjectOverviewProps } from "@/components/project/common/ProjectOverview";
import { ProblemSpaceProps } from "@/components/project/common/ProblemSpace";
import { ResearchDiscoveryProps } from "@/components/project/common/ResearchDiscovery";
import { IdeationStrategyProps } from "@/components/project/common/IdeationStrategy";
import { FinalUIDesignProps } from "@/components/project/common/FinalUIDesign";
import { OutcomesImpactProps } from "@/components/project/common/OutcomesImpact";
import { ChallengesLearningsProps } from "@/components/project/common/ChallengesLearnings";
import { ReflectionProps } from "@/components/project/common/Reflection";
import { AIProductThinkingProps } from "@/components/project/common/AIProductThinking";

// AI PM Lens Data
export const litmusAIAIPMData: AIProductThinkingProps = {
  title: "Testing AI judgment quickly",
  challenge: "How do we test genuine understanding vs. buzzword familiarity without requiring hours of assessment?",
  dataStrategy: "Used GPT-5 for dynamic question generation, with prompt guardrails that changed difficulty based on each answer.",
  successMetric: "Compressed a traditional two-hour assessment into a five-minute test without turning the result into a generic quiz score."
};

// Project Overview Data - Minto Pyramid: Lead with Impact
export const litmusAIOverviewData: ProjectOverviewProps = {
  title: "AI literacy certification MVP in 2 months",
  description: [
    "I shipped an AI literacy certification platform as a solo founder in 8 weeks: adaptive testing, Stripe payments, verifiable credentials, and an admin dashboard.",
    "Most certification products ask users to commit hours before they learn anything useful. HR leaders needed a faster baseline signal. Learners needed to know whether a course was worth their time.",
    "The product uses a React and Next.js frontend, GPT-5 assessment prompts across machine learning, prompt engineering, ethics, and applications, a Supabase backend, and Stripe for subscription, one-time, and enterprise payments."
  ],
  projectDetails: [
    {
      label: "Outcome",
      value: "Full MVP shipped in 2 months",
      icon: CheckCircle
    },
    {
      label: "Role",
      value: "Solo Founder, Product Designer, AI Strategist",
      icon: Briefcase
    },
    {
      label: "Team",
      value: "1 (Solo)",
      icon: Users
    }
  ],
  toolDetails: [
    {
      label: "Frontend",
      value: "React + Next.js",
      icon: Code
    },
    {
      label: "AI Engine",
      value: "GPT-5 Adaptive Assessment",
      icon: Brain
    },
    {
      label: "Backend",
      value: "Supabase + Stripe",
      icon: Monitor
    }
  ]
};

// Problem Space Data
export const litmusAIProblemSpaceData: ProblemSpaceProps = {
  title: "The AI literacy validation gap",
  introduction: "AI tools were moving into every team, but most people had no quick way to prove they understood more than the buzzwords. Organizations needed a baseline before buying training. Individuals needed a credential that meant something. The missing piece was a fast assessment with enough substance to trust.",
  challenges: [
    {
      title: "The buzzword problem",
      description: "Everyone claims AI expertise, but traditional assessments can't distinguish genuine understanding from surface-level familiarity with trending terms.",
      icon: Target
    },
    {
      title: "Time investment barrier",
      description: "Existing certification programs require hours of testing, creating friction for learners who need quick assessment before committing to lengthy courses.",
      icon: Clock
    },
    {
      title: "One-size-fits-all tests",
      description: "Static tests fail to adapt to individual knowledge levels, making them either too easy for experts or overwhelming for beginners.",
      icon: TrendingUp
    }
  ],
  designGoals: [
    {
      title: "Fast without feeling thin",
      description: "Create a testing system that accurately measures AI literacy in under 5 minutes through intelligent question selection.",
      icon: Zap
    },
    {
      title: "Adaptive difficulty",
      description: "Build dynamic difficulty adjustment that tailors questions based on user responses, maximizing assessment accuracy.",
      icon: Brain
    },
    {
      title: "Credible certification",
      description: "Establish verifiable credentials that employers and institutions can trust as genuine indicators of AI competency.",
      icon: Award
    }
  ]
};

// Research & Discovery Data
export const litmusAIResearchData: ResearchDiscoveryProps = {
  title: "What the market was missing",
  introduction: "I mapped AI education and assessment products, then read reviews from students, working professionals, and HR buyers. The same pattern kept showing up: most tools tested terminology, not judgment; few adapted to the user's level; and the score rarely explained what to do next.",
  researchSections: [
    {
      title: "User research",
      description: "Review patterns across segments",
      items: [
        {
          text: "Students wanted quick validation before investing in expensive certification programs"
        },
        {
          text: "Professionals needed credentials they could share on LinkedIn to show career-relevant AI skills"
        },
        {
          text: "HR departments struggled to assess baseline AI knowledge across teams before purchasing training"
        }
      ]
    },
    {
      title: "Competitive analysis",
      description: "Evaluated existing platforms including Coursera, LinkedIn Learning, and specialized AI certification programs.",
      items: [
        {
          text: "Most require 4-8 hours of commitment before providing any assessment results"
        },
        {
          text: "Static question banks fail to challenge advanced users while overwhelming beginners"
        },
        {
          text: "Certificates often lack credibility or verification mechanisms"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Finding #1: speed mattered",
      description: "Users want to quickly gauge their level before committing time and money to courses. The market gap was rapid, accurate assessment."
    },
    {
      title: "Finding #2: adaptive tests kept people engaged",
      description: "Adaptive testing that responds to knowledge level keeps users engaged and provides more accurate results than static tests."
    },
    {
      title: "Finding #3: credentials needed proof",
      description: "Digital credentials need verifiable authenticity to hold value in professional contexts. Blockchain or institutional partnerships were essential."
    }
  ]
};

// Ideation & Strategy Data
export const litmusAIIdeationData: IdeationStrategyProps = {
  title: "Three product principles",
  introduction: "As a solo founder, I needed a small set of principles that could survive the timeline. The product had to be fast, adaptive, and credible enough that the result felt useful after one short session.",
  keyInsights: [
    {
      highlight: "Adaptive questions gave the score more signal.",
      description: "GPT-powered question generation adjusted difficulty based on responses, so the assessment could probe beyond a fixed question bank."
    },
    {
      highlight: "Users needed a result in under 5 minutes.",
      description: "The assessment had to be short enough for someone to finish before deciding whether to invest in training."
    },
    {
      highlight: "Pricing had to support more than one buyer.",
      description: "Subscriptions, one-time purchases, and enterprise packages mapped to students, professionals, and team buyers."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Quick onboarding",
      description: "User creates account and starts assessment in under 30 seconds"
    },
    {
      number: 2,
      title: "Adaptive testing",
      description: "AI dynamically generates questions across ML, prompt engineering, ethics, and applications"
    },
    {
      number: 3,
      title: "Instant results",
      description: "Receive proficiency score with visualization of strengths and knowledge gaps"
    },
    {
      number: 4,
      title: "Personalized pathway",
      description: "Get course recommendations mapped to specific areas needing improvement"
    },
    {
      number: 5,
      title: "Certification",
      description: "Complete recommended modules and earn verifiable AI Literacy Certificate"
    }
  ]
};

// Final UI Design Data
export const litmusAIUIData: FinalUIDesignProps = {
  introduction: "The visual design needed to balance technical credibility with approachability. Users ranging from students to executives would interact with the platform, so the interface had to feel professional without being intimidating.",
  designHighlights: [
    {
      text: "Progressive disclosure: Start simple with the test interface, then progressively reveal complexity in results and recommendations as users advance"
    },
    {
      text: "Data visualization: Clear charts and radar diagrams to visualize proficiency across different AI domains, making abstract scores concrete"
    },
    {
      text: "Credibility through design: Professional typography, consistent spacing, and thoughtful color choices signal quality and trustworthiness"
    },
    {
      text: "Color system: Primary blue for trust and intelligence, accent green for success states, neutral grays for professional context"
    },
    {
      text: "Typography: Poppins for clean readability across devices, weight variations to establish hierarchy without clutter"
    },
    {
      text: "Interactions: Immediate feedback on answer selection, smooth transitions between questions, celebratory animations on completion"
    }
  ],
  uiFeatures: [
    {
      title: "Progressive disclosure",
      description: "Start simple with the test interface, then progressively reveal complexity in results and recommendations as users advance.",
      icon: Sparkles
    },
    {
      title: "Data visualization",
      description: "Use clear charts and radar diagrams to visualize proficiency across different AI domains, making abstract scores concrete.",
      icon: TrendingUp
    },
    {
      title: "Credibility through design",
      description: "Professional typography, consistent spacing, and thoughtful color choices signal quality and trustworthiness.",
      icon: Shield
    }
  ],
  uiImages: [
    {
      src: "/images/litmusai-1.png",
      alt: "Litmus AI hero: Assess → Activate → Certify AI Talent",
      title: "Hero: Assess > Activate > Certify AI Talent"
    },
    {
      src: "/images/litmusai-2.png",
      alt: "Transform teams with measurable AI mastery overview",
      title: "Transform Teams Overview"
    },
    {
      src: "/images/litmusai-3.png",
      alt: "Assessment interface — Every company should be AI ready",
      title: "Assessment Interface"
    },
    {
      src: "/images/litmusai-4.png",
      alt: "Customer testimonials",
      title: "Testimonials"
    },
    {
      src: "/images/litmusai-5.png",
      alt: "Before You Begin assessment modal",
      title: "Before You Begin Modal"
    }
  ]
};

// Outcomes & Impact Data
export const litmusAIOutcomesData: OutcomesImpactProps = {
  metrics: [
    {
      title: "Full MVP launch",
      value: "2 months",
      description: "Shipped complete platform with AI literacy testing, Stripe payments, and verifiable certification",
      icon: CheckCircle
    },
    {
      title: "Adaptive testing",
      value: "4 AI skill areas",
      description: "Implemented dynamic difficulty adjustment and real-time question generation across four core AI skill areas: machine learning, prompt engineering, ethics, and applications",
      icon: Brain
    },
    {
      title: "Revenue streams",
      value: "3 models",
      description: "Built flexible monetization supporting subscriptions, one-time purchases, and enterprise packages",
      icon: TrendingUp
    },
    {
      title: "Solo-built platform",
      value: "Solo built",
      description: "Deployed on Netlify + Supabase with admin dashboard for tracking users, scores, and payments",
      icon: Code
    }
  ]
};

// Trade-offs Data - What we built vs. what we cut
export interface TradeoffItem {
  built: string;
  rejected: string;
  reasoning: string;
}

export const litmusAITradeoffsData = {
  title: "What shipped and what waited",
  introduction: "With 2 months and one builder, every feature had to earn its place. These are the tradeoffs that shaped the MVP.",
  tradeoffs: [
    {
      built: "5-minute adaptive test",
      rejected: "30-minute comprehensive assessment",
      reasoning: "User testing showed 70% drop-off after 7 minutes. Speed beat thoroughness. The market gap was rapid assessment, not exhaustive testing."
    },
    {
      built: "Simple admin dashboard",
      rejected: "Advanced analytics with cohort analysis",
      reasoning: "Admin functionality needed to ship first to track users and payments. Fancy analytics could iterate post-launch once we had data to analyze."
    },
    {
      built: "GPT-5 dynamic question generation",
      rejected: "Custom adaptive algorithm from scratch",
      reasoning: "Building custom adaptive logic would have taken 3+ months alone. Prompt engineering let us leverage GPT-5's capabilities, dramatically reducing dev time while improving question quality."
    },
    {
      built: "3 revenue models (subscription, one-time, enterprise)",
      rejected: "Single pricing tier",
      reasoning: "Different user segments (students, professionals, HR teams) have different willingness-to-pay. Flexibility was essential for market validation even if it added complexity."
    }
  ]
};

// Challenges & Learnings Data
export const litmusAIChallengesData: ChallengesLearningsProps = {
  title: "What building solo taught me",
  challenges: [
    {
      title: "Adaptive testing got complex fast",
      description: "I first tried to build custom adaptive logic from scratch. The complexity grew quickly, so I moved the hard part into GPT-5 prompts and focused my time on question quality, scoring, and the user flow."
    },
    {
      title: "Speed forced sharper decisions",
      description: "The core loop mattered most: test, results, recommendations, certification. Nice-to-haves waited. The admin dashboard shipped before deeper analytics because I needed to see users, scores, and payments."
    },
    {
      title: "Solo technical debt compounds",
      description: "Working alone made every shortcut tempting. I documented architecture decisions as I went, reused patterns, and avoided one-off code where it would slow the next iteration."
    }
  ],
  learnings: [
    {
      title: "Use AI where it replaces real complexity",
      description: "Prompt engineering can replace complex custom algorithms. Focus on UX of adaptive testing rather than reinventing assessment theory."
    },
    {
      title: "An MVP has to ship",
      description: "The shipped flow taught me more than another month of polish would have. Users needed working assessment, results, and payment paths first."
    },
    {
      title: "Code quality buys time later",
      description: "Consistent patterns scale better than clever shortcuts. Clear documentation protects future iteration speed."
    }
  ],
  nextSteps: [
    {
      title: "Expand the question bank",
      description: "Add more AI domains including computer vision, NLP, and reinforcement learning",
      icon: BookOpen
    },
    {
      title: "Enterprise features",
      description: "Build team management dashboard and bulk certification tracking for corporate clients",
      icon: Users
    },
    {
      title: "Mobile app",
      description: "Create native mobile experience for on-the-go learning and assessment",
      icon: Monitor
    }
  ]
};

// Reflection Data
export const litmusAIReflectionData: ReflectionProps = {
  title: "What I took from the build",
  content: "Building Litmus AI reminded me that solo product work is mostly scope management. The design work was deciding what to cut, what to fake responsibly, and where AI could do real product work instead of sitting in the pitch deck.",
  insights: [
    {
      title: "Speed became the differentiator",
      description: "What surprised me most was how much users valued speed over depth. The 5-minute assessment constraint, initially a challenge, became the platform's strongest differentiator."
    },
    {
      title: "Shipping beat polish",
      description: "If I could do it over, I would invest more time upfront in scoring. But the 8-week constraint forced the right question: what is good enough to learn from real users?"
    },
    {
      title: "AI had to earn its place",
      description: "Using AI to assess AI literacy only worked because it changed the product behavior. GPT-5 powered adaptive question generation instead of sitting on the page as a feature label."
    }
  ]
};
