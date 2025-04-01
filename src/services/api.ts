import { supabase } from '@/integrations/supabase/client';
import { ProjectType } from '../types/project';

export const getProject = async (idOrSlug: number | string): Promise<ProjectType> => {
  // Handle string slugs
  if (typeof idOrSlug === 'string') {
    // Map slugs to IDs
    const slugMap: Record<string, number> = {
      'health-at-home': 0,
      'cllctve-platform': 1,
      'tutor-d': 2,
      'tech-noir': 3,
      'dataviz-dashboard': 4,
      'improv-learning': 5,
      'wristband': 6
    };
    
    const id = slugMap[idOrSlug];
    if (id !== undefined) {
      return getProjectById(id);
    } else {
      throw new Error('Project not found');
    }
  }
  
  // Handle numeric IDs
  return getProjectById(idOrSlug);
};

const getProjectById = async (id: number): Promise<ProjectType> => {
  // Special case for Health@Home project
  if (id === 0) {
    return getHealthHomeProject();
  }
  
  // Special case for TECH NOIR project
  if (id === 3) {
    return getTechNoirProject();
  }
  
  // Special case for DataViz Dashboard project
  if (id === 4) {
    return getDataVizProject();
  }
  
  // Special case for CLLCTVE Platform project
  if (id === 1) {
    return getCllctveProject();
  }
  
  // Special case for Tutor D project
  if (id === 2) {
    return getTutorDProject();
  }
  
  // Special case for Improv Learning project
  if (id === 5) {
    return getImprovLearningProject();
  }
  
  // Special case for Wristband project
  if (id === 6) {
    return getWristbandProject();
  }

  // For other projects from Supabase
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error || !data) {
    throw new Error('Project not found');
  }

  // Create a ProjectType object from the Supabase data
  return {
    ...data,
    fullDescription: data.full_description,
    conclusion: {
      impact: data.impact,
      learnings: data.learnings,
      nextSteps: data.next_steps
    },
    techStack: data.tech_stack,
    keyAchievements: data.key_achievements,
    githubUrl: data.github_url,
    liveUrl: data.live_url,
    problemSolved: data.problem_solved,
    technicalHighlights: data.technical_highlights,
    teamSize: data.team_size,
    methodologies: data.methodologies
  };
};

// Get pre-defined Health@Home project
const getHealthHomeProject = (): ProjectType => {
  return {
    id: 0,
    title: "Health@Home Platform",
    description: "A comprehensive telehealth solution for Blue Shield of California, enabling remote patient monitoring during COVID-19.",
    fullDescription: "A full-featured telehealth platform designed to help patients connect with healthcare providers remotely during the COVID-19 pandemic, with robust monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Enterprise UX", "Healthcare", "Telehealth"],
    role: "Lead UX Designer",
    duration: "8 months",
    year: "2022",
    challenge: "Rapidly develop an intuitive telehealth platform during pandemic",
    process: ["Research", "Ideation", "Prototyping", "Testing", "Implementation"],
    deliverables: ["UX Strategy", "User Interface", "User Flows", "Wireframes", "Prototypes", "Design System", "Web Application"],
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118"
    ],
    conclusion: {
      impact: "32% increase in patient engagement, 24% increase in sign-ups",
      learnings: "The importance of simplified user flows for elderly patients and healthcare providers under stress",
      nextSteps: "Expanding platform capabilities to include preventative care monitoring"
    },
    techStack: ["React", "Node.js", "Material UI", "Figma"],
    keyAchievements: ["Led cross-functional team of principal level designers, content strategists, and reearchers", "Served 50,000+ patients"],
    problemSolved: "Inefficient remote healthcare delivery during pandemic restrictions",
    technicalHighlights: ["HIPAA-compliant video conferencing", "Real-time vital monitoring", "Electronic health record integration"],
    teamSize: "8 members",
    methodologies: ["Design Thinking", "Agile", "User-Centered Design"],
    summary: "A telehealth platform enabling remote patient monitoring during COVID-19 with significant impact on patient outcomes."
  };
};

