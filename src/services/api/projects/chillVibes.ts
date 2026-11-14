import { ProjectType } from '../../../types/project';

export const getChillVibesProject = (): ProjectType => {
  return {
    id: 7,
    slug: "chill-vibes-music-player",
    title: "Chill Vibes Music Player",
    description:
      "A browser music player for relaxed listening: press play, keep a session going without managing it, and come back to the tracks you saved.",
    fullDescription:
      "Chill Vibes is a music player built like a listening desk. Artwork gives the session a sense of place, the controls stay in reach, and the track lists make the next action obvious. It works on desktop and phone browsers, with a guest mode so anyone can try it.",
    image: "/images/chill-vibes/v2/desktop.webp",
    category: "Music · Web app",
    tags: ["Music", "UX/UI", "React", "Firebase"],
    role: "UX/UI Designer & Frontend Developer",
    duration: "3 months",
    year: "2020",
    challenge:
      "Most music apps bury playback under feeds, podcasts, and recommendations. Someone studying or unwinding just wants to start something calm and not touch the player again after every track.",
    process: [
      "Defined the core job in one line: find music for the moment and keep listening without managing the player after every track.",
      "Mapped the screens and their states: now playing, browse, library, up next, sign in, and every empty and error case.",
      "Set the direction, a listening desk: true-black stage, neutral surfaces, one blue for actions, and the system type stack.",
      "Built the player in React with a separate session queue, so Play starts a list and the next track follows on its own.",
      "Made Save independent of Play, added a library with favorites, and gave narrow screens task sheets with the transport always visible.",
    ],
    deliverables: [
      "Now-playing view with artwork and a persistent transport",
      "Browse with search across title, artist, genre, and mood, plus genre and mood filters",
      "Library with favorites, removal, and empty states",
      "Up next queue with shuffle, repeat off, all, or one",
      "Volume, mute, playback speed, and keyboard controls",
      "Email, Google, and guest sign-in",
    ],
    images: [
      "/images/chill-vibes/v2/desktop.webp",
      "/images/chill-vibes/v2/now-playing.webp",
      "/images/chill-vibes/v2/browse.webp",
      "/images/chill-vibes/v2/library.webp",
      "/images/chill-vibes/v2/up-next.webp",
      "/images/chill-vibes/v2/sign-in.webp",
    ],
    visuals: [
      {
        src: "/images/chill-vibes/v2/now-playing.webp",
        label: "Now playing",
        note: "Artwork sets the mood, the title and artist sit underneath, and the transport never leaves the bottom of the screen.",
        orientation: "tall",
      },
      {
        src: "/images/chill-vibes/v2/browse.webp",
        label: "Find your next track",
        note: "Search by title, artist, genre, or mood, or narrow with two filters. Tapping a row starts it straight away.",
        orientation: "tall",
      },
      {
        src: "/images/chill-vibes/v2/library.webp",
        label: "Your library",
        note: "Saved tracks with favorites and removal on every row. Saving never interrupts what is playing.",
        orientation: "tall",
      },
      {
        src: "/images/chill-vibes/v2/up-next.webp",
        label: "Up next",
        note: "The session queue shows what is playing and what follows, with the repeat setting stated in words.",
        orientation: "tall",
      },
      {
        src: "/images/chill-vibes/v2/sign-in.webp",
        label: "Sign in",
        note: "Email or Google to keep a library, or try it without an account and keep guest saves in the browser.",
        orientation: "tall",
      },
    ],
    conclusion: {
      impact:
        "The player is live and anyone can try it as a guest. It has no usage analytics, so there are no listening numbers to report.",
      learnings:
        "Separating Play from Save and giving the queue its own state removed most of the friction. The player stopped asking for attention once it knew what came next.",
      nextSteps:
        "Run a timed session with first-time listeners to see whether they reach audible playback within 30 seconds, and confirm rights for every track in the catalog.",
    },
    techStack: ["React", "React Router", "Firebase Auth", "Sass", "React Bootstrap"],
    keyAchievements: [
      "Play starts a session that keeps going on its own",
      "Save and favorites work without interrupting playback",
      "Desktop workspace and phone task sheets share one transport",
    ],
    problemSolved:
      "Lets someone start calm music in a couple of taps and keep it going without touching the player again.",
    technicalHighlights: [
      "A session queue kept separate from the library, with history-aware Previous",
      "Per-user libraries that survive reload, with duplicate prevention",
      "Labelled keyboard controls, visible focus, and focus-managed sheets on narrow screens",
    ],
    liveUrl: "https://chill-vibes.web.app/",
    methodologies: ["Interaction Design", "Mobile-First Design", "Accessibility Checks"],
    summary:
      "A browser music player built like a listening desk: press play, let the session run, and come back to the tracks you saved.",
    solution:
      "Make Play the primary action, give the queue its own state so music keeps going, and keep the transport in reach on every screen.",
  };
};
