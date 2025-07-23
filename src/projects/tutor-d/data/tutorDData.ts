
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
  Wifi
} from "lucide-react";
import { ProjectOverviewProps } from "@/components/project/common/ProjectOverview";
import { ProblemSpaceProps } from "@/components/project/common/ProblemSpace";
import { ResearchDiscoveryProps } from "@/components/project/common/ResearchDiscovery";
import { IdeationStrategyProps } from "@/components/project/common/IdeationStrategy";
import { UserPersonaProps } from "@/components/project/common/UserPersona";
import { UserJourneyMapProps } from "@/components/project/common/UserJourneyMap";
import { SitemapWireframesProps } from "@/components/project/common/SitemapWireframes";
import { FinalUIDesignProps } from "@/components/project/common/FinalUIDesign";
import { OutcomesImpactProps } from "@/components/project/common/OutcomesImpact";
import { ChallengesLearningsProps } from "@/components/project/common/ChallengesLearnings";
import { ReflectionProps } from "@/components/project/common/Reflection";

// Project Overview Data
export const tutorDOverviewData: ProjectOverviewProps = {
  title: "Building an SMS-Based Learning Platform for Underserved Communities",
  description: [
    "I got hired to work on this really meaningful project - basically building a platform that lets teachers reach students who don't have reliable internet through SMS. We ended up helping boost student engagement by 42% and saved teachers a bunch of time on assignment tracking.",
    "The whole thing started because COVID exposed how many kids just couldn't access online learning. Like, we're talking about millions of students who only had basic phones, not fancy laptops or tablets. Most learning platforms just assumed everyone had great internet, which obviously wasn't the case.",
    "My job was to design and build the teacher-facing dashboard in React. The idea was pretty simple but powerful - teachers could create lessons, send them via SMS, and actually track who was responding and engaging with the material."
  ],
  projectDetails: [
    {
      label: "Role",
      value: "UX/UI Designer & Frontend Developer",
      icon: Briefcase
    },
    {
      label: "Team",
      value: "3 developers",
      icon: Users
    },
    {
      label: "Duration",
      value: "10 months",
      icon: Clock
    },
    {
      label: "Year",
      value: "2021",
      icon: Calendar
    }
  ],
  toolDetails: [
    {
      label: "Design Tools",
      value: "Figma, Ant Design",
      icon: Image
    },
    {
      label: "Development",
      value: "React.js, Redux, MongoDB, Redis",
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
export const tutorDProblemSpaceData: ProblemSpaceProps = {
  title: "The Digital Divide Problem",
  introduction: "So here's the thing - when COVID hit, it became super obvious that tons of kids just couldn't do online school. We're talking about millions of students who had basic phones but no laptops or reliable internet. Most learning platforms were built assuming everyone had great wifi and devices, which was pretty tone-deaf. The challenge was figuring out how to reach these kids through SMS while still making it actually useful for learning.",
  challenges: [
    {
      title: "Limited Internet Access",
      description: "Many students in underserved communities lack reliable internet access, making traditional online learning platforms inaccessible.",
      icon: Wifi
    },
    {
      title: "Device Limitations",
      description: "Students often have access only to basic cell phones with SMS capabilities rather than smartphones or computers.",
      icon: Smartphone
    },
    {
      title: "Teacher Workload",
      description: "Educators spend hours manually tracking assignments sent through various channels with no centralized system.",
      icon: Clock
    },
    {
      title: "Engagement Tracking",
      description: "Without proper tools, teachers struggle to monitor student progress and engagement in remote learning environments.",
      icon: BarChart
    }
  ],
  designGoals: [
    {
      title: "SMS-Based Learning",
      description: "Create a platform that enables teachers to reach students through basic SMS technology available on any cell phone.",
      icon: MessageSquare
    },
    {
      title: "Centralized Management",
      description: "Provide teachers with a dashboard to create, send, and track SMS-based assignments from a single interface.",
      icon: Layers
    },
    {
      title: "Progress Tracking",
      description: "Implement tools for monitoring student engagement, response rates, and performance across assignments.",
      icon: Target
    },
    {
      title: "Accessibility First",
      description: "Design for low-tech, high-stress environments where speed, clarity, and functionality are essential.",
      icon: Users
    }
  ]
};

// Research & Discovery Data
export const tutorDResearchData: ResearchDiscoveryProps = {
  title: "Digging Into What Teachers Actually Needed",
  introduction: "So we had to figure out what was really going on with teachers and students. We talked to a bunch of educators who were basically drowning in manual work - like, they were spending over 5 hours a week just trying to track who was doing their assignments. Plus, we had this whole SMS character limit thing to work around, which honestly made everything more challenging but also kind of forced us to be really creative.",
  researchSections: [
    {
      title: "User Research",
      description: "Primary research with educators and students in underserved communities.",
      items: [
        {
          text: "Interviewed teachers from underserved school districts about remote learning challenges"
        },
        {
          text: "Surveyed students about their access to technology and learning preferences"
        },
        {
          text: "Analyzed existing SMS-based communication patterns between teachers and students"
        }
      ]
    },
    {
      title: "Technical Exploration",
      description: "Evaluated technical approaches and frameworks:",
      items: [
        {
          text: "Tested React.js with Redux for state management across the dashboard"
        },
        {
          text: "Explored MongoDB and Redis for data storage and real-time updates"
        },
        {
          text: "Assessed SMS gateway APIs for reliable message delivery"
        }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Key Finding 1",
      description: "Over 30% of students in target districts had limited or no internet access at home, but most had access to basic cell phones."
    },
    {
      title: "Key Finding 2",
      description: "Teachers were spending 5+ hours weekly trying to track and manage assignments sent through various channels."
    },
    {
      title: "Key Finding 3",
      description: "Existing SMS-based solutions lacked proper integration with teacher workflows and progress tracking capabilities."
    }
  ]
};

// Ideation & Strategy Data
export const tutorDIdeationData: IdeationStrategyProps = {
  title: "Figuring Out the Approach",
  introduction: "So after all that research, we had to figure out how to actually build this thing. I ended up using React.js with Ant Design components because they had good accessibility features built in. The whole idea was to create this dashboard where teachers could easily create lessons, send them out via SMS, and see real-time data on who was engaging.",
  keyInsights: [
    {
      highlight: "Teacher-centered design is essential.",
      description: "The platform must prioritize teacher workflows and minimize additional work while maximizing student reach."
    },
    {
      highlight: "SMS has strict constraints.",
      description: "All content must be optimized for SMS delivery, considering character limits, formatting restrictions, and delivery reliability."
    },
    {
      highlight: "Data visibility drives engagement.",
      description: "Teachers need clear visibility into student response rates and engagement metrics to adjust their teaching strategies."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Lesson Planning → Create SMS-friendly content",
      description: "Teachers create lessons with clear, SMS-friendly content using templates and character count indicators"
    },
    {
      number: 2,
      title: "Assignment Creation → Build structured SMS lessons",
      description: "The system helps format questions and content to work effectively via SMS with automated sending options"
    },
    {
      number: 3,
      title: "Distribution & Tracking → Monitor student engagement",
      description: "Teachers can schedule messages and track real-time response rates through the dashboard"
    },
    {
      number: 4,
      title: "Feedback & Assessment → Evaluate student progress",
      description: "The platform provides analytics on student performance and engagement to inform teaching strategies"
    }
  ]
};

// User Persona Data
export const tutorDPersonaData: UserPersonaProps = {
  title: "User Persona",
  imageSrc: "/images/Ms-Rodriguez-Persona.png",
  imageAlt: "Ms. Rodriguez Persona",
  name: "Ms. Rodriguez",
  details: [
    {
      label: "Age",
      value: "32"
    },
    {
      label: "Occupation",
      value: "Middle School Teacher"
    },
    {
      label: "Experience",
      value: "8 years in an urban school district"
    },
    {
      label: "Tech Comfort",
      value: "Moderate, but frustrated with current tools"
    }
  ],
  goals: [
    {
      text: "Ensure all students can access learning materials regardless of their home technology situation"
    },
    {
      text: "Track student progress efficiently without spending hours on manual work"
    },
    {
      text: "Provide timely feedback to maintain student engagement in remote learning"
    }
  ],
  frustrations: [
    {
      text: "Spends hours manually tracking which students have completed assignments"
    },
    {
      text: "Struggles to provide timely feedback to students without internet access"
    },
    {
      text: "Existing tools don't account for technology limitations in underserved communities"
    }
  ],
  needs: [
    {
      text: "A centralized system to create and distribute SMS-based lessons"
    },
    {
      text: "Real-time tracking of student responses and engagement"
    },
    {
      text: "Tools to quickly provide feedback and support to students using basic phones"
    }
  ]
};

// User Journey Map Data
export const tutorDJourneyData: UserJourneyMapProps = {
  title: "User Journey Map",
  introduction: "This journey map follows Ms. Rodriguez as she navigates adopting a tool that uses SMS-based lesson delivery and real-time tracking to better serve students with limited internet access.",
  journeyTitle: "User Journey: Ms. Rodriguez's Experience",
  journeyDescription: "Following Ms. Rodriguez as she navigates adopting a tool that uses SMS-based lesson delivery and real-time tracking to better serve students with limited internet access.",
  stages: [
    { name: "Problem" },
    { name: "Discovery" },
    { name: "Interaction" },
    { name: "Solution" },
    { name: "Application" }
  ],
  userActions: [
    {
      icon: FileText,
      description: "Struggles to track assignment completion across students with varying tech access"
    },
    {
      icon: Search,
      description: "Hears from a colleague about a tool that uses SMS for lesson delivery and tracking"
    },
    {
      icon: MessageSquare,
      description: "Tests the tool with a small group, sends out first SMS-based lesson"
    },
    {
      icon: BarChart,
      description: "Receives real-time responses and analytics on student engagement"
    },
    {
      icon: CheckCircle,
      description: "Uses tool consistently to send lessons and provide feedback, notices improved engagement"
    }
  ],
  emotionalStates: [
    {
      icon: Frown,
      iconColor: "text-red-400",
      description: "Overwhelmed & Frustrated"
    },
    {
      icon: Meh,
      iconColor: "text-yellow-400",
      description: "Curious but Skeptical"
    },
    {
      icon: Meh,
      iconColor: "text-yellow-400",
      description: "Cautiously Optimistic"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Encouraged & Empowered"
    },
    {
      icon: Smile,
      iconColor: "text-green-400",
      description: "Confident & Efficient"
    }
  ],
  painPoints: [
    {
      points: [
        "Manual tracking is time-consuming and error-prone",
        "Struggles to support students with no internet"
      ]
    },
    {
      points: [
        "Uncertain if the tool will work with basic phones",
        "Concerned about learning curve"
      ]
    },
    {
      points: [
        "Unsure how students will respond to SMS-based lessons",
        "Worried about managing replies"
      ]
    },
    {
      points: [
        "Not all students respond immediately",
        "Some feedback is still delayed"
      ]
    },
    {
      points: [
        "Needs to expand usage while maintaining quality",
        "Wants to integrate into her regular routine"
      ]
    }
  ],
  designOpportunities: [
    {
      points: [
        "Auto-track assignment completion via SMS",
        "Offline-friendly dashboard"
      ]
    },
    {
      points: [
        "Simple onboarding with example use cases",
        "Low-tech training resources"
      ]
    },
    {
      points: [
        "Templates for SMS lessons",
        "Auto-grouping of responses by student"
      ]
    },
    {
      points: [
        "Quick reply shortcuts",
        "Flag students needing follow-up"
      ]
    },
    {
      points: [
        "Weekly engagement summary",
        "Lesson scheduler with reminders"
      ]
    }
  ]
};

// Sitemap & Wireframes Data
export const tutorDSitemapData: SitemapWireframesProps = {
  title: "Sitemap & Wireframes",
  sitemapTitle: "Sitemap",
  sitemapItems: [
    {
      name: "Dashboard",
      isPrimary: true
    },
    {
      name: "Lesson Planner"
    },
    {
      name: "Student Progress"
    },
    {
      name: "Messaging"
    },
    {
      name: "Reports"
    }
  ],
  wireframesTitle: "Wireframes",
  wireframesDescription: "Low-fidelity wireframes were created to establish the basic structure of key screens, focusing on intuitive lesson creation and student progress tracking.",
  wireframeImages: [
    {
      title: "TutorD Landing Page",
      imageSrc: "/images/TutorD-Landing-Page.jpg",
      imageAlt: "TutorD Landing Page Wireframe"
    },
    {
      title: "TutorD Lesson Planner Screen",
      imageSrc: "/images/TutorD-Lesson-Planner.jpg",
      imageAlt: "TutorD Lesson Planner Wireframe"
    },
    {
      title: "TutorD Progress Dashboard",
      imageSrc: "/images/TutorD-Dashboard.jpg",
      imageAlt: "TutorD Progress Dashboard Wireframe"
    }
  ]
};

// Final UI Design Data
export const tutorDUIData: FinalUIDesignProps = {
  title: "Final UI Design",
  introduction: "The final UI design for TutorD focuses on clarity, efficiency, and accessibility. Using Ant Design components, we created a clean interface that helps teachers quickly create and manage SMS-based lessons.",
  designHighlights: [
    {
      text: "Intuitive dashboard with clear visual hierarchy for quick task completion"
    },
    {
      text: "SMS-optimized content creation tools with character count indicators"
    },
    {
      text: "Real-time analytics visualizations for monitoring student engagement"
    },
    {
      text: "Fully responsive design for teachers to use on desktop or mobile devices"
    }
  ],
  uiFeatures: [
    {
      title: "Lesson Planner",
      description: "Intuitive interface for creating SMS-friendly lessons with character count indicators and formatting guides.",
      icon: FileText
    },
    {
      title: "Messaging Tools",
      description: "Templates and scheduling options for sending assignments and providing feedback to students via SMS.",
      icon: MessageSquare
    },
    {
      title: "Progress Tracking",
      description: "Visual dashboards showing student response rates, completion metrics, and engagement patterns over time.",
      icon: BarChart
    },
    {
      title: "Student Management",
      description: "Tools for organizing students into classes, tracking individual progress, and managing contact information.",
      icon: Users
    }
  ],
  uiImages: [
    {
      src: "/images/TutorD-Landing-Page-Final.jpg",
      alt: "TutorD Landing Page Final UI Design",
      title: "Landing Page"
    },
    {
      src: "/images/TutorD-Dashboard-Final.jpg",
      alt: "TutorD Dashboard Final UI Design",
      title: "Teacher Dashboard"
    },
    {
      src: "/images/TutorD-Lesson-Planner-Final.jpg",
      alt: "TutorD Lesson Planner Final UI Design",
      title: "Lesson Planner"
    }
  ]
};

// Outcomes & Impact Data
export const tutorDOutcomesData: OutcomesImpactProps = {
  title: "How It Actually Turned Out",
  metrics: [
    {
      title: "Platform Development",
      value: "10 months",
      description: "from initial concept to working teacher dashboard",
      icon: Calendar
    },
    {
      title: "Team Collaboration",
      value: "3 developers",
      description: "small but effective team building this together",
      icon: Users
    },
    {
      title: "Core Features",
      value: "5 key areas",
      description: "lesson planning, SMS sending, progress tracking, messaging, and reporting",
      icon: Layers
    },
    {
      title: "Tech Stack",
      value: "React + Redux",
      description: "with MongoDB backend and real-time updates via Redis",
      icon: Code
    }
  ]
};

// Challenges & Learnings Data
export const tutorDChallengesData: ChallengesLearningsProps = {
  title: "The Tricky Parts and What I Learned",
  challenges: [
    {
      title: "SMS is Really Limiting",
      description: "Man, trying to fit educational content into 160 characters with no formatting was like solving a puzzle every day. We had to get super creative with how we structured lessons."
    },
    {
      title: "Real-Time Data Syncing",
      description: "Getting the dashboard to update in real-time when SMS responses came in was honestly pretty tricky. Had to make sure nothing got lost or corrupted between systems."
    },
    {
      title: "Getting Teachers On Board",
      description: "Teachers were already stressed with COVID stuff, so convincing them to try yet another new tool required showing immediate value, not just promises."
    }
  ],
  learnings: [
    {
      title: "Design for Everyone, Not Just Tech People",
      description: "Building for the most constrained situations actually made everything better. When you design for basic phones, you end up with cleaner, more focused solutions."
    },
    {
      title: "Less Features, More Value",
      description: "I learned that removing teacher work is way more important than adding cool features. Simple tools that save time beat complex ones every time."
    },
    {
      title: "Redux Was a Lifesaver",
      description: "Using Redux for state management was definitely the right call. With all the different dashboard components and real-time updates, we needed something reliable to keep everything in sync."
    }
  ],
  nextSteps: [
    {
      title: "Offline Usage",
      description: "Implement offline functionality for teachers with intermittent internet access to continue working.",
      icon: Smartphone
    },
    {
      title: "Enhanced Analytics",
      description: "Develop more sophisticated analytics to help teachers identify learning patterns and intervention opportunities.",
      icon: BarChart
    },
    {
      title: "MMS Support",
      description: "Add support for multimedia messaging to enable richer content delivery where available.",
      icon: MessageSquare
    }
  ]
};

// Reflection Data
export const tutorDReflectionData: ReflectionProps = {
  title: "Looking Back",
  content: "Honestly, working on TutorD was one of those projects that really stuck with me. It taught me so much about designing for real people with real constraints, not just the ideal user with perfect internet and the latest iPhone. Plus, working with such a small team meant I had to wear a lot of hats and really collaborate closely with everyone.",
  insights: [
    {
      title: "Design for the Real World",
      description: "When you design for the most challenging situations first, you actually end up with better solutions for everyone. It's like accessibility - it helps way more people than you'd expect."
    },
    {
      title: "Constraints Spark Creativity",
      description: "Having to work within SMS limits actually forced us to be way more thoughtful about content. Sometimes restrictions make you more creative, not less."
    },
    {
      title: "Purpose-Driven Work Hits Different",
      description: "Knowing that our work was actually helping teachers reach kids who were falling through the cracks made all the late nights and technical challenges worth it. Not sure if the project is still active, but I'm proud of what we built."
    }
  ]
};
