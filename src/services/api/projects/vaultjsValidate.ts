import { ProjectType } from '../../../types/project';

export const getVaultJSValidateProject = (): ProjectType => {
  return {
    id: 11,
    slug: 'vaultjs-validate',
    title: 'Vault.js Validate – Enterprise Security Visualization & AI Tool',
    description: 'A security monitoring dashboard that turns third-party script risk into readable scans, risk visuals, and AI-generated code fixes.',
    role: 'UI/UX Designer & Frontend Developer',
    year: '2026',
    duration: '2 Weeks (Sprint)',
    teamSize: '1',
    tags: ['Enterprise Security', 'AI Integration', 'Data Visualization', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI API'],
    image: '/images/vaultjs-hero.png',
    summary: 'Vault.js Validate is a dashboard for reviewing third-party script risk. It pairs attack-surface scanning with plain-English vulnerability explanations, risk visualization, and an AI-assisted remediation flow.',
    problem: 'Security teams get flooded with warnings but still have to answer two practical questions: which third-party scripts create risk, and what should we fix first? Many compliance dashboards report status without making the next step clear.',
    solution: 'I designed and built Vault.js Validate around a security analyst\'s next action: scan the attack surface, see vendor relationships, read the risk in plain English, and apply or review an AI-generated fix.',
    methodologies: ['Research & Discovery', 'Visual Identity Design', 'Rapid Prototyping', 'Direct-to-Code Development'],
    process: [
      'Reviewed existing security tools and treated alert fatigue as the core UX problem: too many warnings, too few clear paths to resolution.',
      'Developed a "Cyber-Security Brutalism" design language with JetBrains Mono for technical precision and a dark void navy color palette with neon green accents.',
      'Moved from low-fidelity sketches to React and Tailwind CSS so I could test animation feel and the "Apply Fix" interaction in the browser.',
      'Built a responsive prototype with Recharts views for third-party vendor relationships and data leakage paths.'
    ],
    deliverables: [
      'Real-Time Attack Surface Scanning Interface',
      'AI-Powered Remediation Engine',
      'Dynamic Risk Visualization Dashboard',
      'Compliance Monitoring Views',
      'Cyber-Security Visual System'
    ],
    images: [
      '/images/vaultjs-hero.png',
      '/images/vaultjs-dashboard.png',
      '/images/vaultjs-analysis.png',
    ],
    videoUrl: null,
    githubUrl: 'https://github.com/ralleyne89/secure-scan-dashboard',
    liveUrl: 'https://vaultvalidate.netlify.app',
    prototypeUrl: null,
    keyAchievements: [
      'Designed and built a working security dashboard in a 2-week sprint',
      'Connected OpenAI code-fix generation through Supabase Edge Functions',
      'Created "Cyber-Security Brutalism" design language balancing technical precision with enterprise polish',
      'Kept animations and state updates fast enough for a dense monitoring interface'
    ],
    technicalHighlights: [
      'React 18 with TypeScript and Vite for modern frontend development',
      'Tailwind CSS v3 with Shadcn UI for consistent styling',
      'React Query for efficient state management',
      'Supabase PostgreSQL and Edge Functions for backend',
      'OpenAI API integration for AI remediation engine',
      'Recharts for dynamic data visualization',
      'Framer Motion for smooth animations'
    ]
  };
};
