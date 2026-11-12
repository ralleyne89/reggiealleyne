import { RESUME_URL } from "@/config/resume";

/**
 * Umami Cloud analytics: cookieless, so no consent banner is needed.
 * Stays off until VITE_UMAMI_WEBSITE_ID is set, and never loads in development.
 * Page views (including client-side route changes) are tracked by the script.
 */
const WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID as string | undefined;
// Use the script URL shown in the Umami dashboard if it differs from this one.
const SCRIPT_URL =
  (import.meta.env.VITE_UMAMI_SCRIPT_URL as string | undefined) ||
  "https://cloud.umami.is/script.js";

type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: EventData) => void };
  }
}

export const track = (event: string, data?: EventData) => {
  window.umami?.track(event, data);
};

export const initAnalytics = () => {
  if (!import.meta.env.PROD || !WEBSITE_ID) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = SCRIPT_URL;
  script.dataset.websiteId = WEBSITE_ID;
  script.dataset.domains = "reggiealleyne.com,www.reggiealleyne.com";
  document.head.appendChild(script);

  // One delegated listener covers every resume, email and outbound link.
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest?.("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") ?? "";

    if (href === RESUME_URL) {
      track("resume-open", { from: window.location.pathname });
    } else if (href.startsWith("mailto:")) {
      track("email-click", { from: window.location.pathname });
    } else if (/^https?:\/\//.test(href) && !href.includes("reggiealleyne.com")) {
      track("outbound-click", { to: new URL(href).hostname });
    }
  });
};
