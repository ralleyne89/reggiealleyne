export const getProjectLiveLabel = (projectSlug?: string) => {
  switch (projectSlug) {
    case "chill-vibes-music-player":
      return "Open Web App";
    case "tutor-d":
      return "Visit TutorD";
    case "staybooked":
      return "Visit Staybooked";
    case "covelo-timecard-system":
      return "Open Covelo Demo";
    case "pretty-paws-grooming":
      return "Visit Pretty Paws";
    case "bobs-big-break":
      return "Play Game";
    default:
      return "View Live Demo";
  }
};
