const palette = [
  {
    name: "Core Purple",
    value: "#800080",
    usage: "Structure, glow, borders"
  },
  {
    name: "Punk Red",
    value: "#df024a",
    usage: "Body emphasis, active text"
  },
  {
    name: "Signal Cyan",
    value: "#0dcdcd",
    usage: "Selective highlights, markers"
  },
  {
    name: "Title Lavender",
    value: "#f6d8ff",
    usage: "Headings, bright focal text"
  }
];

const tokenGroups = [
  {
    title: "Shadows",
    items: ["soft glow", "cyan focus ring", "panel elevation"]
  },
  {
    title: "Spacing",
    items: ["section gap 2.5rem", "panel padding 1.5rem", "chip gap 0.5rem"]
  },
  {
    title: "Radius",
    items: ["minimal rounding", "clipped panel corners", "sharp tactical edges"]
  },
  {
    title: "Type Scale",
    items: ["11px labels", "12px core body", "24px panel titles", "hero 48px+"]
  }
];

export function SimpleAssetsShowcase() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <article className="panel-cut panel-cut-cyan space-y-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Simple Assets
          </p>
          <h3 className="text-2xl font-semibold uppercase tracking-[0.14em] text-[var(--color-heading)]">
            Color palette
          </h3>
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-text)] md:text-base">
            Day 2 turns the visual direction into explicit tokens that can be
            reused across future routes and components.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {palette.map((color) => (
            <div
              key={color.value}
              className="border border-[var(--color-accent)]/35 bg-[rgba(128,0,128,0.08)] p-4 shadow-[0_0_18px_rgba(128,0,128,0.14)]"
            >
              <div
                aria-hidden="true"
                className="h-20 border border-white/10"
                style={{ backgroundColor: color.value }}
              />
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[var(--color-heading)]">
                {color.name}
              </p>
              <p className="mt-2 text-sm text-[var(--color-cyan)]">
                {color.value}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-text)]/80">
                {color.usage}
              </p>
            </div>
          ))}
        </div>
      </article>

      <article className="panel-cut space-y-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Token matrix
          </p>
          <h3 className="text-2xl font-semibold uppercase tracking-[0.14em] text-[var(--color-heading)]">
            Design tokens
          </h3>
        </div>

        <div className="space-y-4">
          {tokenGroups.map((group) => (
            <section
              key={group.title}
              className="border border-[var(--color-accent)]/30 bg-[rgba(20,7,26,0.64)] p-4"
            >
              <h4 className="text-xs uppercase tracking-[0.28em] text-[var(--color-cyan)]">
                {group.title}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--color-border-cyan)] bg-[rgba(13,205,205,0.08)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-heading)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
