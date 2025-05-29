
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
  ArrowRight
} from "lucide-react";

export const improvLearningData = {
  overview: {
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
  },
  
  problemSpace: {
    description: [
      "Users visiting the site were either unfamiliar with online traffic schools or unsure whether the course was legitimate and easy to complete. The landing page needed to remove friction, build trust, and guide users to sign up quickly—especially from mobile devices."
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
        icon: Users
      },
      {
        title: "Information Overload",
        description: "Too much information created friction in the conversion process",
        icon: Zap
      }
    ]
  },

  research: {
    description: [
      "I mapped out user priorities to understand the decision-making process: 'Is this legit?' → 'What do I get?' → 'Where do I sign up?' This helped inform the content hierarchy and design decisions."
    ],
    insights: [
      {
        title: "User Trust Journey",
        description: "Users needed immediate reassurance about legitimacy before considering benefits"
      },
      {
        title: "Mobile-First Behavior",
        description: "Majority of traffic came from mobile devices, requiring optimized mobile experience"
      },
      {
        title: "GEICO Partnership Value",
        description: "The GEICO brand association significantly increased user trust"
      }
    ],
    methods: [
      {
        title: "User Flow Mapping",
        description: "Analyzed the path from awareness to conversion"
      },
      {
        title: "Competitive Analysis",
        description: "Studied other traffic school landing pages"
      },
      {
        title: "Brand Integration",
        description: "Leveraged GEICO partnership for trust building"
      }
    ]
  },

  strategy: {
    description: [
      "The design strategy focused on creating a clear top-down content flow with emphasis on trust-building elements, minimal distractions, and high-visibility CTAs that would guide users seamlessly through the enrollment process."
    ],
    strategies: [
      {
        title: "Trust-First Design",
        description: "Integrated GEICO branding and trust signals prominently",
        icon: CheckCircle
      },
      {
        title: "Clear Value Communication",
        description: "Highlighted key benefits: DMV Approved, No Final Exam, Insurance Savings",
        icon: TrendingUp
      },
      {
        title: "Mobile-Optimized Layout",
        description: "Designed with mobile-first approach for optimal conversion",
        icon: Users
      },
      {
        title: "Minimal Friction",
        description: "Removed unnecessary elements that could distract from signup",
        icon: Zap
      }
    ]
  },

  finalDesign: {
    description: [
      "The final design features a clean, trust-focused layout with GEICO branding, clear benefit communication, and strategic use of orange CTAs for maximum visibility. The design successfully balances trust-building with conversion optimization."
    ],
    features: [
      {
        title: "Flash Sale Module",
        description: "Timed promotional block to create urgency"
      },
      {
        title: "Benefit Overview",
        description: "Clear showcase of 'DMV Approved,' 'No Final Exam,' 'Save on Insurance'"
      },
      {
        title: "Trust Bar",
        description: "Media logos from NBC, PBS, and NY Times for credibility"
      },
      {
        title: "FAQ Accordion",
        description: "Addresses common objections and concerns"
      },
      {
        title: "Testimonial Section",
        description: "User reviews with avatars and highlights"
      }
    ],
    images: [
      "/lovable-uploads/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
      "/lovable-uploads/e5cedc19-cd1f-4736-a165-a7111ec361a7.png"
    ]
  },

  outcomes: {
    description: [
      "The project successfully launched on time with the GEICO campaign rollout. The design received positive feedback for its visual balance of trust and urgency, effectively supporting the business goal of increased course enrollment."
    ],
    metrics: [
      {
        title: "On-Time Launch",
        value: "100%",
        description: "Delivered in sync with GEICO campaign"
      },
      {
        title: "Design Feedback",
        value: "Positive",
        description: "Praised for clarity and visual balance"
      },
      {
        title: "Mobile Optimization",
        value: "Optimized",
        description: "Mobile-first approach implemented"
      }
    ],
    achievements: [
      {
        title: "Successful Partnership Launch",
        description: "Delivered a conversion-optimized experience that aligned with GEICO's brand standards"
      },
      {
        title: "Trust-Building Design",
        description: "Created visual clarity that increased user confidence in the service"
      },
      {
        title: "Scalable Design System",
        description: "Established patterns for future promotional landing pages"
      }
    ]
  },

  challenges: {
    challenges: [
      {
        title: "Brand Integration",
        description: "Balancing GEICO brand elements with Improv's identity while maintaining visual hierarchy"
      },
      {
        title: "Mobile Optimization",
        description: "Ensuring the conversion experience worked seamlessly across all device sizes"
      },
      {
        title: "Trust vs. Urgency",
        description: "Finding the right balance between building trust and creating conversion urgency"
      }
    ],
    learnings: [
      {
        title: "UI Supports Business Goals",
        description: "This project reinforced how thoughtful UI design directly impacts conversion rates and business outcomes"
      },
      {
        title: "Partnership Design Considerations",
        description: "Learned valuable lessons about integrating partner brands while maintaining design coherence"
      },
      {
        title: "Mobile-First Impact",
        description: "Experienced firsthand how mobile optimization can significantly improve user experience"
      }
    ],
    nextSteps: [
      {
        title: "A/B Testing",
        description: "Would love to run deeper usability tests and explore A/B variants of the CTA structure",
        icon: TrendingUp
      },
      {
        title: "User Feedback Integration",
        description: "Collect and analyze user feedback to further optimize the conversion funnel",
        icon: Users
      },
      {
        title: "Design System Expansion",
        description: "Expand the design system to support additional promotional campaigns",
        icon: ArrowRight
      }
    ]
  },

  reflection: {
    description: [
      "This project was a valuable opportunity to work on a high-impact, fast-paced conversion optimization challenge. It demonstrated the importance of user-centered design in achieving business objectives and provided insights into effective partnership design strategies."
    ],
    keyTakeaways: [
      "UI design has direct impact on business metrics and conversion rates",
      "Trust-building is essential for unfamiliar or skeptical user segments",
      "Mobile-first design is crucial for modern web experiences",
      "Clear value communication reduces friction in the conversion process"
    ],
    futureConsiderations: [
      "Implement comprehensive A/B testing for different CTA approaches",
      "Develop more sophisticated trust-building design patterns",
      "Create responsive design systems that work across all partnership contexts",
      "Explore personalization opportunities for different user segments"
    ]
  }
};
