
import {
  Briefcase,
  Users,
  Clock,
  Image,
  Monitor,
  Code,
  Smartphone,
  AlertCircle,
  Target,
  DollarSign,
  BookOpen,
  Search,
  MessageSquare,
  FileText,
  CheckCircle,
  Frown,
  Smile,
  Meh,
  HelpCircle,
  Lightbulb,
  Zap,
  BarChart,
  Lock,
  Layers,
  Settings,
  GraduationCap,
  TrendingUp,
  Globe,
  Database,
  Calendar,
  Music,
  Play,
  Volume2,
  Headphones,
  Radio,
  Shuffle
} from "lucide-react";
import { ProjectOverviewProps } from "@/components/project/common/ProjectOverview";
import { ProblemSpaceProps } from "@/components/project/common/ProblemSpace";
import { ResearchDiscoveryProps } from "@/components/project/common/ResearchDiscovery";
import { IdeationStrategyProps } from "@/components/project/common/IdeationStrategy";
import { UserPersonaProps } from "@/components/project/common/UserPersona";
import { UserJourneyMapProps } from "@/components/project/common/UserJourneyMap";
import { ChallengesLearningsProps } from "@/components/project/common/ChallengesLearnings";

// Project Overview Data
export const chillVibesOverviewData: ProjectOverviewProps = {
  title: "Project Overview",
  description: [
    "Chill Vibes is a modern music streaming application that provides users with a seamless and immersive listening experience. Built with React and modern web technologies, it offers intuitive playlist management and high-quality audio streaming.",
    "The application focuses on creating a calming, user-friendly interface that allows music lovers to discover, organize, and enjoy their favorite tracks with minimal friction."
  ],
  projectDetails: [
    {
      label: "Role",
      value: "Frontend Developer & UI/UX Designer",
      icon: Briefcase
    },
    {
      label: "Team",
      value: "Solo project",
      icon: Users
    },
    {
      label: "Duration",
      value: "6 months",
      icon: Clock
    },
    {
      label: "Year",
      value: "2020",
      icon: Calendar
    }
  ],
  toolDetails: [
    {
      label: "Design Tools",
      value: "Figma, Adobe XD",
      icon: Image
    },
    {
      label: "Development",
      value: "React.js, Node.js, Express.js",
      icon: Code
    },
    {
      label: "Platform",
      value: "Web (responsive)",
      icon: Monitor
    }
  ]
};

// Problem Space Data
export const chillVibesProblemSpaceData: ProblemSpaceProps = {
  title: "Problem Space",
  introduction: "Many music streaming applications suffer from cluttered interfaces, poor user experience, and lack of personalization, making it difficult for users to truly enjoy their music discovery and listening experience.",
  challenges: [
    {
      title: "Overwhelming Interfaces",
      description: "Most music apps have cluttered interfaces with too many options and distracting elements that take away from the music experience.",
      icon: Layers
    },
    {
      title: "Poor Discovery",
      description: "Users struggle to discover new music that matches their taste due to inadequate recommendation systems.",
      icon: Search
    },
    {
      title: "Limited Personalization",
      description: "Existing platforms don't provide enough customization options for users to make the app truly their own.",
      icon: Settings
    },
    {
      title: "Audio Quality Issues",
      description: "Many streaming services compromise on audio quality or don't provide clear quality indicators to users.",
      icon: Volume2
    }
  ],
  designGoals: [
    {
      title: "Intuitive Interface",
      description: "Create a clean, minimalist interface that puts music first and reduces cognitive load for users.",
      icon: Monitor
    },
    {
      title: "Smart Discovery",
      description: "Implement intelligent music discovery features that learn from user preferences and listening habits.",
      icon: Lightbulb
    },
    {
      title: "Seamless Playback",
      description: "Ensure smooth, uninterrupted music playback with high-quality audio streaming.",
      icon: Play
    },
    {
      title: "Personal Experience",
      description: "Allow users to customize their experience with themes, playlists, and personalized recommendations.",
      icon: Users
    }
  ]
};

