import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { AdvertisersSection } from "@/components/sections";
import { ARTICLES } from "@/data/articles";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | SA Diplomat Abroad" }, { name: "robots", content: "noindex" }],
      };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} | SA Diplomat Abroad` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: a.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: a.image },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Article not found</h1>
        <Link to="/" className="mt-6 inline-block text-sm font-semibold text-primary">
          Back to home
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section
          className="border-b border-border"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="mx-auto max-w-3xl px-5 py-14 lg:py-16">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold uppercase tracking-wider text-foreground">
                {article.tag}
              </span>
              <time>{article.date}</time>
              <span>· By Abdu-Raof Hanslo</span>
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {article.title}
            </h1>
            <div className="mt-4 h-0.5 w-24 flag-rule" />
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-5 py-12">
          <img
            src={article.image}
            alt={article.title}
            className="w-full rounded-2xl border border-border object-cover"
          />
          <div className="mt-10 space-y-6">
            {article.body.map((b, i) =>
              b.t === "h2" || b.t === "h3" ? (
                <h2 key={i} className="pt-4 text-xl font-bold text-foreground sm:text-2xl">
                  {b.x}
                </h2>
              ) : (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {b.x}
                </p>
              ),
            )}
          </div>

          <div className="mt-12 flex flex-wrap gap-3 border-t border-border pt-8">
            <Link
              to="/archive"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Browse the archive
            </Link>
            <Link
              to="/"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Latest news
            </Link>
          </div>
        </article>

        <section className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-2xl font-bold text-foreground">More reading</h2>
            <div className="mt-3 h-0.5 w-24 flag-rule" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to="/news/$slug"
                  params={{ slug: a.slug }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border card-elevated hover:-translate-y-1"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <time className="text-xs text-muted-foreground">{a.date}</time>
                    <h3 className="mt-2 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {a.title}
                    </h3>
                  </div>
                </Link>
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
