import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on leadership, partnership, business learning, and organizational growth.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div><p className="eyebrow">Journal</p><h1 className="page-title">Notes from learning by doing.</h1></div>
          <p className="lead">Short reflections on leadership, partnership, operating systems, and lessons that become clearer after the work is done.</p>
        </div>
      </section>
      <section className="section journal-section">
  <div className="shell blog-grid journal-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.slug}>
              <div className="post-meta"><span>{post.category}</span><span>{post.date}</span></div>
              <h2>{post.title}</h2><p>{post.excerpt}</p>
              <Link className="card-link" href={`/blog/${post.slug}`}>Read article <ArrowUpRight size={17} /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
