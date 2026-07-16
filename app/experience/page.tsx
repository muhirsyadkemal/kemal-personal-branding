import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description: "Kemal's professional, entrepreneurial, organizational, and committee experience.",
};

const experiences = [
  {
    period: "2026 · Present",
    role: "Department Manager of Business Strategy",
    organization: "Community Support Center Telkom University",
    bullets: [
      "Define quality standards for external collaborations involving student organizations.",
      "Review partnerships, supervise partner and vendor service delivery, and evaluate outcomes.",
      "Develop operational strategies, SOPs, and recommendations for future collaboration.",
    ],
  },
  {
    period: "2026",
    role: "Partnership Staff",
    organization: "HIPMI PT Telkom · External Affairs Division",
    bullets: [
      "Support partner research, external communication, and collaboration preparation.",
      "Assist relationship management with external stakeholders to support program objectives.",
      "Contribute to a structured prospect database for continuity across future programs.",
    ],
  },
  {
    period: "2025 · 2026",
    role: "Committee Leadership",
    organization: "HIPMI PT Telkom",
    bullets: [
      "Project Leader for Company Visit to TRANS TV and Vice Project Leader for Explore Business.",
      "Head of Sponsorship for HIPMI Collab Expo and Vice Head of Sponsorship & Fundraising for Investpreneur.",
      "Head of Logistics Division for Staff Muda and Buddy for new Partnership members.",
    ],
  },
  {
    period: "Senior high school · Present",
    role: "Food & Beverage Entrepreneur",
    organization: "Independent Ventures",
    bullets: [
      "Initiate and manage small food and beverage business activities.",
      "Handle basic financial records, inventory control, supplier coordination, pricing, and customer service.",
      "Adjust product and marketing decisions using customer feedback and sales performance.",
    ],
  },
  {
    period: "2024 · 2025",
    role: "Operations & Logistics Contributor",
    organization: "HIPMI PT Telkom and HIMA ADBIS",
    bullets: [
      "Supported logistics for HIPMI Jejak Budaya, Company Visit, Explore Business, and IEFBA 2025.",
      "Prepared equipment, coordinated distribution, and supported on-site execution.",
      "Built an early foundation in teamwork, adaptability, and operational problem solving.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div><p className="eyebrow">Experience</p><h1 className="page-title">Responsibility with a clear progression.</h1></div>
          <p className="lead">From running small F&B ventures and supporting operations to leading teams, building partnerships, and improving organizational systems.</p>
        </div>
      </section>
      <section className="section experience-section">
        <div className="shell">
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-item" key={experience.role}>
                <span className="period">{experience.period}</span>
                <div><h3>{experience.role}</h3><span className="org">{experience.organization}</span></div>
                <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="button-row experience-actions">
            <Link className="button button-dark" href="/kemal-cv.pdf" target="_blank">View full CV <ArrowUpRight size={17} /></Link>
            <Link className="button button-outline" href="/journey">Explore case studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
