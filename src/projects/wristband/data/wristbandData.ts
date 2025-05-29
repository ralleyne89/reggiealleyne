import { User, Clock, Users, CheckCircle, Palette, Search, Monitor, Target, Lightbulb } from "lucide-react";

export const wristbandOverviewData = {
  title: "Project Overview",
  description: [
    "WRISTBAND was an innovative interactive storytelling platform designed to democratize content creation and provide diverse representation in digital narratives. The platform aimed to empower creators from underrepresented communities to share authentic stories while giving users personalized, choice-driven experiences.",
    "As the lead UX designer on this client project, I worked closely with a diverse team to create a mobile-first platform that would revolutionize how stories are told and consumed in the digital age. The project focused on building meaningful connections between creators and audiences through interactive storytelling.",
    "While the platform was never launched due to changing business priorities, the design and prototyping work provided valuable insights into user behavior, content creator needs, and the technical challenges of building scalable interactive media platforms."
  ],
  projectDetails: [
    {
      label: "Role",
      value: "Lead UX Designer",
      icon: User
    },
    {
      label: "Duration",
      value: "8 months",
      icon: Clock
    },
    {
      label: "Team Size",
      value: "6 members",
      icon: Users
    },
    {
      label: "Status",
      value: "Prototype Complete",
      icon: CheckCircle
    }
  ],
  toolDetails: [
    {
      label: "Design",
      value: "Figma, Adobe Creative Suite",
      icon: Palette
    },
    {
      label: "Prototyping",
      value: "React Native, Expo",
      icon: Monitor
    },
    {
      label: "Research",
      value: "User Interviews, Analytics",
      icon: Search
    },
    {
      label: "Collaboration",
      value: "Slack, Notion, GitHub",
      icon: Users
    }
  ]
};

export const wristbandProblemSpaceData = {
  title: "Understanding the Problem Space",
  introduction: "The digital storytelling landscape was dominated by platforms that prioritized viral content over meaningful narratives and often lacked authentic representation from diverse communities.",
  challenges: [
    {
      title: "Limited Creator Diversity",
      description: "Most storytelling platforms were dominated by creators from similar backgrounds, leading to homogeneous content and limited perspectives.",
      icon: Users
    },
    {
      title: "Passive Consumption Model",
      description: "Traditional digital storytelling platforms offered linear, non-interactive experiences that didn't engage modern audiences.",
      icon: Monitor
    },
    {
      title: "Monetization Barriers",
      description: "Emerging creators faced significant barriers to monetizing their content, especially those without existing large followings.",
      icon: Clock
    },
    {
      title: "Discovery Challenges",
      description: "Users had difficulty finding stories that matched their interests and values, leading to poor content discovery experiences.",
      icon: Search
    }
  ],
  designGoals: [
    {
      title: "Empower Diverse Creators",
      description: "Create tools and systems that lower barriers for creators from underrepresented communities to share authentic stories.",
      icon: Users
    },
    {
      title: "Enable Interactive Storytelling",
      description: "Develop choice-driven narrative systems that give users agency in how stories unfold and develop.",
      icon: Monitor
    },
    {
      title: "Support Sustainable Monetization",
      description: "Build fair revenue sharing models that help emerging creators sustain content creation as a viable career path.",
      icon: CheckCircle
    },
    {
      title: "Improve Content Discovery",
      description: "Design community-driven discovery systems that help users find quality, diverse content that matches their interests.",
      icon: Search
    }
  ]
};

export const wristbandResearchData = {
  title: "Research & Discovery",
  introduction: "Our research focused on understanding both content creators and content consumers to build a platform that would serve both audiences effectively.",
  researchSections: [
    {
      title: "Content Creator Interviews",
      description: "In-depth conversations with storytellers from diverse backgrounds",
      items: [
        { text: "12 storytellers from diverse backgrounds" },
        { text: "Semi-structured interviews" },
        { text: "Creative process mapping" },
        { text: "Pain point analysis" }
      ]
    },
    {
      title: "User Behavior Analysis",
      description: "Understanding how consumers interact with digital content",
      items: [
        { text: "150 digital content consumers" },
        { text: "Usage analytics" },
        { text: "Survey responses" },
        { text: "Engagement tracking" }
      ]
    },
    {
      title: "Competitive Analysis",
      description: "Evaluating existing platforms and identifying opportunities",
      items: [
        { text: "8 existing platforms analyzed" },
        { text: "Feature comparison" },
        { text: "User experience audit" },
        { text: "Market positioning analysis" }
      ]
    }
  ],
  keyFindings: [
    {
      title: "Creator Empowerment",
      description: "Successful platforms needed to lower technical barriers while giving creators maximum creative control over their storytelling experience."
    },
    {
      title: "Community-Driven Discovery",
      description: "Users preferred discovering content through community recommendations rather than algorithm-driven feeds."
    },
    {
      title: "Interactive Engagement",
      description: "Choice-driven narratives significantly increased user engagement and emotional investment in stories."
    }
  ]
};

