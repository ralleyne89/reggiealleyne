import {
  Briefcase,
  Users,
  Clock,
  Target,
  Brain,
  Award,
  TrendingUp,
  Zap,
  BookOpen,
  CheckCircle,
  Code,
  Sparkles,
  Camera,
  Search,
  DollarSign,
  Layers,
  Lightbulb,
  Heart,
} from "lucide-react";
import { ProjectOverviewProps } from "@/components/project/common/ProjectOverview";
import { ProblemSpaceProps } from "@/components/project/common/ProblemSpace";
import { ResearchDiscoveryProps } from "@/components/project/common/ResearchDiscovery";
import { IdeationStrategyProps } from "@/components/project/common/IdeationStrategy";
import { FinalUIDesignProps } from "@/components/project/common/FinalUIDesign";
import { OutcomesImpactProps } from "@/components/project/common/OutcomesImpact";
import { ChallengesLearningsProps } from "@/components/project/common/ChallengesLearnings";
import { ReflectionProps } from "@/components/project/common/Reflection";

// Project Overview Data - Minto Pyramid: Lead with Impact
export const scentStackOverviewData: ProjectOverviewProps = {
  title: "1700+ Fragrance Dupes: Democratizing Luxury Scents in 3 Weeks",
  description: [
    "Shipped a complete AI-powered fragrance discovery platform as a solo founder—comprehensive dupe database, GPT-5 dream scent matching, computer vision layering suggestions, and A-Z brand browser—in just 3 weeks. Users save 90% on average when switching from luxury originals to affordable alternatives.",
    "The problem was personal: as a fragrance collector, I experienced the frustration of paying premium prices for scents that had nearly identical affordable versions. I also knew the art of layering fragrances but had no way to share that knowledge with beginners. ScentStack became the solution.",
    "Technical architecture: React + Tailwind CSS frontend with editorial design system, GPT-5 integration for natural language scent matching, computer vision pipeline for photo-based fragrance analysis, comprehensive database of 1700+ dupes across 150+ designer brands.",
  ],
  projectDetails: [
    {
      label: "Outcome",
      value: "1700+ dupes, 90% avg savings",
      icon: CheckCircle,
    },
    {
      label: "Role",
      value: "Solo Founder & Product Designer",
      icon: Briefcase,
    },
    {
      label: "Team",
      value: "1 (Solo)",
      icon: Users,
    },
  ],
  toolDetails: [
    {
      label: "Frontend",
      value: "React + Tailwind CSS",
      icon: Code,
    },
    {
      label: "AI Engine",
      value: "GPT-5 + Computer Vision",
      icon: Brain,
    },
    {
      label: "Timeline",
      value: "3 weeks",
      icon: Clock,
    },
  ],
};

// Problem Space Data
export const scentStackProblemSpaceData: ProblemSpaceProps = {
  title: "The Fragrance Industry's Hidden Inequity",
  introduction:
    "Luxury fragrances command premium prices—often $200-400 for a bottle—despite the fact that nearly identical scent profiles exist at a fraction of the cost. Meanwhile, fragrance layering (combining scents for unique profiles) remains an insider art with no accessible guidance, and the gap between imagining your perfect scent and actually finding it has no bridge.",
  challenges: [
    {
      title: "The Luxury Fragrance Tax",
      description:
        "Identical scent formulas cost 10x more based solely on brand prestige. Consumers lack visibility into affordable alternatives that smell nearly identical.",
      icon: DollarSign,
    },
    {
      title: "Layering Complexity",
      description:
        "Fragrance enthusiasts know that layering creates unique signature scents, but beginners have no guidance on which fragrances complement each other.",
      icon: Layers,
    },
    {
      title: "The Dream Scent Gap",
      description:
        "People can describe their ideal scent in words—'warm vanilla with smoky undertones'—but have no way to translate that vision into actual product recommendations.",
      icon: Lightbulb,
    },
  ],
  designGoals: [
    {
      title: "Transparent Price Comparison",
      description:
        "Show luxury originals alongside affordable dupes with clear savings percentages, democratizing access to premium scent experiences.",
      icon: Search,
    },
    {
      title: "AI-Powered Accessibility",
      description:
        "Use GPT-5 and computer vision to make fragrance expertise accessible—from layering suggestions to dream scent matching.",
      icon: Brain,
    },
    {
      title: "Collector's Resource",
      description:
        "Create the comprehensive fragrance database I wished existed as a collector—organized, searchable, and constantly updated.",
      icon: Heart,
    },
  ],
};

