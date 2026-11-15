export interface AppDemo {
  /** Address loaded inside the phone frame and in "Open full screen" */
  url: string;
  eyebrow: string;
  heading: string;
  body: string;
  note: string;
  /** Screen shown before the visitor starts the demo */
  poster: string;
  posterAlt: string;
  startLabel: string;
}

const appDemos: Record<string, AppDemo> = {
  "tutor-d": {
    url: "https://tutord-demo.web.app/",
    eyebrow: "Try it",
    heading: "Plan a lesson.",
    body: "This is the Tutor D web app at phone size. Open the teacher or student dashboard, look through progress and upcoming work, and fill in a lesson plan.",
    note: "No account needed. Dashboards use sample classes, and nothing is sent to students.",
    poster: "/images/tutor-d/v2/mobile-landing.webp",
    posterAlt: "Tutor D landing page on a phone with the headline A Smarter Way to Learn and Teach",
    startLabel: "Open Tutor D",
  },
  "bobs-big-break": {
    url: "https://bobs-big-break-demo.web.app/",
    eyebrow: "Play it",
    heading: "Tap Bob. Hire a crew.",
    body: "This is the mobile game running in your browser. Tap Bob for coins, buy upgrades, hire a crew that earns while you are away, and work through the daily gigs.",
    note: "No account or download. Progress saves in this browser, and Settings can reset the run.",
    poster: "/images/bobs-big-break/v2/hustle.webp",
    posterAlt: "Bob's Big Break Hustle screen with Bob, the coin count, and the next move",
    startLabel: "Start playing",
  },
  "chill-vibes-music-player": {
    url: "https://chill-vibes.web.app/?guest=1",
    eyebrow: "Listen to it",
    heading: "Press play.",
    body: "This is the player running in your browser as a guest. Start a track, browse by genre or mood, save tracks to your library, and see what plays next.",
    note: "No account needed. Guest saves stay in this browser. Turn your sound on.",
    poster: "/images/chill-vibes/v2/now-playing.webp",
    posterAlt: "Chill Vibes now-playing screen with album artwork and the transport controls",
    startLabel: "Open the player",
  },
};

export const getAppDemo = (slug?: string) => (slug ? appDemos[slug] : undefined);