// Get pre-defined TECH NOIR project
const getTechNoirProject = (): ProjectType => {
  return {
    id: 3,
    title: "TECH NOIR",
    description: "A fashion & technology driven e-commerce app showcasing wearable technology and educating users on new trends.",
    fullDescription: "An e-commerce platform that merges fashion and wearable technology, educating users on new trends in both worlds while offering a seamless shopping experience. The platform addresses consumer knowledge gaps about wearable technology by showcasing how to integrate tech into fashion.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["E-commerce", "Fashion", "Wearable Tech"],
    role: "UX, UI & Visual Design",
    duration: "2 months",
    year: "2023",
    challenge: "Create an engaging platform that educates users about wearable technology while offering fashionable products",
    process: [
      "Research showed that consumers have little knowledge of wearable technology and its benefits",
      "Competitive analysis of luxury retail apps like Net-A-Porter, Nordstrom, and Farfetch",
      "User surveys revealed preference for in-store purchases due to lack of online education",
      "Created persona 'Tech Tina' - a 27-year-old fashionista who loves tech gadgets",
      "Designed wireframes with solid foundation for key features"
    ],
    deliverables: ["UX Strategy", "UI Design", "User Flows", "Interactive Prototype", "Design System"],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
    ],
    conclusion: {
      impact: "28% increase in customer engagement with wearable tech products",
      learnings: "The importance of educational content in driving sales for innovative products",
      nextSteps: "Expanding product categories and implementing AR try-on features"
    },
    techStack: ["Figma", "Shopify", "React", "TailwindCSS"],
    keyAchievements: ["Designed 'How to Wear' section", "Developed educational blog content", "Created exclusive designer collaborations section"],
    problemSolved: "Lack of consumer knowledge about wearable technology and its fashion applications",
    technicalHighlights: ["Product comparison tool", "Designer style guides", "Daily blog posts", "AR try-on experience"],
    teamSize: "3 members",
    methodologies: ["Design Thinking", "Lean UX", "Usability Testing"],
    summary: "An e-commerce platform bridging the gap between fashion and wearable technology through education and seamless shopping experiences."
  };
};

// Get pre-defined DataViz Dashboard project
const getDataVizProject = (): ProjectType => {
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

// Get pre-defined CLLCTVE Platform project
const getCllctveProject = (): ProjectType => {
  return {
    id: 1,
    title: "CLLCTVE Platform",
    description: "A digital portfolio platform connecting college creators with brands seeking authentic content.",
    fullDescription: "CLLCTVE empowers the next generation of creatives by providing a platform to showcase their work and connect with brands looking for authentic content creators.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    tags: ["Platform", "Creative", "Marketplace"],
    role: "Frontend Developer & UI Designer",
    duration: "2 years",
    year: "2020",
    challenge: "Build a portfolio platform that meets the needs of both creators and brands",
    process: ["Discovery", "User Interviews", "Design Sprint", "Testing"],
    deliverables: ["Design System", "User Flows", "Interactive Prototype, Web Application"],
    images: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490",
      "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a",
      "https://images.unsplash.com/photo-1535586453970-bd8fb0d2d2fc"
    ],
    conclusion: {
      impact: "10,000+ creator portfolios, 200+ brand partnerships",
      learnings: "Creator discovery and curation are critical for platform success",
      nextSteps: "Expanding into video content and international markets"
    },
    techStack: ["React", "GraphQL", "Ant Design", "React Query", "Figma"],
    keyAchievements: ["Raised $1.2M in funding", "Featured in TechCrunch", "5,000+ user base"],
    problemSolved: "Gap between college creators and brands seeking authentic content",
    technicalHighlights: ["Creator analytics dashboard", "Automated contract generation", "Secure payment processing"],
    teamSize: "6 members",
    methodologies: ["Design Thinking", "Agile", "Usability Testing"],
    summary: "Digital platform connecting college creators with brands for authentic content partnerships."
  };
};

