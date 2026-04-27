
import { 
  User, 
  Clock, 
  Users, 
  Palette, 
  Smartphone, 
  Zap,
  Target,
  AlertCircle,
  Eye,
  Lightbulb,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Search,
  Video,
  Shirt
} from "lucide-react";

export const techNoirData = {
  overview: {
    title: "Designing TECH NOIR as a first full product brief",
    description: [
      "Tech Noir was my first full product brief after completing a UI/UX bootcamp. The client wanted a mobile shopping app for wearable technology, but the positioning had to feel closer to luxury fashion than consumer electronics.",
      "The product problem was not awareness. People knew smartwatches and fitness trackers existed, but many did not know how to style them or where they fit in a fashion context.",
      "My role was to design a shopping experience that paired product discovery with styling guidance, editorial content, and enough context to make a new category feel approachable."
    ],
    projectDetails: [
      {
        label: "Role",
        value: "UI/UX Designer",
        icon: User,
      },
      {
        label: "Duration",
        value: "2 months",
        icon: Clock,
      },
      {
        label: "Team Size",
        value: "Just me + 2 devs",
        icon: Users,
      }
    ],
    toolDetails: [
      {
        label: "Design Tools",
        value: "Figma",
        icon: Palette,
      },
      {
        label: "Platform",
        value: "Mobile App",
        icon: Smartphone,
      },
      {
        label: "My Focus",
        value: "Making tech look fashionable",
        icon: ShoppingBag,
      }
    ]
  },
  
  problemSpace: {
    title: "The challenge: wearable tech lacked style context",
    introduction: "People knew what an Apple Watch was, but many did not know how to make wearable tech work with their outfits. The category read as functional first, with little guidance for shoppers who cared about style. The design needed to give people confidence before asking them to buy.",
    challenges: [
      {
        title: "Styling uncertainty",
        description: "People had heard of smartwatches and fitness trackers but had no clue how to make them look fashionable",
        icon: AlertCircle
      },
      {
        title: "Online shopping felt risky",
        description: "Most people wanted to see and try on wearable tech in person before buying because they were unsure",
        icon: Target
      },
      {
        title: "Tech and fashion disconnect",
        description: "There was this weird gap where people saw tech as functional but not fashionable",
        icon: Shirt
      },
      {
        title: "No central style reference",
        description: "Unlike regular fashion, there wasn't really a go-to place for wearable tech styling ideas",
        icon: Eye
      }
    ],
    designGoals: [
      {
        title: "Show people how to wear it",
        description: "Create guides and videos that show wearable tech with specific outfits and use cases",
        icon: Video
      },
      {
        title: "Make it look luxurious",
        description: "Design something that feels high-end, not like a random tech website",
        icon: Sparkles
      },
      {
        title: "Support discovery",
        description: "Build a browsing model where shoppers can find wearable tech they would want to wear",
        icon: Search
      },
      {
        title: "Build purchase confidence",
        description: "Help users feel excited about incorporating wearable tech into their personal style",
        icon: TrendingUp
      }
    ]
  },

  research: {
    title: "Researching how people saw wearable tech",
    introduction: "I started with informal interviews and competitive review. I asked people how they thought about wearable tech, then studied fashion retailers like Net-A-Porter and Nordstrom to understand how premium shopping flows handled discovery, education, and confidence.",
    researchSections: [
      {
        title: "Talking to potential users",
        description: "I interviewed about 15 people across friends, family, and casual intercept conversations.",
        items: [
          { text: "Everyone knew what smartwatches were but felt clueless about styling them" },
          { text: "Most people wanted to try things on in stores because they were nervous about online purchases" },
          { text: "They wanted direct examples of how wearable tech could fit into an outfit" },
          { text: "When I showed them luxury fashion sites, they got excited about that aesthetic for tech" }
        ]
      },
      {
        title: "Studying the competition",
        description: "I reviewed fashion e-commerce sites and documented the patterns that made browsing feel premium and clear.",
        items: [
          { text: "Net-A-Porter's clean layout and designer filters gave the category structure" },
          { text: "Nordstrom and Farfetch had great user flows for discovery" },
          { text: "Video content and lookbooks gave shoppers concrete styling examples" },
          { text: "Few examples combined wearable tech education with luxury shopping patterns" }
        ]
      }
    ],
    keyFindings: [
      {
        title: "People wanted guidance",
        description: "Users wanted guides on how to wear and style wearable technology with their outfits"
      },
      {
        title: "Premium styling changed perception",
        description: "When I showed premium aesthetics, people suddenly saw wearable tech as desirable instead of nerdy"
      },
      {
        title: "Show, Don't Tell",
        description: "Video content and visual demos worked better than product descriptions alone"
      }
    ]
  },

  strategy: {
    title: "Design strategy: education meets shopping",
    introduction: "The strategy was to make education part of the shopping flow. Instead of separating product pages from styling guidance, the app would help people understand how to wear the product while they were deciding whether to buy it.",
    keyInsights: [
      {
        highlight: "Teach while selling",
        description: "Combine shopping with actual education so people feel confident about what they're buying"
      },
      {
        highlight: "Make tech look luxurious",
        description: "Position wearable tech inside a fashion context, closer to a luxury accessory than a gadget shelf"
      },
      {
        highlight: "Show, Don't Just Describe",
        description: "Use videos and visual guides to show how the products fit into a shopper's style"
      },
      {
        highlight: "Create a destination",
        description: "Add editorial content so the app feels useful beyond a product grid"
      }
    ],
    flowSteps: [
      {
        number: 1,
        title: "Discover",
        description: "Users browse through curated collections that feel more like a fashion magazine than a tech store"
      },
      {
        number: 2,
        title: "Learn",
        description: "Educational content shows them exactly how to wear these pieces with different outfits"
      },
      {
        number: 3,
        title: "Visualize",
        description: "AR concepts and style guides help them picture how it'll look with their personal style"
      },
      {
        number: 4,
        title: "Buy with Confidence",
        description: "They make purchases with a clearer plan for how the product fits their style"
      }
    ]
  },

  finalDesign: {
    title: "What I built: a luxury shopping experience for wearable tech",
    description: [
      "I used a sleek dark theme, editorial spacing, and product-led imagery to move wearable tech out of a generic electronics context. The app centered on teaching people while they shopped through 'How to Wear' video sections, styling-aware product pages, and early AR try-on concepts."
    ],
    features: [
      {
        title: "Product Discovery",
        description: "Clean browsing experience with high-quality photos and filters to help people find products that match their style"
      },
      {
        title: "How to Wear Guides",
        description: "Video and photo guides showing real styling examples - like 'here's how to wear a smartwatch with a cocktail dress'"
      },
      {
        title: "AR Try-On Concept",
        description: "Designed mockups for users to virtually see how wearable tech would look with their outfits"
      },
      {
        title: "Designer Collections",
        description: "Curated sections that made wearable tech feel exclusive and fashion-forward"
      },
      {
        title: "Educational Content",
        description: "Blog-style content about trends and tech that made the app useful beyond checkout"
      }
    ],
    images: [
      "/images/d0f10fb1-b1eb-4e30-b666-c68f00716676.png",
      "/images/9e3be8d8-c9d0-4857-a786-b488a8b288c1.png",
      "/images/e047ad0c-5a06-4795-938c-c65d62909828.png",
      "/images/a473ef7d-6076-4386-af99-13262b6e684f.png",
      "/images/5291bbb5-d2b2-4171-b287-9a1d6735805b.png"
    ]
  },

  outcomes: {
    title: "How it turned out",
    metrics: [
      {
        title: "Project Duration",
        value: "2 Months",
        description: "from research to final designs",
        icon: Clock
      },
      {
        title: "Design Iterations",
        value: "5 Major",
        description: "rounds of feedback and refinement",
        icon: TrendingUp
      },
      {
        title: "Prototype Screens",
        value: "15+ Screens",
        description: "designed in Figma with interactions",
        icon: CheckCircle
      }
    ],
    achievements: [
      {
        title: "Built confidence through delivery",
        description: "This project gave me a working end-to-end case study from research through prototype"
      },
      {
        title: "Created a distinct concept",
        description: "Designed an experience that didn't exist in the market - education meets luxury shopping"
      },
      {
        title: "Learned to design with purpose",
        description: "Every design decision was backed by user research and had a clear reason behind it"
      }
    ]
  },

  challenges: {
    title: "What made the work difficult",
    challenges: [
      {
        title: "Teaching without slowing the flow",
        description: "The app needed to explain tech specs without making the shopping experience feel like homework."
      },
      {
        title: "Making tech look luxurious",
        description: "The visual system had to make a smartwatch feel closer to a fashion accessory than a generic device."
      },
      {
        title: "Content that helps",
        description: "Creating educational content that genuinely helped people without making the app feel like a boring manual"
      }
    ],
    learnings: [
      {
        title: "People learn best by seeing",
        description: "Video content and visual examples worked better than text-only product education"
      },
      {
        title: "Aesthetics affect trust",
        description: "When something looks expensive and well-designed, people automatically assume it's higher quality"
      },
      {
        title: "Confidence changes purchase behavior",
        description: "Once people felt confident about how to wear something, they were more likely to consider buying it"
      }
    ],
    nextSteps: [
      {
        title: "Personal Style Quizzes",
        description: "Would love to add onboarding that figures out someone's style and tech comfort level",
        icon: User
      },
      {
        title: "Better AR features",
        description: "The AR try-on concept would need real-time fit and styling feedback to become useful",
        icon: Zap
      },
      {
        title: "User-Generated Content",
        description: "Let people share their own styling ideas and create a real community around wearable fashion",
        icon: Users
      }
    ]
  },

  reflection: {
    title: "Looking back",
    description: [
      "Tech Noir was the project that made product design feel concrete for me. It combined fashion, technology, research, and interface structure into one problem: help people understand a category well enough to see themselves using it."
    ],
    keyTakeaways: [
      "Sometimes the best solutions come from combining two things that don't usually go together",
      "People want to learn when the guidance is specific and well timed",
      "Good design can literally change how people think about a whole category of products",
      "Research matters because it shows where confidence breaks down"
    ],
    futureConsiderations: [
      "Partner with fashion-tech brands to pressure-test the concept with real inventory",
      "Add recommendations based on personal style and tech comfort level",
      "Explore virtual fashion shows for wearable tech launches",
      "Build a community layer where people share wearable-tech styling examples"
    ]
  }
};
