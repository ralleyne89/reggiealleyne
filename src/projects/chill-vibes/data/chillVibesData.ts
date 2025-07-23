
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

// Project Overview Data - Minto Pyramid: Lead with Impact
export const chillVibesOverviewData: ProjectOverviewProps = {
  title: "Built a Music Streaming MVP That Actually Feels Good to Use",
  description: [
    "So I got hired by this client who was tired of how cluttered and overwhelming music apps had become. They wanted something clean and simple - basically Spotify but without all the visual noise. I handled everything from wireframes to the final React build.",
    "The whole idea was to prove that you could make a music app that just focuses on the music itself. No fancy social features, no overwhelming discovery algorithms - just good tunes with a clean interface that gets out of your way.",
    "I built the entire thing as a responsive web app using React and Firebase. The client wanted to test it with real users first before deciding on native apps, so we kept it browser-based and mobile-friendly."
  ],
  projectDetails: [
    {
      label: "Role",
      value: "UI/UX Designer & Frontend Developer",
      icon: Briefcase
    },
    {
      label: "Team",
      value: "Solo freelance project",
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

// Problem Space Data - Strategic Challenge #1
export const chillVibesProblemSpaceData: ProblemSpaceProps = {
  title: "Why Does Every Music App Feel Like a Maze?",
  introduction: "My client came to me because they were frustrated with how complicated music apps had become. Every time they just wanted to play some chill music while working, they'd get bombarded with recommendations, social features, and cluttered interfaces. The brief was simple: create a music player that feels like it was designed for people who actually love music, not for people who love clicking buttons.",
  challenges: [
    {
      title: "Interface Overload",
      description: "You open Spotify and there's literally 20 different things competing for your attention. Podcasts, social feeds, ads - where's just the music?",
      icon: Layers
    },
    {
      title: "Generic Recommendations",
      description: "Algorithm keeps suggesting the same mainstream stuff. Sometimes you just want to discover something that actually matches your vibe.",
      icon: Search
    },
    {
      title: "No Personal Touch",
      description: "Every music app looks exactly the same. There's no way to make it feel like yours or match your aesthetic.",
      icon: Settings
    },
    {
      title: "Unclear Audio Quality",
      description: "You never really know what quality you're getting. Is this compressed? Is my internet struggling? Who knows.",
      icon: Volume2
    }
  ],
  designGoals: [
    {
      title: "Just Play Music",
      description: "Land on the page, hit play, and you're listening. No distractions, no popups, just music.",
      icon: Monitor
    },
    {
      title: "Mood-Based Discovery",
      description: "Find new tracks that actually match what you're feeling right now, not what's trending globally.",
      icon: Lightbulb
    },
    {
      title: "Reliable Playback",
      description: "Music plays when you press play. It doesn't skip, stutter, or suddenly stop. Revolutionary concept, I know.",
      icon: Play
    },
    {
      title: "Make It Yours",
      description: "Dark themes, custom playlists, and an interface that feels like it was made for you specifically.",
      icon: Users
    }
  ]
};

// Research & Discovery Data - Strategic Challenge #2
export const chillVibesResearchData: ResearchDiscoveryProps = {
  title: "Understanding What People Actually Want from Music Apps",
  introduction: "The client had done some initial research and came to me with a clear vision: people were burnt out on complex music apps. We spent time really understanding what was missing in the current market. Turns out, most people just want to play music without jumping through hoops, but every app seems designed to keep you clicking around instead of listening.",
  researchSections: [
    {
      title: "Client Conversations",
      description: "Getting clear on what success looks like for this MVP.",
      items: [
        {
          text: "Talked through the client's frustrations with existing music apps"
        },
        {
          text: "Mapped out the core features that would make this actually useful"
        },
        {
          text: "Set expectations for what we could realistically build in 6 months"
        }
      ]
    },
    {
      title: "Checking Out the Competition",
      description: "Spent way too much time analyzing what's already out there:",
      items: [
        {
          text: "Used Spotify, Apple Music, and YouTube Music like a normal person would"
        },
        {
          text: "Noted every time I got annoyed or confused by their interfaces"
        },
        {
          text: "Found the things that actually work well and could be improved"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Everyone's Overthinking It",
      description: "The big apps are trying to be everything to everyone. There's definitely room for something that just does music really well."
    },
    {
      title: "Playlists Are Everything",
      description: "People organize their entire music life around playlists, but most apps make creating and managing them way harder than it needs to be."
    },
    {
      title: "Quality Transparency Matters",
      description: "Nobody likes wondering if they're getting good audio quality. Just tell people what they're hearing."
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
  imageSrc: "/images/4c5d628c-5499-47b1-bf2a-2415a1b24c0c.png",
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

// Challenges & Learnings Data - Principal-Level Insights
export const chillVibesChallengesData: ChallengesLearningsProps = {
  title: "Full-Stack Audio Platform Development",
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
