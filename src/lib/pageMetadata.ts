export interface PageMetadata {
  title: string;
  description: string;
}

export const pageMetadata: Record<string, PageMetadata> = {
  "/": {
    title: "Reggie Alleyne | UX/UI Designer & Frontend Developer",
    description: "UX/UI designer and frontend developer turning complex healthcare and AI workflows into clear, usable products. Explore case studies and working React prototypes.",
  },
  "/work": {
    title: "Selected UX/UI & Product Design Work | Reggie Alleyne",
    description: "Explore Reggie Alleyne's product design case studies, including CLLCTVE, Litmus AI, Staybooked, and Covelo. See the decisions, interfaces, and evidence.",
  },
  "/about": {
    title: "About Reggie Alleyne | UX/UI Designer & Frontend Developer",
    description: "Meet Reggie Alleyne, a Los Angeles UX/UI designer and frontend developer with experience in healthcare, education, AI products, and React prototyping.",
  },
  "/playground": {
    title: "Product Experiments & Prototypes | Reggie Alleyne",
    description: "Explore ScentStack, Chill Vibes Music Player, and Bob's Big Break: working prototypes for recommendation, playback, and game interactions.",
  },
  "/services": {
    title: "Website Design & Development Services | Reggie Alleyne",
    description: "Website design and development for service businesses, including service pages, inquiry routing, booking flows, and follow-up systems.",
  },
};