// Get pre-defined Tutor D project
const getTutorDProject = (): ProjectType => {
  return {
    id: 2,
    title: "Tutor D",
    description: "Educational platform connecting students with qualified tutors for personalized learning sessions.",
    fullDescription: "A comprehensive platform that matches students with expert tutors based on subject, learning style, and scheduling needs.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    tags: ["Education", "Marketplace", "SaaS"],
    role: "UI/UX Designer & Frontend Developer",
    duration: "6 months",
    year: "2021",
    challenge: "Create an intuitive matching system for students and tutors",
    process: ["User Research", "Competitive Analysis", "Wireframing", "Usability Testing"],
    deliverables: ["User Flows", "UI Design", "Interactive Prototype"],
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    ],
    conclusion: {
      impact: "95% student satisfaction rate, 32% improvement in grades",
      learnings: "The importance of flexible scheduling and clear communication channels",
      nextSteps: "Expanding subject offerings and implementing AI-driven matching"
    },
    techStack: ["React", "Node.js", "Supabase", "Ant Design"],
    keyAchievements: ["300+ active users", "50+ qualified tutors", "10+ subjects"],
    problemSolved: "Difficulty finding qualified tutors for specific subjects",
    technicalHighlights: ["Real-time availability calendar", "In-app video conferencing", "Progress tracking dashboard"],
    teamSize: "4 members",
    methodologies: ["Lean UX", "Agile", "User Testing"],
    summary: "Educational platform connecting students with qualified tutors for personalized learning."
  };
};

// Get pre-defined Improv Learning project
const getImprovLearningProject = (): ProjectType => {
  return {
    id: 5,
    title: "Improv Learning - Traffic School",
    description: "A high-converting website for Geico's traffic school partnership focused on increasing user sign-up rates.",
    fullDescription: "A comprehensive website designed for the new traffic school partnership with Geico Insurance. The platform aims to create a seamless user experience that encourages completion of traffic school requirements while maintaining an engaging learning environment.",
    image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51",
    tags: ["Web Design", "UX/UI", "Conversion Rate"],
    role: "Lead UX Designer",
    duration: "3 months",
    year: "2023",
    challenge: "Create a high-converting website that increases user sign-up rates while ensuring compliance with traffic school requirements",
    process: [
      "Conducted user research to understand pain points in existing traffic school experiences",
      "Analyzed Geico's design guidelines and brand requirements for cohesive integration",
      "Created low-fidelity wireframes focusing on the conversion funnel",
      "Developed interactive prototypes for user testing",
      "Collaborated with developers to optimize the implementation"
    ],
    deliverables: [
      "Responsive Website Design",
      "Sign-up Flow",
      "Course Selection Interface",
      "Payment Integration",
      "Certificate Generation System",
      "Mobile Optimization"
    ],
    images: [
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81",
      "https://images.unsplash.com/photo-1570125909232-9a054b0db644",
      "https://images.unsplash.com/photo-1505915230175-0754bfbab5d5"
    ],
    conclusion: {
      impact: "42% increase in sign-up conversions, 28% reduction in course drop-off rates",
      learnings: "The importance of streamlined form design and clear progress indicators for completion-focused experiences",
      nextSteps: "Expanding with additional course offerings and implementing gamification elements"
    },
    techStack: ["Figma", "React", "TailwindCSS", "Node.js"],
    keyAchievements: [
      "Increased course completion rate by 35%",
      "Reduced average completion time by 15%",
      "Improved mobile conversion by 50%"
    ],
    problemSolved: "Low conversion and high abandonment rates in traditional traffic school websites",
    technicalHighlights: [
      "Adaptive learning path algorithm",
      "Real-time progress tracking",
      "Seamless Geico account integration",
      "Auto-save feature to prevent data loss"
    ],
    teamSize: "5 members",
    methodologies: ["User-Centered Design", "Agile", "A/B Testing"],
    summary: "A high-converting traffic school website for Geico Insurance that significantly improved sign-up and completion rates through intuitive design."
  };
};

