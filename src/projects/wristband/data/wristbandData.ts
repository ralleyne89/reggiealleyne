
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
    "WRISTBAND was a client prototype that dared to shake up the stale world of interactive storytelling. While the app never made it to launch (client priorities shifted faster than a plot twist), this MVP proved that authentic, diverse narratives could actually make people care about mobile storytelling again.",
    "The concept was simple yet revolutionary: create an interactive storytelling platform where users don't just read stories—they live them. By collaborating with freelance writers and artists from diverse backgrounds, we aimed to craft narratives that felt real, relatable, and ridiculously engaging."
  ],
  projectDetails: [
    {
      label: "Role",
      value: "Lead UX/UI Designer & Strategist",
      icon: Briefcase
    },
    {
      label: "Client Project",
      value: "MVP Prototype (Not Launched)",
      icon: Users
    },
    {
      label: "Duration",
      value: "4 months",
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
      label: "Design Arsenal",
      value: "Figma, Adobe Photoshop, Principle",
      icon: Image
    },
    {
      label: "Prototype Tech",
      value: "React Native",
      icon: Code
    },
    {
      label: "Target Platform",
      value: "Mobile (iOS & Android)",
      icon: Smartphone
    }
  ]
};

// Problem Space Data
export const wristbandProblemSpaceData: ProblemSpaceProps = {
  title: "The Problem We Tackled",
  introduction: "The interactive storytelling market was drowning in mediocrity. Users were fed up with cookie-cutter characters, predictable plots, and stories that felt about as authentic as a three-dollar bill. Our client wanted to crack this code.",
  challenges: [
    {
      title: "Story Déjà Vu",
      description: "Every app felt like a carbon copy. Same plots, same twists, same yawn-inducing predictability that made users delete apps faster than you could say 'choose your adventure.'",
      icon: Layers
    },
    {
      title: "Character Copy-Paste Syndrome",
      description: "Characters were basically the same person with different hair colors. About as diverse as a boy band and twice as shallow.",
      icon: Users
    },
    {
      title: "Rush Job Writing",
      description: "Stories felt like they were written during lunch breaks. No depth, no soul, no reason for users to actually give a damn about what happened next.",
      icon: PenTool
    },
    {
      title: "Genre Desert",
      description: "Limited variety meant users got bored faster than a goldfish. The same three genres recycled ad nauseam.",
      icon: Book
    }
  ],
  designGoals: [
    {
      title: "Authentic Storytelling Revolution",
      description: "Partner with diverse creators to build stories that actually reflect the beautiful complexity of real human experiences.",
      icon: Globe
    },
    {
      title: "Characters Worth Caring About",
      description: "Design memorable characters that users would actually want to spend time with—not just look at.",
      icon: Palette
    },
    {
      title: "Intuitive Story Navigation",
      description: "Create an interface so smooth that users forget they're using an app and get lost in the story instead.",
      icon: Gamepad2
    },
    {
      title: "Smart Monetization",
      description: "Build a premium model that doesn't feel like highway robbery while supporting the creators who make it all possible.",
      icon: DollarSign
    }
  ]
};

