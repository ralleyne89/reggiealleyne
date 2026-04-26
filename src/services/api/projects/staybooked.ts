import { ProjectType } from "../../../types/project";

export const getStaybookedProject = (): ProjectType => {
  return {
    id: 13,
    slug: "staybooked",
    title: "Staybooked - Booking Workflow Prototype",
    description:
      "A service-booking product prototype for managing availability, intake, reservations, confirmations, and post-booking follow-up in one clear workflow.",
    fullDescription:
      "Staybooked is a review-ready booking workflow concept for small service teams that need a more reliable way to turn customer interest into confirmed appointments. The prototype focuses on the operational moments that often fall between tools: availability, intake, reservation status, confirmation, and follow-up.",
    image: "/images/staybooked-preview.svg",
    category: "Product Design",
    tags: [
      "React",
      "Booking UX",
      "Service Design",
      "Workflow Design",
      "Product Strategy",
    ],
    role: "Product Designer & Frontend Prototyper",
    duration: "Concept sprint",
    year: "2026",
    teamSize: "1",
    summary:
      "A service-booking prototype focused on helping teams manage availability, intake, reservations, confirmation, and post-booking follow-up without scattering the workflow across messages, calendars, and manual reminders.",
    problem:
      "Small service teams often stitch bookings together across messages, calendars, spreadsheets, and manual follow-ups. That makes availability hard to trust, customer context easy to lose, and reservation status unclear for both the team and the person trying to book.",
    challenge:
      "The core design challenge was making a booking flow feel operationally useful without turning it into a heavy scheduling platform. The experience needed to clarify the next action at each step while keeping the workflow approachable for service teams that move quickly.",
    solution:
      "Staybooked brings the booking journey into one focused flow: visible availability, structured intake, clear reservation states, confirmation touchpoints, and follow-up prompts. The prototype frames the product around service-team decisions rather than generic calendar slots.",
    problemSolved:
      "The concept reduces ambiguity around who is booked, what information is still needed, and what should happen after a reservation is confirmed.",
    methodologies: [
      "Service Blueprinting",
      "Workflow Mapping",
      "State Modeling",
      "Responsive Prototyping",
      "Product Framing",
    ],
    process: [
      "Mapped the end-to-end booking journey from first customer intent through availability review, intake, confirmation, and follow-up.",
      "Defined the core state model around open availability, pending intake, confirmed reservations, and follow-up tasks so the interface could make status visible at a glance.",
      "Designed the primary screens around the decisions a service team needs to make: what time is available, what details are missing, and what communication should happen next.",
      "Prototyped the responsive card and detail experience so the project could be reviewed in the portfolio before a live demo or full case study exists.",
      "Identified the next integration points for calendar sync, payment handoff, notifications, and real customer data once the concept moves beyond prototype review.",
    ],
    deliverables: [
      "Booking Flow Map",
      "Availability and Intake States",
      "Reservation Detail Experience",
      "Confirmation and Follow-Up Logic",
      "Review-Ready UI Prototype",
    ],
    images: ["/images/staybooked-preview.svg"],
    videoUrl: null,
    githubUrl: null,
    liveUrl: null,
    prototypeUrl: null,
    keyAchievements: [
      "Translated an ambiguous service-booking idea into a route-backed portfolio project with a clear use case.",
      "Established the project structure needed for future live demo, asset, and case-study expansion.",
      "Kept the prototype honest by avoiding fabricated metrics, source links, or deployment links before they exist.",
    ],
    technicalHighlights: [
      "Route-backed project data using the existing predefined project registry.",
      "Optional external-link handling so the project can be reviewed without fake live, prototype, or source URLs.",
      "Responsive Playground and detail-page rendering through the shared portfolio components.",
      "Future-ready integration points for calendar sync, payment handoff, notifications, and customer records.",
    ],
    conclusion: {
      impact:
        "Staybooked now has enough structure to be reviewed as a product concept instead of a static Playground tile.",
      learnings:
        "The strongest booking experiences are not just calendars; they are status systems that help teams understand what is available, what is confirmed, and what still needs attention.",
      nextSteps:
        "Replace placeholder visuals with product screens, connect a real live prototype URL, validate the booking states with service-team workflows, and explore calendar, payment, and notification integrations.",
    },
  };
};
