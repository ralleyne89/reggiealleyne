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
  title: "The bets we made and why",
  introduction: "CLLCTVE was built on a few hard product bets: where to compete, who to ignore, and which constraints would make the platform stronger.",
  decisions: [
    {
      decision: "Mobile-first experience",
      alternative: "Desktop feature parity with Behance",
      reasoning: "67% of our target users browsed portfolios on phones. We sacrificed desktop power-user features to win the mobile experience. Behance was strong on desktop, but mobile was the opening.",
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
      reasoning: "User research showed creators wanted validation, not metrics. They wanted to know who viewed their work, not study conversion funnels. We built for that behavior.",
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
  title: "The mobile-first bet",
  description: [
    "Behance had the network effects. We had a narrower hypothesis: Gen Z creators would trade network size for a portfolio experience that felt native to mobile. The product reached 500+ creators, 15 brand partnerships, and 85% retention before the company closed.",
    "As Product Designer & Design Systems Lead, I owned the decision to build mobile-first while most competitors treated mobile as a smaller desktop. That was a market positioning choice, not a visual preference.",
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
      label: "Team size",
      value: "6 members"
    }
  ],
  toolDetails: [
    {
      icon: Code,
      label: "Strategic choice",
      value: "React.js (team expertise over ideal tech)"
    },
    {
      icon: Palette,
      label: "Design system",
      value: "Custom tokens, constrained brand customization"
    },
    {
      icon: Globe,
      label: "Architecture",
      value: "Mobile-first, lazy loading over pre-rendering"
    },
    {
      icon: Monitor,
      label: "Platform bet",
      value: "Mobile-native over desktop feature parity"
    }
  ]
};

export const cllctveProblemSpaceData = {
  title: "Why would anyone choose us over Behance?",
  introduction: "This was the hard question we had to answer. Behance had the network, the brand recognition, the Adobe integration. We couldn't win on features. So we asked: what wouldn't Behance build? The answer: a mobile-first platform that felt native to how Gen Z actually uses the internet.",
  challenges: [
    {
      title: "Behance's network effects",
      description: "Competing with an established platform meant finding the behavior it could not serve well. Behance's desktop-first architecture was both its strength and its blind spot.",
      icon: Target
    },
    {
      title: "Mobile-first vs. mobile-responsive",
      description: "Every competitor had a responsive site. None had a mobile-first experience. The distinction: we designed for thumbs first, not mouse clicks adapted for touch.",
      icon: Smartphone
    },
    {
      title: "Community vs. competition",
      description: "Dribbble and Behance often feel competitive. Gen Z creators wanted social validation and support, which required rethinking every interaction pattern.",
      icon: Users
    },
    {
      title: "Portfolio vs. platform",
      description: "Traditional portfolios usually get updated when someone is job hunting. We needed a platform creators had a reason to open every week.",
      icon: Layout
    }
  ],
  designGoals: [
    {
      title: "Win mobile, ignore desktop edge cases",
      description: "We deliberately under-served desktop power users so the mobile experience could be stronger for the creators we were actually targeting.",
      icon: Smartphone
    },
    {
      title: "Community over competition",
      description: "Build validation loops (likes, follows, features) over ranking systems. Creators wanted to feel supported, not judged.",
      icon: Users
    },
    {
      title: "Return visits through challenges",
      description: "Brand-sponsored challenges gave creators reasons to return daily. Discovery + opportunity in one place.",
      icon: Target
    },
    {
      title: "Constrained customization",
      description: "Allow brand expression within strict design system rules. Prevent chaos while enabling personality.",
      icon: Palette
    }
  ]
};

