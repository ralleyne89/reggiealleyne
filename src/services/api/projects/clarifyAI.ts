import { ProjectType } from '../../../types/project';

export const getClarifyAIProject = (): ProjectType => {
  return {
    id: 11,
    slug: 'clarify-ai',
    title: 'Clarify AI – Healthcare Claims RAG Copilot',
    description: 'A "Glass Box" RAG system that helps healthcare claims adjusters verify coverage 10x faster with full citation transparency and compliance auditability.',
    role: 'AI Product Designer / Solutions Architect',
    year: '2025',
    duration: 'December 2025',
    teamSize: '1',
    tags: ['Healthcare AI', 'RAG Systems', 'Enterprise UX', 'Human-in-the-Loop', 'Claims Processing', 'Compliance', 'Citation Design', 'Figma'],
    image: '/images/clarify-ai-banner.png',
    summary: 'Clarify AI is a Retrieval-Augmented Generation (RAG) workspace designed for healthcare claims adjusters. The Three-Pane Console provides immediate visibility of member context, AI-synthesized coverage answers, and source documentation—all with interactive citations that link every AI assertion to verified policy text.',
    problem: 'Senior Claims Adjusters spend up to 40% of their day manually cross-referencing member claim history against 100+ page "Evidence of Coverage" PDFs. Standard chatbots fail here because hallucinations create legal liability. The industry needs AI that shows its work.',
    solution: 'I designed a "Glass Box" AI interface with a Three-Pane Console: Context (Left) shows member status, Synthesis (Center) provides AI Copilot responses in plain English, and Evidence (Right) displays the source PDF with synchronized highlighting. The Interactive Citation System hyperlinks every AI assertion to source text, transforming the AI from an Oracle into a Librarian.',
    methodologies: ['Human-Centered Design (HCD)', 'Retrieval-Augmented Generation (RAG)', 'Human-in-the-Loop Design', 'Enterprise UX Patterns', 'WCAG Accessibility'],
    process: [
      'Conducted user research with claims adjusters and compliance officers to understand daily workflows and pain points.',
      'Defined two key personas: Jordan (Senior Claims Adjuster) focused on speed and accuracy, and Elena (Compliance Director) focused on auditability.',
      'Developed the "Glass Box" concept—AI recommendations must always cite sources that users can verify before acting.',
      'Designed the Three-Pane Console layout to minimize cognitive load and enable simultaneous context comparison.',
      'Created the Interactive Citation System with hover-to-highlight functionality linking AI responses to PDF source text.',
      'Established the Accessible Lavender visual theme balancing enterprise professionalism with WCAG compliance.'
    ],
    deliverables: [
      'Three-Pane Console Interface Design',
      'Interactive Citation System ("Citation Pills")',
      'Accessible Lavender Design System',
      'User Persona Documentation',
      'RAG Architecture Specification',
      'Compliance Audit Trail Framework'
    ],
    images: [],
    videoUrl: null,
    githubUrl: null,
    liveUrl: null,
    prototypeUrl: null,
    keyAchievements: [
      'Designed "Glass Box" AI interface that enables full verification of every AI recommendation before action',
      'Created Interactive Citation System where hovering [1] highlights exact source text in PDF Evidence pane',
      'Developed Three-Pane Console reducing cognitive load through simultaneous context, synthesis, and evidence views',
      'Established Human-in-the-Loop framework ensuring AI assists but humans make all claim decisions'
    ],
    technicalHighlights: [
      'Retrieval-Augmented Generation (RAG) architecture with semantic document chunking',
      'Interactive citation mapping between AI responses and PDF source locations',
      'Automatic jurisdiction detection for state-specific policy verification',
      'Deprecated document flagging for compliance safety',
      'Latency management with skeleton states during retrieval',
      'Prompt injection protection and safety guardrails'
    ]
  };
};