// Research & Discovery Data
export const chillVibesResearchData: ResearchDiscoveryProps = {
  title: "Research & Discovery",
  introduction: "Conducted comprehensive research on music streaming platforms and user listening behaviors to understand pain points and opportunities for improvement in the music discovery and playback experience.",
  researchSections: [
    {
      title: "User Research",
      description: "Primary research with music enthusiasts and streaming platform users.",
      items: [
        {
          text: "Surveyed 150+ music listeners about their streaming habits and frustrations"
        },
        {
          text: "Conducted 12 in-depth interviews with users of major streaming platforms"
        },
        {
          text: "Analyzed user behavior patterns and music discovery preferences"
        }
      ]
    },
    {
      title: "Competitive Analysis",
      description: "Evaluated existing music streaming platforms and their approaches:",
      items: [
        {
          text: "Analyzed Spotify, Apple Music, and YouTube Music interfaces and features"
        },
        {
          text: "Identified gaps in user experience and interface design"
        },
        {
          text: "Studied successful design patterns in music applications"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Key Finding 1",
      description: "85% of users found existing music apps too cluttered and wished for simpler, more focused interfaces."
    },
    {
      title: "Key Finding 2",
      description: "Users spend 40% of their time organizing playlists and want better tools for music management."
    },
    {
      title: "Key Finding 3",
      description: "Audio quality indicators and clear playback controls are highly valued by music enthusiasts."
    }
  ]
};

// Ideation & Strategy Data
export const chillVibesIdeationData: IdeationStrategyProps = {
  title: "Planning & Strategy",
  introduction: "Developed a user-centered approach focusing on simplicity, audio quality, and personalization to create a music streaming experience that truly serves music lovers.",
  keyInsights: [
    {
      highlight: "Less is more in music interfaces.",
      description: "Users prefer clean, uncluttered designs that let them focus on the music rather than navigating complex menus."
    },
    {
      highlight: "Audio quality transparency builds trust.",
      description: "Clear indicators of audio quality and streaming status help users understand what they're hearing."
    },
    {
      highlight: "Personalization drives engagement.",
      description: "Customizable themes and smart recommendations keep users engaged and make the app feel uniquely theirs."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Discovery → Find new music effortlessly",
      description: "Smart recommendation engine suggests music based on listening history and mood preferences"
    },
    {
      number: 2,
      title: "Organization → Manage music collections",
      description: "Intuitive playlist creation and management tools help users organize their favorite tracks"
    },
    {
      number: 3,
      title: "Playback → Enjoy high-quality audio",
      description: "Seamless playback with clear quality indicators and responsive controls"
    },
    {
      number: 4,
      title: "Personalization → Make it your own",
      description: "Customizable themes and personalized recommendations create a unique experience"
    }
  ]
};

// User Persona Data
export const chillVibesPersonaData: UserPersonaProps = {
  title: "User Persona",
  imageSrc: "/lovable-uploads/a6e65372-edc9-4098-aa00-82ee5a49def0.png",
  imageAlt: "Alex Music Lover Persona",
  name: "Alex Chen",
  details: [
    {
      label: "Age",
      value: "28"
    },
    {
      label: "Occupation",
      value: "Graphic Designer"
    },
    {
      label: "Experience",
      value: "Heavy music streaming user for 8+ years"
    },
    {
      label: "Tech Comfort",
      value: "High, values good design and user experience"
    }
  ],
  goals: [
    {
      text: "Discover new music that matches their sophisticated taste and current mood"
    },
    {
      text: "Organize their extensive music collection efficiently with intuitive playlist tools"
    },
    {
      text: "Enjoy high-quality audio without interruptions or technical issues"
    }
  ],
  frustrations: [
    {
      text: "Overwhelmed by cluttered interfaces in current music apps"
    },
    {
      text: "Struggles to find new music that truly matches their taste"
    },
    {
      text: "Frustrated with poor audio quality and unclear streaming indicators"
    }
  ],
  needs: [
    {
      text: "A clean, intuitive interface that prioritizes the music experience"
    },
    {
      text: "Smart discovery features that learn from their listening patterns"
    },
    {
      text: "Reliable high-quality audio streaming with transparent quality indicators"
    }
  ]
};

// User Journey Map Data
export const chillVibesJourneyData: UserJourneyMapProps = {
  title: "User Journey Map",
  introduction: "This journey map follows Alex as they discover and adopt Chill Vibes, transitioning from frustration with current music apps to finding their ideal listening experience.",
  journeyTitle: "User Journey: Alex's Experience",
  journeyDescription: "Following Alex as they discover Chill Vibes and transition from frustration with cluttered music apps to enjoying a personalized, high-quality listening experience.",
  stages: [
    { name: "Problem" },
    { name: "Discovery" },
    { name: "First Use" },
    { name: "Exploration" },
    { name: "Adoption" }
  ],
  userActions: [
    {
      icon: Frown,
      description: "Frustrated with cluttered interface and poor recommendations on current music app"
    },
    {
      icon: Search,
      description: "Searches for alternative music streaming apps with better design"
    },
    {
      icon: Play,
      description: "Downloads Chill Vibes and plays first song, notices clean interface immediately"
    },
    {
      icon: Music,
      description: "Explores features like playlist creation and discovers smart recommendations"
    },
    {
      icon: Headphones,
      description: "Makes Chill Vibes their primary music app, creates multiple playlists"
    }
  ],
  emotionalStates: [
    {
      icon: Frown,
      iconColor: "text-red-400",
      description: "Frustrated & Overwhelmed"
    },
    {
      icon: Meh,
      iconColor: "text-yellow-400",
      description: "Hopeful but Cautious"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Impressed & Curious"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Engaged & Excited"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Satisfied & Loyal"
    }
  ],
  painPoints: [
    {
      points: [
        "Current app interface is too cluttered",
        "Poor music discovery and recommendations"
      ]
    },
    {
      points: [
        "Skeptical about trying another music app",
        "Worried about losing existing playlists"
      ]
    },
    {
      points: [
        "Learning new interface takes time",
        "Unsure about available features"
      ]
    },
    {
      points: [
        "Wants to test all features thoroughly",
        "Comparing with previous app experience"
      ]
    },
    {
      points: [
        "Needs to migrate all playlists",
        "Adjusting to new organizational system"
      ]
    }
  ],
  designOpportunities: [
    {
      points: [
        "Clean, minimalist interface design",
        "Intelligent music recommendation system"
      ]
    },
    {
      points: [
        "Clear onboarding process",
        "Easy playlist import functionality"
      ]
    },
    {
      points: [
        "Intuitive navigation and controls",
        "Progressive feature disclosure"
      ]
    },
    {
      points: [
        "Interactive tutorial for advanced features",
        "Clear audio quality indicators"
      ]
    },
    {
      points: [
        "Seamless playlist migration tools",
        "Personalization options and themes"
      ]
    }
  ]
};

// Challenges & Learnings Data
export const chillVibesChallengesData: ChallengesLearningsProps = {
  title: "Key Insights & Learnings",
  challenges: [
    {
      title: "Audio Streaming Performance",
      description: "Implementing smooth, high-quality audio streaming while maintaining fast load times and minimal buffering required careful optimization of audio codecs and streaming protocols."
    },
    {
      title: "Music Discovery Algorithm",
      description: "Creating a recommendation system that accurately learns user preferences without being too narrow or repetitive was technically and conceptually challenging."
    },
    {
      title: "Interface Simplicity vs. Functionality",
      description: "Balancing a clean, minimal interface with the comprehensive functionality users expect from a music streaming platform required careful design decisions."
    }
  ],
  learnings: [
    {
      title: "User-Centered Audio Design",
      description: "Focusing on audio quality indicators and transparent streaming status builds user trust and enhances the listening experience significantly."
    },
    {
      title: "Progressive Disclosure",
      description: "Revealing features gradually as users become more familiar with the app prevents overwhelm while maintaining full functionality."
    },
    {
      title: "Performance-First Development",
      description: "Optimizing for smooth audio playback from the start is crucial - retroactively fixing performance issues is much more difficult."
    }
  ],
  nextSteps: [
    {
      title: "Offline Playback",
      description: "Implement offline music caching for premium users to enable listening without internet connection.",
      icon: Smartphone
    },
    {
      title: "Social Features",
      description: "Add social sharing capabilities and collaborative playlists to enhance user engagement.",
      icon: Users
    },
    {
      title: "Advanced Analytics",
      description: "Develop detailed listening analytics and insights for users to understand their music habits.",
      icon: BarChart
    }
  ]
};
