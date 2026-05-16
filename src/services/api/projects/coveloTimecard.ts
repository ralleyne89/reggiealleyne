import { ProjectType } from "../../../types/project";

export const getCoveloTimecardProject = (): ProjectType => {
  return {
    id: 14,
    slug: "covelo-timecard-system",
    title: "Covelo Timecard System",
    description:
      "A client workforce portal for Covelo that brings staff timecards, approver queues, compliance exceptions, assignments, and export workflows into one role-aware product.",
    fullDescription:
      "Covelo needed a focused web portal for daily staffing operations: staff clocking time, approvers reviewing submitted weeks, and operations teams clearing exceptions before payroll and billing exports. I designed and built the frontend for that workflow as a solo client project, pairing role-specific UX with the API and auth contracts needed for a production path.",
    image: "/images/covelo/login-desktop.png",
    category: "Workforce Operations",
    tags: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "RBAC",
      "Workforce Ops",
    ],
    role: "UX/UI Designer & Frontend Developer",
    duration: "Completed March 2026",
    year: "2026",
    teamSize: "Solo project",
    summary:
      "A solo client project for Covelo: a unified timecard and assignment-compliance portal with Staff, Approver, and Ops/Admin workspaces.",
    problem:
      "Timecards, assignment coverage, exception handling, and export prep can easily split across spreadsheets, email, and disconnected tools. For Covelo, the risk was not just slower admin work. Staff, approvers, and ops users each needed different context and permissions around the same time record.",
    challenge:
      "The product needed to stay simple for daily use while carrying heavier operational requirements: invite-only access, role boundaries, district-scoped data, audit history, and APIs that could support payroll and billing handoffs.",
    solution:
      "I designed the portal around three workspaces. Staff see shift context, clock status, and timesheets. Approvers get a submitted queue with review actions. Ops/Admin users triage exceptions, manage people and assignments, and prepare exports from the same operating model.",
    problemSolved:
      "The client received a deployed MVP that makes the core use case legible in one place: submit time, review it, resolve exceptions, and keep the next export path visible without mixing responsibilities across roles.",
    methodologies: [
      "Client Workflow Mapping",
      "Role-Based Workflow Mapping",
      "Compliance UX",
      "Frontend Systems Design",
      "Responsive Product UI",
    ],
    process: [
      "Started with the real operating roles and mapped what each person needed to see before touching a time record.",
      "Designed the Staff flow around today's assignment, clock status, weekly timesheets, edited entries, and attestations.",
      "Built the Approver inbox around fast scanning: submitted weeks, worked hours, site context, worker names, and review actions.",
      "Created Ops/Admin surfaces for exception triage, member management, assignments, settings, and export-oriented operations work.",
      "Kept the frontend tied to typed API and domain contracts so timecards, approvals, exceptions, and exports could move through consistent data shapes.",
    ],
    deliverables: [
      "Deployed Covelo demo site",
      "Staff dashboard, clock module, and timesheet flows",
      "Approver queue and timesheet review workflow",
      "Ops/Admin exception queue and management screens",
      "Assignment, member, and settings surfaces",
      "Role-aware frontend architecture tied to API contracts",
    ],
    images: [
      "/images/covelo/login-desktop.png",
      "/images/covelo/staff-dashboard-desktop.png",
      "/images/covelo/approver-inbox-desktop.png",
      "/images/covelo/ops-exceptions-desktop.png",
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: "https://covelo.netlify.app",
    figmaUrl: null,
    prototypeUrl: null,
    keyAchievements: [
      "Completed the solo client project in March 2026 as UX/UI Designer and Frontend Developer.",
      "Created one role-aware portal model for Staff, Approver, and Ops/Admin users instead of splitting the workflow across separate tools.",
      "Built a responsive frontend that keeps daily actions clear while still supporting RBAC, audit history, and tenant-aware data boundaries.",
      "Connected the interface to typed contract patterns for timecards, approvals, exceptions, assignments, and export workflows.",
    ],
    technicalHighlights: [
      "Next.js, React, TypeScript, Tailwind CSS, and Lucide Icons for the web experience.",
      "Role-based routing and layout patterns for Staff, Approver, and Ops/Admin workspaces.",
      "Postgres-oriented contracts and shared domain models for workforce operations data.",
      "OIDC/JWKS auth model, RBAC, invite-only access, and district-scoped session handling.",
      "Versioned REST API patterns for timecards, approvals, exceptions, assignments, and exports.",
      "Netlify deployment for the client-facing demo.",
    ],
    conclusion: {
      impact:
        "By the end of the engagement, Covelo had a working web portal and deployed demo that turned the timecard workflow into a product people could inspect role by role.",
      learnings:
        "The strongest UX decision was to keep one operational record moving through different role views instead of making each team rebuild context from scratch.",
      nextSteps:
        "Next work would focus on production data integrations, payroll and billing provider connections, and additional QA around RBAC, exports, and exception edge cases.",
    },
  };
};
