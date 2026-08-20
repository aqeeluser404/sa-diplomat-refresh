import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Abdu-Raof Hanslo | SA Diplomat Abroad" },
      {
        name: "description",
        content:
          "Meet Abdu-Raof Hanslo, founder and CEO of SA Diplomat Abroad — investment finance professional, broadcaster and editor-in-chief.",
      },
      { property: "og:title", content: "About Abdu-Raof Hanslo | SA Diplomat Abroad" },
      {
        property: "og:description",
        content:
          "Founder and CEO of SA Diplomat Abroad — investment finance professional, broadcaster and editor-in-chief.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "https://sa-diplomat.com/wp-content/uploads/2021/09/Abdu-raof_Hanslo.png",
      },
      {
        name: "twitter:image",
        content: "https://sa-diplomat.com/wp-content/uploads/2021/09/Abdu-raof_Hanslo.png",
      },
    ],
  }),
  component: AboutPage,
});

const BIO = [
  "Abdu-Raof Hanslo is the founder of SA Diplomat Abroad (Pty) Ltd.",
  "He is a former investment finance professional who managed his own business development consultancy in South Africa.",
  "He is a successful television and radio personality, presenting talk shows within the finance sector.",
  "He is also the editor of two well known publications and currently the Editor in Chief of the SA Diplomat Abroad electronic newspaper.",
  "Abdu-Raof also presents the SA Diplomat Abroad YouTube channel.",
  "In his role as CEO of SA Diplomat Abroad, he has facilitated and chaired many high level conferences and meetings in both the private and government sectors in South Africa and internationally.",
];

const HIGHLIGHTS = [
  { value: "CEO", label: "Founder, SA Diplomat Abroad (Pty) Ltd" },
  { value: "TV & Radio", label: "Finance talk show presenter" },
  { value: "Editor in Chief", label: "SA Diplomat Abroad newspaper" },
  { value: "Global", label: "Chairs private & government forums" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About us"
          title="The people behind SA Diplomat Abroad"
          subtitle="News, trade and media for the global South African — built on decades of finance, broadcast and editorial experience."
        />

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div
                className="overflow-hidden rounded-2xl border border-border bg-surface"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                <img
                  src="https://sa-diplomat.com/wp-content/uploads/2021/09/Abdu-raof_Hanslo.png"
                  alt="Abdu-Raof Hanslo, CEO of SA Diplomat Abroad"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Chief Executive Officer
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                Abdu-Raof Hanslo
              </h2>
              <div className="mt-4 space-y-4">
                {BIO.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.value}
                    className="rounded-xl border border-border p-4 card-elevated"
                  >
                    <p className="text-lg font-semibold text-primary">{h.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
