import { Link } from "@tanstack/react-router";
import { useState } from "react";

export const LOGO =
  "https://sa-diplomat.com/wp-content/uploads/2021/09/SADA_Logo_ThinWhiteGlow-600-180.png";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Interviews", to: "/interviews" },
  { label: "Archive", to: "/archive" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="h-0.5 w-full flag-rule" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO} alt="SA Diplomat Abroad logo" className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeProps={{ className: "bg-secondary text-foreground" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.youtube.com/channel/UCz-5fIOxAcTiXzj_FwzOaLg"
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Subscribe
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md border border-border p-2 text-foreground md:hidden"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open && (
        <nav className="border-t border-border px-5 pb-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center">
        <img src={LOGO} alt="SA Diplomat Abroad" className="h-10 w-auto" />
        <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
          Content is intended for information purposes only and should under no circumstances be
          construed as financial advice. It is imperative to seek advice from a registered and
          accredited Financial Adviser, Planner or Broker.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          {NAV.map((item) => (
            <Link key={item.label} to={item.to} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SA Diplomat Abroad. All rights reserved.
        </p>
      </div>
      <div className="h-1 w-full flag-rule" />
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section
      className="border-b border-border"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-flag-green" />
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 h-0.5 w-24 flag-rule" />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
