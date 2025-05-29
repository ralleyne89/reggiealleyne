
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
      icon: "User" as const
    },
    {
      label: "Duration",
      value: "8 months",
      icon: "Clock" as const
    },
    {
      label: "Team Size",
      value: "6 members",
      icon: "Users" as const
    },
    {
      label: "Status",
      value: "Prototype Complete",
      icon: "CheckCircle" as const
    }
  ],
  toolDetails: [
    {
      label: "Design",
      value: "Figma, Adobe Creative Suite",
      icon: "Palette" as const
    },
    {
      label: "Prototyping",
      value: "React Native, Expo",
      icon: "Monitor" as const
    },
    {
      label: "Research",
      value: "User Interviews, Analytics",
      icon: "Search" as const
    },
    {
      label: "Collaboration",
      value: "Slack, Notion, GitHub",
      icon: "Users" as const
    }
  ]
};

export const wristbandProblemSpaceData = {
  title: "Understanding the Problem Space",
  introduction: "The digital storytelling landscape was dominated by platforms that prioritized viral content over meaningful narratives and often lacked authentic representation from diverse communities.",
  problemStatement: {
    title: "The Challenge",
    description: "Content creators from underrepresented communities struggled to find platforms that supported authentic storytelling while providing sustainable income opportunities. Existing platforms either lacked interactive features or failed to adequately compensate diverse creators."
  },
  keyProblems: [
    {
      title: "Limited Creator Diversity",
      description: "Most storytelling platforms were dominated by creators from similar backgrounds, leading to homogeneous content and limited perspectives.",
      impact: "Audiences seeking diverse stories had few options for authentic representation."
    },
    {
      title: "Passive Consumption Model",
      description: "Traditional digital storytelling platforms offered linear, non-interactive experiences that didn't engage modern audiences.",
      impact: "Users wanted more agency in how stories unfolded and developed."
    },
    {
      title: "Monetization Barriers",
      description: "Emerging creators faced significant barriers to monetizing their content, especially those without existing large followings.",
      impact: "Talented storytellers couldn't sustain content creation as a viable career path."
    },
    {
      title: "Discovery Challenges",
      description: "Users had difficulty finding stories that matched their interests and values, leading to poor content discovery experiences.",
      impact: "Quality content from diverse creators remained hidden while algorithm-driven content dominated."
    }
  ]
};

