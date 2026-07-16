import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Kemal's skills, evidence of application, and language proficiency.",
};

const skills = [
  { title: "Business Strategy", text: "Structuring quality criteria, reviewing collaboration, and turning evaluation into practical recommendations.", evidence: "Applied at Community Support Center Telkom University." },
  { title: "Partnership Development", text: "Prospect research, value alignment, outreach support, follow-up, and stakeholder relationship management.", evidence: "Applied in HIPMI External Affairs and sponsorship programs." },
  { title: "Project Leadership", text: "Aligning objectives, division ownership, timelines, dependencies, and decisions across a committee.", evidence: "Applied as Project Leader and Vice Project Leader." },
  { title: "Operating Excellence", text: "Planning logistics, preparing resources, supporting field execution, and improving repeatable operational readiness.", evidence: "Applied from logistics staff to division leadership." },
  { title: "Research & CRM", text: "Organizing company information, industry categories, contact history, and opportunity context for future use.", evidence: "Applied through the HIPMI company prospect database." },
  { title: "Entrepreneurship", text: "Product preparation, pricing, inventory, supplier coordination, customer service, and basic financial records.", evidence: "Applied through independent F&B ventures and IEFBA 2025." },
  { title: "Communication", text: "Adapting messages for teams, division leaders, prospective partners, vendors, and external stakeholders.", evidence: "Applied across partnership, sponsorship, and committee roles." },
  { title: "Problem Solving", text: "Identifying critical blockers, prioritizing decisions, and responding to changing operational requirements.", evidence: "Applied in field operations and committee leadership." },
];

export default function SkillsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div><p className="eyebrow">Skills</p><h1 className="page-title">Capabilities supported by real application.</h1></div>
          <p className="lead">Skills are more credible when connected to a responsibility, decision, or result. Each capability below includes where it has been practiced.</p>
        </div>
      </section>
      <section className="section skills-section">
        <div className="shell skill-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
              <div className="evidence">Evidence: {skill.evidence}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-tight language-section">
  <div className="shell split-section">
    <div>
      <p className="eyebrow">Languages</p>
      <h2 className="language-title">Communication range</h2>
    </div>

    <div className="language-list">
      <div className="language-row">
        <strong>Indonesian</strong>
        <span>Native / Proficient</span>
      </div>

      <div className="language-row">
        <strong>Arabic</strong>
        <span>Intermediate</span>
      </div>

      <div className="language-row">
        <strong>English</strong>
        <span>Basic conversation</span>
      </div>
    </div>
  </div>
      </section>
    </>
  );
}
