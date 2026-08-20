import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | SA Diplomat Abroad" },
      {
        name: "description",
        content:
          "Photographs from SA Diplomat Abroad conferences, broadcasts and high-level meetings across South Africa and abroad.",
      },
      { property: "og:title", content: "Gallery | SA Diplomat Abroad" },
      {
        property: "og:description",
        content:
          "Photographs from SA Diplomat Abroad conferences, broadcasts and high-level meetings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "https://sa-diplomat.com/wp-content/uploads/2021/09/Gallery-image-01.jpg",
      },
      {
        name: "twitter:image",
        content: "https://sa-diplomat.com/wp-content/uploads/2021/09/Gallery-image-01.jpg",
      },
    ],
  }),
  component: GalleryPage,
});

const IMAGES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28,
].map(
  (n) =>
    `https://sa-diplomat.com/wp-content/uploads/2021/09/Gallery-image-${String(n).padStart(2, "0")}.jpg`,
);

function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our gallery"
          title="Moments from the SADA journey"
          subtitle="Conferences, broadcasts and high-level engagements across South Africa and around the world."
        />

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {IMAGES.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(src)}
                className="group block w-full overflow-hidden rounded-2xl border border-border card-elevated hover:-translate-y-1"
              >
                <img
                  src={src}
                  alt={`SA Diplomat Abroad gallery photograph ${i + 1}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </section>
      </main>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-5 backdrop-blur-sm"
        >
          <img
            src={active}
            alt="Enlarged gallery photograph"
            className="max-h-[85vh] w-auto max-w-full rounded-2xl border border-border"
          />
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
          >
            Close
          </button>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
