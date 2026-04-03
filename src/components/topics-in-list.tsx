type TopicsInListProps = {
  title: string;
  topics: string[];
};

export function TopicsInList({ title, topics }: TopicsInListProps) {
  return (
    <article className="panel-cut panel-cut-cyan space-y-5">
      <h2 className="text-xl font-semibold uppercase tracking-[0.18em] text-[var(--color-heading)]">
        {title}
      </h2>
      <div className="space-y-3">
        {topics.map((topic) => (
          <div
            key={topic}
            className="flex items-center gap-3 border-l-2 border-[var(--color-accent)] pl-4 text-sm text-[var(--color-text)]"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_16px_rgba(13,205,205,0.45)]" />
            {topic}
          </div>
        ))}
      </div>
    </article>
  );
}
