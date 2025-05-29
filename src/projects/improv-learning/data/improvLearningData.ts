
import { 
  User, 
  Clock, 
  Users, 
  Palette, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  CheckCircle,
  AlertCircle,
  Zap,
  ArrowRight,
  Search,
  Shield,
  Smartphone
} from "lucide-react";

// Overview Data
export const improvLearningOverviewData = {
  title: "Project Overview",
  description: [
    "Improv Traffic School partnered with GEICO to create a conversion-optimized landing page for their online defensive driving course. The goal was to boost signups by clearly communicating course benefits while maintaining trust and usability across all devices.",
    "This project focused on removing user friction, building trust, and creating a clear path to enrollment for visitors who may be unfamiliar with online traffic schools or uncertain about course legitimacy."
  ],
  projectDetails: [
    {
      label: "Role",
      value: "UI Designer",
      icon: User,
    },
    {
      label: "Duration",
      value: "3 weeks",
      icon: Clock,
    },
    {
      label: "Team Size",
      value: "3 people",
      icon: Users,
    }
  ],
  toolDetails: [
    {
      label: "Design Tools",
      value: "Figma, Adobe Photoshop",
      icon: Palette,
    },
    {
      label: "Development",
      value: "HTML/CSS",
      icon: Lightbulb,
    },
    {
      label: "Focus Area",
      value: "Conversion Rate Optimization",
      icon: Target,
    }
  ]
};

// Problem Space Data
export const improvLearningProblemSpaceData = {
  title: "The Challenge",
  introduction: "Users visiting the site were either unfamiliar with online traffic schools or unsure whether the course was legitimate and easy to complete. The landing page needed to remove friction, build trust, and guide users to sign up quickly—especially from mobile devices.",
  challenges: [
    "Users questioned the legitimacy of online traffic school courses",
    "Visitors couldn't quickly understand what they would get from the course", 
    "The signup process needed to work seamlessly on mobile devices",
    "Too much information created friction in the conversion process"
  ],
  designGoals: [
    "Build immediate trust and credibility with users",
    "Create clear value proposition communication",
    "Optimize mobile conversion experience",
    "Reduce information overload and friction"
  ],
  painPoints: [
    {
      title: "Trust Concerns",
      description: "Users questioned the legitimacy of online traffic school courses",
      icon: AlertCircle
    },
    {
      title: "Unclear Value Proposition",
      description: "Visitors couldn't quickly understand what they would get from the course",
      icon: Target
    },
    {
      title: "Mobile Experience",
      description: "The signup process needed to work seamlessly on mobile devices",
      icon: Smartphone
    },
    {
      title: "Information Overload",
      description: "Too much information created friction in the conversion process",
      icon: Zap
    }
  ]
};

