import { ProjectType } from '../../../types/project';

export const getCllctveProject = (): ProjectType => {
  return {
    id: 1,
    slug: "cllctve-platform",
    title: "CLLCTVE Platform",
    description:
      "A creator portfolio platform, rebuilt in 2026: publish your work, find other creators, and start a collaboration. The original product is where I worked as designer and frontend engineer.",
    fullDescription:
      "CLLCTVE helps creators publish work, find other creators, and receive collaboration requests. I worked on the original product as UX/UI designer and frontend engineer before the company closed. In 2026 I audited the old React app and started rebuilding it as a real product, with accounts, saved portfolios, and a customizable portfolio and work feed.",
    image: "/images/cllctve/v2/home.webp",
    category: "Creator platform · Rebuild in progress",
    tags: ["Platform", "Creative", "Portfolio", "Product Design", "React", "Supabase"],
    role: "Product Designer & Developer",
    duration: "Rebuild started November 2026",
    year: "2022",
    challenge:
      "The old app looked finished and was not. Login, signup, the waitlist, and connection requests were simulations, the creator records were mock data, and the mobile navigation disappeared. The rebuild had to keep the brand people remembered and replace everything underneath it.",
    process: [
      "Audited the existing app and recorded 15 findings, separating what the code said from what happened in the browser.",
      "Wrote the brief, the product requirements with 24 must-have acceptance criteria, and a screen map covering every state.",
      "Pulled the original pink, orange, and charcoal from the old site's stylesheet and set the direction: the work comes first, the workspace stays quiet.",
      "Rebuilt the foundation, the homepage, and the account flows, then the private portfolio workspace, each checked at phone and desktop widths.",
      "Researched portfolio builders and built an interactive demo of a customizable portfolio and a work feed before committing it to the backend.",
    ],
    deliverables: [
      "Homepage and brand system rebuilt on the original palette",
      "Sign up, log in, email confirmation, and password recovery",
      "Portfolio workspace: profile, projects, images, ordering, private preview",
      "Customizable portfolio demo: three layouts, canvas, accent, type, and image corners",
      "Work feed and project detail demo with likes and comments",
      "Figma file from research to core screens",
    ],
    images: [
      "/images/cllctve/v2/home.webp",
      "/images/cllctve/v2/portfolio.webp",
      "/images/cllctve/v2/customize.webp",
      "/images/cllctve/v2/feed.webp",
      "/images/cllctve/v2/project-detail.webp",
      "/images/cllctve/v2/workspace.webp",
    ],
    visuals: [
      {
        src: "/images/cllctve/v2/home.webp",
        label: "Home",
        note: "One statement, one action, and a stack of work beside it. No feature grid and no borrowed social proof.",
      },
      {
        src: "/images/cllctve/v2/portfolio.webp",
        label: "My portfolio",
        note: "A short bio, then the work. The portfolio sits on its own canvas inside the charcoal workspace. Sample content.",
      },
      {
        src: "/images/cllctve/v2/customize.webp",
        label: "Customize",
        note: "Guided choices instead of a page builder: three layouts, light or dark canvas, accent, heading type, and image corners, previewed on the real portfolio.",
      },
      {
        src: "/images/cllctve/v2/feed.webp",
        label: "Explore work",
        note: "A chronological feed with discipline filters and search. Nothing is ranked by an algorithm. Sample creators.",
      },
      {
        src: "/images/cllctve/v2/project-detail.webp",
        label: "Project detail",
        note: "The image leads, with the creator, status, likes, and comments attached to the project.",
      },
      {
        src: "/images/cllctve/v2/workspace.webp",
        label: "Portfolio workspace",
        note: "The working view behind the portfolio: draft projects, order, and a private preview before anything is public.",
      },
    ],
    conclusion: {
      impact:
        "The rebuilt homepage and account screens are on a public preview, the portfolio workspace is built and tested against a staging database, and the customizable portfolio and feed run as an interactive demo with sample content. It has not launched to real users.",
      learnings:
        "Rebuilding something I once shipped made the gap between a screen that looks done and a product that works very plain. Most of the design work was deciding what each state should honestly say.",
      nextSteps:
        "Finish hosted account setup, connect the portfolio and feed to the backend, then publishing, discovery, and collaboration requests.",
    },
    techStack: ["React 19", "Vite", "Supabase", "TanStack Query", "dnd-kit", "Vitest"],
    keyAchievements: [
      "Turned a simulated app into a specified product with 24 acceptance criteria",
      "Kept the original brand while replacing the whole foundation",
      "Shipped a customizable portfolio and feed demo that passes automated accessibility checks at 320 px",
    ],
    problemSolved:
      "Gives creators one place to publish work, be found, and be asked to collaborate, without pretending anything is saved or sent when it is not.",
    technicalHighlights: [
      "Supabase Auth, Postgres, and Storage behind feature adapters, with row-level access rules tested in SQL",
      "Drag-and-drop project ordering that also works by keyboard and touch",
      "Server-rendered homepage with a static fallback for the hero composition",
    ],
    methodologies: ["Product Audit", "Requirements", "Desk Research", "Interaction Design", "Design Systems", "Accessibility Testing"],
    summary:
      "CLLCTVE is a creator portfolio platform I first worked on as designer and frontend engineer. In 2026 I started rebuilding it as a real product: accounts, saved portfolios, and a customizable portfolio and work feed, on the original brand.",
    date: "2022-06-15",
    solution:
      "Make the work the first thing people see, keep the workspace behind it quiet and reliable, and give creators guided control over how their portfolio looks.",
    liveUrl: "https://cllctve-preview.netlify.app",
    prototypeUrl: "https://6af7c38a2ae4883ce8e00f61--cllctve-preview.netlify.app/portfolio",
  };
};
