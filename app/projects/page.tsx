import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JourneyCard } from "@/components/JourneyCard";
import { journeyItems } from "@/content/journey";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects across operations, partnership, leadership, and business strategy.",
};

export default function ProjectsPage() {
  const selectedSlugs = [
    "csc-business-strategy",
    "company-visit-trans-tv",
    "partnership-department",
    "staff-muda",
    "hipmi-collab-expo",
    "hipmi-jejak-budaya",
  ];

  const projects = selectedSlugs
    .map((slug) => journeyItems.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <>
      <section className={`section projects-section ${styles.heroSection}`}>
        <div className={`shell ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">Selected projects</p>
            <h1 className="page-title">Work is most useful when the process is visible.</h1>
          </div>

          <p className="lead">
            These case studies show the context, responsibilities, decisions, outcomes, and lessons
            behind selected organizational work.
          </p>
        </div>
      </section>

      <section className={`section ${styles.listSection}`}>
        <div className={`shell journey-grid projects-grid ${styles.cardsGrid}`}>
          {projects.map((project, index) =>
            project ? <JourneyCard item={project} index={index} key={project.slug} /> : null,
          )}
        </div>
      </section>

      <section className="section-tight dark-section projects-impact">
        <div className="shell split-section">
          <p className="eyebrow light">A note on impact</p>
          <div className="prose projects-impact-copy">
            <h2>Qualitative outcomes are documented now. Verified metrics come next.</h2>
            <p className="projects-impact-lead">
              Participant counts, team size, partner response, sponsorship value, and systems
              adopted will be added only after they are verified and cleared for public use.
            </p>
            <Link className="text-link light-link" href="/contact">
              Ask about a project <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
