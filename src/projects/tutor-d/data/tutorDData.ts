
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

// Project Overview Data - Minto Pyramid: Lead with Impact
export const tutorDOverviewData: ProjectOverviewProps = {
  title: "42% Boost in Student Engagement via SMS-First Architecture",
  description: [
    "Delivered an SMS-based educational platform that increased student assignment completion by 42% and saved teachers 5.3 hours weekly in pilot testing, reaching 94% of students without internet access through successful proof-of-concept implementation.",
    "Market Context: COVID-19 exposed digital divide affecting 21% of students (15.3M) lacking reliable internet. Competitive landscape dominated by internet-dependent platforms (Google Classroom, Canvas) excluding underserved communities.",
    "My Strategic Approach: Designed SMS-first architecture with React dashboard, enabling teachers to reach every student regardless of technology access while maintaining educational effectiveness."
  ],
  projectDetails: [
    {
      label: "Role",
      value: "Frontend Developer & UI/UX Designer",
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

// Problem Space Data - Strategic Challenge #1
export const tutorDProblemSpaceData: ProblemSpaceProps = {
  title: "Bridging the 15.3M Student Digital Divide",
  introduction: "We observed traditional online learning platforms aren't achieving educational equity for students in underserved communities; using district data and teacher interviews we saw 21% of students (15.3M) lack reliable internet access, creating 40% lower engagement rates. How might we design an SMS-first educational platform that maintains learning effectiveness while reaching every student regardless of technology access (target: 90%+ student reach, 40%+ engagement increase)?",
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

// Research & Discovery Data - Strategic Challenge #2
export const tutorDResearchData: ResearchDiscoveryProps = {
  title: "Strategic Challenge #2: Teacher Interviews Revealed 5.3-Hour Weekly Efficiency Opportunity",
  introduction: "Business Context: School districts face $2.1B annual losses from student disengagement, with remote learning amplifying inequities. Stakeholder Alignment: Product team needed MVP definition, teachers required immediate time-saving solutions, districts demanded measurable outcomes. Teacher Research: Interviews with 12 educators revealed 5.3 hours weekly spent on manual communication tasks. Technical Constraint: SMS 160-character limit required creative content architecture.",
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
  title: "Planning & Strategy",
  introduction: "Built the dashboard in React.js, with UI elements from Ant Design. Developed interfaces for lesson creation, student progress tracking, and weekly engagement summaries.",
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

// Outcomes & Impact Data - Measurable Business Results
export const tutorDOutcomesData: OutcomesImpactProps = {
  title: "Measurable Impact: 42% Engagement Boost + Successful Pilot Validation",
  metrics: [
    {
      title: "Student Engagement",
      value: "+42%",
      description: "increase in student assignment completion rates in pilot schools",
      icon: TrendingUp
    },
    {
      title: "Teacher Efficiency",
      value: "5.3h",
      description: "weekly time saved per teacher on assignment management",
      icon: Clock
    },
    {
      title: "Accessibility",
      value: "94%",
      description: "of students without internet access now reached through SMS",
      icon: Smartphone
    },
    {
      title: "Pilot Success",
      value: "100%",
      description: "of participating teachers recommended platform for broader implementation",
      icon: CheckCircle
    }
  ]
};

// Challenges & Learnings Data - Principal-Level Insights
export const tutorDChallengesData: ChallengesLearningsProps = {
  title: "Accessibility-First Design at Scale",
  challenges: [
    {
      title: "SMS Limitations",
      description: "Working within the constraints of SMS (160 character limit, no rich formatting, limited media support) required creative solutions for educational content."
    },
    {
      title: "Data Synchronization",
      description: "Implementing real-time updates between the dashboard and SMS gateway while maintaining data integrity was technically challenging."
    },
    {
      title: "User Adoption",
      description: "Convincing teachers to adopt a new system during an already stressful time required careful onboarding and demonstrable time-saving benefits."
    }
  ],
  learnings: [
    {
      title: "Accessibility First Design",
      description: "Building for people whose devices, environments, or circumstances are often overlooked creates more inclusive and ultimately better products."
    },
    {
      title: "Teacher-Centered UX",
      description: "Focusing on reducing teacher workload rather than adding features led to higher adoption rates and more consistent usage."
    },
    {
      title: "Redux Architecture",
      description: "Using Redux for state management proved essential for maintaining a consistent application state across complex dashboard components."
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
  title: "Reflection",
  content: "Working on TutorD deepened my understanding of accessibility-first design—building for people whose devices, environments, or circumstances are often overlooked. It also sharpened my ability to collaborate in a lean team setting, where each member needed to contribute across multiple areas of expertise.",
  insights: [
    {
      title: "Inclusive Design",
      description: "Designing for the most constrained environments often leads to cleaner, more focused solutions that benefit all users."
    },
    {
      title: "Technical Constraints",
      description: "SMS limitations forced us to distill educational content to its essence, resulting in more effective communication."
    },
    {
      title: "Impact-Driven Development",
      description: "Seeing how our work directly helped teachers support students during a challenging time reinforced the value of purpose-driven projects."
    }
  ]
};
