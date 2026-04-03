const designPillars = [
  "Core purple structural framing",
  "Punk-red text emphasis",
  "Selective cyan word highlights",
  "Mono-forward technical typography"
];

export function VisualPillarsPanel() {
  return (
    <article className="panel-cut panel-cut-cyan space-y-5">
      <h2 className="text-xl font-semibold uppercase tracking-[0.18em] text-[var(--color-heading)]">
        Visual pillars
      </h2>
      <div className="space-y-3">
        {designPillars.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 border-l-2 border-[var(--color-accent)] pl-4 text-sm text-[var(--color-text)]"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_16px_rgba(13,205,205,0.45)]" />
            {item}
          </div>
        ))}
      </div>
    </article>
  );
}
