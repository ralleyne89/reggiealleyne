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

export const figmaFiles: Record<string, FigmaFile> = {
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
  staybooked: {
    project: "StayBooked AI",
    fileName: "Website Desktop",
    pages: [
      {
        name: "Staybooked Homepage",
        frames: [
          f("Staybooked Homepage / Desktop 1440", "homepage-desktop-1440", 80, 80, 1440, 3580),
          f("Staybooked Homepage / Mobile 390", "homepage-mobile-390", 1600, 80, 390, 2860),
        ],
      },
      {
        name: "Staybooked Editor Variations",
        frames: [
          f("Editor V1 / Left Rail Studio", "editor-v1-left-rail-studio", 0, 0, 1440, 1024),
          f("Editor V2 / Command Bar Inspector", "editor-v2-command-bar-inspector", 1600, 0, 1440, 1024),
          f("Editor V3 / Freeform Canvas", "editor-v3-freeform-canvas", 3200, 0, 1440, 1024),
          f("Editor V4 / Decision Cockpit", "editor-v4-decision-cockpit", 4800, 0, 1440, 1024),
          f("Editor V5 / Editorial References", "editor-v5-editorial-references", 6400, 0, 1440, 1024),
          f("Room optimizer", "editor-room-optimizer", 0, 1632, 1440, 1024),
        ],
      },
      {
        name: "Staybooked Components",
        frames: [f("Component overview", "components-page", 80, 80, 1160, 1172)],
      },
    ],
  },
};

export const getFigmaFile = (slug?: string) => (slug ? figmaFiles[slug] : undefined);

export const figmaFrameSrc = (slug: string, frame: FigmaFrame) =>
  `/images/figma-canvas/${slug}/${frame.file}.webp`;
