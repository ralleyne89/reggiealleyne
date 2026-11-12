/**
 * Title and description for each top-level route. Used twice: by the pages at
 * runtime (usePageMeta) and by the build step that writes one HTML file per
 * route, so link previews and crawlers that do not run JavaScript get the
 * right tags.
 */
export type RouteMeta = {
  path: string;
  title: string;
  description: string;
};

export const HOME_ROUTE_META: RouteMeta = {
  path: "/",
  title: "Reggie Alleyne | Senior UX/UI Designer Who Codes and Builds with AI",
  description:
    "Senior UX/UI designer who codes and builds with AI. I design AI products people can question and build them in React. Explore selected case studies.",
};

export const WORK_ROUTE_META: RouteMeta = {
  path: "/work",
  title: "Work | Reggie Alleyne",
  description:
    "Selected AI and product design case studies. Each one shows the problem, constraint, decision, and evidence behind the interface.",
};

export const ABOUT_ROUTE_META: RouteMeta = {
  path: "/about",
  title: "About | Reggie Alleyne",
  description:
    "Background, selected experience, and design process of Reggie Alleyne, a senior UX/UI designer who codes and builds with AI.",
};

export const PLAYGROUND_ROUTE_META: RouteMeta = {
  path: "/playground",
  title: "Playground | Reggie Alleyne",
  description:
    "Coded product experiments you can inspect, including ScentStack, Chill Vibes Music Player, and Bob's Big Break.",
};

export const STATIC_ROUTE_META: RouteMeta[] = [
  WORK_ROUTE_META,
  ABOUT_ROUTE_META,
  PLAYGROUND_ROUTE_META,
];
