import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { JourneyItem } from "@/content/journey";

export function JourneyCard({ item, index = 0 }: { item: JourneyItem; index?: number }) {
  return (
    <article className="journey-card">
      <div className="journey-card-top">
        <span>{item.year}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div>
        <p className="card-eyebrow">{item.eyebrow}</p>
        <h3>{item.title}</h3>
        <p className="card-role">{item.role}</p>
        <p>{item.summary}</p>
      </div>
      <div className="tag-list">
        {item.tags.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <Link className="card-link" href={`/journey/${item.slug}`} aria-label={`Read ${item.title}`}>
        Read case study <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </article>
  );
}
