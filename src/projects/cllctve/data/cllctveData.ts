
import { Users, Calendar, Palette, Lightbulb, Target, Zap, Code, Globe, Smartphone, Monitor, CheckCircle, ArrowRight, Layout, Database, Cpu } from "lucide-react";

export const cllctveOverviewData = {
  title: "Project Overview",
  description: [
    "CLLCTVE is a digital portfolio platform built to empower Gen Z creators. It provides a space for users to showcase their work, grow their professional network, and connect with brands through creative challenges.",
    "The platform bridges the gap between young talent and professional opportunities—offering rewards, exposure, and a home for their evolving digital identity. As the Frontend Developer, I was responsible for translating design concepts into a scalable, performant web application."
  ],
  projectDetails: [
    {
      icon: Users,
      label: "Role",
      value: "Frontend Developer"
    },
    {
      icon: Calendar,
      label: "Duration",
      value: "1 year, 10 months"
    },
    {
      icon: Calendar,
      label: "Year",
      value: "2022"
    },
    {
      icon: Users,
      label: "Team Size",
      value: "6 members"
    }
  ],
  toolDetails: [
    {
      icon: Code,
      label: "Frontend",
      value: "React.js, Styled Components"
    },
    {
      icon: Palette,
      label: "UI Library",
      value: "Ant Design"
    },
    {
      icon: Globe,
      label: "API Integration",
      value: "Axios, MongoDB"
    },
    {
      icon: Monitor,
      label: "Deployment",
      value: "Web Platform"
    }
  ]
};

export const cllctveProblemSpaceData = {
  title: "Problem Space",
  introduction: "Gen Z creators needed a platform that felt like home for their creative work while connecting them with real opportunities.",
  challenges: [
    {
      title: "Lack of Visual Appeal",
      description: "Many portfolio platforms lack the visual appeal and interactivity that Gen Z users expect from digital platforms.",
      icon: Palette
    },
    {
      title: "Limited Network Building",
      description: "Existing platforms don't provide adequate opportunities for creators to build professional networks and connect with brands.",
      icon: Users
    },
    {
      title: "Disconnect from Opportunities",
      description: "There's a significant gap between young creative talent and professional opportunities in the market.",
      icon: Target
    },
    {
      title: "Generic Portfolio Experience",
      description: "Current platforms offer one-size-fits-all solutions that don't cater to the unique needs and preferences of Gen Z creators.",
      icon: Layout
    }
  ],
  designGoals: [
    {
      title: "Visual-First Platform",
      description: "Create a platform that prioritizes visual content and creative expression to appeal to Gen Z users.",
      icon: Palette
    },
    {
      title: "Community Building",
      description: "Foster connections between creators and provide networking opportunities with brands and peers.",
      icon: Users
    },
    {
      title: "Opportunity Gateway",
      description: "Bridge the gap between creative talent and professional opportunities through brand challenges.",
      icon: Target
    },
    {
      title: "Authentic Experience",
      description: "Design a platform that feels authentic to Gen Z digital behavior while maintaining professional value.",
      icon: Zap
    }
  ]
};

