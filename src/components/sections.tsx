import { ADVERTISERS, type Interview } from "@/data/media";

export function InterviewCard({ item }: { item: Interview }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-border card-elevated hover:-translate-y-1"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
        {item.thumb && (
          <img
            src={item.thumb}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
          {item.category}
        </span>
        <h3 className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </h3>
      </div>
    </a>
  );
}

export function AdvertisersSection() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Proudly Supported By
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Our Advertisers
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 flag-rule" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {ADVERTISERS.map((a) => (
            <div
              key={a.name}
              className="group flex items-center justify-center"
              title={a.name}
            >
              <img
                src={a.logo}
                alt={`${a.name} logo`}
                loading="lazy"
                className="max-h-20 w-auto object-contain rounded-lg transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
              {/* className="max-h-20 w-auto object-contain grayscale opacity-60 rounded-lg transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" */}
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-muted-foreground">
          Proud partners supporting South African business and community abroad.
        </p>
      </div>
    </section>
  );
}
