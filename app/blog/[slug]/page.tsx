import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/blog";

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
return (
  <article className="journal-article">
    <header className="article-header">
      <div className="article-shell">
        <Link
          className="text-link article-back-link"
          href="/blog"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All journal notes
        </Link>

        <p className="eyebrow article-category">
          {post.category}
        </p>

        <h1>{post.title}</h1>

        <div className="article-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
          <span>By Muhammad Irsyad Kemal Pasha Ramadhan</span>
        </div>
      </div>
    </header>

    <div className="article-body article-shell">
      {post.sections.map((section, index) => (
        <section key={index}>
          {section.heading ? (
            <h2>{section.heading}</h2>
          ) : null}

          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {section.quote ? (
            <blockquote>{section.quote}</blockquote>
          ) : null}
        </section>
      ))}
    </div>
  </article>
);
}
