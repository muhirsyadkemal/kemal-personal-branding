import type { Metadata } from "next";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual record of Kemal's university, organizational, and project journey.",
};

type GalleryItem = {
  code: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

const gallery: GalleryItem[] = [
  {
    code: "2024.01",
    title: "First Days at Telkom University",
    text: "Campus & orientation",
    image: "/images/gallery/haripertama.jpg",
    alt: "First days at Telkom University",
  },
  {
    code: "2024.02",
    title: "HIPMI Jejak Budaya",
    text: "Community program in Cimahi",
    image: "/images/gallery/jejakbudaya.jpg",
    alt: "HIPMI Jejak Budaya community program",
  },
  {
    code: "2024.03",
    title: "Sari Roti & OPPO",
    text: "Industry learning",
    image: "/images/gallery/sariroti.jpg",
    alt: "Industry visit to Sari Roti and OPPO",
  },
  {
    code: "2025.01",
    title: "Explore Business at PT Agate",
    text: "Creative industry visit",
    image: "/images/gallery/agate.jpg",
    alt: "Business visit to PT Agate",
  },
  {
    code: "2025.02",
    title: "Staff Muda",
    text: "Logistics leadership",
    image: "/images/gallery/staffmuda.jpg",
    alt: "Staff Muda logistics team",
  },
  {
    code: "2025.03",
    title: "Investpreneur",
    text: "Sponsorship & fundraising",
    image: "/images/gallery/investpreneur.jpg",
    alt: "Investpreneur sponsorship and fundraising activity",
  },
  {
    code: "2025.04",
    title: "HIPMI Collab Expo",
    text: "Partnership in action",
    image: "/images/gallery/hce.jpg",
    alt: "HIPMI Collab Expo partnership activity",
  },
  {
    code: "2026.01",
    title: "TRANS TV Company Visit",
    text: "Project leadership",
    image: "/images/gallery/transtv.jpg",
    alt: "Company visit to TRANS TV",
  },
  {
    code: "2026.02",
    title: "Community Support Center Telkom University",
    text: "Business strategy",
    image: "/images/gallery/csc.jpg",
    alt: "Community Support Center business strategy department activity",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">Gallery</p>
            <h1 className="page-title">
              The people and moments behind the work.
            </h1>
          </div>
          <p className="lead">
            A visual record of university life, organizational
            responsibilities, industry visits, and the people who shaped each
            stage of my growth.
          </p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="shell">
          <div className={`gallery-grid ${styles.grid}`}>
            {gallery.map((item, index) => (
              <article className={`gallery-tile ${styles.tile}`} key={item.code}>
                {item.image ? (
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.alt}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ) : (
                  <div className={styles.placeholder} aria-hidden="true" />
                )}

                <div className={styles.shade} aria-hidden="true" />

                <div className={styles.content}>
                  <span className={styles.code}>{item.code}</span>
                  <div className={styles.copy}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="gallery-note">
            A growing archive of experiences, collaborations, and lessons from
            each stage of the journey.
          </p>
        </div>
      </section>
    </>
  );
}
