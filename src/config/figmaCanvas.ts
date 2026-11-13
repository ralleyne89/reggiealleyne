import draftFiles from "./figmaCanvasDrafts.json";

/**
 * Frames exported from Reggie's own Figma files, one entry per case study
 * that has a file. Positions and sizes are the frames' real canvas
 * coordinates in Figma (px, y down); component pages were tightened where
 * template boilerplate left a gap. Images live in /public/images/figma-canvas.
 */
export type FigmaFrame = {
  /** Layer name as it appears in the file. */
  name: string;
  /** File stem under /images/figma-canvas/<slug>/ */
  file: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type FigmaPage = { name: string; frames: FigmaFrame[] };

export type FigmaFile = {
  /** Figma project the file lives in. */
  project: string;
  fileName: string;
  pages: FigmaPage[];
};

const f = (
  name: string,
  file: string,
  x: number,
  y: number,
  width: number,
  height: number,
): FigmaFrame => ({ name, file, x, y, width, height });

/** Team files entered by hand. */
const teamFiles: Record<string, FigmaFile> = {
  "tutor-d": {
    project: "Portfolio Projects",
    fileName: "TutorD Scholars",
    pages: [
      {
        name: "Wireframes",
        frames: [
          f("Desktop / Landing Page", "wireframes-landing", -3855, -1969, 1440, 4649),
          f("Desktop / Lesson Planner", "wireframes-lesson-planner", -2287, -1969, 1440, 2002),
          f("Desktop / Dashboard", "wireframes-dashboard", -2287, 161, 1440, 1540),
        ],
      },
      {
        name: "High Fidelity",
        frames: [
          f("Desktop / Landing Page", "hifi-landing", -3855, -1969, 1440, 5770),
          f("Desktop / Lesson Planner", "hifi-lesson-planner", -2287, -1969, 1440, 2741),
          f("Desktop / Dashboard", "hifi-dashboard", -2287, 866, 1440, 2324),
        ],
      },
      {
        name: "Components",
        frames: [
          f("Nav bar", "components-nav-bar", 923, -542, 1440, 88),
          f("Footer", "components-footer", 923, -394, 1440, 437),
          f("Container", "components-container", 923, 250, 1440, 2166),
          f("Input", "components-input", 145, -394, 618, 276),
          f("Button", "components-button", 537, 250, 226, 364),
        ],
      },
    ],
  },
  "symptom-checkr": {
    project: "Portfolio Projects",
    fileName: "Symptom Checker",
    pages: [
      {
        name: "Wireframes",
        frames: [
          f("Desktop / Home", "wireframes-home", -3854, -1968, 1440, 2472),
          f("Desktop / My Reports - empty", "wireframes-reports-empty", -2286, -1968, 1440, 879),
          f("Desktop / My Reports - saved reports", "wireframes-reports-saved", -718, -1968, 1440, 1561),
          f("Desktop / Contact", "wireframes-contact", -2286, -961, 1440, 1395),
          f("Mobile / Home", "wireframes-m-home", 1398, -1968, 393, 2469),
          f("Mobile / Dashboard", "wireframes-m-dashboard", 1911, -1968, 393, 2200),
          f("Mobile / Manage Health", "wireframes-m-manage-health", 2424, -1968, 393, 2109),
          f("Mobile / Test Kits", "wireframes-m-test-kits", 2937, -1968, 393, 2937),
          f("Mobile / Services", "wireframes-m-services", 3450, -1968, 393, 2011),
        ],
      },
      {
        name: "Prototype",
        frames: [
          f("Desktop / Home", "prototype-home", -3854, -1968, 1440, 2941),
          f("Desktop / My Reports - empty", "prototype-reports-empty", -2286, -1968, 1440, 1063),
          f("Desktop / My Reports - saved", "prototype-reports-saved", -718, -1968, 1440, 1506),
          f("Desktop / Contact", "prototype-contact", -2286, -721, 1440, 1395),
        ],
      },
      {
        name: "Components",
        frames: [
          f("Navbar", "components-navbar", 0, 0, 1440, 88),
          f("Footer", "components-footer", 0, 200, 1440, 460),
          f("Inputs", "components-inputs", 0, 780, 963, 626),
          f("Button", "components-button", 1083, 780, 226, 364),
        ],
      },
    ],
  },
};

/**
 * Litmus AI, Motorflow and Staybooked follow the ten-page file structure.
 * Their frames were cut from page exports by script, which wrote
 * figmaCanvasDrafts.json.
 */
export const figmaFiles: Record<string, FigmaFile> = {
  ...teamFiles,
  ...(draftFiles as Record<string, FigmaFile>),
};

export const getFigmaFile = (slug?: string) => (slug ? figmaFiles[slug] : undefined);

export const figmaFrameSrc = (slug: string, frame: FigmaFrame) =>
  `/images/figma-canvas/${slug}/${frame.file}.webp`;
