import type { MetadataRoute } from "next";
import { journeyItems } from "@/content/journey";
import { posts } from "@/content/blog";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const pages = ["", "/about", "/journey", "/experience", "/projects", "/skills", "/blog", "/gallery", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...journeyItems.map((item) => ({ url: `${base}/journey/${item.slug}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date() })),
  ];
}
