import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Handshake,
  Network,
} from "lucide-react";
import { JourneyCard } from "@/components/JourneyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { journeyItems } from "@/content/journey";
import { site, stats } from "@/content/site";

export default function HomePage() {
  const featured = journeyItems.filter((item) => item.featured).slice(0, 6);

  return (
    <>
<section className="hero">
  <div className="shell hero-grid">
    <div className="hero-copy">
      <div className="hero-kicker">
        <span>Business Administration · Telkom University</span>
      </div>

      <div className="hero-title">
        <p className="eyebrow light">Hello, I&apos;m Kemal</p>

        <h1 className="display-title">
          Building value
          <br />
          through <em>strategy,</em>
          <br />
          people &amp; action.
        </h1>
      </div>

      <div className="hero-bottom">
        <p>
          I&apos;m a Business Administration student intentionally building
          the experience, judgment, and mindset to become a future business
          leader.
        </p>

        <div className="button-row">
          <Link className="button button-light" href="/journey">
            Explore my journey
            <ArrowDownRight size={17} aria-hidden="true" />
          </Link>

          <Link className="button hero-outline-button" href="/projects">
            View projects
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>

    <div className="hero-visual">
      <div className="hero-visual-badge">
        <i />
        <span>Open to meaningful opportunities</span>
      </div>

      <img
        src="/images/kemal-profile.png"
        alt="Muhammad Irsyad Kemal Pasha Ramadhan"
        width={842}
        height={955}
      />
    </div>
  </div>
</section>

      <section className="section">
        <div className="shell intro-grid">
        <aside className="profile-panel">
  <div className="profile-panel-top">
    <span>Profile · 2026</span>
    <i />
  </div>

  <div className="profile-monogram profile-photo">
  <img
    src="/icon.png"
    alt="Kemal"
    width={180}
    height={180}
  />
</div>

  <div className="profile-panel-copy">
    <p>Business Administration Student</p>
    <h3>Muhammad Irsyad Kemal Pasha Ramadhan</h3>
  </div>

  <div className="profile-facts">
    <div>
      <span>Based in</span>
      <strong>{site.location}</strong>
    </div>

    <div>
      <span>Education</span>
      <strong>Business Administration</strong>
    </div>

    <div>
      <span>Current focus</span>
      <strong>Strategy · Partnership · Leadership</strong>
    </div>
  </div>

  <Link
    className="profile-cv-link"
    href={site.cvPath}
    target="_blank"
  >
    View full CV
    <ArrowUpRight size={17} aria-hidden="true" />
  </Link>
</aside>
          <div className="intro-copy">
            <p className="eyebrow">A quick introduction</p>
            <h2>Learning beyond the classroom, one responsibility at a time.</h2>
            <p>
              As a Business Administration student at Telkom University, I develop myself through
              entrepreneurship, organizational leadership, partnership, and projects that demand
              real accountability.
            </p>
            <p>
              I enjoy building collaboration, making complex work more structured, and turning an
              idea into something a team can execute. My journey has taken me from logistics and
              field operations to sponsorship, committee leadership, and business strategy.
            </p>
            <blockquote>
              I want every role I take to leave stronger people, clearer systems, and useful value.
            </blockquote>
            <Link className="text-link" href="/about">
              More about me <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <SectionHeading
            inverted
            eyebrow="What I am building"
            title="Three connected areas of professional growth."
            text="Each experience strengthens a different part of the same goal: becoming someone who can understand a problem, align people, and deliver useful outcomes."
          />
          <div className="focus-grid">
            <article className="focus-card" data-index="01">
              <BriefcaseBusiness size={26} strokeWidth={1.7} aria-hidden="true" />
              <h3>Business thinking</h3>
              <p>Studying customers, operations, quality, and systems to understand how organizations create and sustain value.</p>
            </article>
            <article className="focus-card" data-index="02">
              <Handshake size={26} strokeWidth={1.7} aria-hidden="true" />
              <h3>Partnership</h3>
              <p>Building external relationships through research, professional communication, follow-up, and shared value.</p>
            </article>
            <article className="focus-card" data-index="03">
              <Network size={26} strokeWidth={1.7} aria-hidden="true" />
              <h3>Leadership</h3>
              <p>Creating clarity, coordinating teams, resolving blockers, and helping people take ownership of a common goal.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Selected journey"
            title="Experience becomes valuable when it changes how you think and work."
            text="These are selected moments that shaped my progression from operational contributor to project leader and strategy manager."
          />
          <div className="journey-grid">
            {featured.map((item, index) => <JourneyCard key={item.slug} item={item} index={index} />)}
          </div>
          <div style={{ marginTop: 34 }}>
            <Link className="button button-dark" href="/journey">
              View the full timeline <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell direction-panel">
          <div className="section-heading direction-content">
            <p className="eyebrow">Current direction</p>
            <div>
              <h2>Designing better systems for people to do their best work.</h2>
              <p className="lead">
                At CSC Telkom University, I am learning to evaluate partnerships, define quality,
                and improve operational standards. It is where project experience begins to become
                strategic thinking.
              </p>
              <Link className="text-link" href="/journey/csc-business-strategy">
                Read the CSC case study <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
