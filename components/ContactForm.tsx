"use client";

import { type SubmitEvent, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { site } from "@/content/site";

export function ContactForm() {
  const [copied, setCopied] = useState(false);

  function submit(event: SubmitEvent<HTMLFormElement>) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "");
  const email = String(data.get("email") || "");
  const subject = String(data.get("subject") || "Portfolio inquiry");
  const message = String(data.get("message") || "");

  const body = `Hi Kemal,

${message}

Best,
${name}
${email}`;

  window.location.href =
    `mailto:${site.email}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
}

  async function copyEmail() {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>
          Your name
          <input name="name" required placeholder="How should I address you?" />
        </label>
        <label>
          Email
          <input name="email" required type="email" placeholder="you@company.com" />
        </label>
      </div>
      <label>
        Subject
        <input name="subject" required placeholder="Collaboration, project, or conversation" />
      </label>
      <label>
        Message
        <textarea name="message" required rows={6} placeholder="Tell me a little about what you have in mind." />
      </label>
      <div className="form-actions">
        <button className="button button-dark" type="submit">
          Open email draft <ArrowUpRight size={17} aria-hidden="true" />
        </button>
        <button className="copy-button" type="button" onClick={copyEmail}>
          {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          {copied ? "Email copied" : "Copy email"}
        </button>
      </div>
      <p className="form-note">Submitting opens your default email app. No information is stored on this website.</p>
    </form>
  );
}
