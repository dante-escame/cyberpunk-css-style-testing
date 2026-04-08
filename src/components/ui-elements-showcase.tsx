import React from "react";
import { AttentionBox } from "./attention-box";
import { CyberButton } from "./cyber-button";
import { CyberSlider } from "./cyber-slider";
import { CyberBadge } from "./cyber-badge";
import { CyberTag } from "./cyber-tag";
import { PillSelector } from "./pill-selector";
import { CyberToggle } from "./cyber-toggle";

export function UIElementsShowcase() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h3 className="text-xl font-black uppercase tracking-[0.15em] text-(--color-heading) border-b border-(--color-border) pb-2">
          Attention Boxes
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <AttentionBox title="System Alert" variant="default">
            High-voltage interference detected in sector 7. Please recalibrate
            atmospheric scrubbers before proceeding.
          </AttentionBox>
          <AttentionBox title="Neuromancer Protocol" variant="gold">
            The sky above the port was the color of television, tuned to a dead
            channel. Protocol Gold-Alpha is now active.
          </AttentionBox>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-black uppercase tracking-[0.15em] text-(--color-heading) border-b border-(--color-border) pb-2">
          Interactive Components
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-(--color-accent)">
              Buttons
            </h4>
            <div className="flex flex-wrap gap-4">
              <CyberButton variant="primary">Execute</CyberButton>
              <CyberButton variant="secondary">Cancel</CyberButton>
              <CyberButton variant="gold">Gold-Tier</CyberButton>
              <CyberButton variant="primary" disabled>
                Locked
              </CyberButton>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-(--color-accent)">
              Switches & Sliders
            </h4>
            <div className="space-y-4">
              <div className="flex gap-8">
                <CyberToggle label="Encryption" defaultChecked />
                <CyberToggle label="Neural Link" />
              </div>
              <CyberSlider label="Signal Strength" defaultValue={75} />
              <CyberSlider label="Power Output" defaultValue={42} />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-black uppercase tracking-[0.15em] text-(--color-heading) border-b border-(--color-border) pb-2">
          Selection & Indicators
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-(--color-accent)">
              Pill Selectors
            </h4>
            <PillSelector
              options={[
                { label: "Night City", value: "nc" },
                { label: "Chiba City", value: "cc" },
                { label: "Neo-Tokyo", value: "nt" },
              ]}
              defaultValue="cc"
            />
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-(--color-accent)">
              Badges & Tags
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <CyberBadge variant="pink">Admin</CyberBadge>
                <CyberBadge variant="cyan">User</CyberBadge>
                <CyberBadge variant="gold">Root</CyberBadge>
                <CyberBadge variant="purple">Guest</CyberBadge>
              </div>
              <div className="flex flex-wrap gap-2">
                <CyberTag variant="cyan">Cybernetics</CyberTag>
                <CyberTag variant="pink">Hardware</CyberTag>
                <CyberTag variant="gold">Legendary</CyberTag>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
