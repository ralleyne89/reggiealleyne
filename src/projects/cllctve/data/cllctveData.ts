import type { ComponentType } from "react";
import { Users, Calendar, Palette, Lightbulb, Target, Zap, Code, Globe, Smartphone, Monitor, CheckCircle, ArrowRight, Layout, Database, Cpu, TrendingUp, Scale } from "lucide-react";

// Strategic Decisions Data - The core of senior-level case study
export interface StrategicDecisionItem {
  decision: string;
  alternative: string;
  reasoning: string;
  icon?: ComponentType<{ className?: string }>;
}

export const cllctveStrategicDecisionsData = {
  title: "The Bets We Made (And Why)",
  introduction: "Every startup is a series of calculated bets. Here are the strategic trade-offs that defined CLLCTVE—not what we built, but why we chose it over the alternatives.",
  decisions: [
    {
      decision: "Mobile-first experience",
      alternative: "Desktop feature parity with Behance",
      reasoning: "67% of our target users browsed portfolios on phones. We sacrificed desktop power-user features to win the mobile experience. Behance was unbeatable on desktop—but they weren't even trying on mobile.",
      icon: Smartphone
    },
    {
      decision: "React.js with our existing expertise",
      alternative: "Flutter for true cross-platform mobile",
      reasoning: "Flutter would have given us better mobile performance, but our team's React expertise meant 3x faster iteration cycles. Speed of learning beat theoretical mobile advantages for an unvalidated product.",
      icon: Code
    },
    {
      decision: "Community feed before analytics",
      alternative: "Professional analytics dashboard",
      reasoning: "User research showed creators wanted validation, not metrics. They wanted to know who viewed their work, not conversion funnels. We built what they asked for, not what seemed 'professional'.",
      icon: Users
    },
    {
      decision: "Limited brand customization",
      alternative: "Full brand control over challenge pages",
      reasoning: "Brands wanted their challenges to look unique, but unlimited customization would have fragmented the platform experience. We maintained product coherence at the cost of some enterprise flexibility.",
      icon: Palette
    }
  ]
};

export const cllctveOverviewData = {
  title: "The Bet: Mobile-First Over Feature Parity",
  description: [
    "Behance had the network effects. We had a hypothesis: Gen Z would trade network size for platform-native experience. The bet paid off—500+ creators, 15 brand partnerships, and 85% retention—before the company closed.",
    "As Product Designer & Design Systems Lead, I owned the strategic decision to build mobile-first when every competitor was desktop-first. This wasn't a UX preference—it was a market positioning choice backed by user research showing 67% of Gen Z browse portfolios on phones.",
    "The creator economy is worth $104B+, but we weren't trying to compete with Behance on features. We were competing on behavior fit. That distinction shaped every technical and design decision."
  ],
  projectDetails: [
    {
      icon: TrendingUp,
      label: "Impact",
      value: "500+ creators, 15 brand partnerships, 85% retention"
    },
    {
      icon: Users,
      label: "Role",
      value: "Product Designer & Design Systems Lead"
    },
    {
      icon: Calendar,
      label: "Duration",
      value: "1 year, 10 months"
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
      label: "Strategic Choice",
      value: "React.js (team expertise over ideal tech)"
    },
    {
      icon: Palette,
      label: "Design System",
      value: "Custom tokens, constrained brand customization"
    },
    {
      icon: Globe,
      label: "Architecture",
      value: "Mobile-first, lazy loading over pre-rendering"
    },
    {
      icon: Monitor,
      label: "Platform Bet",
      value: "Mobile-native over desktop feature parity"
    }
  ]
};

export const cllctveProblemSpaceData = {
  title: "Why Would Anyone Choose Us Over Behance?",
  introduction: "This was the hard question we had to answer. Behance had the network, the brand recognition, the Adobe integration. We couldn't win on features. So we asked: what wouldn't Behance build? The answer: a mobile-first platform that felt native to how Gen Z actually uses the internet.",
  challenges: [
    {
      title: "Behance's Network Effects",
      description: "Competing with an established platform isn't about features—it's about finding the behavior they can't serve. Behance's desktop-first architecture was their strength and their blind spot.",
      icon: Target
    },
    {
      title: "Mobile-First vs. Mobile-Responsive",
      description: "Every competitor had a responsive site. None had a mobile-first experience. The distinction: we designed for thumbs first, not mouse clicks adapted for touch.",
      icon: Smartphone
    },
    {
      title: "Community vs. Competition",
      description: "Dribbble and Behance often feel competitive. Gen Z creators wanted social validation and support, which required rethinking every interaction pattern.",
      icon: Users
    },
    {
      title: "Portfolio vs. Platform",
      description: "Traditional portfolios are static showcases. We needed a living platform where creators engaged daily, not just when job hunting.",
      icon: Layout
    }
  ],
  designGoals: [
    {
      title: "Win Mobile, Ignore Desktop Edge Cases",
      description: "Deliberately chose to under-serve desktop power users to nail the mobile experience. 67% of our users > 100% feature parity.",
      icon: Smartphone
    },
    {
      title: "Community Over Competition",
      description: "Build validation loops (likes, follows, features) over ranking systems. Creators wanted to feel supported, not judged.",
      icon: Users
    },
    {
      title: "Platform Stickiness Through Challenges",
      description: "Brand-sponsored challenges gave creators reasons to return daily. Discovery + opportunity in one place.",
      icon: Target
    },
    {
      title: "Constrained Customization",
      description: "Allow brand expression within strict design system rules. Prevent chaos while enabling personality.",
      icon: Palette
    }
  ]
};