// Get pre-defined Wristband project with updated content
const getWristbandProject = (): ProjectType => {
  return {
    id: 6,
    slug: 'wristband',
    title: "WRISTBAND",
    description: "An interactive storytelling game app with diverse narratives allowing users to choose their own path.",
    fullDescription: "A fun and engaging game comprised of stories written from a variety of writers. Users can choose the path of each character in different stories, creating a unique experience for every user.",
    image: "/lovable-uploads/d2ac6921-78b3-46b5-bbb2-7022018530ad.png",
    tags: ["Mobile App", "Game Design", "Storytelling"],
    role: "UX, UI & Visual Design",
    duration: "2 months",
    year: "2022",
    challenge: "Many of the interactive storytelling games are very similar, causing users to only use it for a short time then delete it. When it comes to finding a wide variety of genres for the user, it tends to get repetitive. Users have found that the writing seems rushed with characters that look the same with different hair color. How can we give users the missing element they are seeking?",
    process: [
      "While coming up with the layout of the app, I began sketches to finalize some of the key features. After finding our MVP, I started the design process on those key pages.",
      "After establishing a solid foundation, I began designing and prototyping the first round of development. Keeping a clean and easy to navigate layout was one of the main focuses while designing.",
      "Created low-fidelity sketches to establish key features",
      "Designed and prototyped with focus on clean navigation"
    ],
    deliverables: [
      "Mobile App Design",
      "User Interface",
      "User Flows",
      "Storytelling Framework",
      "Interactive Prototype"
    ],
    images: [
      "/lovable-uploads/d2ac6921-78b3-46b5-bbb2-7022018530ad.png",
      "/lovable-uploads/aab1244b-de80-4758-8cbe-165d2b66ec19.png",
      "/lovable-uploads/abd0fcfb-d3c7-4ea0-9f8c-05c8cf2759e9.png",
      "/lovable-uploads/8ccc7ee6-c4de-44cc-8729-4090d34c7895.png"
    ],
    conclusion: {
      impact: "Higher user retention compared to similar apps, with more diverse storytelling perspectives",
      learnings: "The importance of diverse storytelling perspectives and character development in interactive narratives",
      nextSteps: "By enlisting the help of freelance writers and artists, we will create engaging content that is more relatable to our users. Having these content creators from different cultures and backgrounds will have a more authentic storytelling experience."
    },
    techStack: ["Figma", "Adobe Photoshop", "Principle", "React Native"],
    keyAchievements: [
      "Created an engaging UI with distinctive yellow/black theme",
      "Implemented a flexible storytelling framework that supports multiple genres",
      "Designed micro-transaction system for premium content"
    ],
    problemSolved: "Many of the interactive storytelling games are very similar, causing users to only use it for a short time then delete it. When it comes to finding a wide variety of genres for the user, it tends to get repetitive. Users have found that the writing seems rushed with characters that look the same with different hair color.",
    solution: "By enlisting the help of freelance writers and artists, we will create engaging content that is more relatable to our users. Having these content creators from different cultures and backgrounds will have a more authentic storytelling experience. Users want to feel connected to the characters they play as, and we want to do our best to include our diverse number of users.",
    technicalHighlights: [
      "Branching narrative system",
      "User profile and progress tracking",
      "Social sharing capabilities",
      "In-app purchases for premium stories"
    ],
    teamSize: "1 member",
    methodologies: ["User-Centered Design", "Design Thinking", "Rapid Prototyping"],
    summary: "An interactive storytelling app featuring diverse narratives and choice-based gameplay that creates unique user experiences."
  };
};

export const getAllProjects = async (): Promise<ProjectType[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('Failed to fetch projects');
  }

  // Process any other projects from Supabase that don't conflict with our predefined ones
  const otherProjects = data
    .filter(project => ![0, 1, 2, 3, 4, 5, 6].includes(project.id))
    .map(project => ({
      ...project,
      fullDescription: project.full_description,
      conclusion: {
        impact: project.impact,
        learnings: project.learnings,
        nextSteps: project.next_steps
      },
      techStack: project.tech_stack,
      keyAchievements: project.key_achievements,
      githubUrl: project.github_url,
      liveUrl: project.live_url,
      problemSolved: project.problem_solved,
      technicalHighlights: project.technical_highlights,
      teamSize: project.team_size,
      methodologies: project.methodologies
    }));

  // Create our predefined projects array
  const mainProjects = [
    getHealthHomeProject(),
    getCllctveProject(),
    getTutorDProject(),
    getTechNoirProject(),
    getDataVizProject(),
    getImprovLearningProject(),
    getWristbandProject()
  ];

  // Remove potential duplicates based on project title
  const uniqueProjects = [...mainProjects, ...otherProjects].filter(
    (project, index, self) => index === self.findIndex((p) => p.title === project.title)
  );

  return uniqueProjects;
};
