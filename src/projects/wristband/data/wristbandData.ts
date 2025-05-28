
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
  Book,
  Play,
  Gamepad2,
  PenTool,
  Palette
} from "lucide-react";
import { ProjectOverviewProps } from "@/components/project/common/ProjectOverview";
import { ProblemSpaceProps } from "@/components/project/common/ProblemSpace";
import { ResearchDiscoveryProps } from "@/components/project/common/ResearchDiscovery";
import { IdeationStrategyProps } from "@/components/project/common/IdeationStrategy";
import { UserPersonaProps } from "@/components/project/common/UserPersona";
import { UserJourneyMapProps } from "@/components/project/common/UserJourneyMap";
import { ChallengesLearningsProps } from "@/components/project/common/ChallengesLearnings";

// Project Overview Data
export const wristbandOverviewData: ProjectOverviewProps = {
  title: "Project Overview",
  description: [
    "WRISTBAND is an interactive storytelling game app that revolutionizes the narrative gaming experience by offering diverse, culturally authentic stories written by a variety of freelance writers and artists.",
    "The platform enables users to choose their own path through different character narratives, creating unique experiences that foster deeper connections with characters from various backgrounds and cultures."
  ],
  projectDetails: [
    {
      label: "Role",
      value: "UX, UI & Visual Designer",
      icon: Briefcase
    },
    {
      label: "Team",
      value: "Solo project",
      icon: Users
    },
    {
      label: "Duration",
      value: "4 months",
      icon: Clock
    },
    {
      label: "Year",
      value: "2019",
      icon: Calendar
    }
  ],
  toolDetails: [
    {
      label: "Design Tools",
      value: "Figma, Adobe Photoshop, Principle",
      icon: Image
    },
    {
      label: "Development",
      value: "React Native",
      icon: Code
    },
    {
      label: "Platform",
      value: "Mobile (iOS & Android)",
      icon: Smartphone
    }
  ]
};

// Problem Space Data
export const wristbandProblemSpaceData: ProblemSpaceProps = {
  title: "Problem Space",
  introduction: "Interactive storytelling games in the market suffer from repetitive content, rushed writing, and lack of diversity, causing users to lose interest quickly and delete apps after short-term use.",
  challenges: [
    {
      title: "Repetitive Content",
      description: "Most interactive storytelling games follow similar patterns and storylines, making the experience predictable and boring for users.",
      icon: Layers
    },
    {
      title: "Poor Character Development",
      description: "Characters often look the same with only superficial differences like hair color, lacking authentic representation and depth.",
      icon: Users
    },
    {
      title: "Rushed Writing Quality",
      description: "Stories feel hurried and lack the depth needed to create meaningful connections between users and characters.",
      icon: PenTool
    },
    {
      title: "Limited Genre Variety",
      description: "Existing platforms don't offer enough variety in storytelling genres, leading to a narrow and repetitive user experience.",
      icon: Book
    }
  ],
  designGoals: [
    {
      title: "Authentic Storytelling",
      description: "Create engaging content with diverse perspectives from writers and artists of different cultural backgrounds.",
      icon: Globe
    },
    {
      title: "Quality Character Design",
      description: "Develop distinctive characters that users can relate to and feel genuinely connected with throughout their journey.",
      icon: Palette
    },
    {
      title: "Engaging User Experience",
      description: "Design an intuitive interface that enhances the storytelling experience without overwhelming the narrative.",
      icon: Gamepad2
    },
    {
      title: "Sustainable Monetization",
      description: "Implement a thoughtful premium content system that provides value while supporting content creators.",
      icon: DollarSign
    }
  ]
};

