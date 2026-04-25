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
  title: "The AI Challenge",
  challenge: "How do we test genuine understanding vs. buzzword familiarity without requiring hours of assessment?",
  dataStrategy: "Leveraged GPT-5 for dynamic question generation with prompt engineering, enabling adaptive difficulty that responds to user responses in real-time.",
  successMetric: "Compressed 2-hour traditional assessments into 5-minute adaptive tests while maintaining assessment accuracy through intelligent question selection."
};

// Project Overview Data - Minto Pyramid: Lead with Impact
export const litmusAIOverviewData: ProjectOverviewProps = {
  title: "Full MVP in 2 Months: AI Literacy Certification Platform",
  description: [
    "Shipped a complete AI literacy certification platform as a solo founder—adaptive testing engine, Stripe payments, verifiable credentials, and admin dashboard—in 8 weeks. The platform tests genuine AI understanding (not buzzword familiarity) in under 5 minutes through GPT-powered dynamic question generation.",
    "The market gap was clear: existing certifications require hours of commitment before providing any value. HR leaders needed quick, reliable signals of AI competency. Learners wanted validation before investing in expensive courses. I built the bridge.",
    "Technical architecture: React + Next.js frontend, GPT-5 for adaptive assessment across 4 AI domains (ML, prompt engineering, ethics, applications), Supabase backend, Stripe for flexible monetization (subscriptions + one-time + enterprise)."
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
  title: "The AI Literacy Validation Gap",
  introduction: "As AI tools proliferate across every industry, a fundamental problem emerged: How do you prove you actually understand AI beyond surface-level buzzwords? Organizations need a way to assess baseline AI knowledge before investing in training. Individuals need credentials that validate their competency. The market lacked a quick, credible, data-driven solution.",
  challenges: [
    {
      title: "The Buzzword Problem",
      description: "Everyone claims AI expertise, but traditional assessments can't distinguish genuine understanding from surface-level familiarity with trending terms.",
      icon: Target
    },
    {
      title: "Time Investment Barrier",
      description: "Existing certification programs require hours of testing, creating friction for learners who need quick assessment before committing to lengthy courses.",
      icon: Clock
    },
    {
      title: "One-Size-Fits-All Limitations",
      description: "Static tests fail to adapt to individual knowledge levels, making them either too easy for experts or overwhelming for beginners.",
      icon: TrendingUp
    }
  ],
  designGoals: [
    {
      title: "Rapid Assessment Without Sacrifice",
      description: "Create a testing system that accurately measures AI literacy in under 5 minutes through intelligent question selection.",
      icon: Zap
    },
    {
      title: "Adaptive Intelligence",
      description: "Build dynamic difficulty adjustment that tailors questions based on user responses, maximizing assessment accuracy.",
      icon: Brain
    },
    {
      title: "Credible Certification",
      description: "Establish verifiable credentials that employers and institutions can trust as genuine indicators of AI competency.",
      icon: Award
    }
  ]
};

// Research & Discovery Data
export const litmusAIResearchData: ResearchDiscoveryProps = {
  title: "Understanding the AI Education Landscape",
  introduction: "I began by creating the AI education and assessment landscape and performing a competitive analysis, and I also reviewed customer reviews and ratings from students, working professionals, and HR leaders to understand how these tools are used in practice. Everywhere I looked, I saw the same patterns: most solutions prioritize terminology over practical judgment, do not adapt to the user's level of proficiency, and generate a score with no prescription for what to do next, because HR leaders further emphasized the need for a rapid and reliable signal that corresponds to on-the-job performance, rather than just memorization of buzzwords.",
  researchSections: [
    {
      title: "User Research",
      description: "User Reviews Across Segments",
      items: [
        {
          text: "Students wanted quick validation before investing in expensive certification programs"
        },
        {
          text: "Professionals needed credentials they could showcase on LinkedIn to demonstrate career-relevant AI skills"
        },
        {
          text: "HR departments struggled to assess baseline AI knowledge across teams before purchasing training"
        }
      ]
    },
    {
      title: "Competitive Analysis",
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
      title: "Finding #1: Speed is Critical",
      description: "Users want to quickly gauge their level before committing time and money to courses. The market gap was rapid, accurate assessment."
    },
    {
      title: "Finding #2: Personalization Drives Engagement",
      description: "Adaptive testing that responds to knowledge level keeps users engaged and provides more accurate results than static tests."
    },
    {
      title: "Finding #3: Verification Matters",
      description: "Digital credentials need verifiable authenticity to hold value in professional contexts. Blockchain or institutional partnerships were essential."
    }
  ]
};

// Ideation & Strategy Data
export const litmusAIIdeationData: IdeationStrategyProps = {
  title: "Three Core Principles for AI Literacy Assessment",
  introduction: "As a solo founder with limited time, I needed clear strategic principles to guide rapid development. I focused on three core pillars that would differentiate Litmus AI from existing solutions while remaining technically achievable within 2 months.",
  keyInsights: [
    {
      highlight: "Adaptive intelligence drives accuracy.",
      description: "GPT-powered question generation that adjusts difficulty based on responses provides more accurate assessment than static question banks."
    },
    {
      highlight: "Time-to-value must be under 5 minutes.",
      description: "Users should get meaningful assessment results fast enough to make immediate decisions about their learning pathway."
    },
    {
      highlight: "Monetization enables sustainability.",
      description: "Flexible pricing (subscriptions + one-time purchases + enterprise packages) ensures the platform can scale beyond MVP."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Quick Onboarding",
      description: "User creates account and starts assessment in under 30 seconds"
    },
    {
      number: 2,
      title: "Adaptive Testing",
      description: "AI dynamically generates questions across ML, prompt engineering, ethics, and applications"
    },
    {
      number: 3,
      title: "Instant Results",
      description: "Receive proficiency score with visualization of strengths and knowledge gaps"
    },
    {
      number: 4,
      title: "Personalized Pathway",
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
      title: "Progressive Disclosure",
      description: "Start simple with the test interface, then progressively reveal complexity in results and recommendations as users advance.",
      icon: Sparkles
    },
    {
      title: "Data Visualization",
      description: "Use clear charts and radar diagrams to visualize proficiency across different AI domains, making abstract scores concrete.",
      icon: TrendingUp
    },
    {
      title: "Credibility Through Design",
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
      title: "Full MVP Launch",
      value: "2 months",
      description: "Shipped complete platform with AI literacy testing, Stripe payments, and verifiable certification",
      icon: CheckCircle
    },
    {
      title: "Adaptive Testing",
      value: "4 AI skill areas",
      description: "Implemented dynamic difficulty adjustment and real-time question generation across four core AI skill areas: machine learning, prompt engineering, ethics, and applications",
      icon: Brain
    },
    {
      title: "Revenue Streams",
      value: "3 models",
      description: "Built flexible monetization supporting subscriptions, one-time purchases, and enterprise packages",
      icon: TrendingUp
    },
    {
      title: "Scalable Platform",
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
  title: "Trade-offs: What We Built vs. What We Cut",
  introduction: "With only 2 months as a solo founder, every feature decision was a strategic trade-off. Here's what made the cut—and what didn't—with full transparency on the reasoning.",
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
  title: "What I Learned Building Solo",
  challenges: [
    {
      title: "Adaptive Testing Complexity",
      description: "Initially, I tried to build custom adaptive logic from scratch. The complexity exploded quickly. Solution: Leverage GPT-5's capabilities for dynamic question generation with prompt engineering, dramatically reducing development time while improving question quality."
    },
    {
      title: "Balancing Speed with Quality",
      description: "With only 2 months, every feature decision was a trade-off. Solution: Focus on core user flow (test → results → recommendations → certification) and ruthlessly cut nice-to-haves. Admin dashboard came before fancy analytics."
    },
    {
      title: "Solo Technical Debt",
      description: "Working alone meant every shortcut compounded. Solution: Document architectural decisions in real-time, use consistent patterns, and resist the temptation to hack together one-off solutions that would haunt me later."
    }
  ],
  learnings: [
    {
      title: "Use AI to Build AI Products",
      description: "Prompt engineering can replace complex custom algorithms. Focus on UX of adaptive testing rather than reinventing assessment theory."
    },
    {
      title: "MVP Means Shipped",
      description: "Perfect is the enemy of shipped. Users care more about working features than polished extras."
    },
    {
      title: "Code Quality Matters",
      description: "Consistent patterns scale better than clever shortcuts. Clear documentation protects future iteration speed."
    }
  ],
  nextSteps: [
    {
      title: "Expand Question Bank",
      description: "Add more AI domains including computer vision, NLP, and reinforcement learning",
      icon: BookOpen
    },
    {
      title: "Enterprise Features",
      description: "Build team management dashboard and bulk certification tracking for corporate clients",
      icon: Users
    },
    {
      title: "Mobile App",
      description: "Create native mobile experience for on-the-go learning and assessment",
      icon: Monitor
    }
  ]
};

// Reflection Data
export const litmusAIReflectionData: ReflectionProps = {
  title: "Reflections on Building AI Assessment",
  content: "Building Litmus AI as a solo founder taught me that the most valuable design skill isn't pixel-pushing—it's strategic scope management. Every day required decisions about what not to build, which features to defer, and how to maximize impact with minimal complexity. The irony of using AI to assess AI literacy wasn't lost on me. GPT-5 became both the subject matter and the tool enabling rapid development.",
  insights: [
    {
      title: "Speed as Differentiator",
      description: "What surprised me most was how much users valued speed over depth. The 5-minute assessment constraint, initially a challenge, became the platform's strongest differentiator."
    },
    {
      title: "Shipping Beats Perfection",
      description: "If I could do it over, I'd invest more time upfront in the scoring algorithm. That said, perfect is the enemy of shipped—and shipped beats perfect every time."
    },
    {
      title: "AI Application",
      description: "Using AI to assess AI literacy felt appropriately for this project. GPT-5 became both the subject matter and the tool enabling rapid development of the platform."
    }
  ]
};
