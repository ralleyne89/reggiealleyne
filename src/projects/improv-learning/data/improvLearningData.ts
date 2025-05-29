
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
    "IMPROV Learning partnered with GEICO to create a co-branded landing page for their online defensive driving course. The goal was to leverage GEICO's trusted brand presence to boost signups while clearly communicating course benefits and maintaining trust and usability across all devices.",
    "This project focused on removing user friction, building trust through strategic brand partnership, and creating a clear path to enrollment for visitors who may be unfamiliar with online traffic schools or uncertain about course legitimacy."
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
  introduction: "Users visiting IMPROV Learning's site were either unfamiliar with online traffic schools or unsure whether the course was legitimate and easy to complete. The co-branded landing page needed to leverage GEICO's credibility to remove friction, build trust, and guide users to sign up quickly—especially from mobile devices.",
  challenges: [
    {
      title: "Trust Concerns",
      description: "Users questioned the legitimacy of online traffic school courses from unfamiliar providers",
      icon: AlertCircle
    },
    {
      title: "Unclear Value Proposition", 
      description: "Visitors couldn't quickly understand what they would get from IMPROV Learning's course",
      icon: Target
    },
    {
      title: "Mobile Experience Issues",
      description: "The signup process needed to work seamlessly on mobile devices for GEICO customers",
      icon: Smartphone
    },
    {
      title: "Information Overload",
      description: "Too much information created friction in the conversion process for the partnership",
      icon: Zap
    }
  ],
  designGoals: [
    {
      title: "Leverage Partnership Credibility",
      description: "Utilize GEICO's trusted brand to immediately build credibility for IMPROV Learning's service",
      icon: Shield
    },
    {
      title: "Clear Value Communication",
      description: "Communicate IMPROV Learning's value proposition clearly through the co-branded experience",
      icon: CheckCircle
    },
    {
      title: "Mobile-First Optimization",
      description: "Optimize the entire conversion experience for mobile devices where GEICO customers primarily browse",
      icon: Smartphone
    },
    {
      title: "Reduce Friction",
      description: "Minimize information overload and streamline the signup process for the partnership audience",
      icon: Zap
    }
  ],
  painPoints: [
    {
      title: "Trust Concerns",
      description: "Users questioned the legitimacy of online traffic school courses from unfamiliar providers",
      icon: AlertCircle
    },
    {
      title: "Unclear Value Proposition",
      description: "Visitors couldn't quickly understand what they would get from IMPROV Learning's course",
      icon: Target
    },
    {
      title: "Mobile Experience",
      description: "The signup process needed to work seamlessly on mobile devices for GEICO customers",
      icon: Smartphone
    },
    {
      title: "Information Overload",
      description: "Too much information created friction in the conversion process for the partnership",
      icon: Zap
    }
  ]
};

