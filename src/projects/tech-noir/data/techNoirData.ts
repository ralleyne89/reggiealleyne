
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
    title: "Project Overview",
    description: [
      "Tech Noir is a mobile e-commerce experience created to merge the worlds of wearable technology and high fashion. The app not only showcases trend-setting fashion-tech pieces but also educates users on how to wear and understand them.",
      "It's designed to inspire, inform, and sell—bridging the gap between style and innovation through a luxury aesthetic and educational content that makes wearable technology accessible to fashion-forward consumers."
    ],
    projectDetails: [
      {
        label: "Role",
        value: "UX, UI & Visual Designer",
        icon: User,
      },
      {
        label: "Duration",
        value: "2 months",
        icon: Clock,
      },
      {
        label: "Team Size",
        value: "3 members",
        icon: Users,
      }
    ],
    toolDetails: [
      {
        label: "Design Tools",
        value: "Figma, Adobe XD, Illustrator",
        icon: Palette,
      },
      {
        label: "Platform",
        value: "Mobile Application",
        icon: Smartphone,
      },
      {
        label: "Focus Area",
        value: "E-commerce & Education",
        icon: ShoppingBag,
      }
    ]
  },
  
  problemSpace: {
    title: "The Challenge",
    introduction: [
      "Wearable tech is misunderstood and underexplored in e-commerce. Many users don't know what wearable tech is, how it works, or how to incorporate it into their wardrobe. If consumers don't understand its function, they won't see it as fashionable."
    ],
    challenges: [
      {
        title: "Market Education Gap",
        description: "Most users had heard of wearable tech but didn't know how to style it or understand its functionality",
        icon: AlertCircle
      },
      {
        title: "Purchase Hesitation",
        description: "Majority preferred in-store purchases due to uncertainty about wearable technology products",
        icon: Target
      },
      {
        title: "Fashion Integration",
        description: "Users struggled to see how wearable tech could be fashionable or fit into their personal style",
        icon: Shirt
      },
      {
        title: "Lack of Inspiration",
        description: "No centralized platform existed for wearable tech fashion inspiration and education",
        icon: Eye
      }
    ],
    designGoals: [
      {
        title: "Educational Experience",
        description: "Create 'How to Wear' guides and styling videos to educate users on wearable tech fashion",
        icon: Video
      },
      {
        title: "Luxury Aesthetic",
        description: "Design a clean, dark-themed interface that conveys premium fashion and technology",
        icon: Sparkles
      },
      {
        title: "Discovery Platform",
        description: "Build a platform for users to discover and explore wearable tech through curated collections",
        icon: Search
      },
      {
        title: "Style Confidence",
        description: "Help users feel confident incorporating wearable tech into their personal style",
        icon: TrendingUp
      }
    ]
  },

  research: {
    title: "Research & Discovery",
    introduction: [
      "I conducted surveys and field research to gauge wearable tech awareness and analyzed competitive e-commerce platforms to understand user expectations and industry standards."
    ],
    researchSections: [
      {
        title: "User Surveys & Interviews",
        description: "Conducted field research to understand user awareness and perceptions of wearable technology in fashion contexts.",
        items: [
          { text: "Most users had heard of wearable tech but lacked styling knowledge" },
          { text: "Strong preference for in-store purchases due to uncertainty" },
          { text: "Desire for educational content and styling guidance" },
          { text: "Interest in luxury positioning of tech products" }
        ]
      },
      {
        title: "Competitive Analysis",
        description: "Analyzed leading fashion e-commerce platforms to identify best practices and opportunities for differentiation.",
        items: [
          { text: "Studied Net-A-Porter's clean layout and designer filters" },
          { text: "Analyzed Nordstrom and Farfetch user experiences" },
          { text: "Identified effective use of video content and lookbooks" },
          { text: "Found gap in wearable tech-specific education and styling" }
        ]
      }
    ],
    keyFindings: [
      {
        title: "Education is Key",
        description: "Users need comprehensive guides on how to wear and style wearable technology"
      },
      {
        title: "Luxury Positioning Works",
        description: "Premium aesthetic and designer collaborations increase user confidence in wearable tech"
      },
      {
        title: "Video Content Essential",
        description: "Visual demonstrations significantly improve user understanding and purchase confidence"
      }
    ]
  },

  strategy: {
    title: "Design Strategy & Ideation",
    introduction: [
      "The design strategy focused on creating a luxury e-commerce experience that educates users about wearable technology through visual storytelling, designer collaborations, and comprehensive styling guides."
    ],
    keyInsights: [
      {
        highlight: "Educational Commerce Model",
        description: "Combine shopping with discovery and education to build user confidence in wearable technology purchases"
      },
      {
        highlight: "Luxury Tech Positioning",
        description: "Position wearable tech as high fashion through premium design, designer collaborations, and exclusive collections"
      },
      {
        highlight: "Visual Learning Experience",
        description: "Use video modules, photo guides, and AR try-on concepts to help users visualize wearable tech in their wardrobes"
      },
      {
        highlight: "Community-Driven Content",
        description: "Create blog content and trend insights to establish the platform as a thought leader in fashion technology"
      }
    ],
    flowSteps: [
      {
        number: 1,
        title: "Discover",
        description: "Users explore curated collections and designer collaborations through clean, luxury interface"
      },
      {
        number: 2,
        title: "Learn",
        description: "Educational content helps users understand functionality and styling possibilities"
      },
      {
        number: 3,
        title: "Try-On",
        description: "AR concepts and visual guides help users preview how products integrate with their style"
      },
      {
        number: 4,
        title: "Buy",
        description: "Confident users complete purchases with full understanding of product function and style"
      }
    ]
  },

  finalDesign: {
    title: "Final Design & Features",
    description: [
      "The final design features a sophisticated dark-themed interface with modular product pages, comprehensive 'How to Wear' guides, and educational content that transforms wearable technology shopping into a luxury discovery experience."
    ],
    features: [
      {
        title: "Product Discovery",
        description: "Clean layout with high-resolution lookbooks and designer filters for easy exploration"
      },
      {
        title: "How to Wear Guides",
        description: "Video and photo guides showing styling examples and functionality explanations"
      },
      {
        title: "AR Try-On Concept",
        description: "Users can preview how wearable tech products look and integrate with their personal style"
      },
      {
        title: "Designer Collections",
        description: "Curated collections, collaborations, and exclusive drops from fashion-tech designers"
      },
      {
        title: "Educational Blog",
        description: "Trend insights, tech news, and daily posts about fashion and wearable technology"
      }
    ],
    images: [
      "/lovable-uploads/9e3be8d8-c9d0-4857-a786-b488a8b288c1.png",
      "/lovable-uploads/d0f10fb1-b1eb-4e30-b666-c68f00716676.png",
      "/lovable-uploads/e047ad0c-5a06-4795-938c-c65d62909828.png",
      "/lovable-uploads/a473ef7d-6076-4386-af99-13262b6e684f.png",
      "/lovable-uploads/5291bbb5-d2b2-4171-b287-9a1d6735805b.png"
    ]
  },

  outcomes: {
    title: "Outcomes & Impact",
    metrics: [
      {
        title: "User Confidence",
        value: "75%",
        description: "of testers felt more confident exploring wearable tech",
        icon: TrendingUp
      },
      {
        title: "Design Feedback",
        value: "Positive",
        description: "Strong feedback on luxury aesthetic and video modules",
        icon: CheckCircle
      },
      {
        title: "Content Structure",
        value: "Improved",
        description: "Research-informed personas led to better usability",
        icon: Target
      }
    ],
    achievements: [
      {
        title: "Unique E-commerce Model",
        description: "Created an innovative platform that blends shopping with education and discovery"
      },
      {
        title: "Luxury Brand Positioning",
        description: "Successfully positioned wearable tech as high fashion through premium design aesthetic"
      },
      {
        title: "Educational Innovation",
        description: "Developed comprehensive styling guides that increase user confidence in wearable technology"
      }
    ]
  },

  challenges: {
    title: "Challenges & Learnings",
    challenges: [
      {
        title: "Market Education",
        description: "Overcoming widespread lack of understanding about wearable technology in fashion contexts"
      },
      {
        title: "Luxury Positioning",
        description: "Balancing high-tech functionality with luxury fashion aesthetic and user expectations"
      },
      {
        title: "Content Strategy",
        description: "Developing educational content that informs without overwhelming the shopping experience"
      }
    ],
    learnings: [
      {
        title: "Education Drives Sales",
        description: "Comprehensive product education significantly increases user confidence and purchase intent"
      },
      {
        title: "Visual Learning Works",
        description: "Video content and visual guides are essential for communicating complex tech-fashion concepts"
      },
      {
        title: "Premium Positioning",
        description: "Luxury aesthetic and designer collaborations elevate user perception of wearable technology"
      }
    ],
    nextSteps: [
      {
        title: "Personalized Onboarding",
        description: "Add customized user journeys based on tech familiarity and style preferences",
        icon: User
      },
      {
        title: "Real-time AR Try-ons",
        description: "Implement advanced AR features for virtual product testing and styling",
        icon: Zap
      },
      {
        title: "Community Lookbooks",
        description: "Build user-generated content features for sharing wearable tech styling inspiration",
        icon: Users
      }
    ]
  },

  reflection: {
    title: "Project Reflection",
    description: [
      "Tech Noir was a unique opportunity to combine my passions for fashion, storytelling, and UX/UI design. It taught me how to elevate digital retail experiences through education and style, while positioning emerging technology as luxury fashion."
    ],
    keyTakeaways: [
      "Educational content can transform complex technology into accessible fashion",
      "Luxury positioning significantly impacts user perception of emerging tech products",
      "Visual storytelling is essential for communicating tech-fashion integration",
      "User research reveals critical gaps between technology awareness and practical application"
    ],
    futureConsiderations: [
      "Explore partnerships with fashion-tech startups and established luxury brands",
      "Develop AI-powered styling recommendations based on user preferences and tech needs",
      "Create immersive AR experiences for virtual fashion shows and product demonstrations",
      "Build community features for wearable tech enthusiasts and fashion innovators"
    ]
  }
};
