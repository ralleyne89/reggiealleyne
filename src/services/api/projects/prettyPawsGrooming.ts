import { ProjectType } from "../../../types/project";

export const getPrettyPawsGroomingProject = (): ProjectType => {
  return {
    id: 15,
    slug: "pretty-paws-grooming",
    title: "Pretty Paws Grooming Website",
    description:
      "A public website for Pretty Paws Grooming in Little Rock, built around service discovery, local trust signals, and a request-based appointment flow.",
    fullDescription:
      "Pretty Paws Grooming needed a polished local-business site that helps pet owners compare services, check contact details, understand policies, and request an appointment without treating the request as a confirmed booking. The project pairs a premium pet-spa visual direction with practical proof: real media, service detail routes, phone and location access, policy pages, and Supabase-backed booking and contact submissions.",
    image: "/images/pretty-paws/hero-poster.png",
    category: "Local Business Website",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Netlify",
    ],
    techStack: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "GSAP",
      "Supabase",
      "Netlify",
    ],
    role: "UX/UI Designer & Frontend Developer",
    duration: "2 weeks",
    year: "2025",
    teamSize: "1",
    summary:
      "A route-backed grooming salon site with service categories, service detail pages, a booking request form, contact capture, policies, local media, and a live Netlify deployment.",
    problem:
      "Pet owners comparing local groomers need fast answers before they trust a salon: what services cost, how to book, where the business is, when it is open, and whether the care will feel careful enough for their pet.",
    challenge:
      "The site had to feel premium without drifting into fake luxury claims. It also needed to keep booking language honest because appointment requests are pending until the salon follows up.",
    solution:
      "The experience centers the homepage, service detail pages, and booking request flow. Static service data keeps the launch simple, local media makes the salon feel real, and Supabase handles public booking and contact submissions behind clear form validation.",
    problemSolved:
      "The project turns a scattered local-business web presence into one inspectable path: review services, open a specific service page, request an appointment, or contact the salon directly.",
    methodologies: [
      "Local Business UX",
      "Responsive Web Design",
      "Service IA",
      "Trust and Conversion Copy",
      "Frontend Implementation",
    ],
    process: [
      "Started with the details a customer would look for first: where the salon is, how to reach them, when they are open, and which grooming services they offer.",
      "Shaped the main path around how someone would actually browse: skim services on the homepage, open the service they care about, then send a booking request with that service already selected.",
      "Built the public routes for services, booking, policies, store pages, product details, checkout status, and a simple fallback page.",
      "Made the booking flow clear about what happens next. A request gets saved for follow-up; it does not pretend the appointment is instantly confirmed.",
      "Used the salon's local images, poster frame, and video asset so the site feels tied to the real business instead of leaning on stock-looking media.",
    ],
    deliverables: [
      "Public salon homepage",
      "Service category and detail routes",
      "Booking request form",
      "Contact form and business details",
      "Policies page",
      "Local media system",
      "Netlify SPA deployment configuration",
    ],
    images: [
      "/images/pretty-paws/interface/demo-homepage-20260528.jpg",
      "/images/pretty-paws/interface/demo-services-20260528.jpg",
      "/images/pretty-paws/interface/demo-service-detail-20260528.jpg",
      "/images/pretty-paws/interface/demo-booking-request-20260528.jpg",
      "/images/pretty-paws/interface/demo-policies-20260528.jpg",
      "/images/pretty-paws/interface/demo-store-20260528.jpg",
      "/images/pretty-paws/interface/demo-product-detail-20260528.jpg",
      "/images/pretty-paws/interface/demo-checkout-success-20260528.jpg",
      "/images/pretty-paws/interface/demo-checkout-cancel-20260528.jpg",
    ],
    visuals: [
      {
        src: "/images/pretty-paws/before/source-homepage-20260528.jpg",
        label: "Before: Homepage",
        note: "Original lrprettypaws.com home page.",
      },
      {
        src: "/images/pretty-paws/interface/demo-homepage-20260528.jpg",
        label: "After: Homepage",
        note: "New demo home page with service entry points.",
      },
      {
        src: "/images/pretty-paws/before/source-services-20260528.jpg",
        label: "Before: Services",
        note: "Original services page.",
      },
      {
        src: "/images/pretty-paws/interface/demo-services-20260528.jpg",
        label: "After: Services hub",
        note: "Browseable service categories and detail links.",
      },
      {
        src: "/images/pretty-paws/interface/demo-service-detail-20260528.jpg",
        label: "After: Service detail",
        note: "Dedicated Full Service Groom route.",
      },
      {
        src: "/images/pretty-paws/interface/demo-booking-request-20260528.jpg",
        label: "After: Booking request",
        note: "Preselected appointment request flow.",
      },
      {
        src: "/images/pretty-paws/before/source-merch-20260528.jpg",
        label: "Before: Merch",
        note: "Original Pretty Paws merch page.",
      },
      {
        src: "/images/pretty-paws/interface/demo-store-20260528.jpg",
        label: "After: Store",
        note: "Paused merch surface with honest launch state.",
      },
      {
        src: "/images/pretty-paws/interface/demo-product-detail-20260528.jpg",
        label: "After: Product detail",
        note: "Unavailable merch detail route.",
      },
      {
        src: "/images/pretty-paws/before/source-mission-20260528.jpg",
        label: "Before: Mission",
        note: "Original mission page.",
      },
      {
        src: "/images/pretty-paws/before/source-gallery-20260528.jpg",
        label: "Before: Gallery",
        note: "Original grooming gallery page.",
      },
      {
        src: "/images/pretty-paws/before/source-reviews-20260528.jpg",
        label: "Before: Reviews",
        note: "Original customer reviews page.",
      },
      {
        src: "/images/pretty-paws/before/source-contact-20260528.jpg",
        label: "Before: Contact",
        note: "Original contact form page.",
      },
      {
        src: "/images/pretty-paws/interface/demo-policies-20260528.jpg",
        label: "After: Policies",
        note: "Privacy and terms route.",
      },
      {
        src: "/images/pretty-paws/interface/demo-checkout-success-20260528.jpg",
        label: "After: Checkout success",
        note: "Completed checkout status route.",
      },
      {
        src: "/images/pretty-paws/interface/demo-checkout-cancel-20260528.jpg",
        label: "After: Checkout cancel",
        note: "Canceled checkout status route.",
      },
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: "https://pretty-paws-wag.netlify.app/",
    figmaUrl: null,
    prototypeUrl: null,
    keyAchievements: [
      "Created a live public site for a Little Rock grooming salon with service, booking, contact, policy, store, product, and checkout status routes.",
      "Kept the core booking flow honest by treating submissions as pending appointment requests.",
      "Documented the architecture, product scope, media sources, Netlify deployment, and Supabase data boundaries in the source project.",
      "De-emphasized merch until products, pricing, fulfillment, and checkout operations are confirmed.",
    ],
    technicalHighlights: [
      "Vite, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and GSAP for the frontend.",
      "React Router with lazy-loaded secondary routes for service details, booking, policies, store, products, checkout status, and not-found handling.",
      "Static service and site data in `src/data/services.json` and `src/lib/site.ts` for a lower-risk launch path.",
      "Supabase-backed booking and contact submissions with validation before database writes.",
      "Netlify deployment configured with `npm run build`, `dist` publishing, and an SPA fallback.",
    ],
    conclusion: {
      impact:
        "Pretty Paws now has a public, reviewable web experience with real service pathways, contact details, policy coverage, local visual assets, and a live Netlify deployment.",
      learnings:
        "For local service businesses, the strongest design move is often restraint: make the business feel real, keep actions obvious, and avoid claims that the source material cannot support.",
      nextSteps:
        "Confirm final client approval for service copy and policies, decide whether `lrprettypaws.com` should point to the Netlify deployment, add notification handling for new submissions, and keep merch quiet until fulfillment is ready.",
    },
  };
};
