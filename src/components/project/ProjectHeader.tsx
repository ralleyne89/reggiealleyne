import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectHeaderProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  role?: string;
  duration?: string;
  year?: string;
  teamSize?: string | null;
}

interface CaseStudyHeroConfig {
  image: string;
  useProjectImage?: boolean;
}

const caseStudyHeroConfigs: Array<{
  matches: (title: string) => boolean;
  config: CaseStudyHeroConfig;
}> = [
  {
    matches: (title) => title.includes("SymptomCheckr"),
    config: {
      image: "/images/symptomcheckr-trust-ai-card.jpg",
      useProjectImage: true,
    },
  },
  {
    matches: (title) => title === "TECH NOIR",
    config: {
      image: "/images/tech-noir-banner.png",
    },
  },
  {
    matches: (title) => title === "WRISTBAND",
    config: {
      image: "/images/58637294-5300-47d9-918b-91da32843369.png",
    },
  },
  {
    matches: (title) => title.includes("Improv Learning"),
    config: {
      image: "/images/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
    },
  },
  {
    matches: (title) => title === "Doggy Date",
    config: {
      image: "/images/0b86301b-18ba-4c43-bd8a-ee1e0b41e1cd.png",
    },
  },
  {
    matches: (title) => title === "Chill Vibes Music Player",
    config: {
      image: "/images/85ce6121-b2ba-435d-b8cd-2606e0e3cc63.png",
    },
  },
  {
    matches: (title) => title === "CLLCTVE Platform",
    config: {
      image: "/images/cllctve-gen-z-card.jpg",
      useProjectImage: true,
    },
  },
  {
    matches: (title) => title.includes("Litmus AI"),
    config: {
      image: "/images/litmus-ai-literacy-card.jpg",
      useProjectImage: true,
    },
  },
  {
    matches: (title) => title.includes("Vault.js Validate"),
    config: {
      image: "/images/vaultjs-banner.jpg",
    },
  },
  {
    matches: (title) => title.includes("ScentStack"),
    config: {
      image: "/images/scentstack-banner.png",
    },
  },
  {
    matches: (title) => title.includes("Staybooked"),
    config: {
      image: "/images/staybooked/marketing-homepage-hero-desktop.png",
      useProjectImage: true,
    },
  },
  {
    matches: (title) => title === "Tutor D",
    config: {
      image: "/images/bfe72208-e9fa-458d-9323-791c39cf2292.png",
    },
  },
  {
    matches: (title) => title === "Bob's Big Break",
    config: {
      image: "/images/BBB-banner2.png",
    },
  },
];

const getCaseStudyHeroConfig = (title: string) =>
  caseStudyHeroConfigs.find(({ matches }) => matches(title))?.config;

const getCaseStudyDescription = (title: string, description: string) => {
  if (title === "WRISTBAND") {
    return (
      "An interactive storytelling platform designed to democratize content " +
      "creation and provide diverse representation in digital narratives " +
      "through choice-driven experiences."
    );
  }

  return description;
};

const ProjectHeader = ({
  image,
  tags,
  title,
  description,
  role,
  duration,
  year,
  teamSize,
}: ProjectHeaderProps) => {
  const [imageError, setImageError] = useState(false);
  const heroConfig = getCaseStudyHeroConfig(title);
  const heroImage =
    heroConfig && !heroConfig.useProjectImage ? heroConfig.image : image;

  const facts = [
    { label: "Role", value: role },
    { label: "Timeline", value: duration },
    { label: "Year", value: year },
    { label: "Team", value: teamSize },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value),
  );

  const displayDescription = getCaseStudyDescription(title, description);
  const visibleTags = tags.slice(0, 5);
  const backTarget = "/works";
  const backLabel = "Back to Work";

  return (
    <header className="border-b border-gray-200 bg-white pt-24 sm:pt-32">
      <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.74fr)] lg:items-end lg:gap-12"
        >
          <div className="min-w-0">
            <Link
              to={backTarget}
              className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-primary/40 hover:text-primary sm:mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </Link>

            {visibleTags.length > 0 ? (
              <div className="-mx-4 mb-4 flex min-w-0 gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mb-5 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
                {visibleTags.map((tag) => (
                  <span
                    key={tag}
                    className="shrink-0 rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <h1 className="max-w-5xl break-words font-display text-[2.18rem] leading-[1.07] text-gray-950 [text-wrap:balance] sm:text-display-md lg:text-display-lg">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
              {displayDescription}
            </p>

            {facts.length > 0 ? (
              <dl className="mt-6 grid min-w-0 grid-cols-2 gap-x-6 gap-y-4 border-y border-gray-200 py-5 sm:mt-8 sm:grid-cols-4 sm:gap-y-5 sm:py-6">
                {facts.map((fact) => (
                  <div key={fact.label} className="min-w-0">
                    <dt className="text-xs font-semibold text-gray-500">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 break-words text-sm font-semibold leading-6 text-gray-950">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

          </div>

          <div className="min-w-0 max-md:pb-20">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm">
              <div className="aspect-[16/6] sm:aspect-[4/3]">
                <img
                  src={imageError ? "/placeholder.svg" : heroImage}
                  alt={title}
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default ProjectHeader;
