import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-chrome";
import { InterviewCard, AdvertisersSection } from "@/components/sections";
import { INTERVIEWS } from "@/data/media";

export const Route = createFileRoute("/interviews")({
  head: () => ({
    meta: [
      { title: "Current Interviews | SA Diplomat Abroad" },
      {
        name: "description",
        content:
          "Watch SA Diplomat Abroad interviews with ambassadors, athletes, chefs, entrepreneurs and South Africans living in Qatar and beyond.",
      },
      { property: "og:title", content: "Current Interviews | SA Diplomat Abroad" },
      {
        property: "og:description",
        content:
          "Interviews with ambassadors, athletes, chefs and entrepreneurs from the global South African community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InterviewsPage,
});

const CATEGORIES = ["All", "Diplomacy", "Business", "Culture", "Sport", "Travel", "Community"];

function InterviewsPage() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? INTERVIEWS : INTERVIEWS.filter((i) => i.category === active);
  const [featured, ...rest] = list;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Video library"
          title="Current interviews"
          subtitle="Conversations with ambassadors, business leaders, athletes and creatives from the global South African community — recorded in Doha and around the world."
        />

        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {featured && (
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div
                className="overflow-hidden rounded-2xl border border-border"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                <div className="aspect-video w-full bg-surface-2">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${featured.id}`}
                    title={featured.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                  {featured.title}
                </h2>
                <div className="mt-4 h-0.5 w-24 flag-rule" />
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          )}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((i) => (
              <InterviewCard key={i.id} item={i} />
            ))}
          </div>
        </section>

        <AdvertisersSection />
      </main>
      <SiteFooter />
    </div>
  );
}