export const cllctveResearchData = {
  title: "What we learned and what we chose to ignore",
  introduction: "User research supported the mobile-first bet, but it also forced us to accept who the product would not serve. 67% had abandoned other platforms because mobile felt poor. 89% wanted visual-first design. We optimized for those creators and let desktop power users stay with Behance.",
  researchSections: [
    {
      title: "The validation",
      description: "Research that confirmed our mobile-first bet was right.",
      items: [
        { text: "67% of Gen Z creators had abandoned platforms due to poor mobile experience, which gave us the opening" },
        { text: "89% prioritized visual content over text descriptions, so we designed for scrolling instead of long portfolio pages" },
        { text: "78% wanted supportive community dynamics, so we built support loops instead of leaderboards" }
      ]
    },
    {
      title: "The tradeoffs we accepted",
      description: "Research that forced us to make uncomfortable trade-offs.",
      items: [
        { text: "Desktop power users wanted features we could not build in a mobile-first product, and we accepted losing them" },
        { text: "Brands wanted unlimited customization, and we said no to preserve platform coherence" },
        { text: "Some creators wanted advanced analytics, but we prioritized community features first" }
      ]
    },
    {
      title: "Competitor openings",
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
      title: "Finding #1: mobile is more than responsive desktop",
      description: "Responsive design adapts desktop to mobile. Mobile-first means designing for thumb-first interactions, vertical scrolling, and snackable content. Completely different mental model."
    },
    {
      title: "Finding #2: community beat competition",
      description: "Leaderboards and rankings drove engagement on Dribbble, but also drove anxiety and imposter syndrome. Gen Z creators wanted support loops, not judgment."
    },
    {
      title: "Finding #3: constraints helped creators move faster",
      description: "Unlimited customization sounded like freedom, but created decision paralysis. The constrained design system gave creators fewer choices and a faster path to expression."
    }
  ]
};

