import { ProjectType } from "../../../types/project";

export const getHealthAtHomeProject = (): ProjectType => {
  return {
    id: 18,
    slug: "health-at-home",
    title: "Health@Home",
    description:
      "A care booking web app: find a doctor, see the next open times, book a visit, and keep a family's appointments, kits, and care tasks in one place.",
    fullDescription:
      "Health@Home brings the front desk, the schedule board, and the doctor to wherever the patient already is. I designed and built it around one idea: show bookable times first, so getting care starts with a tap instead of a phone call.",
    image: "/images/health-at-home/home.webp",
    category: "Healthcare · Web app",
    tags: ["Healthcare", "Booking", "Product Design", "React", "Design System"],
    role: "Product Designer & Developer",
    duration: "2022",
    teamSize: "Solo",
    year: "2022",
    challenge:
      "Booking care usually starts with a search, a list of names, and a phone call to learn who is free. Most care sites treat availability as a detail buried inside each provider card, behind a homepage built from generic healthcare parts.",
    process: [
      "Mapped the product into routes for finding care, virtual visits, test kits, insurance, and a personal health hub, and built them in React.",
      "Reviewed an early build screen by screen and listed the gaps: no primary booking action above the fold, availability hidden inside search results, and a stock trust section.",
      "Set the direction, House Call: warm paper, one load-bearing blue for actions and bookable times, Bricolage Grotesque for display and Figtree for everything else.",
      "Made the next available visits the homepage's signature and carried the chosen service and time into booking.",
      "Designed every route and documented the screens and their states in Figma.",
    ],
    deliverables: [
      "Homepage with a next-available board of tappable visit times",
      "Find care with filters, ratings, prices, and open times on every result",
      "Booking with review, validation, a confirmation, and a calendar download",
      "My health hub for a family: to-dos, upcoming care, messages, and results",
      "Test kits, insurance, health survey, and Well Guide flows",
      "Care Concierge panel with guided answers",
      "Figma file of the core screens, desktop and mobile",
    ],
    images: [
      "/images/health-at-home/home.webp",
      "/images/health-at-home/find-care.webp",
      "/images/health-at-home/book.webp",
      "/images/health-at-home/my-health.webp",
      "/images/health-at-home/test-kits.webp",
      "/images/health-at-home/concierge.webp",
    ],
    visuals: [
      {
        src: "/images/health-at-home/home.webp",
        label: "Home",
        note: "The next open video and in-person visits sit right under the search, like a departures board. Tapping a time starts booking with that doctor and slot chosen.",
      },
      {
        src: "/images/health-at-home/find-care.webp",
        label: "Find care",
        note: "Every result shows the price and the next open times, so choosing a doctor and a time is one decision instead of two. Sample providers.",
      },
      {
        src: "/images/health-at-home/book.webp",
        label: "Book an appointment",
        note: "The doctor's details, hours, and education stay on screen while the patient picks a time and reviews before confirming.",
      },
      {
        src: "/images/health-at-home/my-health.webp",
        label: "My health",
        note: "One hub per family member: overdue tasks first, then upcoming care, messages, and lab results.",
      },
      {
        src: "/images/health-at-home/test-kits.webp",
        label: "At-home test kits",
        note: "Recommended screenings shown as kits that come to the door, each with its own details and order flow.",
      },
      {
        src: "/images/health-at-home/concierge.webp",
        label: "Care Concierge",
        note: "A side panel with guided answers about services, coverage, and booking. It says plainly that it is not medical advice and points to 911 for emergencies.",
      },
    ],
    conclusion: {
      impact:
        "The app is live as a portfolio demo with sample doctors, prices, and family records. It books nothing real and has no users, so there are no outcomes to report.",
      learnings:
        "Putting availability first changed the order of the whole product. Once the time is the first thing a patient sees, search, booking, and the hub all become ways to keep that choice intact.",
      nextSteps:
        "Test the next-available board against a plain search with people booking real care, and decide what the concierge should and should not answer.",
    },
    techStack: ["React", "React Router", "Sass", "React Hook Form", "Jest"],
    keyAchievements: [
      "Made bookable times the signature of the homepage instead of a detail inside search",
      "Carried the chosen service, doctor, and time from the homepage into booking",
      "Designed 26 desktop and 6 mobile screens with their states in Figma",
    ],
    problemSolved:
      "Lets someone see who can see them and when before they commit to anything, then book without starting over.",
    solution:
      "Show bookable times first, keep cost and coverage next to the booking decision, and give a family one place for everything that happens after.",
    technicalHighlights: [
      "Availability engine that turns provider hours into tappable time slots",
      "Booking form with validation and a downloadable calendar event",
      "Design tokens for color, type, radius, motion, and reduced-motion handling",
    ],
    methodologies: ["Product Critique", "Interaction Design", "Design Systems", "Accessibility Checks"],
    summary:
      "Health@Home is a care booking web app I designed and built around showing bookable times first: find a doctor, pick an open slot, book, and manage a family's care in one hub.",
    date: "2022-06-22",
    liveUrl: "https://bs-hh.netlify.app",
  };
};
