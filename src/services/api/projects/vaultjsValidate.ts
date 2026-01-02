import { ProjectType } from '../../../types/project';

export const getVaultJSValidateProject = (): ProjectType => {
  return {
    id: 11,
    slug: 'vaultjs-validate',
    title: 'Vault.js Validate – Enterprise Security Visualization & AI Tool',
    description: 'A high-fidelity security monitoring dashboard that bridges the gap between raw security data and user-centric design with an AI-powered remediation engine.',
    role: 'UI/UX Designer & Frontend Developer',
    year: '2026',
    duration: '2 Weeks (Sprint)',
    teamSize: '1',
    tags: ['Enterprise Security', 'AI Integration', 'Data Visualization', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI API'],
    image: '/images/vaultjs-banner.jpg',
    summary: 'Vault.js Validate is a high-fidelity security monitoring dashboard designed to transform complex security data into actionable insights. The project bridges the gap between raw security data and user-centric design by introducing an AI-powered remediation engine that not only identifies vulnerabilities but explains them in plain English and generates code fixes automatically.',
    problem: 'Enterprise security teams are drowning in data. Traditional compliance dashboards are often cluttered, difficult to navigate, and fail to provide actionable insights. Security analysts need a tool that not only visualizes the invisible network of third-party scripts but also helps them remediate vulnerabilities instantly.',
    solution: 'I designed and built Vault.js Validate, a security monitoring dashboard that balances "Cyber-Security Brutalism" with the polish of a trusted enterprise product. The solution features real-time attack surface scanning, an AI-powered remediation engine, dynamic risk visualization, and comprehensive compliance monitoring.',
    methodologies: ['Research & Discovery', 'Visual Identity Design', 'Rapid Prototyping', 'Direct-to-Code Development'],
    process: [
      'Analyzed existing security tools and identified "Alert Fatigue" as a common pain point where users are overwhelmed by warnings without clear paths to resolution.',
      'Developed a "Cyber-Security Brutalism" design language with JetBrains Mono for technical precision and a dark void navy color palette with neon green accents.',
      'Moved directly from low-fidelity sketches to code using React and Tailwind CSS to test the feel of animations and the satisfaction of the "Apply Fix" interaction.',
      'Built responsive, interactive prototype with complex data visualizations using Recharts for third-party vendor relationships and data leakage paths.'
    ],
    deliverables: [
      'Real-Time Attack Surface Scanning Interface',
      'AI-Powered Remediation Engine',
      'Dynamic Risk Visualization Dashboard',
      'Comprehensive Compliance Monitoring System',
      'Cyber-Security Aesthetic Design System'
    ],
    images: [
      '/images/vaultjs-banner.jpg',
    ],
    videoUrl: null,
    githubUrl: 'https://github.com/ralleyne89/secure-scan-dashboard',
    liveUrl: 'https://vaultvalidate.netlify.app',
    prototypeUrl: 'https://vaultvalidate.netlify.app',
    keyAchievements: [
      'Designed and built a fully functional security dashboard in a 2-week sprint',
      'Integrated OpenAI API for AI-powered code fix generation via Supabase Edge Functions',
      'Created "Cyber-Security Brutalism" design language balancing technical precision with enterprise polish',
      'Achieved 60fps animations and instant state updates for high-performance UI'
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
