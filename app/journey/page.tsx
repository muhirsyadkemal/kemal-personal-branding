import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JourneyExplorer } from "@/components/JourneyExplorer";
import { getJourneyByYear, yearIntros, years } from "@/content/journey";

export const metadata: Metadata = {
  title: "My Journey",
  description: "Kemal's journey from university entry and operations to partnership, leadership, and business strategy.",
};

export default function JourneyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">My journey</p>
            <h1 className="page-title">Every experience shapes how I lead the next one.</h1>
          </div>
          <p className="lead">
            Growth does not happen by waiting. It happens by accepting responsibility,
            working through unfamiliar challenges, and reflecting on what each experience teaches.
          </p>
        </div>
      </section>

      <section className="section-tight journey-timeline-section">
        <div className="shell timeline">
          {years.map((year) => {
            const intro = yearIntros[year];
            const items = getJourneyByYear(year);
            return (
              <div className="timeline-year" key={year}>
                <div className="timeline-year-label">{year}</div>
                <div className="timeline-intro">
                  <h2>{intro.title}</h2>
                  <p>{intro.text}</p>
                  <div className="timeline-list">
                    {items.map((item, index) => (
                      <Link className="timeline-link" href={`/journey/${item.slug}`} key={item.slug}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <div><h3>{item.title}</h3><p>{item.role} · {item.organization}</p></div>
                        <ArrowUpRight size={19} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section journey-explorer-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Explore case studies</p>
            <div><h2>Filter the full journey by year.</h2></div>
          </div>
          <JourneyExplorer />
        </div>
      </section>
    </>
  );
}