export const cllctveResearchData = {
  title: "What We Learned (And What We Chose to Ignore)",
  introduction: "User research validated our hypothesis—but also revealed uncomfortable truths. 67% abandoned other platforms due to poor mobile experience. 89% wanted visual-first design. But here's the strategic insight: we couldn't be everything to everyone. We chose to optimize for the 67% and let the desktop power users find Behance.",
  researchSections: [
    {
      title: "The Validation",
      description: "Research that confirmed our mobile-first bet was right.",
      items: [
        { text: "67% of Gen Z creators had abandoned platforms due to poor mobile experience—this was our opportunity" },
        { text: "89% prioritized visual content over text descriptions—we designed for scrolling, not reading" },
        { text: "78% wanted supportive community dynamics, not competitive environments—we built support loops, not leaderboards" }
      ]
    },
    {
      title: "The Hard Truths We Accepted",
      description: "Research that forced us to make uncomfortable trade-offs.",
      items: [
        { text: "Desktop power users wanted features we couldn't build in mobile-first—we accepted losing them" },
        { text: "Brands wanted unlimited customization—we said no to preserve platform coherence" },
        { text: "Some creators wanted advanced analytics—we deprioritized to build community features first" }
      ]
    },
    {
      title: "Competitor Weaknesses We Exploited",
      description: "Where established players couldn't or wouldn't compete.",
      items: [
        { text: "Behance: Desktop-first architecture made true mobile-native impossible without rebuild" },
        { text: "Dribbble: Competitive culture alienated creators who wanted support, not judgment" },
        { text: "LinkedIn: Professional tone didn't match Gen Z's desire for authentic expression" }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Finding #1: Mobile Isn't Responsive—It's Different",
      description: "Responsive design adapts desktop to mobile. Mobile-first means designing for thumb-first interactions, vertical scrolling, and snackable content. Completely different mental model."
    },
    {
      title: "Finding #2: Community Beats Competition",
      description: "Leaderboards and rankings drove engagement on Dribbble, but also drove anxiety and imposter syndrome. Gen Z creators wanted support loops, not judgment."
    },
    {
      title: "Finding #3: Constraints Enable Creativity",
      description: "Unlimited customization sounds like freedom, but creates decision paralysis. Our constrained design system actually increased creator satisfaction—fewer choices, faster expression."
    }
  ]
};

export const cllctveIdeationData = {
  title: "The Strategy: Behavior Fit Over Feature Parity",
  introduction: "We weren't building a better Behance—we were building for a behavior Behance couldn't serve. Every ideation decision filtered through one question: 'Does this serve mobile-first Gen Z creators better than any alternative?'",
  keyInsights: [
    {
      highlight: "Platform-native beats feature-rich.",
      description: "Gen Z would trade network size for an experience that felt native to how they use the internet. Instagram-style interactions over LinkedIn-style professionalism."
    },
    {
      highlight: "Challenges create daily engagement.",
      description: "Static portfolios only get updated when job hunting. Brand-sponsored challenges gave creators reasons to return daily—discovery + opportunity in one place."
    },
    {
      highlight: "Constraints prevent chaos.",
      description: "Brands wanted unlimited customization. We gave them expression within strict guardrails. The platform stayed coherent; the brands stayed distinctive."
    },
    {
      highlight: "Speed of iteration beats ideal technology.",
      description: "React wasn't ideal for mobile. But our team's expertise meant 3x faster iteration. For an unvalidated product, learning speed mattered more than technical perfection."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Instant Onboarding",
      description: "30-second signup optimized for mobile thumb interactions. No desktop-style forms—progressive profile building."
    },
    {
      number: 2,
      title: "Visual-First Portfolio",
      description: "Drag-and-drop builder designed for touch. Vertical scrolling, card-based layouts, Instagram-native feel."
    },
    {
      number: 3,
      title: "Daily Challenge Discovery",
      description: "Algorithmic feed of brand challenges personalized to creator style. Swipe-based exploration."
    },
    {
      number: 4,
      title: "Community Validation",
      description: "Likes, follows, and features drive engagement. Support loops over competitive rankings."
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
  introduction: "I designed and implemented the platform with React, Styled Components, Ant Design, and MongoDB. The work focused on mobile-first portfolio creation, constrained brand customization, and fast-loading media experiences that supported 500+ creators, 15 brand partnerships, and 85% retention before the company closed.",
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
      src: "/images/cllctve-card-optimized.jpg",
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
  title: "The Hard Parts (And What They Taught Me)",
  challenges: [
    {
      title: "Performance vs. Rich Media",
      description: "Gen Z creators upload high-res images and videos. Gen Z also expects instant loading. We chose lazy loading over pre-rendering because testing showed our users tolerate loading spinners better than 5MB initial page weights. This wasn't a technical decision—it was a user behavior insight."
    },
    {
      title: "Scalable Architecture for a Product That Died",
      description: "I spent significant time building modular, scalable components. The company closed before we needed that scale, but the discipline created reusable patterns that still shape my product engineering practice."
    },
    {
      title: "Brand Customization vs. Platform Coherence",
      description: "Brands wanted their challenge pages to look unique. We declined unlimited customization to preserve platform coherence. Some enterprise flexibility was lost, but the user experience stayed consistent."
    },
    {
      title: "Mobile-First Meant Mobile-Only for Many Features",
      description: "Some features simply didn't translate to mobile touch interactions. We cut them entirely rather than building degraded mobile versions. Desktop power users complained. We accepted that loss to serve our core audience better."
    }
  ],
  learnings: [
    {
      title: "User Research Changes Everything—If You Actually Listen",
      description: "I thought I knew what Gen Z wanted. Talking to 15+ creators completely changed my approach. The insight about mobile-first wasn't obvious—it came from listening to frustration with competitors."
    },
    {
      title: "Sometimes 'Wrong' Technology Is Right Choice",
      description: "React wasn't ideal for mobile. Flutter would have been better technically. But our team's React expertise meant faster iteration, and for an unvalidated product, learning speed beat technical perfection."
    },
    {
      title: "Constraints Are Features, Not Limitations",
      description: "Limiting brand customization felt like saying no to customers. But the constraint created consistency that users actually valued. Sometimes the best feature is the one you don't build."
    },
    {
      title: "Scalable Code Pays Off—Even When the Product Dies",
      description: "The patterns I learned building for scale transfer to every project. It wasn't wasted effort—it was education disguised as work."
    }
  ],
  nextSteps: [
    {
      title: "What I'd Do Differently",
      description: "Build analytics earlier. We optimized for community features based on research, but couldn't prove our hypotheses without data. User research is necessary but not sufficient.",
      icon: Database
    },
    {
      title: "What I'd Keep the Same",
      description: "The mobile-first bet. The constrained customization. The community-over-competition positioning. These strategic choices were validated by user behavior.",
      icon: Target
    },
    {
      title: "Applied to Future Projects",
      description: "Every product decision now filters through 'what behavior are we serving that incumbents can't?' Competition on features is losing; competition on behavior fit is winning.",
      icon: Lightbulb
    }
  ]
};

export const cllctveReflectionData = {
  title: "What This Project Taught Me About Product Thinking",
  content: "CLLCTVE closed, but the strategic thinking—betting on user behavior over feature parity, making uncomfortable trade-offs, and accepting who the product would not serve—still shapes how I approach product decisions. The metrics (500+ creators, 85% retention, 15 brand partnerships) validated the approach while the business outcome reinforced that product quality alone does not guarantee company success.",
  insights: [
    {
      title: "Trade-offs Are The Product",
      description: "Every feature you build is a feature you didn't build instead. The decisions about what NOT to do—mobile-first over desktop parity, community over analytics, constraints over customization—defined CLLCTVE more than the features themselves."
    },
    {
      title: "Behavior Fit > Feature Parity",
      description: "We couldn't beat Behance on features. We could beat them on behavior fit for mobile-first Gen Z creators. Finding the behavior incumbents can't serve is the strategic insight that matters."
    },
    {
      title: "Good Product ≠ Successful Business",
      description: "Our product decisions were validated by user behavior. The company still failed. This taught me that product thinking is necessary but not sufficient. Market timing, funding, team dynamics—all matter too."
    }
  ]
};