export const wristbandIdeationData = {
  title: "Ideation & Strategy",
  introduction: "Based on our research insights, we developed a comprehensive strategy for creating an interactive storytelling platform that would empower diverse creators while engaging modern audiences.",
  keyInsights: [
    {
      highlight: "Creator-First Approach",
      description: "The platform needed to prioritize creator needs and provide them with both creative tools and sustainable income opportunities through fair revenue sharing and community building features."
    },
    {
      highlight: "Interactive Storytelling Engine",
      description: "Users wanted agency in story progression, so we designed a choice-driven narrative system that would create personalized experiences while maintaining story integrity."
    },
    {
      highlight: "Community-Driven Discovery",
      description: "Rather than relying solely on algorithms, we would leverage community recommendations and curated collections to help users discover diverse, high-quality content."
    },
    {
      highlight: "Mobile-First Experience",
      description: "With our target audience primarily consuming content on mobile devices, we designed a mobile-first platform that would work seamlessly across different screen sizes."
    }
  ],
  flowSteps: [
    {
      number: 1,
      title: "Content Creation",
      description: "Creators use intuitive tools to build interactive stories with branching narratives, character development, and multimedia elements."
    },
    {
      number: 2,
      title: "Story Discovery",
      description: "Users discover content through personalized recommendations, community curation, and creator spotlights rather than purely algorithmic feeds."
    },
    {
      number: 3,
      title: "Interactive Experience",
      description: "Readers make choices that influence story progression, creating personalized narrative experiences and deeper emotional engagement."
    },
    {
      number: 4,
      title: "Community Engagement",
      description: "Users can follow creators, join story discussions, and participate in community challenges while creators build sustainable audiences."
    }
  ]
};

export const wristbandJourneyData = {
  title: "User Journey Mapping",
  introduction: "We mapped the complete user experience for both content creators and content consumers to identify key touchpoints and opportunities for engagement.",
  journeyTitle: "From Discovery to Advocacy",
  journeyDescription: "How users progress from discovering the platform to becoming active advocates",
  personas: [
    {
      name: "Maya Samuels",
      role: "Content Consumer",
      description: "Young professional seeking diverse, engaging stories"
    },
    {
      name: "Jordan Rivera",
      role: "Content Creator", 
      description: "Emerging storyteller looking to build an audience"
    }
  ],
  stages: [
    {
      name: "Discovery"
    },
    {
      name: "First Experience"
    },
    {
      name: "Engagement"
    },
    {
      name: "Advocacy"
    }
  ],
  userActions: [
    {
      icon: Search,
      description: "Discovers platform through social media"
    },
    {
      icon: User,
      description: "Signs up and completes onboarding"
    },
    {
      icon: Monitor,
      description: "Reads first interactive story"
    },
    {
      icon: Users,
      description: "Follows favorite creators"
    }
  ],
  emotionalStates: [
    {
      icon: Search,
      iconColor: "text-blue-500",
      description: "Curious about new platform"
    },
    {
      icon: CheckCircle,
      iconColor: "text-green-500",
      description: "Excited by interactive features"
    },
    {
      icon: Users,
      iconColor: "text-purple-500",
      description: "Engaged with story choices"
    },
    {
      icon: User,
      iconColor: "text-yellow-500",
      description: "Connected to creators"
    }
  ],
  painPoints: [
    {
      points: [
        "Complex signup process",
        "Confusing interface",
        "Limited content variety"
      ]
    },
    {
      points: [
        "Poor content discovery",
        "Lack of creator interaction",
        "Technical issues"
      ]
    },
    {
      points: [
        "Limited engagement options",
        "Slow loading times",
        "Mobile usability issues"
      ]
    },
    {
      points: [
        "No sharing features",
        "Limited community features",
        "Monetization barriers"
      ]
    }
  ],
  designOpportunities: [
    {
      points: [
        "Streamlined onboarding",
        "Preview content without signup",
        "Clear value proposition"
      ]
    },
    {
      points: [
        "Intuitive choice interface",
        "Tutorial for new features",
        "Immediate engagement"
      ]
    },
    {
      points: [
        "Creator-fan interaction",
        "Story discussion communities",
        "Social sharing optimization"
      ]
    },
    {
      points: [
        "Referral reward programs",
        "Creator support mechanisms",
        "User-generated content tools"
      ]
    }
  ]
};

