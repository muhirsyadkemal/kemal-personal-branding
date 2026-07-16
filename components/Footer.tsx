import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { navigation, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-lead">
          <p className="eyebrow light">Open to meaningful conversations</p>
          <h2>Let&apos;s build something worth remembering.</h2>
          <Link className="text-link light-link" href="/contact#contact-form">
            Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-contact">
          <div>
            <Mail size={18} aria-hidden="true" />
            <Link href="/contact#contact-form">{site.email}</Link>
          </div>
          <div>
            <MapPin size={18} aria-hidden="true" />
            <span>{site.location}</span>
          </div>
        </div>

        <div className="footer-nav">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Muhammad Irsyad Kemal Pasha Ramadhan</span>
        <span>Built around growth, collaboration, and impact.</span>
      </div>
    </footer>
  );
}
