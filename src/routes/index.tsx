import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { InterviewCard, AdvertisersSection } from "@/components/sections";
import { ARTICLES, PERIOD_LABELS } from "@/data/articles";
import { INTERVIEWS, SPONSOR_BANNERS } from "@/data/media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SA Diplomat Abroad | News, Trade & Media for Global South Africans" },
      {
        name: "description",
        content:
          "Weekly market reports, economic insight and trade news for South Africans at home and abroad, hosted by Abdu-Raof Hanslo.",
      },
      {
        property: "og:title",
        content: "SA Diplomat Abroad | News, Trade & Media for Global South Africans",
      },
      {
        property: "og:description",
        content:
          "Weekly market reports, economic insight and trade news for South Africans at home and abroad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});





function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero + weekly market update */}
        <section
          className="border-b border-border"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-flag-green" />
                New episode weekly
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Weekly Market <span className="text-primary">Update</span>
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                News, trade and media for the global South African. Markets, currencies and
                economic insight unpacked every week with Abdu-Raof Hanslo.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://www.youtube.com/watch?v=Tk5z8RUwzg0"
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Watch the latest report
                </a>
                <a
                  href="#news"
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Read the articles
                </a>
              </div>
            </div>

            <div
              className="overflow-hidden rounded-2xl border border-border"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <div className="aspect-video w-full bg-surface-2">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Tk5z8RUwzg0"
                  title="Market Report 14 August 2026"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between gap-4 bg-surface px-4 py-3">
                <p className="text-sm font-semibold text-foreground">
                  Market Report — 14 August 2026
                </p>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  SA Diplomat Abroad
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsor marquee */}
        <section className="border-b border-border bg-surface/40 py-10">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Proudly sponsored by Camissa Asset Management
            </p>
          </div>
          <div className="mt-6 overflow-hidden">
            <div className="flex w-max gap-5 marquee-track">
              {[...SPONSOR_BANNERS, ...SPONSOR_BANNERS].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Camissa Asset Management advert"
                  loading="lazy"
                  className="h-20 w-auto rounded-lg border border-border object-cover opacity-90 transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </section>

        {/* News */}
        <section id="news" className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Latest news articles
              </h2>
              <div className="mt-3 h-0.5 w-24 flag-rule" />
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Analysis on South African markets, the rand, fuel prices and global events shaping
              the local economy.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <article
                key={a.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border card-elevated hover:-translate-y-1"
              >
                <Link
                  to="/news/$slug"
                  params={{ slug: a.slug }}
                  className="block overflow-hidden"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold uppercase tracking-wider text-foreground">
                      {a.tag}
                    </span>
                    <time>{a.date}</time>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                    <Link
                      to="/news/$slug"
                      params={{ slug: a.slug }}
                      className="transition-colors hover:text-primary"
                    >
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <Link
                    to="/news/$slug"
                    params={{ slug: a.slug }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Read more <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Archive */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-2xl font-bold text-foreground">Archive news</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {Object.keys(PERIOD_LABELS).map((p) => (
                <Link
                  key={p}
                  to="/archive"
                  hash={p}
                  className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {PERIOD_LABELS[p]}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Current interviews */}
        <section className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  Current interviews
                </h2>
                <div className="mt-3 h-0.5 w-24 flag-rule" />
              </div>
              <Link
                to="/interviews"
                className="text-sm font-semibold text-primary hover:opacity-80"
              >
                More interviews →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {INTERVIEWS.slice(0, 4).map((i) => (
                <InterviewCard key={i.id} item={i} />
              ))}
            </div>
          </div>
        </section>

        <AdvertisersSection />
      </main>

      <SiteFooter />
    </div>
  );
}