// Research Discovery Data
export const improvLearningResearchData = {
  title: "Research & Discovery",
  introduction: "I mapped out user priorities to understand the decision-making process for GEICO customers: 'Is this legit?' → 'What do I get?' → 'Where do I sign up?' This helped inform the content hierarchy and co-branded design decisions.",
  researchSections: [
    {
      title: "User Journey Analysis",
      description: "Analyzed the path from GEICO referral to IMPROV Learning enrollment to identify friction points",
      items: [
        { text: "Mapped user decision-making process for partnership referrals" },
        { text: "Identified trust transfer from GEICO to IMPROV Learning as primary concern" },
        { text: "Located conversion bottlenecks in the co-branded experience" }
      ]
    },
    {
      title: "Competitive Research",
      description: "Studied other traffic school landing pages and partnership integrations to understand industry standards",
      items: [
        { text: "Analyzed competitor conversion tactics and brand partnerships" },
        { text: "Identified best practices for trust building through co-branding" },
        { text: "Evaluated mobile optimization approaches for partnership traffic" }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Trust Transfer Before Benefits",
      description: "GEICO customers needed immediate reassurance that IMPROV Learning was legitimate through clear brand association"
    },
    {
      title: "Mobile-First Partnership Traffic",
      description: "Majority of GEICO referral traffic came from mobile devices, requiring optimized mobile experience"
    },
    {
      title: "Co-Branding Value",
      description: "The GEICO partnership significantly increased user trust in IMPROV Learning's service credibility"
    }
  ]
};

// Ideation Strategy Data
export const improvLearningIdeationData = {
  title: "Design Strategy",
  introduction: "The design strategy focused on creating a clear co-branded experience with emphasis on trust-building through GEICO's credibility, minimal distractions, and high-visibility CTAs that would guide GEICO customers seamlessly to IMPROV Learning's enrollment process.",
  keyInsights: [
    {
      title: "Partnership-First Approach",
      description: "GEICO customers prioritize trust validation through clear brand association",
      highlight: "Co-branded trust validation is the primary user concern"
    },
    {
      title: "Mobile-First Design",
      description: "Mobile-first design approach essential for GEICO referral traffic conversion success",
      highlight: "Majority of partnership traffic comes from mobile devices"
    },
    {
      title: "Clear Visual Hierarchy",
      description: "Clear visual hierarchy reduces cognitive load and friction for referred customers",
      highlight: "Simplified co-branded information architecture improves conversions"
    },
    {
      title: "Partnership Credibility",
      description: "GEICO partnership provides significant credibility boost for IMPROV Learning",
      highlight: "Brand association enhances IMPROV Learning trust immediately"
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Trust Establishment",
      description: "Lead with GEICO co-branding and credibility signals for IMPROV Learning",
      icon: Shield
    },
    {
      number: 2,
      title: "Value Communication", 
      description: "Clearly present IMPROV Learning's key benefits and course advantages",
      icon: CheckCircle
    },
    {
      number: 3,
      title: "Action Facilitation",
      description: "Guide GEICO customers to IMPROV Learning conversion with prominent CTAs",
      icon: ArrowRight
    }
  ],
  strategies: [
    {
      title: "Co-Branded Trust Design",
      description: "Integrated GEICO branding prominently to build trust for IMPROV Learning's service",
      icon: Shield
    },
    {
      title: "Clear Value Communication",
      description: "Highlighted IMPROV Learning's key benefits: DMV Approved, No Final Exam, Insurance Savings",
      icon: CheckCircle
    },
    {
      title: "Mobile-Optimized Layout",
      description: "Designed with mobile-first approach for optimal conversion of GEICO referral traffic",
      icon: Smartphone
    },
    {
      title: "Minimal Friction",
      description: "Removed unnecessary elements that could distract from IMPROV Learning's primary signup goal",
      icon: Zap
    }
  ]
};

// Final Design Data
export const improvLearningFinalDesignData = {
  title: "Final Design Solution",
  introduction: "The final co-branded design features a clean, trust-focused layout with prominent GEICO branding to establish credibility for IMPROV Learning, clear benefit communication, and strategic use of orange CTAs for maximum visibility. The design successfully balances partnership trust-building with IMPROV Learning's conversion optimization.",
  designHighlights: [
    {
      text: "Strategic use of GEICO co-branding for immediate trust building in IMPROV Learning"
    },
    {
      text: "Orange CTA buttons for maximum visibility and conversion to IMPROV Learning's course"
    },
    {
      text: "Clean visual hierarchy that guides GEICO customers to IMPROV Learning enrollment"
    },
    {
      text: "Mobile-optimized layout for seamless cross-device experience for partnership traffic"
    }
  ],
  uiFeatures: [
    {
      title: "Flash Sale Module",
      description: "Timed promotional block to create urgency and drive immediate action for IMPROV Learning",
      icon: Zap
    },
    {
      title: "Benefit Overview Section",
      description: "Clear showcase of IMPROV Learning's 'DMV Approved,' 'No Final Exam,' 'Save on Insurance'",
      icon: CheckCircle
    },
    {
      title: "Trust Bar with Media Logos",
      description: "Credibility indicators from NBC, PBS, and NY Times for enhanced trust in IMPROV Learning",
      icon: Shield
    },
    {
      title: "FAQ Accordion",
      description: "Addresses common objections about IMPROV Learning to reduce conversion friction",
      icon: Target
    },
    {
      title: "Customer Testimonials",
      description: "IMPROV Learning user reviews with avatars and highlights to build social proof",
      icon: Users
    },
    {
      title: "Mobile-Optimized CTAs",
      description: "Prominent orange buttons optimized for mobile interaction and visibility for IMPROV Learning signup",
      icon: Smartphone
    }
  ],
  uiImages: [
    {
      src: "/lovable-uploads/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
      alt: "IMPROV Learning Co-branded Landing Page Desktop View",
      title: "Co-branded Desktop Landing Page"
    }
  ]
};

// Outcomes Impact Data - Restructured following Minto Principle
export const improvLearningOutcomesData = {
  title: "Results & Impact",
  description: [
    "The co-branded landing page successfully launched with GEICO's partnership campaign, delivering measurable improvements in user trust and conversion optimization for IMPROV Learning. The strategic design approach resulted in a conversion-focused experience that effectively guided GEICO customers from skepticism to IMPROV Learning enrollment."
  ],
  keyResults: [
    {
      title: "Partnership Campaign Success",
      value: "100% On-Time",
      description: "Delivered co-branded experience in sync with GEICO partnership timeline",
      icon: CheckCircle
    },
    {
      title: "Trust Enhancement", 
      value: "Significant",
      description: "Improved user confidence in IMPROV Learning through strategic GEICO co-branding",
      icon: Shield
    },
    {
      title: "Mobile Experience",
      value: "Optimized",
      description: "Seamless cross-device conversion experience achieved for GEICO referral traffic",
      icon: Smartphone
    }
  ],
  keyActions: [
    {
      title: "Strategic Co-Branding Integration",
      description: "Implemented GEICO branding prominently to leverage partnership credibility and immediately build trust for IMPROV Learning's service",
      icon: Shield
    },
    {
      title: "Conversion Path Optimization",
      description: "Created clear visual hierarchy with strategic CTA placement to guide GEICO customers seamlessly to IMPROV Learning enrollment",
      icon: Target
    },
    {
      title: "Mobile-First Implementation",
      description: "Designed and optimized the entire experience for mobile devices where majority of GEICO referral traffic originated",
      icon: Smartphone
    }
  ],
  achievements: [
    {
      title: "Successful Partnership Launch",
      description: "Delivered a conversion-optimized co-branded experience that aligned with both GEICO's partnership standards and IMPROV Learning's business objectives, creating seamless integration between both brands"
    },
    {
      title: "Enhanced Trust Building Framework",
      description: "Established a comprehensive trust-building approach through strategic GEICO co-branding, credibility indicators, and social proof elements that increased user confidence in IMPROV Learning"
    },
    {
      title: "Scalable Partnership Design System",
      description: "Created reusable design patterns and mobile-first components that IMPROV Learning can leverage for future promotional campaigns and partnership initiatives"
    }
  ],
  detailedImpact: {
    userExperience: "The co-branded design significantly reduced user friction by addressing trust concerns upfront through GEICO's credibility and creating a clear, intuitive path to IMPROV Learning conversion. GEICO customers could quickly understand the legitimacy and value of IMPROV Learning's service.",
    businessValue: "The optimized co-branded design directly supported IMPROV Learning's business objectives by improving the conversion funnel and reducing user drop-off rates from GEICO referrals, particularly on mobile devices where most partnership traffic originated.",
    designSystem: "Established a scalable framework for IMPROV Learning's future partnership campaigns, creating reusable components and patterns that maintain brand consistency while optimizing for conversion in co-branded experiences."
  }
};

// Challenges Learnings Data
export const improvLearningChallengesData = {
  title: "Challenges & Learnings",
  challenges: [
    {
      title: "Co-Brand Integration Challenge",
      description: "Balancing GEICO's brand elements with IMPROV Learning's identity while maintaining clear visual hierarchy and ensuring both brands were represented appropriately"
    },
    {
      title: "Mobile Optimization Complexity",
      description: "Ensuring the co-branded conversion experience worked seamlessly across all device sizes for GEICO referral traffic without sacrificing IMPROV Learning's functionality"
    },
    {
      title: "Trust vs. Urgency Balance",
      description: "Finding the right balance between building user trust in IMPROV Learning through GEICO association and creating conversion urgency without appearing pushy to referred customers"
    }
  ],
  learnings: [
    {
      title: "UI Directly Impacts Partnership Success",
      description: "This project reinforced how thoughtful co-branded UI design decisions directly influence partnership conversion rates and business outcomes for both companies"
    },
    {
      title: "Partnership Design Considerations",
      description: "Gained valuable experience in integrating partner brands while maintaining design coherence and ensuring IMPROV Learning's conversion goals were met"
    },
    {
      title: "Mobile-First Partnership Impact",
      description: "Experienced firsthand how mobile-first design approach can significantly improve overall user experience and conversions for partnership referral traffic"
    }
  ],
  nextSteps: [
    {
      title: "A/B Testing Implementation",
      description: "Implement comprehensive A/B testing to explore different co-branded CTA structures and conversion optimization strategies for IMPROV Learning",
      icon: TrendingUp
    },
    {
      title: "User Feedback Integration",
      description: "Collect and analyze feedback from GEICO customers to further optimize IMPROV Learning's conversion funnel and user experience",
      icon: Users
    },
    {
      title: "Partnership Design System Expansion",
      description: "Expand IMPROV Learning's design system to support additional promotional campaigns and partnership initiatives",
      icon: ArrowRight
    }
  ]
};

// Reflection Data
export const improvLearningReflectionData = {
  title: "Reflection",
  content: "This project was a valuable opportunity to work on a high-impact, fast-paced conversion optimization challenge for IMPROV Learning's partnership with GEICO. It demonstrated the importance of user-centered design in achieving business objectives and provided insights into effective co-branded partnership design strategies.",
  insights: [
    {
      title: "Business Partnership Impact Focus",
      description: "Co-branded UI design has direct impact on partnership success metrics and conversion rates, making every design decision strategically important for both IMPROV Learning and partner relationships"
    },
    {
      title: "Trust-Building Through Partnership",
      description: "Leveraging trusted partner brands like GEICO is essential for building credibility for services like IMPROV Learning, especially with unfamiliar or skeptical user segments"
    },
    {
      title: "Mobile-First Partnership Approach",
      description: "Mobile-first design is crucial for partnership referral traffic and significantly impacts user engagement and conversions for IMPROV Learning's co-branded experiences"
    }
  ]
};
