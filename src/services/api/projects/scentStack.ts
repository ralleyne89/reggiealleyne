import { ProjectType } from '../../../types/project';

export const getScentStackProject = (): ProjectType => {
  return {
    id: 12,
    slug: 'scent-stack',
    title: 'ScentStack – AI-Powered Fragrance Discovery Platform',
    description: '1732+ fragrance dupes with AI-powered scent matching, layering recommendations, and dream scent discovery. Saving users 90% on luxury fragrances.',
    role: 'Solo Founder & Product Designer',
    year: '2026',
    duration: '3 weeks',
    teamSize: '1',
    tags: ['AI/ML', 'Consumer Product', 'React', 'Personal Project', 'Computer Vision', 'GPT-4', 'UX Design'],
    image: '/images/scentstack-hero.png',
    summary: 'ScentStack is an AI-powered fragrance discovery platform that democratizes luxury scents through a database of 1732+ affordable dupes, computer vision-powered layering suggestions, and natural language "dream scent" matching. Built as a solo passion project by a fragrance collector.',
    problem: 'The fragrance industry operates on a fundamental inequity: identical scent formulas command wildly different prices based on branding alone. Meanwhile, the art of fragrance layering remains inaccessible to beginners, and the gap between imagining your perfect scent and actually finding it has no bridge.',
    solution: 'ScentStack addresses these gaps through three integrated features: (1) Discover—a comprehensive dupe database showing luxury fragrances alongside affordable alternatives with 90% average savings, (2) Layering Lab—computer vision technology that analyzes your existing fragrances and suggests complementary combinations, and (3) Dream Lab—GPT-4 powered natural language processing that translates scent descriptions into concrete fragrance recommendations.',
    methodologies: ['Human-Centered Design', 'Solo Product Development', 'Prompt Engineering', 'Computer Vision Integration', 'Rapid Prototyping'],
    process: [
      'Identified core user pain points through personal experience as a fragrance collector and community research.',
      'Designed and built comprehensive dupe database covering 148+ designer brands with price comparison data.',
      'Integrated GPT-4 for natural language scent matching, enabling users to describe their dream scent in plain English.',
      'Implemented computer vision pipeline for Layering Lab, allowing photo-based fragrance analysis.',
      'Created editorial visual design system with purple accent and Bento-style card layouts.',
      'Deployed scalable React application with mobile-first responsive design.'
    ],
    deliverables: [
      'Complete Web Application',
      'Fragrance Dupe Database (1732+ dupes)',
      'Dream Lab AI Feature (GPT-4 powered)',
      'Layering Lab (Computer Vision)',
      'A-Z Brand Browser (148+ brands)',
      'Price Comparison System'
    ],
    images: [
      '/images/scentstack-hero.png',
      '/images/scentstack-dupes.png',
      '/images/scentstack-dreamlab.png',
      '/images/scentstack-layering.png'
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: 'https://scentstack.lovable.app',
    prototypeUrl: 'https://scentstack.lovable.app',
    keyAchievements: [
      'Built complete consumer product as solo founder in just 3 weeks',
      'Curated database of 1732+ fragrance dupes with 90% average savings for users',
      'Integrated GPT-4 for natural language scent matching (Dream Lab feature)',
      'Implemented computer vision for photo-based fragrance layering recommendations',
      'Covered 148+ designer brands in comprehensive A-Z browser'
    ],
    technicalHighlights: [
      'GPT-4 powered natural language processing for dream scent descriptions',
      'Computer vision pipeline for analyzing fragrance bottles from photos',
      'React + Tailwind CSS with editorial design system',
      'Bento-style card layouts with purple accent theming',
      'Mobile-first responsive design for on-the-go fragrance discovery',
      'Comprehensive search and filter functionality across 1700+ entries'
    ]
  };
};
