import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectHeaderProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
}

interface CaseStudyHeroConfig {
  image: string;
  overlay: string;
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
      overlay: "from-black/80 via-black/70 to-black/90",
      useProjectImage: true,
    },
  },
  {
    matches: (title) => title === "TECH NOIR",
    config: {
      image: "/images/tech-noir-banner.png",
      overlay: "from-black/70 via-black/50 to-black/80",
    },
  },
  {
    matches: (title) => title === "WRISTBAND",
    config: {
      image: "/images/58637294-5300-47d9-918b-91da32843369.png",
      overlay: "from-black/70 via-black/50 to-black/80",
    },
  },
  {
    matches: (title) => title.includes("Improv Learning"),
    config: {
      image: "/images/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
      overlay: "from-black/70 via-black/50 to-black/80",
    },
  },
  {
    matches: (title) => title === "Doggy Date",
    config: {
      image: "/images/0b86301b-18ba-4c43-bd8a-ee1e0b41e1cd.png",
      overlay: "from-black/70 via-black/50 to-black/80",
    },
  },
  {
    matches: (title) => title === "Chill Vibes Music Player",
    config: {
      image: "/images/85ce6121-b2ba-435d-b8cd-2606e0e3cc63.png",
      overlay: "from-black/70 via-black/50 to-black/80",
    },
  },
  {
    matches: (title) => title === "CLLCTVE Platform",
    config: {
      image: "/images/cllctve-gen-z-card.jpg",
      overlay: "from-black/70 via-black/50 to-black/80",
      useProjectImage: true,
    },
  },
  {
    matches: (title) => title.includes("Litmus AI"),
    config: {
      image: "/images/litmus-ai-literacy-card.jpg",
      overlay: "from-black/70 via-black/50 to-black/80",
      useProjectImage: true,
    },
  },
  {
    matches: (title) => title.includes("Vault.js Validate"),
    config: {
      image: "/images/vaultjs-banner.jpg",
      overlay: "from-black/70 via-black/50 to-black/80",
    },
  },
  {
    matches: (title) => title.includes("ScentStack"),
    config: {
      image: "/images/scentstack-banner.png",
      overlay: "from-black/70 via-black/50 to-black/80",
    },
  },
  {
    matches: (title) => title === "Tutor D",
    config: {
      image: "/images/bfe72208-e9fa-458d-9323-791c39cf2292.png",
      overlay: "from-black/70 via-black/50 to-black/80",
    },
  },
  {
    matches: (title) => title === "Bob's Big Break",
    config: {
      image: "/images/BBB-banner2.png",
      overlay: "from-black/70 via-black/50 to-black/80",
    },
  },
];

const isKnownCaseStudy = (title: string) =>
  caseStudyHeroConfigs.some(({ matches }) => matches(title));

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
}: ProjectHeaderProps) => {
  const [imageError, setImageError] = useState(false);
  const heroConfig = getCaseStudyHeroConfig(title);
  const isCaseStudy = isKnownCaseStudy(title);

  const handleImageError = () => {
    console.error(`Header image failed to load: ${image}`);
    setImageError(true);
  };

  if (isCaseStudy) {
    return (
      <div
        className={[
          "relative bg-cover bg-center bg-no-repeat pb-12 pt-24 sm:pb-16 sm:pt-28",
          heroConfig ? "" : "bg-secondary-dark",
        ].join(" ")}
        style={
          heroConfig
            ? {
                backgroundImage: `url('${
                  heroConfig.useProjectImage ? image : heroConfig.image
                }')`,
              }
            : undefined
        }
      >
        {heroConfig ? (
          <div
            className={`absolute inset-0 bg-gradient-to-b ${heroConfig.overlay}`}
          />
        ) : null}

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-7 sm:mb-8">
              <Link
                to="/works"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gray-300 transition-colors duration-200 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Works
              </Link>
            </div>

            <div className="min-w-0 space-y-5 sm:space-y-6">
              <div className="flex min-w-0 flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className={[
                      "rounded-full px-3 py-1 text-xs font-medium",
                      heroConfig
                        ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm"
                        : "border border-primary/20 bg-primary/10 text-primary",
                    ].join(" ")}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="max-w-5xl break-words font-heading text-[2.35rem] font-bold leading-[1.05] text-white drop-shadow-lg [text-wrap:balance] sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p
                className={[
                  "max-w-4xl text-base leading-7 drop-shadow-md sm:text-xl sm:leading-relaxed",
                  heroConfig ? "text-gray-100" : "text-gray-300",
                ].join(" ")}
              >
                {getCaseStudyDescription(title, description)}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-[52vh] min-h-[26rem] overflow-hidden sm:h-[60vh]">
        <img
          src={imageError ? "/placeholder.svg" : image}
          alt={title}
          className="h-full w-full object-cover"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[rgba(5,5,5,1)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl px-4 text-center sm:px-6">
            <h1 className="mb-5 break-words font-heading text-[2.55rem] font-bold leading-tight text-white drop-shadow-md [text-wrap:balance] md:text-6xl">
              {title}
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-7 text-white/90 drop-shadow-sm md:text-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-14 mb-10 w-full max-w-7xl px-4 sm:-mt-16 sm:mb-12 sm:px-6">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <Link
            to="/works"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md border border-gray-600 bg-[rgba(20,20,20,0.9)] px-4 py-2 text-primary backdrop-blur-sm transition-colors duration-200 hover:bg-[rgba(30,30,30,0.9)] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Works
          </Link>

          <div className="flex min-w-0 flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(20,20,20,0.9)] px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
