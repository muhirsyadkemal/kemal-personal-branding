import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Kemal to discuss business, collaboration, student initiatives, and ideas." };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div><p className="eyebrow">Contact</p><h1 className="page-title">Let&apos;s build something meaningful together.</h1></div>
          <p className="lead">Whether it is business, collaboration, a student initiative, or simply exchanging ideas, I would be happy to connect.</p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="shell contact-grid">
          <aside className="contact-details">
            <h2>Start with a hello.</h2>
            <p>Share the context, objective, and the kind of conversation you would like to have. I will respond as soon as I can.</p>
            <div className="contact-link-list">
              <a href={`mailto:${site.email}`}><span><Mail size={16} /> {site.email}</span><ArrowUpRight size={16} /></a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer"><span><MessageCircle size={16} /> WhatsApp</span><ArrowUpRight size={16} /></a>
              <div><span><MapPin size={16} /> {site.location}</span></div>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
