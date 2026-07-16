"use client";

import { type FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { site } from "@/content/site";
import styles from "./ContactForm.module.css";

type FormStatus = "idle" | "submitting" | "success" | "error" | "local";

function encodeFormData(data: FormData) {
  const encoded = new URLSearchParams();

  data.forEach((value, key) => {
    encoded.append(key, String(value));
  });

  return encoded.toString();
}

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);

    if (isLocal) {
      setStatus("local");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(new FormData(form)),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function clearMessage() {
    if (status !== "idle" && status !== "submitting") {
      setStatus("idle");
    }
  }

  return (
    <form
      id="contact-form"
      className="contact-form"
      name="contact"
      method="POST"
      onSubmit={submit}
      onChange={clearMessage}
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className={styles.honeypot} aria-hidden="true">
        <label>
          Do not fill this field
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

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
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me a little about what you have in mind."
        />
      </label>

      <div className="form-actions">
        <button className="button button-dark" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
          {status !== "submitting" ? <ArrowUpRight size={17} aria-hidden="true" /> : null}
        </button>

        <button className="copy-button" type="button" onClick={copyEmail}>
          {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          {copied ? "Email copied" : "Copy email"}
        </button>
      </div>

      <div className={styles.statusArea} aria-live="polite">
        {status === "success" ? (
          <p className={`${styles.status} ${styles.success}`}>
            Message sent successfully. Thank you — Kemal will receive it.
          </p>
        ) : null}

        {status === "error" ? (
          <p className={`${styles.status} ${styles.error}`}>
            The message could not be sent. Please try again or use Copy email.
          </p>
        ) : null}

        {status === "local" ? (
          <p className={`${styles.status} ${styles.local}`}>
            Local preview cannot send the form. Publish it to Netlify, then test it on the live site.
          </p>
        ) : null}

        {status === "idle" ? (
          <p className="form-note">
            Your message will be submitted securely through Netlify Forms.
          </p>
        ) : null}
      </div>
    </form>
  );
}
