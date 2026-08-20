import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | SA Diplomat Abroad" },
      {
        name: "description",
        content:
          "Get in touch with SA Diplomat Abroad for media enquiries, sponsorships, interviews and market commentary.",
      },
      { property: "og:title", content: "Contact Us | SA Diplomat Abroad" },
      {
        property: "og:description",
        content: "Get in touch with SA Diplomat Abroad for media enquiries and sponsorships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "https://sa-diplomat.com/wp-content/uploads/2021/09/contactPageImage.jpg",
      },
      {
        name: "twitter:image",
        content: "https://sa-diplomat.com/wp-content/uploads/2021/09/contactPageImage.jpg",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    window.location.href = `mailto:info@sa-diplomat.com?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact us"
          title="Let's start a conversation"
          subtitle="Media enquiries, sponsorship opportunities, interview requests or feedback on the weekly market report — we'd love to hear from you."
        />

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div
              className="overflow-hidden rounded-2xl border border-border"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <img
                src="https://sa-diplomat.com/wp-content/uploads/2021/09/contactPageImage.jpg"
                alt="Contact SA Diplomat Abroad"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-2xl border border-border p-6 card-elevated sm:p-8">
              <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked with an <span className="text-primary">*</span> are required.
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={field}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={field}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={field}
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send message
                </button>
              </form>

              <div className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
                Prefer to watch first?{" "}
                <a
                  href="https://www.youtube.com/channel/UCz-5fIOxAcTiXzj_FwzOaLg"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary"
                >
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
