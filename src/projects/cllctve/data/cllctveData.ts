import { Users, Calendar, Palette, Lightbulb, Target, Zap, Code, Globe, Smartphone, Monitor, CheckCircle, ArrowRight, Layout, Database, Cpu } from "lucide-react";

export const cllctveOverviewData = {
  title: "Building a Gen Z Creator Platform",
  description: [
    "So I spent almost two years building this React-based portfolio platform for Gen Z creators. We actually got 500+ creators signed up and secured 15+ brand partnerships before the company unfortunately had to shut down. The drag-and-drop portfolio builder was pretty sweet though.",
    "Here's the thing - the creator economy is massive (like $104B massive), but most portfolio platforms just don't get Gen Z. Behance and Dribbble feel ancient on mobile, and they're not built for the way young creators actually want to showcase their work.",
    "My approach was basically: make it fast, make it pretty, make it work on phones first. I used React with Styled Components and Ant Design, got the load times way better than the competition, and built in real-time notifications because Gen Z expects everything to be instant."
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
  title: "The Problem We Were Trying to Solve",
  introduction: "So here's what we noticed - existing portfolio platforms just weren't cutting it for Gen Z creators. I interviewed 15 creators and found that 67% straight up abandoned platforms because they sucked on mobile and didn't help them network. We were basically asking: how do we build something that actually feels native to how Gen Z works online? Our goal was ambitious - 15+ brand partnerships and 500+ creator signups - but we thought we could pull it off.",
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
  title: "Research: Why Creators Were Jumping Ship",
  introduction: "Okay, so the numbers were pretty telling. Out of 15 Gen Z creators I talked to, 67% had tried other platforms but bailed because they were terrible on mobile. 89% wanted something more visual, and 78% wanted real community vibes, not some competitive nightmare. The whole creator economy is worth $104B, but nobody was building for how Gen Z actually uses the internet.",
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
  title: "How We Planned to Crack the Code",
  introduction: "So the big idea was to create something that felt like home to Gen Z creators but also actually helped their careers. We weren't just building another portfolio site - we wanted to make the whole thing feel natural and useful.",
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
      imageSrc: "/images/66a4a04b-aa90-4553-b44c-c75f89b3b3d4.png",
      imageAlt: "CLLCTVE portfolio builder wireframe"
    },
    {
      title: "Challenge Discovery Feed",
      imageSrc: "/images/bb480e3a-f008-47a7-ab1f-621a3954be31.png",
      imageAlt: "CLLCTVE challenge discovery wireframe"
    }
  ]
};

export const cllctveUIData = {
  title: "Building Something That Actually Worked (While It Lasted)",
  introduction: "Here's the technical stuff: I built this thing with React, Styled Components, and Ant Design, connecting to MongoDB for data. Got the load times way faster than the competition and managed to hit 85% user retention before everything went south. We had 500+ creators and 15 brand partnerships, which honestly still feels pretty good even though it didn't last.",
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
      src: "/images/96e0002f-13cc-470b-925d-2e1d627aa695.png",
      alt: "CLLCTVE main interface",
      title: "Profile Page"
    },
    {
      src: "/images/fbb376a0-30ad-4530-8445-159e6767e748.png",
      alt: "CLLCTVE portfolio interface",
      title: "Home Page"
    },
    {
      src: "/images/d9b301ae-9592-4d5a-aa48-b05f60a01cf0.png",
      alt: "CLLCTVE profile interface",
      title: "Creative Profile"
    },
    {
      src: "/images/da4363f9-b23f-4565-bf77-783c3bc7de68.png",
      alt: "CLLCTVE dashboard interface",
      title: "Dashboard Interface"
    }
  ]
};

export const cllctveChallengesData = {
  title: "The Real Challenges (And What I Learned)",
  challenges: [
    {
      title: "Making It Fast Without Breaking It",
      description: "Honestly, the hardest part was keeping load times snappy while creators were uploading tons of high-res images and videos. Had to get creative with state management and lazy loading without making the experience feel clunky."
    },
    {
      title: "Building for Growth (That Never Came)",
      description: "I spent a lot of time making sure the component system could scale as we added features. Turned out to be worth it even though the company didn't make it - good practice for building modular, maintainable code."
    },
    {
      title: "Brand Customization vs Platform Unity",
      description: "Brands wanted their challenges to look unique, but we couldn't let them break the whole design system. Finding that balance between customization and consistency was trickier than expected."
    },
    {
      title: "Not Overwhelming New Users",
      description: "Gen Z might be tech-savvy, but they still don't want to fill out a million forms just to get started. Had to make onboarding feel quick and fun, not like homework."
    }
  ],
  learnings: [
    {
      title: "Actually Talk to Your Users",
      description: "I thought I knew what Gen Z wanted, but talking to actual creators completely changed how I approached the design. User research isn't just nice-to-have."
    },
    {
      title: "Every Millisecond Counts",
      description: "Small performance tweaks made huge differences in how people used the platform. Gen Z expects everything to be instant, and they'll bounce if it's not."
    },
    {
      title: "Think Ahead, But Don't Over-Engineer",
      description: "Building scalable architecture saved my butt later, but I also learned not to build for problems we didn't have yet. Balance is key."
    },
    {
      title: "Creative People Want Creative Tools",
      description: "The sweet spot was giving creators enough freedom to express themselves without making the platform feel chaotic or unprofessional."
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
  title: "Looking Back",
  content: "Even though CLLCTVE didn't make it in the end (company dissolved), I'm honestly pretty proud of what we built. We created this cool community of creators, got real brand partnerships, and the user engagement numbers were solid. It sucks that it's gone, but it taught me a ton about building for a specific audience and making things people actually want to use.",
  insights: [
    {
      title: "Got Way Better at React",
      description: "Nothing teaches you React architecture like building a real product with real users. I learned so much about component structure, performance, and state management."
    },
    {
      title: "User Research Actually Matters",
      description: "Talking to users completely changed how I approached everything. Now I always start with understanding what people actually need, not what I think they need."
    },
    {
      title: "Code That Scales Is Worth It",
      description: "All that time I spent making the code modular and scalable paid off as we kept adding features. Good habits early save you from hell later."
    }
  ]
};
