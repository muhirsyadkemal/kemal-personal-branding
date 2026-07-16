import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery", description: "A documentation index for Kemal's university, organizational, and project journey." };

const gallery = [
  ["2024.01", "First Days at Telkom University", "Campus & orientation"],
  ["2024.02", "HIPMI Jejak Budaya", "Community program in Cimahi"],
  ["2024.03", "Sari Roti & OPPO", "Industry learning"],
  ["2025.01", "Explore Business at PT Agate", "Creative industry visit"],
  ["2025.02", "Staff Muda", "Logistics leadership"],
  ["2025.03", "Investpreneur", "Sponsorship & fundraising"],
  ["2025.04", "HIPMI Collab Expo", "Partnership in action"],
  ["2026.01", "TRANS TV Company Visit", "Project leadership"],
  ["2026.02", "Community Support Center", "Business strategy"],
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div><p className="eyebrow">Gallery</p><h1 className="page-title">The people and moments behind the work.</h1></div>
          <p className="lead">
  A visual record of university life, organizational responsibilities,
  industry visits, and the people who shaped each stage of my growth.
</p>
        </div>
      </section>
      <section className="section gallery-section">
        <div className="shell">
          <div className="gallery-grid">
            {gallery.map(([code, title, text]) => (
              <article className="gallery-tile" key={code}>
                <span className="gallery-code">{code}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <p className="gallery-note">
  A growing archive of experiences, collaborations, and lessons from each
  stage of the journey.
</p>
        </div>
      </section>
    </>
  );
}
