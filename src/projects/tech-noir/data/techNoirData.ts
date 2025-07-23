
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
    title: "A Fresh Designer's First Real Project: Building TECH NOIR",
    description: [
      "So this was actually my first big break! I literally just finished my UI/UX bootcamp and somehow landed this project. The client wanted a mobile app for selling wearable tech but positioned as luxury fashion. I was honestly pretty nervous but super excited.",
      "The whole idea was that people know about smartwatches and fitness trackers, but they have no clue how to actually style them or make them look good. Like, most people think wearable tech is just for athletes or tech bros, you know?",
      "My job was to design an app that would teach people how to wear this stuff fashionably while also letting them shop for it. Think of it like if Net-A-Porter had a baby with a tech blog - that's what we were going for."
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
        value: "Figma (my new best friend)",
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
    title: "The Real Challenge: People Think Wearable Tech Isn't Fashionable",
    introduction: "Here's what I discovered - people know what an Apple Watch is, but they have zero idea how to make it look good with their outfits. Most folks I talked to thought wearable tech was either for fitness fanatics or tech geeks. They wanted to buy this stuff but felt totally lost about how to actually wear it without looking like a robot. My mission? Figure out how to make people feel confident and stylish with wearable tech.",
    challenges: [
      {
        title: "Nobody Knows How to Style This Stuff",
        description: "People had heard of smartwatches and fitness trackers but had no clue how to make them look fashionable",
        icon: AlertCircle
      },
      {
        title: "Online Shopping Felt Risky",
        description: "Most people wanted to see and try on wearable tech in person before buying because they were unsure",
        icon: Target
      },
      {
        title: "Tech vs Fashion Disconnect",
        description: "There was this weird gap where people saw tech as functional but not fashionable",
        icon: Shirt
      },
      {
        title: "No Style Inspiration Anywhere",
        description: "Unlike regular fashion, there wasn't really a go-to place for wearable tech styling ideas",
        icon: Eye
      }
    ],
    designGoals: [
      {
        title: "Show People How to Wear It",
        description: "Create guides and videos that actually show people how to style wearable tech with different outfits",
        icon: Video
      },
      {
        title: "Make It Look Luxurious",
        description: "Design something that feels high-end, not like a random tech website",
        icon: Sparkles
      },
      {
        title: "Help People Discover Cool Stuff",
        description: "Build a platform where people can browse and find wearable tech they actually want to wear",
        icon: Search
      },
      {
        title: "Build Their Confidence",
        description: "Help users feel excited about incorporating wearable tech into their personal style",
        icon: TrendingUp
      }
    ]
  },

  research: {
    title: "My Research Process: Talking to Real People About Wearable Tech",
    introduction: "As a new designer, I had to figure out the research process from scratch. I started by talking to friends and family about their thoughts on wearable tech. Then I spent way too much time analyzing fashion websites like Net-A-Porter and Nordstrom to see how they handled luxury shopping experiences. What I found was pretty eye-opening - there was this huge gap between cool tech and actual style advice.",
    researchSections: [
      {
        title: "Talking to Potential Users",
        description: "I interviewed about 15 people - friends, family, and some folks from coffee shops who were willing to chat with me.",
        items: [
          { text: "Everyone knew what smartwatches were but felt clueless about styling them" },
          { text: "Most people wanted to try things on in stores because they were nervous about online purchases" },
          { text: "They really wanted someone to just show them how to make this stuff look good" },
          { text: "When I showed them luxury fashion sites, they got excited about that aesthetic for tech" }
        ]
      },
      {
        title: "Studying the Competition",
        description: "I spent hours on fashion e-commerce sites, taking screenshots and notes on what worked and what didn't.",
        items: [
          { text: "Net-A-Porter's clean layout and designer filters were chef's kiss" },
          { text: "Nordstrom and Farfetch had great user flows for discovery" },
          { text: "Video content and lookbooks were super effective for inspiration" },
          { text: "But nobody was doing this specific education + shopping combo for wearable tech" }
        ]
      }
    ],
    keyFindings: [
      {
        title: "People Want to Learn",
        description: "Users were hungry for guides on how to actually wear and style wearable technology with their outfits"
      },
      {
        title: "Luxury Vibes Work",
        description: "When I showed premium aesthetics, people suddenly saw wearable tech as desirable instead of nerdy"
      },
      {
        title: "Show, Don't Tell",
        description: "Video content and visual demos were way more effective than just product descriptions"
      }
    ]
  },

  strategy: {
    title: "My Design Strategy: Education Meets Shopping",
    introduction: "Okay, so here's what I came up with - instead of just being another shopping app, why not make it educational? Like, what if people could learn how to style wearable tech while they're browsing to buy it? I wanted to create this luxury experience that made people feel smart and confident about their choices.",
    keyInsights: [
      {
        highlight: "Teaching While Selling",
        description: "Combine shopping with actual education so people feel confident about what they're buying"
      },
      {
        highlight: "Make Tech Look Luxurious",
        description: "Position wearable tech as high fashion, not just gadgets - think Chanel meets Apple Watch"
      },
      {
        highlight: "Show, Don't Just Describe",
        description: "Use videos and visual guides to help people actually see how this stuff fits into their style"
      },
      {
        highlight: "Create a Community Vibe",
        description: "Build in content that makes the app feel like a destination, not just a store"
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
        description: "They make purchases knowing exactly how they'll style their new tech"
      }
    ]
  },

  finalDesign: {
    title: "What I Built: A Luxury Shopping Experience for Wearable Tech",
    description: [
      "I went with this sleek, dark theme that felt really premium - think luxury fashion magazine meets tech startup. The whole app was built around this idea of teaching people while they shop. I created these 'How to Wear' video sections, product pages that actually explained styling, and even mocked up some AR try-on concepts (which honestly felt super futuristic at the time)."
    ],
    features: [
      {
        title: "Product Discovery",
        description: "Clean browsing experience with high-quality photos and filters to help people find their vibe"
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
        description: "Blog-style content about trends and tech that positioned the app as more than just a store"
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
    title: "How It Turned Out: My First Real Design Success",
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
        title: "Successfully Launched My Career",
        description: "This project gave me the confidence to call myself a real UX/UI designer"
      },
      {
        title: "Created Something Unique",
        description: "Designed an experience that didn't exist in the market - education meets luxury shopping"
      },
      {
        title: "Learned to Design with Purpose",
        description: "Every design decision was backed by user research and had a clear reason behind it"
      }
    ]
  },

  challenges: {
    title: "The Stuff That Made Me Want to Pull My Hair Out",
    challenges: [
      {
        title: "Teaching Without Being Boring",
        description: "How do you explain tech specs without making people's eyes glaze over? Had to find the sweet spot between informative and engaging"
      },
      {
        title: "Making Tech Look Luxurious",
        description: "Convincing people that a smartwatch can be as chic as a Cartier was harder than I thought - had to nail that premium aesthetic"
      },
      {
        title: "Content That Actually Helps",
        description: "Creating educational content that genuinely helped people without making the app feel like a boring manual"
      }
    ],
    learnings: [
      {
        title: "People Learn Best by Seeing",
        description: "Video content and visual examples worked way better than just describing things with text"
      },
      {
        title: "Aesthetics Really Matter",
        description: "When something looks expensive and well-designed, people automatically assume it's higher quality"
      },
      {
        title: "Confidence is Everything",
        description: "Once people felt confident about how to wear something, they were way more likely to actually buy it"
      }
    ],
    nextSteps: [
      {
        title: "Personal Style Quizzes",
        description: "Would love to add onboarding that figures out someone's style and tech comfort level",
        icon: User
      },
      {
        title: "Better AR Features",
        description: "The AR try-on concept was cool, but imagine if it actually worked in real-time",
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
    title: "Looking Back: What This Project Taught Me",
    description: [
      "Honestly, TECH NOIR was the project that made me feel like a real designer. It combined everything I love - fashion, technology, and figuring out how to make people's lives a little bit better through good design. Plus, it taught me that even as a newbie, I could create something that didn't exist in the market before."
    ],
    keyTakeaways: [
      "Sometimes the best solutions come from combining two things that don't usually go together",
      "People want to learn, they just need someone to teach them in a way that doesn't suck",
      "Good design can literally change how people think about a whole category of products",
      "Research is everything - you can't design for people without actually talking to them first"
    ],
    futureConsiderations: [
      "I'd love to work with actual fashion-tech brands to bring this concept to life",
      "Adding AI recommendations based on personal style could be game-changing",
      "Virtual fashion shows for wearable tech would be so cool",
      "Building a community where people share their tech+fashion looks would be amazing"
    ]
  }
};