// Research Discovery Data
export const improvLearningResearchData = {
  title: "Research & Discovery",
  introduction: "I mapped out user priorities to understand the decision-making process: 'Is this legit?' → 'What do I get?' → 'Where do I sign up?' This helped inform the content hierarchy and design decisions.",
  researchSections: [
    {
      title: "User Journey Analysis",
      description: "Analyzed the path from awareness to conversion to identify friction points",
      items: [
        { text: "Mapped user decision-making process" },
        { text: "Identified trust as primary concern" },
        { text: "Located conversion bottlenecks" }
      ]
    },
    {
      title: "Competitive Research",
      description: "Studied other traffic school landing pages to understand industry standards",
      items: [
        { text: "Analyzed competitor conversion tactics" },
        { text: "Identified best practices for trust building" },
        { text: "Evaluated mobile optimization approaches" }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Trust Before Benefits",
      description: "Users needed immediate reassurance about legitimacy before considering benefits"
    },
    {
      title: "Mobile-First Traffic",
      description: "Majority of traffic came from mobile devices, requiring optimized mobile experience"
    },
    {
      title: "GEICO Partnership Value",
      description: "The GEICO brand association significantly increased user trust and credibility"
    }
  ]
};

// Ideation Strategy Data
export const improvLearningIdeationData = {
  title: "Design Strategy",
  introduction: "The design strategy focused on creating a clear top-down content flow with emphasis on trust-building elements, minimal distractions, and high-visibility CTAs that would guide users seamlessly through the enrollment process.",
  keyInsights: [
    "Users prioritize trust validation before exploring benefits",
    "Mobile-first design approach essential for conversion success",
    "Clear visual hierarchy reduces cognitive load and friction",
    "GEICO partnership provides significant credibility boost"
  ],
  flowSteps: [
    {
      title: "Trust Establishment",
      description: "Lead with GEICO branding and credibility signals",
      icon: Shield
    },
    {
      title: "Value Communication", 
      description: "Clearly present key benefits and course advantages",
      icon: CheckCircle
    },
    {
      title: "Action Facilitation",
      description: "Guide users to conversion with prominent CTAs",
      icon: ArrowRight
    }
  ],
  strategies: [
    {
      title: "Trust-First Design",
      description: "Integrated GEICO branding and trust signals prominently at the top of the page",
      icon: Shield
    },
    {
      title: "Clear Value Communication",
      description: "Highlighted key benefits: DMV Approved, No Final Exam, Insurance Savings",
      icon: CheckCircle
    },
    {
      title: "Mobile-Optimized Layout",
      description: "Designed with mobile-first approach for optimal conversion across devices",
      icon: Smartphone
    },
    {
      title: "Minimal Friction",
      description: "Removed unnecessary elements that could distract from the primary signup goal",
      icon: Zap
    }
  ]
};

// Final Design Data
export const improvLearningFinalDesignData = {
  title: "Final Design Solution",
  introduction: "The final design features a clean, trust-focused layout with GEICO branding, clear benefit communication, and strategic use of orange CTAs for maximum visibility. The design successfully balances trust-building with conversion optimization.",
  designHighlights: [
    "Strategic use of GEICO branding for immediate trust building",
    "Orange CTA buttons for maximum visibility and conversion",
    "Clean visual hierarchy that guides user attention",
    "Mobile-optimized layout for seamless cross-device experience"
  ],
  uiFeatures: [
    {
      title: "Flash Sale Module",
      description: "Timed promotional block to create urgency and drive immediate action"
    },
    {
      title: "Benefit Overview Section",
      description: "Clear showcase of 'DMV Approved,' 'No Final Exam,' 'Save on Insurance'"
    },
    {
      title: "Trust Bar with Media Logos",
      description: "Credibility indicators from NBC, PBS, and NY Times for enhanced trust"
    },
    {
      title: "FAQ Accordion",
      description: "Addresses common objections and concerns to reduce conversion friction"
    },
    {
      title: "Customer Testimonials",
      description: "User reviews with avatars and highlights to build social proof"
    },
    {
      title: "Mobile-Optimized CTAs",
      description: "Prominent orange buttons optimized for mobile interaction and visibility"
    }
  ],
  uiImages: [
    "/lovable-uploads/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
    "/lovable-uploads/e5cedc19-cd1f-4736-a165-a7111ec361a7.png"
  ],
  features: [
    {
      title: "Flash Sale Module",
      description: "Timed promotional block to create urgency and drive immediate action"
    },
    {
      title: "Benefit Overview Section",
      description: "Clear showcase of 'DMV Approved,' 'No Final Exam,' 'Save on Insurance'"
    },
    {
      title: "Trust Bar with Media Logos",
      description: "Credibility indicators from NBC, PBS, and NY Times for enhanced trust"
    },
    {
      title: "FAQ Accordion",
      description: "Addresses common objections and concerns to reduce conversion friction"
    },
    {
      title: "Customer Testimonials",
      description: "User reviews with avatars and highlights to build social proof"
    },
    {
      title: "Mobile-Optimized CTAs",
      description: "Prominent orange buttons optimized for mobile interaction and visibility"
    }
  ],
  images: [
    "/lovable-uploads/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
    "/lovable-uploads/e5cedc19-cd1f-4736-a165-a7111ec361a7.png"
  ]
};

// Outcomes Impact Data
export const improvLearningOutcomesData = {
  title: "Results & Impact",
  description: [
    "The project successfully launched on time with the GEICO campaign rollout. The design received positive feedback for its visual balance of trust and urgency, effectively supporting the business goal of increased course enrollment."
  ],
  metrics: [
    {
      title: "On-Time Launch",
      value: "100%",
      description: "Delivered in sync with GEICO campaign timeline",
      icon: CheckCircle
    },
    {
      title: "Design Feedback", 
      value: "Positive",
      description: "Praised for clarity and visual balance",
      icon: TrendingUp
    },
    {
      title: "Mobile Optimization",
      value: "Complete",
      description: "Mobile-first approach successfully implemented",
      icon: Smartphone
    }
  ],
  achievements: [
    {
      title: "Successful Partnership Launch",
      description: "Delivered a conversion-optimized experience that aligned with GEICO's brand standards and campaign objectives"
    },
    {
      title: "Enhanced Trust Building",
      description: "Created visual clarity and trust signals that increased user confidence in the online traffic school service"
    },
    {
      title: "Scalable Design Framework",
      description: "Established reusable design patterns and components for future promotional landing pages"
    }
  ]
};

// Challenges Learnings Data
export const improvLearningChallengesData = {
  title: "Challenges & Learnings",
  challenges: [
    {
      title: "Brand Integration Challenge",
      description: "Balancing GEICO brand elements with Improv's identity while maintaining clear visual hierarchy and brand consistency"
    },
    {
      title: "Mobile Optimization Complexity",
      description: "Ensuring the conversion experience worked seamlessly across all device sizes without sacrificing functionality"
    },
    {
      title: "Trust vs. Urgency Balance",
      description: "Finding the right balance between building user trust and creating conversion urgency without appearing pushy"
    }
  ],
  learnings: [
    {
      title: "UI Directly Impacts Business Metrics",
      description: "This project reinforced how thoughtful UI design decisions directly influence conversion rates and business outcomes"
    },
    {
      title: "Partnership Design Considerations",
      description: "Gained valuable experience in integrating partner brands while maintaining design coherence and user experience"
    },
    {
      title: "Mobile-First Development Impact",
      description: "Experienced firsthand how mobile-first design approach can significantly improve overall user experience and conversions"
    }
  ],
  nextSteps: [
    {
      title: "A/B Testing Implementation",
      description: "Implement comprehensive A/B testing to explore different CTA structures and conversion optimization strategies",
      icon: TrendingUp
    },
    {
      title: "User Feedback Integration",
      description: "Collect and analyze user feedback to further optimize the conversion funnel and user experience",
      icon: Users
    },
    {
      title: "Design System Expansion",
      description: "Expand the design system to support additional promotional campaigns and partnership initiatives",
      icon: ArrowRight
    }
  ]
};

// Reflection Data
export const improvLearningReflectionData = {
  title: "Reflection",
  content: "This project was a valuable opportunity to work on a high-impact, fast-paced conversion optimization challenge. It demonstrated the importance of user-centered design in achieving business objectives and provided insights into effective partnership design strategies.",
  insights: [
    {
      title: "Business Impact Focus",
      description: "UI design has direct impact on business metrics and conversion rates, making every design decision strategically important"
    },
    {
      title: "Trust-Building Expertise",
      description: "Trust-building design elements are essential for unfamiliar or skeptical user segments, especially in online services"
    },
    {
      title: "Mobile-First Approach",
      description: "Mobile-first design is crucial for modern web experiences and significantly impacts user engagement and conversions"
    }
  ]
};