// Research & Discovery Data
export const wristbandResearchData: ResearchDiscoveryProps = {
  title: "Research & Discovery",
  introduction: "We dove deep into the interactive storytelling ecosystem to understand why users were bouncing faster than a rubber ball. The findings were eye-opening and a little depressing.",
  researchSections: [
    {
      title: "User Deep Dive",
      description: "We talked to real humans about their storytelling app experiences:",
      items: [
        {
          text: "Interviewed 25+ interactive story game enthusiasts who weren't shy about their frustrations"
        },
        {
          text: "Analyzed user behavior patterns that revealed some harsh truths about engagement"
        },
        {
          text: "Surveyed users about what they actually wanted in character representation (spoiler: authenticity)"
        }
      ]
    },
    {
      title: "Competitive Reality Check",
      description: "We dissected the competition to see what they were doing wrong:",
      items: [
        {
          text: "Analyzed Episode, Choices, and Chapters—found more patterns than a wallpaper store"
        },
        {
          text: "Identified massive gaps in authentic representation and quality storytelling"
        },
        {
          text: "Studied monetization strategies that actually worked without annoying users"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "The Two-Week Death Spiral",
      description: "78% of users abandoned apps within 2 weeks due to repetitive storylines and characters with the depth of a puddle."
    },
    {
      title: "Authenticity Hunger",
      description: "Users craved stories featuring characters from diverse backgrounds with genuine cultural representation—imagine that!"
    },
    {
      title: "Emotional Investment = Money",
      description: "Premium content purchases jumped 45% when users actually cared about well-developed characters. Go figure."
    }
  ]
};

// Ideation & Strategy Data
export const wristbandIdeationData: IdeationStrategyProps = {
  title: "Strategy & Game Plan",
  introduction: "We flipped the script by putting creators at the center of everything. Instead of churning out content, we focused on building relationships between storytellers and story-lovers.",
  keyInsights: [
    {
      highlight: "Diversity isn't a buzzword—it's a business advantage.",
      description: "Authentic representation creates deeper emotional connections, which translates to longer engagement and higher conversion rates."
    },
    {
      highlight: "Quality beats quantity every single time.",
      description: "One well-crafted story with compelling characters outperforms ten shallow narratives that nobody remembers."
    },
    {
      highlight: "Creator collaboration is the secret sauce.",
      description: "When writers and artists from different backgrounds collaborate, magic happens. Stories become windows into new worlds."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Discovery → Find your story soulmate",
      description: "Users browse curated collections from creators who know how to tell stories that actually matter"
    },
    {
      number: 2,
      title: "Engagement → Make choices that count",
      description: "Every decision shapes not just the plot, but character relationships in meaningful ways"
    },
    {
      number: 3,
      title: "Connection → Fall for the characters",
      description: "Rich character development creates emotional investment that keeps users coming back for more"
    },
    {
      number: 4,
      title: "Investment → Support great storytelling",
      description: "Premium content that's actually worth paying for while supporting the creators behind it"
    }
  ]
};

// User Persona Data
export const wristbandPersonaData: UserPersonaProps = {
  title: "Meet Our Target User",
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
      label: "Story Experience",
      value: "6+ years of mobile gaming & reading"
    },
    {
      label: "Tech Savviness",
      value: "High—always hunting for the next great app"
    }
  ],
  goals: [
    {
      text: "Discover interactive stories that feature authentic characters instead of cardboard cutouts"
    },
    {
      text: "Make narrative choices that actually impact story outcomes (revolutionary concept, right?)"
    },
    {
      text: "Support content creators who craft quality, authentic storytelling experiences"
    }
  ],
  frustrations: [
    {
      text: "Sick of repetitive storylines that could be written by a tired intern"
    },
    {
      text: "Fed up with token diversity that feels more like checking boxes than authentic representation"
    },
    {
      text: "Disappointed by rushed content that prioritizes quantity over any semblance of quality"
    }
  ],
  needs: [
    {
      text: "Access to diverse, well-written stories that reflect different cultural perspectives"
    },
    {
      text: "Characters that feel like real people, not just different outfits on the same mannequin"
    },
    {
      text: "A platform that values storytelling craft over content mill production"
    }
  ]
};

