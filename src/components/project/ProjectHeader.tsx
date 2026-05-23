import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectHeaderProps {
  image: string;
  title: string;
  description: string;
  year?: string;
  typeLabel?: string | null;
}

interface CaseStudyHeroConfig {
  image: string;
  imagePosition?: string;
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
      image: "/images/vaultjs-security-dashboard-clean.png",
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
    },
  },
  {
    matches: (title) => title === "Bob's Big Break",
    config: {
      image: "/images/BBB-banner2.png",
      imagePosition: "right center",
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
  title,
  description,
  year,
  typeLabel,
}: ProjectHeaderProps) => {
  const headerRef = useRef<HTMLElement>(null);
  const [imageError, setImageError] = useState(false);
  const heroConfig = getCaseStudyHeroConfig(title);
  const heroImage =
    heroConfig && !heroConfig.useProjectImage ? heroConfig.image : image;
  const heroImagePosition = heroConfig?.imagePosition;

  const displayDescription = getCaseStudyDescription(title, description);
  const eyebrowLabel = [year, typeLabel || "Project"].filter(Boolean).join(" / ");
  const backTarget = "/work";
  const backLabel = "Back to Work";

  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      const revealTargets = gsap.utils.toArray<HTMLElement>(
        "[data-project-hero-reveal]",
      );
      const media = header.querySelector("[data-project-hero-media]");

      if (reduceMotion) {
        const visibleTargets = media ? [...revealTargets, media] : revealTargets;

        gsap.set(visibleTargets, {
          autoAlpha: 1,
          clearProps: "clipPath,transform",
        });
        return;
      }

      gsap.from(revealTargets, {
        autoAlpha: 0,
        duration: 0.78,
        ease: "expo.out",
        stagger: 0.07,
        y: 34,
      });

      if (media) {
        gsap.fromTo(
          media,
          {
            clipPath: "inset(10% 6% 8% 6% round 1rem)",
            scale: 1.06,
            y: 50,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 1rem)",
            duration: 1,
            ease: "expo.out",
            scale: 1,
            y: 0,
          },
        );

        gsap.to(media, {
          ease: "none",
          y: -70,
          scrollTrigger: {
            trigger: header,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, header);

    return () => context.revert();
  }, []);

  return (
    <header ref={headerRef} className="project-cinema-hero">
      <div className="project-cinema-hero__grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="contents"
        >
          <div className="project-cinema-hero__copy">
            <Link
              to={backTarget}
              data-project-hero-reveal
              className="project-cinema-hero__back"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backLabel}
            </Link>

            <p data-project-hero-reveal className="project-cinema-hero__eyebrow">
              {eyebrowLabel}
            </p>
            <h1 data-project-hero-reveal className="project-cinema-hero__title">
              {title}
            </h1>
            <p data-project-hero-reveal className="project-cinema-hero__description">
              {displayDescription}
            </p>
          </div>

          <div className="project-cinema-hero__media-wrap">
            <div data-project-hero-media className="project-cinema-hero__media">
              <div className="project-cinema-hero__selection" aria-hidden="true">
                <span className="project-cinema-hero__handle project-cinema-hero__handle--tl" />
                <span className="project-cinema-hero__handle project-cinema-hero__handle--tr" />
                <span className="project-cinema-hero__handle project-cinema-hero__handle--bl" />
                <span className="project-cinema-hero__handle project-cinema-hero__handle--br" />
              </div>
              <div className="project-cinema-hero__image-frame">
                <img
                  src={imageError ? "/placeholder.svg" : heroImage}
                  alt={title}
                  className="project-cinema-hero__image"
                  style={
                    heroImagePosition
                      ? { objectPosition: heroImagePosition }
                      : undefined
                  }
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