export const cllctveResearchData = {
  title: "Research & Discovery",
  introduction: "Through user research and competitive analysis, we identified key behaviors and preferences that would shape our platform design.",
  researchSections: [
    {
      title: "User Interviews",
      description: "Conducted interviews with Gen Z creators to understand their portfolio and networking needs.",
      items: [
        { text: "Interviewed 15 Gen Z creators aged 18-25" },
        { text: "Identified preference for mobile-first experiences" },
        { text: "Discovered importance of visual-heavy content" },
        { text: "Found desire for authentic self-expression" }
      ]
    },
    {
      title: "Competitive Analysis",
      description: "Analyzed existing portfolio platforms to identify gaps and opportunities.",
      items: [
        { text: "Studied 8 major portfolio platforms" },
        { text: "Identified lack of community features" },
        { text: "Found limited brand integration opportunities" },
        { text: "Discovered poor mobile optimization" }
      ]
    },
    {
      title: "Behavioral Research",
      description: "Researched Gen Z digital behavior patterns and preferences.",
      items: [
        { text: "Analyzed social media usage patterns" },
        { text: "Studied content consumption habits" },
        { text: "Researched platform loyalty factors" },
        { text: "Identified engagement triggers" }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Mobile-First Preference",
      description: "Gen Z users expect seamless mobile experiences and prefer platforms optimized for mobile interaction."
    },
    {
      title: "Visual Content Priority",
      description: "Users gravitate toward platforms that prioritize visual content and allow for creative expression."
    },
    {
      title: "Community Over Competition",
      description: "Creators value platforms that foster community building rather than competitive environments."
    }
  ]
};

export const cllctveIdeationData = {
  title: "Ideation & Strategy",
  introduction: "Our ideation process focused on creating a platform that would feel like home to Gen Z creators while providing tangible career benefits.",
  keyInsights: [
    {
      highlight: "Hybrid Platform Approach:",
      description: "Combine portfolio showcase, discovery platform, and challenge-based opportunities in one cohesive experience."
    },
    {
      highlight: "Brand Partnership Integration:",
      description: "Create seamless integration for brands to host challenges and discover talent directly on the platform."
    },
    {
      highlight: "Community-Driven Features:",
      description: "Build features that encourage interaction, collaboration, and mutual support among creators."
    },
    {
      highlight: "Mobile-Optimized Experience:",
      description: "Prioritize mobile experience while maintaining full functionality across all devices."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Creator Onboarding",
      description: "Streamlined registration and portfolio setup process designed to get creators showcasing their work quickly."
    },
    {
      number: 2,
      title: "Portfolio Building",
      description: "Drag-and-drop interface allowing creators to organize their work by category and customize their presentation."
    },
    {
      number: 3,
      title: "Challenge Discovery",
      description: "Dynamic feed of brand-sponsored challenges with filtering options and personalized recommendations."
    },
    {
      number: 4,
      title: "Brand Collaboration",
      description: "Dedicated spaces for brands to showcase challenges, requirements, and engage with creator submissions."
    }
  ]
};

export const cllctveSitemapData = {
  title: "Sitemap & Wireframes",
  sitemapItems: [
    { name: "Home", isPrimary: true },
    { name: "Portfolio Builder" },
    { name: "Challenge Discovery" },
    { name: "Brand Collaborations" },
    { name: "Community Feed" },
    { name: "Profile Management" }
  ],
  wireframesDescription: "The platform architecture was designed to seamlessly blend portfolio management with opportunity discovery.",
  wireframeImages: [
    {
      title: "Portfolio Builder Interface",
      imageSrc: "/lovable-uploads/66a4a04b-aa90-4553-b44c-c75f89b3b3d4.png",
      imageAlt: "CLLCTVE portfolio builder wireframe"
    },
    {
      title: "Challenge Discovery Feed",
      imageSrc: "/lovable-uploads/bb480e3a-f008-47a7-ab1f-621a3954be31.png",
      imageAlt: "CLLCTVE challenge discovery wireframe"
    }
  ]
};

export const cllctveUIData = {
  title: "Final UI Design",
  introduction: "The final implementation focused on creating a visually striking platform that feels native to Gen Z digital behavior while maintaining professional credibility.",
  designHighlights: [
    { text: "Custom portfolio builder with intuitive drag-and-drop interface that allows creators to arrange and showcase their work exactly how they envision it" },
    { text: "Modular portfolio system enabling creators to organize work by category and create multiple portfolio views for different audiences" },
    { text: "Branded challenge pages with custom-styled areas where brands can host challenges with their own visual identity while maintaining platform consistency" },
    { text: "Real-time notification system keeping users updated on new challenges, opportunities, and platform activity" },
    { text: "Mobile-first responsive design optimized for touch interactions and smaller screens" },
    { text: "Dynamic theming system that permits brand customization within defined parameters and design guidelines" }
  ],
  uiFeatures: [
    {
      title: "Drag-and-Drop Builder",
      description: "Intuitive interface allowing creators to arrange their work exactly as they envision.",
      icon: Layout
    },
    {
      title: "Real-time Notifications",
      description: "Keep users engaged with updates on challenges, opportunities, and platform activity.",
      icon: Zap
    },
    {
      title: "Brand Integration",
      description: "Seamless brand customization while maintaining platform design consistency.",
      icon: Palette
    },
    {
      title: "Mobile Optimization",
      description: "Touch-optimized interface designed for mobile-first Gen Z users.",
      icon: Smartphone
    },
    {
      title: "Community Features",
      description: "Tools for creators to connect, collaborate, and support each other's work.",
      icon: Users
    },
    {
      title: "Performance Focused",
      description: "Optimized loading and interactions for rich visual content and dynamic layouts.",
      icon: Cpu
    }
  ],
  uiImages: [
    {
      src: "/lovable-uploads/96e0002f-13cc-470b-925d-2e1d627aa695.png",
      alt: "CLLCTVE main interface",
      title: "Platform Overview"
    },
    {
      src: "/lovable-uploads/fbb376a0-30ad-4530-8445-159e6767e748.png",
      alt: "CLLCTVE portfolio interface",
      title: "Portfolio Interface"
    }
  ]
};

export const cllctveChallengesData = {
  title: "Challenges & Learnings",
  challenges: [
    {
      title: "Performance Optimization",
      description: "Managing load times while supporting rich visual content and dynamic portfolio layouts required careful optimization strategies and efficient state management to improve performance without sacrificing visual quality."
    },
    {
      title: "Scalable Architecture",
      description: "Building a component system that could grow with the product while maintaining consistency across different use cases required modular architecture with clear separation of concerns."
    },
    {
      title: "Brand Integration",
      description: "Allowing brands to customize their presence while maintaining platform cohesion and user experience consistency through a theming system that permits customization within defined parameters."
    },
    {
      title: "User Onboarding",
      description: "Creating an onboarding flow that felt engaging rather than overwhelming while collecting necessary information through progressive disclosure and gamification elements."
    }
  ],
  learnings: [
    {
      title: "User Research Drives Design",
      description: "Deep understanding of Gen Z digital behavior was crucial for creating an authentic platform experience that resonated with the target audience."
    },
    {
      title: "Performance Matters for Engagement",
      description: "Even minor performance improvements had significant impact on user engagement and retention metrics, especially for visual-heavy content."
    },
    {
      title: "Scalable Code Architecture",
      description: "Investing time in proper component architecture early paid dividends as the platform grew in complexity and feature set."
    },
    {
      title: "Balancing Creativity and Functionality",
      description: "Finding the sweet spot between creative expression and professional utility required constant iteration and user feedback integration."
    }
  ],
  nextSteps: [
    {
      title: "Enhanced Analytics",
      description: "Implement detailed analytics for creators to track portfolio performance and engagement metrics.",
      icon: Database
    },
    {
      title: "Advanced Collaboration",
      description: "Build tools for multi-creator projects and collaborative portfolio pieces.",
      icon: Users
    },
    {
      title: "AI-Powered Recommendations",
      description: "Develop intelligent matching between creators and relevant brand challenges.",
      icon: Cpu
    }
  ]
};

export const cllctveReflectionData = {
  title: "Reflection",
  content: "CLLCTVE successfully created a community of creative talent, resulting in numerous brand partnerships and strong user engagement metrics. The platform bridged the gap between young creators and professional opportunities while maintaining an authentic Gen Z digital experience.",
  insights: [
    {
      title: "Frontend Development Excellence",
      description: "Advanced skills in React.js, component architecture, and performance optimization through real-world application."
    },
    {
      title: "User-Centered Development",
      description: "Learned to translate user research insights into technical implementation decisions that drive engagement."
    },
    {
      title: "Scalable Code Practices",
      description: "Developed expertise in writing code that scales with product growth and team expansion while maintaining quality."
    }
  ]
};
