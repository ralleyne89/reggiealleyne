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

// Project Overview Data
export const litmusAIOverviewData: ProjectOverviewProps = {
  title: "Measuring AI Literacy in 5 Minutes or Less",
  description: [
    "With AI becoming ubiquitous across industries, I noticed a critical gap: everyone talks about AI, but how do you actually measure if someone understands it? As a solo founder, I set out to create a testing platform that could assess genuine AI literacy—not just buzzword familiarity—in under 5 minutes.",
    "Traditional assessments take hours and lack the adaptivity needed for such a rapidly evolving field. I wanted to build something that could dynamically adjust difficulty based on responses, provide instant feedback, and offer clear pathways for improvement.",
    "The Challenge: Create an end-to-end AI literacy certification platform from scratch—adaptive testing engine, personalized learning recommendations, payment infrastructure, and verifiable credentials—all within 2 months as a solo team."
  ],
  projectDetails: [
    {
      label: "My Role",
      value: "Founder & Product Designer, AI Strategist",
      icon: Briefcase
    },
    {
      label: "Team Size",
      value: "1 (Solo Founder)",
      icon: Users
    },
    {
      label: "Timeline",
      value: "2 months from concept to launch",
      icon: Clock
    }
  ],
  toolDetails: [
    {
      label: "Design & Dev",
      value: "React + Next.js, Figma for wireframes",
      icon: Image
    },
    {
      label: "AI Engine",
      value: "GPT-4/GPT-5 for adaptive assessment",
      icon: Brain
    },
    {
      label: "Platform",
      value: "Web-based, mobile-responsive",
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
  introduction: "I began by mapping the current state of AI education and assessment. Through competitive analysis and user interviews with students, professionals, and HR departments, clear patterns emerged around what was missing from existing solutions.",
  researchSections: [
    {
      title: "User Interviews Across Segments",
      description: "Spoke with three key personas: students exploring AI careers, professionals upskilling, and corporate HR managers evaluating training ROI.",
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
      text: "Typography: Inter for clean readability across devices, weight variations to establish hierarchy without clutter"
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
      description: "Consistent patterns scale better than clever tricks. Comments are love letters to your future self."
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
      title: "Meta AI Application",
      description: "Using AI to assess AI literacy felt appropriately meta. GPT-5 became both the subject matter and the tool enabling rapid development of the platform."
    }
  ]
};