// Research & Discovery Data
export const scentStackResearchData: ResearchDiscoveryProps = {
  title: "Understanding the Fragrance Discovery Landscape",
  introduction:
    "As an active fragrance collector and community member, I had direct access to user pain points. I analyzed existing platforms (Fragrantica, Parfumo), fragrance subreddits, and collector communities to understand what was missing. The pattern was clear: information was scattered, price comparisons were manual, and AI potential was untapped.",
  researchSections: [
    {
      title: "Community Research",
      description: "Insights from fragrance collector communities",
      items: [
        {
          text: "Reddit's r/fragrance community constantly asks for dupe recommendations—information exists but is fragmented across thousands of posts",
        },
        {
          text: "Collectors share layering combinations but there's no systematic way for beginners to discover complementary scents",
        },
        {
          text: "Users describe desired scents in natural language but existing databases only support structured search",
        },
      ],
    },
    {
      title: "Competitive Analysis",
      description: "Evaluated existing fragrance platforms",
      items: [
        {
          text: "Fragrantica offers extensive reviews but no price comparison or dupe matching functionality",
        },
        {
          text: "Parfumo provides community ratings but lacks AI-powered discovery features",
        },
        {
          text: "No platform offers photo-based layering recommendations or natural language scent matching",
        },
      ],
    },
  ],
  keyFindings: [
    {
      title: "Finding #1: Information Fragmentation",
      description:
        "Dupe information exists but is scattered across forums, requiring manual research. A centralized, searchable database would save hours of effort.",
    },
    {
      title: "Finding #2: AI Opportunity",
      description:
        "GPT-5's natural language capabilities could bridge the gap between scent descriptions and product recommendations—a feature no competitor offers.",
    },
    {
      title: "Finding #3: Visual Learning",
      description:
        "Fragrance enthusiasts often photograph their collections. Computer vision could analyze these photos to suggest layering combinations.",
    },
  ],
};

// Ideation & Strategy Data
export const scentStackIdeationData: IdeationStrategyProps = {
  title: "Three Pillars of Fragrance Discovery",
  introduction:
    "With 3 weeks and a clear personal vision, I focused on three core features that would differentiate ScentStack while remaining achievable as a solo developer. Each pillar addresses a specific user pain point I'd experienced firsthand.",
  keyInsights: [
    {
      highlight: "Discover: Democratize luxury scents.",
      description:
        "A comprehensive dupe database with transparent price comparisons, showing users exactly how much they can save with affordable alternatives.",
    },
    {
      highlight: "Dream Lab: Translate imagination to reality.",
      description:
        "GPT-5 integration that interprets natural language scent descriptions and recommends specific fragrances or combinations.",
    },
    {
      highlight: "Layering Lab: Make expertise accessible.",
      description:
        "Computer vision that analyzes photos of existing fragrances and suggests complementary scents for unique layered profiles.",
    },
  ],
  flowSteps: [
    {
      number: 1,
      title: "Discover",
      description: "Browse 150+ brands, compare original vs. dupe pricing, see savings percentages",
    },
    {
      number: 2,
      title: "Search",
      description: "Filter by notes, brand, price range, or similarity score across 1700+ dupes",
    },
    {
      number: 3,
      title: "Dream",
      description: "Describe your ideal scent in natural language, receive AI-powered recommendations",
    },
    {
      number: 4,
      title: "Layer",
      description: "Upload photo of your fragrance, get personalized combination suggestions",
    },
    {
      number: 5,
      title: "Save",
      description: "Average 90% savings when choosing affordable alternatives to luxury originals",
    },
  ],
};

// Final UI Design Data
export const scentStackUIData: FinalUIDesignProps = {
  introduction:
    "The visual design needed to feel premium enough to discuss luxury fragrances while remaining accessible and approachable. I chose an editorial aesthetic with purple accents and Bento-style card layouts that organize complex information elegantly.",
  designHighlights: [
    {
      text: "Editorial aesthetic: Clean typography and generous whitespace convey sophistication without pretension, appropriate for a fragrance-focused platform",
    },
    {
      text: "Bento-style cards: Modular card layouts organize dupes, brand information, and AI features in digestible chunks",
    },
    {
      text: "Purple accent system: Primary purple (#8B5CF6) conveys luxury and creativity, complementing fragrance imagery without competing",
    },
    {
      text: "Price comparison prominently displayed: Savings percentages shown in bold, making the value proposition immediately visible",
    },
    {
      text: "Mobile-first responsive design: Fragrance discovery often happens in stores—the interface works seamlessly on phone screens",
    },
    {
      text: "Accessible AI interfaces: Dream Lab and Layering Lab features designed to feel magical without being intimidating",
    },
  ],
  uiFeatures: [
    {
      title: "Price Comparison Cards",
      description: "Side-by-side display of luxury originals and affordable dupes with prominent savings percentages.",
      icon: DollarSign,
    },
    {
      title: "Dream Lab Interface",
      description:
        "Natural language input field with conversational AI that interprets scent descriptions and returns personalized recommendations.",
      icon: Sparkles,
    },
    {
      title: "Layering Lab Upload",
      description:
        "Photo upload flow with computer vision analysis, returning complementary fragrance suggestions with layering guidance.",
      icon: Camera,
    },
  ],
  uiImages: [
    {
      src: "/images/scentstack-hero.png",
      alt: "ScentStack hero: Discover your perfect scent",
      title: "Hero: Fragrance Discovery Platform",
    },
    {
      src: "/images/scentstack-dupes.png",
      alt: "Dupe comparison showing original vs. affordable alternative",
      title: "Dupe Comparison Cards",
    },
    {
      src: "/images/scentstack-dreamlab.png",
      alt: "Dream Lab AI interface for natural language scent matching",
      title: "Dream Lab AI Feature",
    },
    {
      src: "/images/scentstack-layering.png",
      alt: "Layering Lab photo upload and suggestion interface",
      title: "Layering Lab",
    },
  ],
};

