
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
    "TutorD was built to help teachers reach students who could not rely on broadband, laptops, or a conventional learning management system. The platform used SMS as the delivery layer, helping increase student engagement by 42% while reducing the manual work teachers spent on assignment tracking.",
    "The work began during COVID, when remote learning made the digital divide impossible to ignore. Many students in the target communities had access to basic phones, but not consistent internet or dedicated computers. Most education platforms were designed around assumptions those students could not meet.",
    "My role covered UX/UI design and frontend development for the teacher-facing React dashboard. Teachers needed a focused workflow for creating SMS-ready lessons, sending them to students, and seeing who was responding without piecing together status updates by hand."
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
  introduction: "COVID exposed a practical access problem: many students were expected to learn online without reliable internet, laptops, or tablets. In the target communities, basic phones were often the most dependable technology available. The design challenge was to make SMS useful for instruction without creating another fragmented workflow for teachers.",
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
  title: "Understanding Teacher Workflows",
  introduction: "The research focused on where remote learning was breaking down for teachers and students with limited access to technology. Educators described a high-friction tracking process, often spending more than 5 hours a week reconciling assignments across messages and informal channels. SMS constraints, including character limits and limited formatting, became a core product constraint rather than an implementation detail.",
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
  title: "Product Strategy",
  introduction: "The strategy was to keep the teacher workflow narrow, structured, and measurable. I used React.js with Ant Design components to move quickly while maintaining accessible interaction patterns. The dashboard centered on three jobs: create SMS-ready lessons, distribute them reliably, and make student engagement visible in near real time.",
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
  title: "Outcomes and Delivery",
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
      description: "small product team collaborating across design and implementation",
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
  title: "Challenges and Learnings",
  challenges: [
    {
      title: "SMS Content Constraints",
      description: "Fitting educational content into 160 characters without rich formatting forced every lesson pattern to be deliberate. We had to decide what belonged in the message, what belonged in the dashboard, and how to keep instructions clear under tight limits."
    },
    {
      title: "Real-Time Data Syncing",
      description: "Updating the dashboard as SMS responses arrived required careful coordination between systems. The experience depended on preserving message integrity while giving teachers timely engagement signals."
    },
    {
      title: "Teacher Adoption",
      description: "Teachers were already carrying the operational strain of remote learning, so adoption depended on immediate value. The product needed to reduce tracking work quickly, not ask educators to trust a long setup process."
    }
  ],
  learnings: [
    {
      title: "Design for Constrained Environments",
      description: "Designing for basic phones led to cleaner product decisions. When the lowest-access context works well, the core workflow becomes easier to understand for everyone."
    },
    {
      title: "Reduce Work Before Adding Features",
      description: "The most valuable decisions removed teacher effort rather than adding surface area. A focused tool that saves time can outperform a broader tool that asks users to manage more."
    },
    {
      title: "State Management Mattered",
      description: "Redux was a strong fit for the dashboard because real-time updates, student status, and reporting views all needed a consistent source of truth."
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
  content: "TutorD stayed with me because it made the constraints unusually concrete. The work was not about designing for an ideal student with perfect internet and a new device; it was about supporting classrooms where the most reliable channel might be SMS. On a small team, I moved between design and implementation, which made the product decisions feel closely tied to what teachers would actually need day to day.",
  insights: [
    {
      title: "Design for the Real World",
      description: "Designing for the most challenging access conditions first produced a simpler, more resilient workflow. The same discipline that helps constrained users often improves the experience for everyone else."
    },
    {
      title: "Constraints Spark Creativity",
      description: "SMS limits forced sharper content decisions. The restrictions made the lesson structure more intentional, not less."
    },
    {
      title: "Purpose-Driven Work Has a Different Weight",
      description: "The project mattered because it helped teachers reach students who were being left out of remote learning. I am not sure whether the platform is still active, but I am proud of the system we built and the problem it was designed to address."
    }
  ]
};
