import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

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

const LOGO =
  "https://sa-diplomat.com/wp-content/uploads/2021/09/SADA_Logo_ThinWhiteGlow-600-180.png";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "https://sa-diplomat.com/about/" },
  { label: "Gallery", href: "https://sa-diplomat.com/gallery/" },
  { label: "Contact Us", href: "https://sa-diplomat.com/contact-us/" },
];

const ARTICLES = [
  {
    title: "Camissa Insights Q2 | 2026",
    date: "29 July, 2026",
    excerpt:
      "In the second quarter, global economic activity has proved surprisingly resilient in the face of the…",
    image: "https://sa-diplomat.com/wp-content/uploads/2026/07/Article-Heading-Q2-2026.png",
    href: "https://sa-diplomat.com/camissa-insights-q2-2026/",
    tag: "Insights",
  },
  {
    title: "The Great JSE Divergence: Navigating the Recovery Gap in a Post-Iran War Market",
    date: "7 May, 2026",
    excerpt:
      "Since the first military strikes on February 28, 2026, the Johannesburg Stock Exchange hasn't just b…",
    image: "https://sa-diplomat.com/wp-content/uploads/2026/05/7-May-2026-Article.png",
    href: "https://sa-diplomat.com/the-great-jse-divergence-navigating-the-recovery-gap-in-a-post-iran-war-market/",
    tag: "Markets",
  },
  {
    title: "The Inflationary Impact of Rising Petrol Prices in South Africa",
    date: "4 May, 2026",
    excerpt:
      "South Africa is currently experiencing one of the most significant fuel price shocks in recent years…",
    image:
      "https://sa-diplomat.com/wp-content/uploads/2026/05/The-Inflationary-Impact-of-Rising-Petrol-Prices-in-South-Africa-PICTURE.png",
    href: "https://sa-diplomat.com/the-inflationary-impact-of-rising-petrol-prices-in-south-africa/",
    tag: "Economy",
  },
  {
    title: "Camissa insights Q1 | 2026",
    date: "28 April, 2026",
    excerpt:
      "Global economic activity, already weakened by aggressive, hostile US foreign policy and persistent p…",
    image: "https://sa-diplomat.com/wp-content/uploads/2026/04/Q1-2026-Commentary.png",
    href: "https://sa-diplomat.com/camissa-insights-q1-2026/",
    tag: "Insights",
  },
  {
    title: "From Chokepoint to Toll Gate: How Hormuz Could Reshape Oil Costs for South Africa",
    date: "12 April, 2026",
    excerpt:
      "The reopening of the Strait of Hormuz would ordinarily signal relief for global oil markets. As one …",
    image:
      "https://sa-diplomat.com/wp-content/uploads/2026/04/YouTube-Thumbnail-December-2022.png",
    href: "https://sa-diplomat.com/from-chokepoint-to-toll-gate-how-hormuz-could-reshape-oil-costs-for-south-africa/",
    tag: "Commodities",
  },
  {
    title: "The Economic Impact of Rising Petrol Prices in South Africa and Potential Price Ceilings",
    date: "31 March, 2026",
    excerpt:
      "South Africans are once again preparing for an increase in fuel costs, as volatility in global oil m…",
    image: "https://sa-diplomat.com/wp-content/uploads/2026/03/Petrol-Price-increase-SA.png",
    href: "https://sa-diplomat.com/the-economic-impact-of-rising-petrol-prices-in-south-africa-and-potential-price-ceilings/",
    tag: "Economy",
  },
  {
    title: "Preparing for an International Economic Crisis: Who Is to Blame?",
    date: "24 March, 2026",
    excerpt:
      "To assign responsibility to any individual or state, it is first necessary to understand the sequenc…",
    image: "https://sa-diplomat.com/wp-content/uploads/2026/03/Economic-Crisis-2026-Iran-War.png",
    href: "https://sa-diplomat.com/preparing-for-an-international-economic-crisis-who-is-to-blame/",
    tag: "Global",
  },
  {
    title: "Camissa insights Q4 | 2025",
    date: "12 February, 2026",
    excerpt:
      "Global economic activity has slowed due to increased US tariffs and persistent uncertainty surroundi…",
    image: "https://sa-diplomat.com/wp-content/uploads/2026/02/2025-Q4-Article-Cover.png",
    href: "https://sa-diplomat.com/camissa-insights-q4-2025/",
    tag: "Insights",
  },
  {
    title: "Camissa insights Q3 | 2025",
    date: "28 October, 2025",
    excerpt:
      "Global economic activity is slowing due to increased US tariffs and uncertainty surrounding generall…",
    image: "https://sa-diplomat.com/wp-content/uploads/2025/10/Q3-2025.png",
    href: "https://sa-diplomat.com/camissa-insights-q3-2025/",
    tag: "Insights",
  },
];

const SPONSOR_BANNERS = [
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Dec22.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Aug22.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Apr22.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Sept22.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Mar22-002.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Jan23.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Feb23.png",
];

const ARCHIVE = [
  ["July 2026", "https://sa-diplomat.com/2026/07/"],
  ["May 2026", "https://sa-diplomat.com/2026/05/"],
  ["April 2026", "https://sa-diplomat.com/2026/04/"],
  ["March 2026", "https://sa-diplomat.com/2026/03/"],
  ["February 2026", "https://sa-diplomat.com/2026/02/"],
  ["October 2025", "https://sa-diplomat.com/2025/10/"],
  ["August 2025", "https://sa-diplomat.com/2025/08/"],
  ["April 2025", "https://sa-diplomat.com/2025/04/"],
  ["February 2025", "https://sa-diplomat.com/2025/02/"],
  ["November 2024", "https://sa-diplomat.com/2024/11/"],
  ["July 2024", "https://sa-diplomat.com/2024/07/"],
  ["April 2024", "https://sa-diplomat.com/2024/04/"],
  ["January 2024", "https://sa-diplomat.com/2024/01/"],
  ["November 2023", "https://sa-diplomat.com/2023/11/"],
  ["September 2023", "https://sa-diplomat.com/2023/09/"],
  ["May 2023", "https://sa-diplomat.com/2023/05/"],
  ["March 2023", "https://sa-diplomat.com/2023/03/"],
  ["December 2022", "https://sa-diplomat.com/2022/12/"],
];

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
                key={a.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border card-elevated hover:-translate-y-1"
              >
                <a href={a.href} className="block overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold uppercase tracking-wider text-foreground">
                      {a.tag}
                    </span>
                    <time>{a.date}</time>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                    <a href={a.href} className="transition-colors hover:text-primary">
                      {a.title}
                    </a>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <a
                    href={a.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Read more <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Archive */}
        <section className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-2xl font-bold text-foreground">Archive news</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {ARCHIVE.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