// User Journey Map Data
export const wristbandJourneyData: UserJourneyMapProps = {
  title: "User Journey Map",
  introduction: "Follow Maya's journey from frustrated app-hopper to engaged storytelling enthusiast as she discovers what happens when someone actually gives a damn about quality.",
  journeyTitle: "Maya's WRISTBAND Discovery",
  journeyDescription: "From eye-rolling at another disappointing story app to finding narratives that actually make her care about fictional characters.",
  stages: [
    { name: "Frustration" },
    { name: "Discovery" },
    { name: "First Taste" },
    { name: "Deep Dive" },
    { name: "Commitment" }
  ],
  userActions: [
    {
      icon: Frown,
      description: "Rage-deletes another story app with characters as flat as day-old soda"
    },
    {
      icon: Search,
      description: "Searches for 'actually good interactive stories' with low expectations"
    },
    {
      icon: Play,
      description: "Downloads WRISTBAND skeptically, starts first story, notices something different"
    },
    {
      icon: Book,
      description: "Explores multiple story genres, discovers creators with actual talent"
    },
    {
      icon: Gamepad2,
      description: "Becomes invested user, purchases premium stories, follows favorite writers"
    }
  ],
  emotionalStates: [
    {
      icon: Frown,
      iconColor: "text-red-400",
      description: "Frustrated & Fed Up"
    },
    {
      icon: Meh,
      iconColor: "text-yellow-400",
      description: "Cautiously Hopeful"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Pleasantly Surprised"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Genuinely Excited"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Happily Hooked"
    }
  ],
  painPoints: [
    {
      points: [
        "Every story app feels like déjà vu",
        "Characters lack any authentic cultural depth"
      ]
    },
    {
      points: [
        "Skeptical about finding truly diverse content",
        "Expects another disappointing experience"
      ]
    },
    {
      points: [
        "Learning new interface while guarding expectations",
        "Wondering if the quality claims are real"
      ]
    },
    {
      points: [
        "Wants to explore all genres without wasting time",
        "Deciding which premium content deserves money"
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
        "Showcase diverse story collections prominently",
        "Highlight authentic character development"
      ]
    },
    {
      points: [
        "Clear quality indicators and creator spotlights",
        "Social proof from other satisfied users"
      ]
    },
    {
      points: [
        "Intuitive onboarding with quality story previews",
        "Easy navigation between different storylines"
      ]
    },
    {
      points: [
        "Smart story recommendations based on preferences",
        "Creator profiles with behind-the-scenes content"
      ]
    },
    {
      points: [
        "Story progress tracking and bookmarking",
        "Transparent and fair premium pricing"
      ]
    }
  ]
};

// Challenges & Learnings Data
export const wristbandChallengesData: ChallengesLearningsProps = {
  title: "Challenges & Hard-Won Insights",
  challenges: [
    {
      title: "Herding Creative Cats",
      description: "Managing multiple freelance writers and artists while maintaining quality standards was like conducting an orchestra where everyone plays different instruments. Rewarding, but exhausting."
    },
    {
      title: "The Monetization Tightrope",
      description: "Creating a revenue model that fairly compensates creators without making users feel like they're being nickel-and-dimed required more finesse than a diplomatic summit."
    },
    {
      title: "Authenticity Police Duty",
      description: "Ensuring cultural representations were authentic and respectful meant becoming a cultural sensitivity detective—necessary, but time-consuming."
    }
  ],
  learnings: [
    {
      title: "Diversity as Design DNA",
      description: "Building diversity into the foundation from day one creates more authentic results than trying to sprinkle it on top like seasoning."
    },
    {
      title: "Creator-User Bridge Building",
      description: "Connecting content creators directly with users through profiles and behind-the-scenes content dramatically increases engagement and purchase rates."
    },
    {
      title: "Quality Curation Wins",
      description: "Users would rather have fewer, exceptional stories than a library full of forgettable content. Less really can be more."
    }
  ],
  nextSteps: [
    {
      title: "Creator Mentorship Program",
      description: "Build a program to nurture emerging diverse writers and artists in authentic storytelling.",
      icon: GraduationCap
    },
    {
      title: "Community Building",
      description: "Add discussion forums and creator Q&As to build community around quality storytelling.",
      icon: Users
    },
    {
      title: "Smart Personalization",
      description: "Implement AI-driven recommendations based on cultural themes and narrative preferences.",
      icon: Zap
    }
  ]
};
