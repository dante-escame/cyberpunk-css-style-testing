const palette = [
  {
    name: "Core Purple",
    value: "#800080",
    gradient: "linear-gradient(135deg, #2a062f 0%, #800080 52%, #cf3ad8 100%)",
    usage: "Structure, glow, borders"
  },
  {
    name: "Punk Red",
    value: "#df024a",
    gradient: "linear-gradient(135deg, #3a0817 0%, #df024a 50%, #ff5b93 100%)",
    usage: "Body emphasis, active text"
  },
  {
    name: "Signal Cyan",
    value: "#0dcdcd",
    gradient: "linear-gradient(135deg, #062a31 0%, #0dcdcd 50%, #8cf7f7 100%)",
    usage: "Selective highlights, markers"
  },
  {
    name: "Title Lavender",
    value: "#f6d8ff",
    gradient: "linear-gradient(135deg, #6b4b73 0%, #f6d8ff 48%, #ffffff 100%)",
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
          <p className="text-xs uppercase tracking-[0.28em] text-(--color-accent)">
            Simple Assets
          </p>
          <h3 className="text-2xl font-semibold uppercase tracking-[0.14em] text-(--color-heading)">
            Color palette
          </h3>
          <p className="max-w-2xl text-sm leading-7 text-(--color-text) md:text-base">
            Day 2 turns the visual direction into explicit tokens that can be
            reused across future routes and components.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {palette.map((color) => (
            <div
              key={color.value}
              className="border border-(--color-accent)/35 bg-[rgba(128,0,128,0.08)] p-4 shadow-[0_0_18px_rgba(128,0,128,0.14)]"
            >
              <div
                aria-hidden="true"
                className="h-20"
                style={{ backgroundImage: color.gradient }}
              />
              <div className="mt-4 flex items-center gap-2">
                <p className="text-xs uppercase tracking-[0.24em] text-(--color-heading)">
                  {color.name}
                </p>
                <span
                  aria-label={`${color.name} base color`}
                  className="h-3 w-3"
                  style={{ backgroundColor: color.value }}
                />
              </div>
              <p className="mt-2 text-sm text-(--color-cyan)">
                {color.value}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-(--color-text)/80">
                {color.usage}
              </p>
            </div>
          ))}
        </div>
      </article>

      <article className="panel-cut space-y-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-(--color-accent)">
            Token matrix
          </p>
          <h3 className="text-2xl font-semibold uppercase tracking-[0.14em] text-(--color-heading)">
            Design tokens
          </h3>
        </div>

        <div className="space-y-4">
          {tokenGroups.map((group) => (
            <section
              key={group.title}
              className="border border-(--color-accent)/30 bg-[rgba(20,7,26,0.64)] p-4"
            >
              <h4 className="text-xs uppercase tracking-[0.28em] text-(--color-cyan)">
                {group.title}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-(--color-border-cyan) bg-[rgba(13,205,205,0.08)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-(--color-heading)"
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
