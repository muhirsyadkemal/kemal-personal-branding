import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="not-found-page"
      aria-labelledby="not-found-title"
    >
      <div className="shell not-found-shell">
        <p className="not-found-code">
          <span />
          Error 404
        </p>

        <h1 id="not-found-title">
          Looks like this path went off strategy.
        </h1>

        <p className="not-found-text">
          The page may have been moved, renamed, or is still being
          prepared. Let&apos;s return to the beginning.
        </p>

        <Link className="button button-light" href="/">
          <ArrowLeft size={17} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  );
}