// Research & Discovery Data
export const wristbandResearchData: ResearchDiscoveryProps = {
  title: "Research & Discovery",
  introduction: "Conducted extensive research on interactive storytelling platforms and user engagement patterns to identify key pain points and opportunities for creating more authentic and diverse narrative experiences.",
  researchSections: [
    {
      title: "User Research",
      description: "Primary research with interactive story game users and content consumers.",
      items: [
        {
          text: "Interviewed 25+ users of existing interactive storytelling platforms about their experiences"
        },
        {
          text: "Analyzed user behavior patterns and story completion rates across different genres"
        },
        {
          text: "Surveyed users about character representation and cultural authenticity preferences"
        }
      ]
    },
    {
      title: "Competitive Analysis",
      description: "Evaluated existing interactive storytelling platforms and their content approaches:",
      items: [
        {
          text: "Analyzed major platforms like Episode, Choices, and Chapters for content quality and diversity"
        },
        {
          text: "Identified gaps in character representation and story authenticity"
        },
        {
          text: "Studied successful monetization strategies and user retention techniques"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Key Finding 1",
      description: "78% of users abandoned apps within 2 weeks due to repetitive storylines and lack of authentic character development."
    },
    {
      title: "Key Finding 2",
      description: "Users strongly preferred stories that featured characters from diverse backgrounds with authentic cultural representation."
    },
    {
      title: "Key Finding 3",
      description: "Premium content purchases increased by 45% when users felt emotionally connected to well-developed characters."
    }
  ]
};

// Ideation & Strategy Data
export const wristbandIdeationData: IdeationStrategyProps = {
  title: "Planning & Strategy",
  introduction: "Developed a content-creator-centered approach that prioritizes authentic storytelling through diverse voices, ensuring users can find characters and narratives that genuinely resonate with their experiences.",
  keyInsights: [
    {
      highlight: "Diversity drives engagement and authenticity.",
      description: "Users connect more deeply with stories when they see authentic representation of different cultures and backgrounds."
    },
    {
      highlight: "Quality over quantity in content creation.",
      description: "Well-crafted stories with meaningful character development outperform numerous shallow narratives."
    },
    {
      highlight: "Creator collaboration enhances storytelling.",
      description: "Working with freelance writers and artists from diverse backgrounds creates more authentic and engaging content."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Discovery → Find stories that resonate",
      description: "Users browse diverse story collections curated by writers from different cultural backgrounds"
    },
    {
      number: 2,
      title: "Engagement → Make meaningful choices",
      description: "Interactive decision-making system allows users to shape character journeys in authentic ways"
    },
    {
      number: 3,
      title: "Connection → Build character relationships",
      description: "Deep character development creates emotional connections that keep users invested in storylines"
    },
    {
      number: 4,
      title: "Progression → Unlock premium content",
      description: "Thoughtful monetization system rewards engagement while supporting content creators"
    }
  ]
};

// User Persona Data
export const wristbandPersonaData: UserPersonaProps = {
  title: "User Persona",
  imageSrc: "/lovable-uploads/d2ac6921-78b3-46b5-bbb2-7022018530ad.png",
  imageAlt: "Maya Story Enthusiast Persona",
  name: "Maya Rodriguez",
  details: [
    {
      label: "Age",
      value: "24"
    },
    {
      label: "Occupation",
      value: "Marketing Coordinator"
    },
    {
      label: "Experience",
      value: "Avid reader and mobile game player for 6+ years"
    },
    {
      label: "Tech Comfort",
      value: "High, enjoys discovering new apps and storytelling platforms"
    }
  ],
  goals: [
    {
      text: "Find interactive stories that feature diverse characters and authentic cultural representation"
    },
    {
      text: "Engage with meaningful narrative choices that impact character development and story outcomes"
    },
    {
      text: "Support content creators who produce quality, authentic storytelling experiences"
    }
  ],
  frustrations: [
    {
      text: "Tired of repetitive storylines and shallow character development in existing apps"
    },
    {
      text: "Disappointed by lack of authentic cultural representation in most story games"
    },
    {
      text: "Frustrated with poor writing quality and rushed content in popular platforms"
    }
  ],
  needs: [
    {
      text: "Access to diverse, well-written stories that reflect different cultural perspectives"
    },
    {
      text: "Characters that feel authentic and relatable, not just cosmetic variations"
    },
    {
      text: "A platform that values quality storytelling over quantity of content"
    }
  ]
};

// User Journey Map Data
export const wristbandJourneyData: UserJourneyMapProps = {
  title: "User Journey Map",
  introduction: "This journey map follows Maya as she discovers WRISTBAND and transitions from frustration with repetitive story apps to finding authentic, diverse narratives that truly resonate with her.",
  journeyTitle: "User Journey: Maya's Experience",
  journeyDescription: "Following Maya as she discovers WRISTBAND and moves from disappointment with shallow storytelling apps to engaging with authentic, diverse narratives.",
  stages: [
    { name: "Problem" },
    { name: "Discovery" },
    { name: "First Story" },
    { name: "Exploration" },
    { name: "Commitment" }
  ],
  userActions: [
    {
      icon: Frown,
      description: "Frustrated with repetitive stories and poor character development in current apps"
    },
    {
      icon: Search,
      description: "Searches for interactive storytelling apps with better diversity and quality writing"
    },
    {
      icon: Play,
      description: "Downloads WRISTBAND and starts first story, notices authentic character representation"
    },
    {
      icon: Book,
      description: "Explores different story genres and discovers writers from various cultural backgrounds"
    },
    {
      icon: Gamepad2,
      description: "Becomes regular user, purchases premium stories, and follows favorite content creators"
    }
  ],
  emotionalStates: [
    {
      icon: Frown,
      iconColor: "text-red-400",
      description: "Frustrated & Disappointed"
    },
    {
      icon: Meh,
      iconColor: "text-yellow-400",
      description: "Hopeful but Skeptical"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Intrigued & Engaged"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Excited & Invested"
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
        "Current apps have boring, repetitive storylines",
        "Characters lack authentic cultural representation"
      ]
    },
    {
      points: [
        "Skeptical about finding truly diverse content",
        "Worried about another disappointing app experience"
      ]
    },
    {
      points: [
        "Learning new interface and story mechanics",
        "Unsure about content quality and authenticity"
      ]
    },
    {
      points: [
        "Wants to explore all available story genres",
        "Deciding which premium content is worth purchasing"
      ]
    },
    {
      points: [
        "Managing multiple ongoing storylines",
        "Balancing free vs. premium content consumption"
      ]
    }
  ],
  designOpportunities: [
    {
      points: [
        "Curated diverse story collections",
        "Authentic character design and development"
      ]
    },
    {
      points: [
        "Clear content quality indicators",
        "Featured diverse content creators"
      ]
    },
    {
      points: [
        "Intuitive story navigation",
        "Quality preview system for stories"
      ]
    },
    {
      points: [
        "Personalized story recommendations",
        "Creator spotlight and following features"
      ]
    },
    {
      points: [
        "Story progress tracking and organization",
        "Fair and transparent premium content pricing"
      ]
    }
  ]
};

// Challenges & Learnings Data
export const wristbandChallengesData: ChallengesLearningsProps = {
  title: "Key Insights & Learnings",
  challenges: [
    {
      title: "Content Creator Coordination",
      description: "Managing relationships with multiple freelance writers and artists while maintaining consistent quality standards and authentic representation across diverse story collections."
    },
    {
      title: "Balancing Monetization with Accessibility",
      description: "Creating a sustainable premium content model that fairly compensates creators while keeping the app accessible to users with different spending capacities."
    },
    {
      title: "Cultural Authenticity Validation",
      description: "Ensuring that diverse cultural representations in stories are authentic and respectful, requiring careful review processes and cultural sensitivity considerations."
    }
  ],
  learnings: [
    {
      title: "Diversity as a Design Foundation",
      description: "Building diversity into the core content creation process from the beginning, rather than adding it as an afterthought, results in more authentic and engaging storytelling."
    },
    {
      title: "Creator-User Connection Value",
      description: "Facilitating connections between content creators and users through creator profiles and behind-the-scenes content significantly increases user engagement and premium purchases."
    },
    {
      title: "Quality Curation Over Volume",
      description: "Users prefer fewer, high-quality stories with authentic character development over large volumes of shallow, repetitive content."
    }
  ],
  nextSteps: [
    {
      title: "Creator Mentorship Program",
      description: "Develop a program to support emerging diverse writers and artists in creating authentic storytelling content.",
      icon: GraduationCap
    },
    {
      title: "Community Features",
      description: "Add user discussion forums and creator Q&A sessions to build community around authentic storytelling.",
      icon: Users
    },
    {
      title: "Advanced Personalization",
      description: "Implement AI-driven story recommendations based on user preferences for cultural themes and narrative styles.",
      icon: Zap
    }
  ]
};
