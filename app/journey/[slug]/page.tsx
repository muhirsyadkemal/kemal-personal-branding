import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getJourneyItem, journeyItems } from "@/content/journey";

export function generateStaticParams() {
  return journeyItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getJourneyItem(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

function BulletCards({ items }: { items: string[] }) {
  return (
    <div className="bullet-grid">
      {items.map((text, index) => (
        <div className="bullet-card" key={text}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export default async function JourneyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getJourneyItem(slug);
  if (!item) notFound();
  const index = journeyItems.findIndex((entry) => entry.slug === slug);
  const previous = journeyItems[index - 1];
  const next = journeyItems[index + 1];

  return (
    <>
      <section className="case-hero" data-year={item.year}>
        <div className="shell">
          <p className="eyebrow light">{item.eyebrow} · {item.year}</p>
          <h1 className="case-title">{item.title}</h1>
          <div className="case-intro">
            <p>{item.summary}</p>
            <div className="case-meta">
              <div><span>Role</span><strong>{item.role}</strong></div>
              <div><span>Organization</span><strong>{item.organization}</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-block">
        <div className="shell case-block-grid">
          <span className="case-number">01 · CONTEXT</span>
          <div className="case-content">
            <h2>Why this experience mattered</h2>
            {item.background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
      <section className="case-block">
        <div className="shell case-block-grid">
          <span className="case-number">02 · RESPONSIBILITY</span>
          <div className="case-content"><h2>What I was responsible for</h2><BulletCards items={item.responsibilities} /></div>
        </div>
      </section>
      <section className="case-block case-block-muted">
        <div className="shell case-block-grid">
          <span className="case-number">03 · CHALLENGE</span>
          <div className="case-content"><h2>The problems I had to navigate</h2><BulletCards items={item.challenges} /></div>
        </div>
      </section>
      <section className="case-block">
        <div className="shell case-block-grid">
          <span className="case-number">04 · APPROACH</span>
          <div className="case-content"><h2>How I approached the work</h2><BulletCards items={item.approach} /></div>
        </div>
      </section>
      <section className="case-block">
        <div className="shell case-block-grid">
          <span className="case-number">05 · OUTCOME</span>
          <div className="case-content">
            <h2>What changed because of the experience</h2>
            <BulletCards items={item.outcomes} />
            <p className="case-note">
              Verified participant, partner, team, and financial metrics can be added here when the
              internal documentation is ready for public use.
            </p>
          </div>
        </div>
      </section>
      <section className="case-block case-block-reflection">
        <div className="shell case-block-grid">
          <span className="case-number">06 · REFLECTION</span>
          <div className="case-content"><h2>What I carry forward</h2><BulletCards items={item.lessons} /></div>
        </div>
      </section>

      {item.quote ? <section className="case-quote"><div className="shell"><blockquote>{item.quote}</blockquote></div></section> : null}

      <nav
  className="section-tight case-navigation"
  aria-label="Case study navigation"
>
  <div className="shell case-navigation-inner">
          {previous ? <Link className="text-link" href={`/journey/${previous.slug}`}><ArrowLeft size={17} /> Previous story</Link> : <span />}
          {next ? <Link className="text-link" href={`/journey/${next.slug}`}>Next story <ArrowRight size={17} /></Link> : <Link className="text-link" href="/journey">All stories <ArrowRight size={17} /></Link>}
        </div>
      </nav>
    </>
  );
}
