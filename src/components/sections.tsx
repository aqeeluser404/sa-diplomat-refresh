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
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our advertisers</h2>
            <div className="mt-3 h-0.5 w-24 flag-rule" />
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Proud partners supporting South African business and community abroad.
          </p>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {ADVERTISERS.map((a) => (
            <div
              key={a.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-background/40 p-4 transition-colors hover:border-primary/50"
            >
              <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-surface-2 p-2">
                <img
                  src={a.logo}
                  alt={`${a.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-center text-xs font-semibold text-muted-foreground">
                {a.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
