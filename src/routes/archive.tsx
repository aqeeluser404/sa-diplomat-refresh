import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-chrome";
import { ARTICLES, PERIOD_LABELS } from "@/data/articles";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "News Archive | SA Diplomat Abroad" },
      {
        name: "description",
        content:
          "Browse the full SA Diplomat Abroad news archive: market reports, quarterly insights and economic analysis by month.",
      },
      { property: "og:title", content: "News Archive | SA Diplomat Abroad" },
      {
        property: "og:description",
        content: "Every SA Diplomat Abroad market report and economic analysis, organised by month.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArchivePage,
});

function ArchivePage() {
  const periods = Object.keys(PERIOD_LABELS);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Archive"
          title="News archive"
          subtitle="Every market report, quarterly insight and economic analysis published by SA Diplomat Abroad, organised by month."
        />

        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-wrap gap-2.5">
            {periods.map((p) => (
              <a
                key={p}
                href={`#${p}`}
                className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {PERIOD_LABELS[p]}
              </a>
            ))}
          </div>

          {periods.map((p) => (
            <div key={p} id={p} className="mt-14 scroll-mt-24">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-foreground">{PERIOD_LABELS[p]}</h2>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ARTICLES.filter((a) => a.period === p).map((a) => (
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
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