export const wristbandPersonaData = {
  title: "Meet Our Target User",
  introduction: "Based on our research, we developed detailed personas representing our primary user segments to guide design decisions throughout the project.",
  imageSrc: "/lovable-uploads/d5de6ddf-336f-45cb-84e5-4cb556419e53.png",
  imageAlt: "Maya Samuels - Primary User Persona",
  name: "Maya Samuels",
  details: [
    { label: "Age", value: "26" },
    { label: "Location", value: "Austin, TX" },
    { label: "Occupation", value: "Marketing Coordinator" }
  ],
  bio: "Maya is a young professional who loves consuming diverse digital content during her commute and free time. She's particularly interested in stories that offer different perspectives and allow her to engage actively rather than passively consume content.",
  goals: [
    { text: "Discover authentic stories from diverse creators" },
    { text: "Have agency in how stories unfold and develop" },
    { text: "Connect with like-minded community members" },
    { text: "Support creators whose work resonates with her" }
  ],
  frustrations: [
    { text: "Difficulty finding diverse content on mainstream platforms" },
    { text: "Passive consumption experiences that don't engage her" },
    { text: "Algorithmic feeds that don't match her interests" },
    { text: "Limited ways to support emerging creators" }
  ],
  needs: [
    { text: "Authentic representation in digital media" },
    { text: "Interactive storytelling experiences" },
    { text: "Community connections with creators and readers" },
    { text: "Easy ways to discover and support diverse voices" }
  ],
  motivations: [
    "Seeking authentic representation in digital media",
    "Wanting to participate in story progression", 
    "Building connections with creators and other readers",
    "Discovering new perspectives and voices"
  ],
  additionalInfo: {
    techComfort: "High - comfortable with mobile apps and digital platforms",
    deviceUsage: "Primarily mobile (iPhone), some tablet use for longer content"
  }
};

export const wristbandChallengesData = {
  title: "Challenges & Learnings",
  introduction: "Working on a client prototype that never made it to market presented unique challenges around balancing innovation with practical constraints, while extracting valuable insights from an unrealized vision.",
  challenges: [
    {
      title: "Balancing Creative Vision with Market Reality",
      description: "The client had ambitious ideas about revolutionizing storytelling, but we needed to ground these concepts in user research and technical feasibility. Finding the sweet spot between innovation and practicality required constant negotiation and prototype iteration."
    },
    {
      title: "Building for Diversity Without Tokenism", 
      description: "Creating authentic representation in characters and stories meant going beyond surface-level diversity. We had to develop processes for working with diverse creators and ensuring their voices weren't diluted through our design process."
    },
    {
      title: "Designing for Unrealized Business Models",
      description: "Without clear monetization strategies or launch timelines, we had to design flexible systems that could adapt to different business models. This meant creating scalable frameworks without knowing exactly how they'd be implemented."
    },
    {
      title: "Maintaining Team Motivation on Uncertain Projects",
      description: "As the project's commercial viability became questionable, keeping the team engaged and producing quality work required shifting focus from business outcomes to learning opportunities and portfolio development."
    }
  ],
  learnings: [
    {
      title: "Client prototypes require different success metrics than shipped products",
      description: "We learned to measure success through learning outcomes and skill development rather than just user adoption metrics."
    },
    {
      title: "Diverse representation must be built into the process, not added as an afterthought",
      description: "Authentic diversity requires involving diverse voices from the beginning of the design process."
    },
    {
      title: "Flexible system design is crucial when business models are uncertain",
      description: "Building modular, adaptable systems allows for pivoting when business priorities change."
    },
    {
      title: "Team motivation requires clear communication about project goals and constraints",
      description: "Transparency about project uncertainty helps teams focus on learning and growth opportunities."
    }
  ],
  nextSteps: [
    {
      title: "Apply Inclusive Design",
      description: "Apply learnings about inclusive design to future projects",
      icon: Users
    },
    {
      title: "Improve Client Management",
      description: "Develop better frameworks for client expectation management",
      icon: Target
    },
    {
      title: "Enhance Prototyping",
      description: "Create more robust prototyping processes for testing big ideas",
      icon: Lightbulb
    },
    {
      title: "Build Portfolio",
      description: "Build portfolio pieces that showcase the design thinking process",
      icon: CheckCircle
    }
  ]
};