export const wristbandResearchData = {
  title: "Research & Discovery",
  introduction: "Our research focused on understanding both content creators and content consumers to build a platform that would serve both audiences effectively.",
  researchMethods: [
    {
      method: "Content Creator Interviews",
      participants: "12 storytellers from diverse backgrounds",
      duration: "3 weeks",
      keyFindings: [
        "Creators wanted more control over how their stories were presented",
        "Revenue sharing and fair compensation were top priorities",
        "Community building features were considered essential",
        "Technical barriers often prevented creators from experimenting with interactive formats"
      ]
    },
    {
      method: "User Behavior Analysis",
      participants: "150 digital content consumers",
      duration: "2 weeks",
      keyFindings: [
        "Users spent 40% more time on interactive content vs. linear content",
        "Choice-driven narratives increased emotional investment in stories",
        "Discovery through community recommendations was preferred over algorithmic suggestions",
        "Mobile-first design was essential for target demographic"
      ]
    },
    {
      method: "Competitive Analysis",
      participants: "8 existing platforms",
      duration: "1 week",
      keyFindings: [
        "No existing platform effectively combined interactivity with creator diversity",
        "Most platforms struggled with sustainable creator monetization",
        "User retention rates were highest for platforms with strong community features",
        "Technical complexity often limited creator adoption"
      ]
    }
  ],
  insights: [
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
  journeyStages: [
    {
      stage: "Discovery",
      description: "How users find and join the platform",
      touchpoints: [
        "Social media recommendations",
        "App store discovery",
        "Word-of-mouth referrals"
      ],
      opportunities: [
        "Streamlined onboarding process",
        "Preview content without signup",
        "Clear value proposition communication"
      ]
    },
    {
      stage: "First Experience",
      description: "Initial platform interaction and story consumption",
      touchpoints: [
        "Story selection interface",
        "Interactive reading experience",
        "Choice-making system"
      ],
      opportunities: [
        "Intuitive choice interface design",
        "Tutorial for new interactive features",
        "Immediate engagement with compelling content"
      ]
    },
    {
      stage: "Engagement",
      description: "Continued use and community participation",
      touchpoints: [
        "Following favorite creators",
        "Participating in story discussions",
        "Sharing favorite moments"
      ],
      opportunities: [
        "Creator-fan interaction features",
        "Story discussion communities",
        "Social sharing optimization"
      ]
    },
    {
      stage: "Advocacy",
      description: "Users become platform ambassadors",
      touchpoints: [
        "Recommending stories to friends",
        "Supporting creators financially",
        "Creating content themselves"
      ],
      opportunities: [
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
  primaryPersona: {
    name: "Maya Samuels",
    age: 26,
    location: "Austin, TX",
    occupation: "Marketing Coordinator",
    image: "/lovable-uploads/d5de6ddf-336f-45cb-84e5-4cb556419e53.png",
    bio: "Maya is a young professional who loves consuming diverse digital content during her commute and free time. She's particularly interested in stories that offer different perspectives and allow her to engage actively rather than passively consume content.",
    goals: [
      "Discover authentic stories from diverse creators",
      "Have agency in how stories unfold and develop",
      "Connect with like-minded community members",
      "Support creators whose work resonates with her"
    ],
    frustrations: [
      "Difficulty finding diverse content on mainstream platforms",
      "Passive consumption experiences that don't engage her",
      "Algorithmic feeds that don't match her interests",
      "Limited ways to support emerging creators"
    ],
    motivations: [
      "Seeking authentic representation in digital media",
      "Wanting to participate in story progression",
      "Building connections with creators and other readers",
      "Discovering new perspectives and voices"
    ],
    techComfort: "High - comfortable with mobile apps and digital platforms",
    deviceUsage: "Primarily mobile (iPhone), some tablet use for longer content"
  },
  secondaryPersona: {
    name: "Jordan Rivera",
    age: 29,
    location: "Los Angeles, CA",
    occupation: "Freelance Writer & Content Creator",
    bio: "Jordan is an emerging storyteller looking to build an audience and create sustainable income from their creative work. They're interested in experimenting with interactive formats but need user-friendly tools that don't require technical expertise.",
    goals: [
      "Build a sustainable audience for their stories",
      "Experiment with interactive storytelling formats",
      "Generate income from creative work",
      "Connect directly with readers and fans"
    ],
    frustrations: [
      "Technical barriers to creating interactive content",
      "Difficulty monetizing work on existing platforms",
      "Limited audience discovery opportunities",
      "Lack of direct connection with readers"
    ]
  }
};

export const wristbandChallengesData = {
  title: "Challenges & Learnings",
  introduction: "Working on a client prototype that never made it to market presented unique challenges around balancing innovation with practical constraints, while extracting valuable insights from an unrealized vision.",
  challenges: [
    {
      title: "Balancing Creative Vision with Market Reality",
      description: "The client had ambitious ideas about revolutionizing storytelling, but we needed to ground these concepts in user research and technical feasibility. Finding the sweet spot between innovation and practicality required constant negotiation and prototype iteration.",
      learnings: "Learned the importance of setting realistic expectations early and using rapid prototyping to test big ideas before committing to full development. Client education became as important as the design work itself."
    },
    {
      title: "Building for Diversity Without Tokenism",
      description: "Creating authentic representation in characters and stories meant going beyond surface-level diversity. We had to develop processes for working with diverse creators and ensuring their voices weren't diluted through our design process.",
      learnings: "Discovered that authentic diversity requires involving diverse voices from the beginning, not just at the content creation stage. Design systems and workflows need to support, not constrain, cultural authenticity."
    },
    {
      title: "Designing for Unrealized Business Models",
      description: "Without clear monetization strategies or launch timelines, we had to design flexible systems that could adapt to different business models. This meant creating scalable frameworks without knowing exactly how they'd be implemented.",
      learnings: "Flexibility in design architecture pays off when business priorities shift. Building modular systems and maintaining clear documentation became crucial for a project with an uncertain future."
    },
    {
      title: "Maintaining Team Motivation on Uncertain Projects",
      description: "As the project's commercial viability became questionable, keeping the team engaged and producing quality work required shifting focus from business outcomes to learning opportunities and portfolio development.",
      learnings: "Project success isn't always measured by launch metrics. The skills developed, relationships built, and concepts proven can be just as valuable as a live product."
    }
  ]
};