export const cllctveIdeationData = {
  title: "Behavior fit over feature parity",
  introduction: "We were not trying to build a better Behance. We were building for a behavior Behance did not serve well. Every product decision came back to one question: does this help mobile-first Gen Z creators more than the alternatives?",
  keyInsights: [
    {
      highlight: "Platform-native beats feature-rich.",
      description: "Gen Z would trade network size for an experience that felt native to how they use the internet. Instagram-style interactions over LinkedIn-style professionalism."
    },
    {
      highlight: "Challenges create daily engagement.",
      description: "Static portfolios only get updated when job hunting. Brand-sponsored challenges gave creators a reason to come back: discovery and opportunity in one place."
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
      title: "Fast onboarding",
      description: "30-second signup optimized for mobile thumb interactions, with progressive profile building instead of desktop-style forms."
    },
    {
      number: 2,
      title: "Visual-first portfolio",
      description: "Drag-and-drop builder designed for touch. Vertical scrolling, card-based layouts, Instagram-native feel."
    },
    {
      number: 3,
      title: "Challenge discovery",
      description: "Algorithmic feed of brand challenges personalized to creator style. Swipe-based exploration."
    },
    {
      number: 4,
      title: "Community validation",
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
  wireframesDescription: "The platform architecture put portfolio management and opportunity discovery in the same creator loop.",
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
  title: "Building the product around the behavior",
  introduction: "I designed and implemented the platform with React, Styled Components, Ant Design, and MongoDB. The work focused on mobile-first portfolio creation, constrained brand customization, and fast-loading media experiences that supported 500+ creators, 15 brand partnerships, and 85% retention before the company closed.",
  designHighlights: [
    { text: "Custom portfolio builder with drag-and-drop controls for arranging work by story, category, and audience" },
    { text: "Modular portfolio system enabling creators to organize work by category and create multiple portfolio views for different audiences" },
    { text: "Branded challenge pages with custom-styled areas where brands can host challenges with their own visual identity while maintaining platform consistency" },
    { text: "Real-time notification system keeping users updated on new challenges, opportunities, and platform activity" },
    { text: "Mobile-first responsive design tuned for touch interactions and smaller screens" },
    { text: "Dynamic theming system that permits brand customization within defined parameters and design guidelines" }
  ],
  uiFeatures: [
    {
      title: "Drag-and-drop builder",
      description: "Creators could arrange work by story, category, and audience without starting from a blank page.",
      icon: Layout
    },
    {
      title: "Real-time notifications",
      description: "Keep users engaged with updates on challenges, opportunities, and platform activity.",
      icon: Zap
    },
    {
      title: "Brand integration",
      description: "Brand customization stayed inside platform rules so challenge pages felt distinct without breaking the product.",
      icon: Palette
    },
    {
      title: "Mobile optimization",
      description: "Touch-optimized interface designed for mobile-first Gen Z users.",
      icon: Smartphone
    },
    {
      title: "Community features",
      description: "Tools for creators to connect, collaborate, and support each other's work.",
      icon: Users
    },
    {
      title: "Performance focused",
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
  title: "The hard parts and what they taught me",
  challenges: [
    {
      title: "Performance vs. rich media",
      description: "Gen Z creators upload high-res images and videos, but they also expect fast loading. We chose lazy loading over pre-rendering because testing showed our users tolerated loading states better than 5MB initial page weights."
    },
    {
      title: "Scalable architecture for a product that closed",
      description: "I spent significant time building modular, scalable components. The company closed before we needed that scale, but the discipline created reusable patterns that still shape my product engineering practice."
    },
    {
      title: "Brand customization vs. platform coherence",
      description: "Brands wanted their challenge pages to look unique. We declined unlimited customization to preserve platform coherence. Some enterprise flexibility was lost, but the user experience stayed consistent."
    },
    {
      title: "Mobile-first meant mobile-only for some features",
      description: "Some features simply didn't translate to mobile touch interactions. We cut them entirely rather than building degraded mobile versions. Desktop power users complained. We accepted that loss to serve our core audience better."
    }
  ],
  learnings: [
    {
      title: "User research only works if you listen",
      description: "I thought I knew what Gen Z wanted. Talking to 15+ creators changed my approach. The mobile-first insight came from listening to their frustration with competitors."
    },
    {
      title: "Sometimes the imperfect technology is the right choice",
      description: "React wasn't ideal for mobile. Flutter would have been better technically. But our team's React expertise meant faster iteration, and for an unvalidated product, learning speed beat technical perfection."
    },
    {
      title: "Constraints can be product decisions",
      description: "Limiting brand customization felt like saying no to customers. But the constraint created consistency that users actually valued. Sometimes the best feature is the one you don't build."
    },
    {
      title: "Reusable patterns still mattered",
      description: "The patterns I learned while building for scale still transfer to new work. The company closed, but the system thinking stayed useful."
    }
  ],
  nextSteps: [
    {
      title: "What I would do differently",
      description: "Build analytics earlier. We optimized for community features based on research, but couldn't prove our hypotheses without data. User research is necessary but not sufficient.",
      icon: Database
    },
    {
      title: "What I would keep the same",
      description: "The mobile-first bet. The constrained customization. The community-over-competition positioning. These strategic choices were validated by user behavior.",
      icon: Target
    },
    {
      title: "What I carried forward",
      description: "Every product decision now filters through 'what behavior are we serving that incumbents can't?' Competition on features is losing; competition on behavior fit is winning.",
      icon: Lightbulb
    }
  ]
};

export const cllctveReflectionData = {
  title: "What this project taught me about product thinking",
  content: "CLLCTVE closed, but the product work still changed how I make decisions. The mobile-first bet, the constrained brand system, and the choice to serve community behavior over feature parity all held up. The business outcome also made the lesson sharper: strong product judgment matters, but it does not guarantee company survival.",
  insights: [
    {
      title: "Tradeoffs are the product",
      description: "Every feature you build is a feature you do not build instead. The decisions about what to skip, mobile-first over desktop parity, community over analytics, constraints over customization, defined CLLCTVE more than the features themselves."
    },
    {
      title: "Behavior fit beats feature parity",
      description: "We couldn't beat Behance on features. We could beat them on behavior fit for mobile-first Gen Z creators. Finding the behavior incumbents can't serve is the strategic insight that matters."
    },
    {
      title: "A good product is not the whole business",
      description: "Our product decisions were validated by user behavior. The company still failed. Product thinking is necessary, but timing, funding, and team dynamics matter too."
    }
  ]
};
