export const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as
  | string
  | undefined;

export const isTurnstileConfigured = Boolean(TURNSTILE_SITE_KEY);

export const CONTACT_EMAIL = "reggiealleyne89@gmail.com";

interface ContactMailtoInput {
  name?: string;
  email?: string;
  message?: string;
}

export const createContactMailtoHref = ({
  name,
  email,
  message,
}: ContactMailtoInput) => {
  const normalizedName = name?.trim();
  const normalizedEmail = email?.trim();
  const normalizedMessage = message?.trim();

  const subject = normalizedName
    ? `Portfolio inquiry from ${normalizedName}`
    : "Portfolio inquiry";

  const body = [
    "Hi Reggie,",
    "",
    normalizedMessage || "I'd like to discuss a project or collaboration.",
    "",
    normalizedName ? `Name: ${normalizedName}` : "",
    normalizedEmail ? `Email: ${normalizedEmail}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
};
