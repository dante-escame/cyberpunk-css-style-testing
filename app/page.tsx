import { PrototypeNavTabs } from "../src/components/prototype-nav-tabs";
import { SimpleAssetsShowcase } from "../src/components/simple-assets-showcase";
import { TopicsInList } from "../src/components/topics-in-list";
import { TopicsInSquares } from "../src/components/topics-in-squares";

const stackTopics = [
  "Next.js 16 App Router",
  "Tailwind CSS v4",
  "Docker standalone build",
  "Vercel deployment",
  "MongoDB Atlas integration"
];

const visualTopics = [
  "Core purple structural framing",
  "Punk-red text emphasis",
  "Selective cyan word highlights",
  "Mono-forward technical typography"
];

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--color-text)]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-10 px-6 py-20 md:px-10">
        <div className="space-y-4">
          <p className="inline-flex w-fit items-center gap-2 border border-[var(--color-accent)]/60 bg-[var(--color-panel)] px-3 py-1 text-xs uppercase tracking-[0.35em] text-[var(--color-accent)] shadow-[var(--shadow-glow-soft)]">
            Day 1 setup
          </p>
          <h1 className="max-w-4xl text-5xl font-black uppercase tracking-[0.08em] text-[var(--color-heading)] md:text-7xl">
            Cyberpunk style test sandbox
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[var(--color-text)] md:text-lg">
            The repository is now aligned around{" "}
            <span className="text-[var(--color-cyan)]">Next.js 16</span>,{" "}
            <span className="text-[var(--color-cyan)]">App Router</span>,{" "}
            <span className="text-[var(--color-cyan)]">Tailwind CSS v4</span>,
            and a first-pass purple punk cyberpunk design system for future
            portfolio experiments.
          </p>
        </div>

        <PrototypeNavTabs
          homePanel={
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <TopicsInSquares
                  note="Locked for Day 1"
                  title="Stack direction"
                  topics={stackTopics}
                />
                <TopicsInList title="Visual pillars" topics={visualTopics} />
              </div>

              <article className="panel-cut max-w-4xl">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Active palette
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)] md:text-base">
                  The current sandbox uses{" "}
                  <span className="text-[var(--color-cyan)]">#800080</span> for
                  structural glow and borders,{" "}
                  <span className="text-[var(--color-cyan)]">#df024a</span> as
                  the dominant punk text color, and{" "}
                  <span className="text-[var(--color-cyan)]">#0dcdcd</span> for
                  selective highlight words and indicator accents.
                </p>
              </article>
            </div>
          }
          simpleAssetsPanel={<SimpleAssetsShowcase />}
        />
      </section>
    </main>
  );
}
