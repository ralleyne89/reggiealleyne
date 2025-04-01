
import { ProjectType } from '../../../types/project';

export const getDataVizProject = (): ProjectType => {
  return {
    id: 4,
    title: "DataViz Dashboard",
    description: "Enterprise data visualization dashboard for financial analytics and reporting.",
    fullDescription: "A comprehensive data visualization platform that transforms complex financial data into actionable insights through intuitive dashboards and interactive reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Enterprise", "Data Visualization", "FinTech"],
    role: "Lead UI Designer",
    duration: "5 months",
    year: "2023",
    challenge: "Design intuitive visualizations for complex financial data that non-technical stakeholders can understand",
    process: ["Stakeholder Interviews", "Information Architecture", "Wireframing", "Prototyping", "User Testing"],
    deliverables: ["Dashboard Design", "Chart Library", "Design System", "Interactive Prototype"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    ],
    conclusion: {
      impact: "45% reduction in report generation time, 30% increase in data-driven decisions",
      learnings: "The critical importance of user testing with actual stakeholders when designing data visualizations",
      nextSteps: "Implementing predictive analytics features and expanded export capabilities"
    },
    techStack: ["Figma", "D3.js", "React", "Recharts"],
    keyAchievements: ["Reduced data interpretation time by 60%", "Implemented 15+ customizable visualization types"],
    problemSolved: "Difficulty in interpreting complex financial data for decision-making",
    technicalHighlights: ["Real-time data filtering", "Custom visualization engine", "Automated reporting"],
    teamSize: "5 members",
    methodologies: ["Data-Driven Design", "Agile", "Iterative Testing"],
    summary: "An enterprise dashboard transforming complex financial data into intuitive visualizations for better decision-making."
  };
};
