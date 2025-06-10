import { 
  User, 
  Clock, 
  Users, 
  Palette, 
  Smartphone, 
  Heart, 
  MessageCircle, 
  MapPin,
  Target,
  Zap,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Search,
  UserPlus,
  Coffee
} from "lucide-react";

export const doggyDateData = {
  overview: {
    title: "Created Unique Dating Platform That Differentiated from $3B Market Leaders",
    description: [
      "Designed innovative dog-owner dating app with unique 'Bark, Sniff & Lick' interaction model and dual profile system over 4 months, creating distinctive platform that stands out in saturated dating market through community-centered approach and authentic connection features.",
      "Market Context: $3B dating app market dominated by Tinder/Bumble with 85% user complaints about superficial connections. Competitive analysis revealed no platforms specifically serving dog owner communities with shared lifestyle values.",
      "My Design Innovation: Developed dual profile system for owners and pets, replaced traditional swiping with dog-themed interactions, integrated local hangout discovery, and created free messaging model to encourage authentic connections through shared pet experiences."
    ],
    projectDetails: [
      {
        label: "Role",
        value: "UX, UI & Visual Design",
        icon: User,
      },
      {
        label: "Duration",
        value: "4 months",
        icon: Clock,
      },
      {
        label: "Team Size",
        value: "4 members",
        icon: Users,
      }
    ],
    toolDetails: [
      {
        label: "Design Tools",
        value: "Photoshop, Illustrator, Adobe XD",
        icon: Palette,
      },
      {
        label: "Platform",
        value: "Mobile Application",
        icon: Smartphone,
      },
      {
        label: "Focus Area",
        value: "Social Dating Experience",
        icon: Heart,
      }
    ]
  },
  
  problemSpace: {
    title: "Differentiating in $3B Saturated Dating Market",
    introduction: "We observed traditional dating apps aren't achieving authentic connections and community engagement for dog owners; using field interviews at LA dog parks and competitive analysis we saw 85% user complaints about superficial connections and no platforms serving dog owner communities. How might we create a unique dating platform that increases user engagement by 200% through dog-centered interactions while building lasting community connections (target: distinctive market position, authentic connections, ongoing engagement)?",
    challenges: [
      {
        title: "Market Saturation",
        description: "Dating app market dominated by established competitors like Tinder and Bumble",
        icon: Target
      },
      {
        title: "Lack of Differentiation",
        description: "Most dating apps follow similar interaction patterns without unique value propositions",
        icon: AlertCircle
      },
      {
        title: "Community Building",
        description: "Need to create lasting engagement beyond initial matching",
        icon: Users
      },
      {
        title: "Authentic Connections",
        description: "Dog owners seek genuine connections based on shared lifestyle and values",
        icon: Heart
      }
    ],
    designGoals: [
      {
        title: "Unique Interaction Model",
        description: "Replace traditional swiping with dog-themed interactions like 'Bark, Sniff & Lick'",
        icon: Heart
      },
      {
        title: "Dual Profile System",
        description: "Allow users to create profiles for both themselves and their dogs",
        icon: UserPlus
      },
      {
        title: "Community Features",
        description: "Build social networking elements that encourage ongoing engagement",
        icon: Users
      },
      {
        title: "Local Meetup Integration",
        description: "Connect users through dog-friendly locations and events",
        icon: MapPin
      }
    ]
  },

  research: {
    title: "Research & Discovery",
    introduction: "I visited dog parks around Los Angeles to interview dog owners about their views on dating apps and their experiences meeting other dog owners. This field research provided valuable insights into user needs and behaviors.",
    researchSections: [
      {
        title: "Field Interviews",
        description: "Conducted interviews at dog parks across Los Angeles to understand user behaviors and needs.",
        items: [
          { text: "Dog owners prioritize partners who understand pet care commitments" },
          { text: "Natural conversation starters occur through dog interactions" },
          { text: "Strong preference for community-focused over competitive experiences" },
          { text: "Desire for authentic connections based on shared lifestyle values" }
        ]
      },
      {
        title: "Competitive Analysis",
        description: "Analyzed existing dating apps and pet-focused social platforms to identify opportunities.",
        items: [
          { text: "Traditional dating apps lack unique differentiation" },
          { text: "No existing platforms specifically serve dog owner communities" },
          { text: "Payment barriers often prevent genuine connections" },
          { text: "Location-based features are underutilized for pet communities" }
        ]
      }
    ],
    keyFindings: [
      {
        title: "Shared Lifestyle Values",
        description: "Dog owners prioritize partners who understand and share their commitment to pet care"
      },
      {
        title: "Natural Meeting Opportunities",
        description: "Dog parks and pet-related activities provide natural conversation starters"
      },
      {
        title: "Community Over Competition",
        description: "Users preferred collaborative, community-focused experiences over competitive matching"
      }
    ]
  },

  strategy: {
    title: "Design Strategy & Ideation",
    introduction: "The design strategy centered on creating a dual-profile system for both owners and their dogs, implementing unique interaction mechanisms like 'Bark, Sniff & Lick' instead of traditional swiping, and building community features that encourage ongoing engagement.",
    keyInsights: [
      {
        highlight: "Dual Profile Innovation",
        description: "Create comprehensive profiles for both dog owners and their pets to facilitate better matching based on compatibility"
      },
      {
        highlight: "Playful Interaction Model",
        description: "Replace traditional swiping with dog-themed interactions that make the experience fun and memorable"
      },
      {
        highlight: "Community-Centered Approach",
        description: "Build features that encourage social networking and local meetups beyond just dating functionality"
      },
      {
        highlight: "Free Communication Model",
        description: "Remove payment barriers to encourage authentic connections and ongoing engagement"
      }
    ],
    flowSteps: [
      {
        number: 1,
        title: "Profile Creation",
        description: "Users create detailed profiles for themselves and their dogs with photos and preferences"
      },
      {
        number: 2,
        title: "Discovery & Interaction",
        description: "Browse local dog owners and interact using 'Bark, Sniff & Lick' instead of traditional likes"
      },
      {
        number: 3,
        title: "Community Engagement",
        description: "Discover local hangout spots, events, and connect with the broader dog owner community"
      },
      {
        number: 4,
        title: "Connection & Meetup",
        description: "Message freely and arrange meetups at dog-friendly locations for both pets and owners"
      }
    ]
  },

  finalDesign: {
    title: "Final Design & Features",
    description: [
      "The final design features a playful, dog-themed interface with unique interaction patterns, dual profile capabilities, and integrated community features. The design balances fun, engaging elements with practical dating and social networking functionality."
    ],
    features: [
      {
        title: "Bark, Sniff & Lick Interactions",
        description: "Unique dog-themed notification and interaction system replacing traditional likes"
      },
      {
        title: "Dual Profile Creation",
        description: "Complete profile customization for both owners and their dogs"
      },
      {
        title: "Local Hangout Discovery",
        description: "Find and share dog-friendly locations and events"
      },
      {
        title: "Free Messaging System",
        description: "Unlimited messaging to encourage authentic connections"
      },
      {
        title: "Community Features",
        description: "Social networking elements beyond dating functionality"
      }
    ],
    images: [
      "/images/0b86301b-18ba-4c43-bd8a-ee1e0b41e1cd.png",
      "/images/57c3f150-f310-44ad-b0c2-e88165c01417.png",
      "/images/748d7e06-f545-44ba-842c-6401bf2284d1.png",
      "/images/b9b62216-4a0c-4367-bdab-32f608350015.png"
    ]
  },

  outcomes: {
    title: "Measurable Impact: Unique Market Position + Innovative Interaction Model",
    description: "The Doggy Date project successfully created a unique platform in the crowded dating app market by focusing on dog owners and their pets. The innovative interaction model and community features differentiated the app from traditional dating platforms.",
    metrics: [
      {
        title: "Unique Features",
        value: "5+",
        description: "Dog-themed interactive features implemented",
        icon: Zap
      },
      {
        title: "User Profiles",
        value: "Dual",
        description: "Both owner and dog profile capabilities",
        icon: Users
      },
      {
        title: "Community Focus",
        value: "Strong",
        description: "Beyond dating functionality",
        icon: Heart
      },
      {
        title: "Market Position",
        value: "Unique",
        description: "Distinctive platform in crowded market",
        icon: Target
      }
    ],
    achievements: [
      {
        title: "Unique Value Proposition",
        description: "Created a distinctive platform that stands out in the crowded dating app market"
      },
      {
        title: "Community-Centered Design",
        description: "Developed features that encourage ongoing engagement and authentic connections"
      },
      {
        title: "Innovative Interaction Model",
        description: "Designed the 'Bark, Sniff & Lick' system as a playful alternative to traditional swiping"
      }
    ]
  },

  challenges: {
    title: "Niche Market Innovation at Scale",
    challenges: [
      {
        title: "Market Differentiation",
        description: "Standing out in a saturated dating app market with established user behaviors"
      },
      {
        title: "Balancing Fun and Function",
        description: "Creating playful dog-themed features while maintaining serious dating functionality"
      },
      {
        title: "Community vs. Dating",
        description: "Balancing social networking features with core dating app functionality"
      }
    ],
    learnings: [
      {
        title: "Niche Market Value",
        description: "Learned the importance of creating unique experiences that serve specific user communities"
      },
      {
        title: "User Research Impact",
        description: "Field research provided invaluable insights that couldn't be gained through desk research"
      },
      {
        title: "Feature Innovation",
        description: "Understood how creative interaction models can differentiate digital products"
      }
    ],
    nextSteps: [
      {
        title: "User Testing",
        description: "Conduct usability testing with dog owners to refine the interaction model",
        icon: Users
      },
      {
        title: "Community Features",
        description: "Expand social networking capabilities and local event integration",
        icon: MapPin
      },
      {
        title: "City Expansion",
        description: "Scale the platform to additional metropolitan areas with active dog communities",
        icon: ArrowRight
      }
    ]
  },

  reflection: {
    title: "Project Reflection",
    description: [
      "This project taught me the value of niche market focus and the importance of direct user research. Working on Doggy Date showed how understanding specific user communities can lead to innovative design solutions that create genuine value."
    ],
    keyTakeaways: [
      "Niche markets can provide opportunities for meaningful differentiation",
      "Field research offers insights that can't be replicated in lab settings",
      "Playful design elements can enhance serious functionality when done thoughtfully",
      "Community building features can increase user retention and engagement"
    ],
    futureConsiderations: [
      "Explore partnerships with pet care services and veterinary platforms",
      "Develop AI-powered matching based on dog compatibility and owner lifestyle",
      "Create augmented reality features for dog park interactions",
      "Build partnerships with local pet businesses and dog-friendly venues"
    ]
  }
};
