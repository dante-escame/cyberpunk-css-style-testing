"use client";

import { useState } from "react";

type TabId = "home" | "simple-assets";

type PrototypeNavTabsProps = {
  homePanel: React.ReactNode;
  simpleAssetsPanel: React.ReactNode;
};

const tabs: Array<{ id: TabId; label: string; hint: string }> = [
  {
    id: "home",
    label: "Home",
    hint: "Server-rendered overview"
  },
  {
    id: "simple-assets",
    label: "Simple Assets",
    hint: "Server-rendered token lab"
  }
];

export function PrototypeNavTabs({
  homePanel,
  simpleAssetsPanel
}: PrototypeNavTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  return (
    <section className="panel-cut space-y-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Day 2 prototype navigation
          </p>
          <h2 className="text-2xl font-semibold uppercase tracking-[0.14em] text-[var(--color-heading)]">
            Server-first tab shell
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-text)] md:text-base">
            The tab interaction is the only client-side boundary. Each tab
            panel stays server-rendered so the page demonstrates the current
            component rules in practice.
          </p>
        </div>

        <div
          aria-label="Prototype sections"
          className="inline-flex w-fit flex-wrap gap-2"
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                aria-controls={`${tab.id}-panel`}
                aria-selected={isActive}
                className={[
                  "min-w-40 border px-4 py-3 text-left transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
                  isActive
                    ? "border-[var(--color-cyan)] bg-[rgba(13,205,205,0.1)] text-[var(--color-heading)] shadow-[0_0_22px_rgba(13,205,205,0.16)]"
                    : "border-[var(--color-accent)]/45 bg-[rgba(128,0,128,0.08)] text-[var(--color-text)] hover:border-[var(--color-cyan)]/55 hover:text-[var(--color-heading)]"
                ].join(" ")}
                id={`${tab.id}-tab`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                type="button"
              >
                <span className="block text-xs uppercase tracking-[0.28em] text-[var(--color-cyan)]">
                  {tab.label}
                </span>
                <span className="mt-2 block text-[11px] uppercase tracking-[0.18em] text-current/80">
                  {tab.hint}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        aria-labelledby={`${activeTab}-tab`}
        id={`${activeTab}-panel`}
        role="tabpanel"
      >
        {activeTab === "home" ? homePanel : simpleAssetsPanel}
      </div>
    </section>
  );
}
