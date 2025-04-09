
import { ProjectType } from '../../../types/project';

export const getTutorDProject = (): ProjectType => {
  return {
    id: 2,
    slug: "tutor-d",
    title: "Tutor D",
    description: "Educational platform connecting students with qualified tutors for personalized learning sessions.",
    fullDescription: "A distance learning platform designed to close the homework and accessibility gap in education. By leveraging SMS technology, it enables students without reliable internet or smart devices to receive assignments, engage with lessons, and stay on track—remotely.",
    image: "/lovable-uploads/781889c9-57f2-4a2c-9ce3-a3951cb2a777.png",
    category: "Education",
    tags: ["Education", "Distance Learning", "Accessibility"],
    role: "Frontend Developer & UI/UX Designer",
    duration: "10 months",
    year: "2021",
    challenge: "In many school districts, particularly underserved communities, students don't have access to internet-based learning platforms. Traditional online classrooms don't reach students using basic cell phones. Educators needed a way to send, track, and manage assignments sent via SMS, while still maintaining visibility into student progress and engagement.",
    process: [
      "Collaborated with the product lead to define MVP features based on teacher feedback. Focused on designing for low-tech, high-stress environments: speed, clarity, and functionality were key.",
      "Built the dashboard in React.js, with UI elements from Ant Design. Developed interfaces for lesson creation, student progress tracking, and weekly engagement summaries.",
      "Used Redux middleware to connect frontend components with a MongoDB + Redis backend for real-time updates.",
      "Conducted informal testing with educators. Refined the layout for clarity: simplified action buttons, optimized form UX, and streamlined navigation.",
      "Implemented responsive views for mobile and tablet usage."
    ],
    deliverables: [
      "Lesson Planner for creating assignments automatically sent via SMS",
      "Progress Dashboard showing student engagement and response rates",
      "Real-Time Updates system via Redis integration",
      "Weekly Summaries with performance overview cards",
      "Messaging Tools for lesson reminders and feedback"
    ],
    images: [
      "/lovable-uploads/227c9dea-f39a-4dcf-a387-b9089523692f.png",
      "/lovable-uploads/781889c9-57f2-4a2c-9ce3-a3951cb2a777.png"
    ],
    conclusion: {
      impact: "Helped teachers support their students during a time when traditional systems weren't enough, improving accessibility in underserved communities.",
      learnings: "Working on TutorD deepened my understanding of accessibility-first design—building for people whose devices, environments, or circumstances are often overlooked. It also sharpened my ability to collaborate in a lean team setting.",
      nextSteps: "If expanded, I'd explore offline usage logging and simple analytics for teacher insights."
    },
    techStack: ["React.js", "Redux", "MongoDB", "Node.js", "Express.js", "Ant Design"],
    keyAchievements: [
      "Built a web platform that makes it easy for teachers to plan, send, and track SMS-based lessons",
      "Improved student learning outcomes through consistency and accessibility",
      "Reduced barriers for educators trying to support students remotely",
      "Ensured the interface is intuitive and mobile-friendly for teachers on the go"
    ],
    problemSolved: "Traditional online classrooms don't reach students using basic cell phones in underserved communities.",
    solution: "A distance learning platform leveraging SMS technology that enables students without reliable internet or smart devices to receive assignments, engage with lessons, and stay on track remotely.",
    technicalHighlights: [
      "Integrated state management with Redux",
      "Connected to MongoDB and Redis databases",
      "Implemented real-time updates for teacher tools",
      "Built responsive interfaces for mobile and desktop use"
    ],
    teamSize: "2 members",
    methodologies: ["Agile", "User Testing", "Iterative Design"],
    summary: "A distance learning platform supporting student learning in underserved communities through SMS-based technology. The educator-facing web dashboard helps teachers manage student progress, engagement, and communication.",
    date: "2021-06-01",
    liveUrl: "https://tutord.io/"
  };
};
