import { ProjectType } from '../../../types/project';

export const getBobsBigBreakProject = (): ProjectType => {
  return {
    id: 8,
    slug: "bobs-big-break",
    title: "Bob's Big Break",
    description:
      "An idle mobile game about growing Bob's neighborhood hustle: tap for coins, hire a crew, finish daily gigs, and dress Bob up as the business grows.",
    fullDescription:
      "Bob's Big Break is a game for the moments when your brain needs a break but you still want something to show for it. Tap Bob for coins, reinvest in upgrades and a crew that earns while you are away, and work through five chapters of Bob's street.",
    image: "/images/bobs-big-break/v2/desktop.webp",
    category: "Game · Mobile app",
    tags: ["Game Design", "Mobile", "React Native", "Expo"],
    role: "UX/UI Designer & Developer",
    duration: "2 weeks",
    year: "2020",
    challenge:
      "Idle games often turn into dashboards full of numbers. A commuter or someone waiting on a call needs to open the game, see one clear next move, and put it down again without losing anything.",
    process: [
      "Defined the core job: build Bob's business by tapping, hiring, and reinvesting, then leave and come back to a run that is still yours.",
      "Designed the economy: tap income, upgrades, crew members with passive income, daily gigs, achievements, and a Big Break that restarts a stronger run.",
      "Set the direction: an illustrated street scene with reachable controls, Bob red and yellow on warm pale surfaces, and bold signage for chapter titles.",
      "Split the game into four tabs, Hustle, Crew, Journey, and Bag, so each screen carries one job.",
      "Built it in Expo and React Native with saves on the device, so it runs on iOS, Android, and in the browser without an account.",
    ],
    deliverables: [
      "Hustle screen with Bob, the wallet, income per second, and one next move",
      "Crew and upgrades with prices and expected effect on every row",
      "Journey with daily gigs and progress",
      "Bag with style unlocks and achievements",
      "Character art, chapter artwork, and the Bob logo",
      "Playable browser build with on-device saves",
    ],
    images: [
      "/images/bobs-big-break/v2/desktop.webp",
      "/images/bobs-big-break/v2/hustle.webp",
      "/images/bobs-big-break/v2/crew.webp",
      "/images/bobs-big-break/v2/journey.webp",
      "/images/bobs-big-break/v2/bag.webp",
    ],
    visuals: [
      {
        src: "/images/bobs-big-break/v2/hustle.webp",
        label: "Hustle",
        note: "The wallet, income per second, Bob, and one next move. Everything else lives on another tab.",
        orientation: "tall",
      },
      {
        src: "/images/bobs-big-break/v2/crew.webp",
        label: "Your crew",
        note: "Hire once and keep earning while you are away. Each row says what it costs and what it adds per second.",
        orientation: "tall",
      },
      {
        src: "/images/bobs-big-break/v2/journey.webp",
        label: "The road ahead",
        note: "Daily gigs give a short goal for each session, with a progress bar and a clear reward.",
        orientation: "tall",
      },
      {
        src: "/images/bobs-big-break/v2/bag.webp",
        label: "Your collection",
        note: "Style unlocks and achievements earned by playing, so progress shows up on Bob himself.",
        orientation: "tall",
      },
    ],
    conclusion: {
      impact:
        "The game is playable in the browser with no account or download, and the same build exports to iOS and Android. It has not been released to the app stores, so there are no player numbers.",
      learnings:
        "Designing for low attention meant showing less, not more. One next move on the main screen did more for the loop than any extra statistic.",
      nextSteps:
        "Test pacing with casual players, add cloud backup for accounts, and prepare the store release.",
    },
    techStack: ["Expo", "React Native", "TypeScript", "Expo Router", "SQLite"],
    keyAchievements: [
      "Four focused tabs replaced one long dashboard",
      "Every purchase shows its price and its effect before you tap",
      "Runs saved on the device, with a reset that can be undone",
    ],
    githubUrl: null,
    liveUrl: "https://bobs-big-break-demo.web.app/",
    problemSolved:
      "Gives people a game they can open for a minute, make one good move in, and leave without losing progress.",
    technicalHighlights: [
      "One economy shared by the web and mobile builds",
      "On-device saves with a lock so two tabs cannot overwrite a run",
      "Away earnings collected when you come back",
    ],
    methodologies: ["Game Design", "Interaction Design", "Rapid Prototyping"],
    summary:
      "An idle mobile game where you grow Bob's neighborhood hustle by tapping, hiring a crew, and finishing daily gigs.",
    date: "2020-08-15",
  };
};