// Outcomes & Impact Data
export const scentStackOutcomesData: OutcomesImpactProps = {
  metrics: [
    {
      title: "Fragrance Dupes",
      value: "1700+",
      description: "Comprehensive database of affordable alternatives to luxury fragrances, continuously expanding",
      icon: Search,
    },
    {
      title: "Average Savings",
      value: "90%",
      description: "Users save on average when choosing dupe alternatives over luxury originals",
      icon: DollarSign,
    },
    {
      title: "Designer Brands",
      value: "150+",
      description: "Complete A-Z browser covering major designer and niche fragrance houses",
      icon: Award,
    },
    {
      title: "Build Time",
      value: "3 weeks",
      description: "Solo development from concept to complete platform with AI features",
      icon: Zap,
    },
  ],
};

// Challenges & Learnings Data
export const scentStackChallengesData: ChallengesLearningsProps = {
  title: "What I Learned Building from Passion",
  challenges: [
    {
      title: "Data Collection at Scale",
      description:
        "Building a database of 1700+ dupes required systematic data collection and validation. Solution: Leveraged fragrance community resources and created structured data entry workflows to maintain quality while moving fast.",
    },
    {
      title: "AI Integration Complexity",
      description:
        "GPT-5's scent matching required careful prompt engineering to translate subjective descriptions into concrete recommendations. Solution: Developed specialized prompts that capture note profiles, longevity preferences, and occasion contexts.",
    },
    {
      title: "Photo Analysis Accuracy",
      description:
        "Computer vision needed to identify fragrance bottles from various angles and lighting conditions. Solution: Focused on major brands first, building a recognition pipeline that could be expanded over time.",
    },
  ],
  learnings: [
    {
      title: "Domain Expertise Accelerates Development",
      description:
        "Being a fragrance collector meant I understood user needs intuitively. Personal passion projects benefit from deep domain knowledge that would take months to acquire otherwise.",
    },
    {
      title: "AI as Feature Multiplier",
      description:
        "GPT-5 and computer vision transformed what would have been a static database into an intelligent discovery platform. AI features differentiate and delight.",
    },
    {
      title: "Community Value",
      description:
        "Building tools for a community you belong to creates alignment between user needs and product decisions. Authenticity drives better products.",
    },
  ],
  nextSteps: [
    {
      title: "User-Generated Dupes",
      description: "Allow community submissions of new dupe discoveries with verification workflow",
      icon: Users,
    },
    {
      title: "Scent Profile Quiz",
      description: "Onboarding quiz that builds user preference profiles for personalized recommendations",
      icon: Target,
    },
    {
      title: "Retailer Integration",
      description: "Direct links to purchase dupes from verified retailers with price tracking",
      icon: TrendingUp,
    },
  ],
};

// Reflection Data
export const scentStackReflectionData: ReflectionProps = {
  title: "Reflections on Building from Passion",
  content:
    "ScentStack represents a different kind of project—one born from genuine personal interest rather than market opportunity. As a fragrance collector, I'd spent years accumulating knowledge about dupes, layering, and the subjective language of scent. This platform became a way to systematize that knowledge and share it with others facing the same discoveries I'd made through trial and error.",
  insights: [
    {
      title: "Passion Projects Ship Faster",
      description:
        "When you're building for yourself, decisions come quickly. I didn't need user research to understand pain points—I'd lived them. The 3-week timeline was possible because domain expertise eliminated guesswork.",
    },
    {
      title: "AI Democratizes Expertise",
      description:
        "GPT-5 and computer vision allowed me to encode fragrance knowledge that typically takes years to develop. AI features made ScentStack more than a database—it became a knowledgeable companion for fragrance discovery.",
    },
    {
      title: "Personal Investment Drives Quality",
      description:
        "I'll use this platform myself for years. That knowledge shaped every decision—from data accuracy to mobile responsiveness. Building for yourself creates accountability that external deadlines can't match.",
    },
  ],
};
