import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { values } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Kemal's background, values, direction, and approach to growth.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">About me</p>
            <h1 className="page-title">I am building more than a list of experiences.</h1>
            <p className="lead">I am building the judgment, habits, and relationships needed to create value wherever I contribute.</p>
          </div>
          <div className="page-meta">
            <div className="page-meta-row"><span>Based in</span><strong>Bekasi & Bandung</strong></div>
            <div className="page-meta-row"><span>Studying</span><strong>Business Administration</strong></div>
            <div className="page-meta-row"><span>University</span><strong>Telkom University</strong></div>
            <div className="page-meta-row"><span>Current focus</span><strong>Strategy · Partnership · Leadership</strong></div>
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="shell split-section">
          <div className="sticky-label"><p className="eyebrow">My story</p></div>
          <div className="prose">
            <h2>Hi, I&apos;m Muhammad Irsyad Kemal Pasha Ramadhan.</h2>
            <p>
              I am a Business Administration student at the Faculty of Economics and Business,
              Telkom University. For me, university is not only a place to earn a degree. It is a
              space to explore opportunities, test my abilities, and grow through responsibilities
              that cannot be simulated in a classroom.
            </p>
            <p>
              My interest in business began through direct experience. Since senior high school, I
              have explored small food and beverage ventures. I handled products, basic financial
              records, inventory, supplier coordination, pricing, and customer feedback. Selling at
              the IEFBA 2025 event reinforced a simple lesson: a business only works when the value
              for the customer and the discipline behind the operation meet.
            </p>
            <p>
              Organizational work gave me another learning environment. HIPMI PT Telkom allowed me
              to start from logistics, understand field execution, and appreciate the details behind
              every successful program. Greater responsibilities later moved me into partnership,
              sponsorship, mentoring, division leadership, and committee leadership.
            </p>
            <p className="big-statement">
              The common thread is not collecting positions. It is learning how to serve a goal,
              support a team, and improve the system around the work.
            </p>
            <p>
              Today, my role as Department Manager of Business Strategy in the Operating Division of
              Community Support Center Telkom University challenges me to think at a different level.
              The work includes reviewing partnerships, defining quality standards, evaluating
              vendors, and developing operational recommendations. It shifts my attention from the
              success of one event to the health of a repeatable system.
            </p>
            <p>
              I want to become a professional who combines commercial understanding with practical
              leadership. My goal is to build strong collaborations, develop sustainable solutions,
              and contribute to organizations and communities in ways that people can see and use.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight about-values">
        <div className="shell split-section">
          <div className="sticky-label"><p className="eyebrow">Core values</p></div>
          <div className="value-list">
            {values.map((value) => (
              <div className="value-row" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section about-vision">
        <div className="shell split-section">
          <p className="eyebrow light">Vision & mission</p>
          <div className="prose about-vision-copy">
            <h2>To grow into a business leader who creates practical and sustainable value.</h2>
            <p className="vision-lead">
              I pursue this direction by learning from real work, building relationships with
              integrity, turning problems into structured action, and helping teams grow through
              clarity and shared responsibility.
            </p>
            <div className="button-row vision-actions">
              <Link className="button button-light" href="/journey">See how I am progressing <ArrowUpRight size={17} /></Link>
              <Link
  className="button button-outline vision-outline"
  href="/contact"
>
  Connect with me
</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
