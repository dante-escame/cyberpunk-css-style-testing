import React from "react";
import { AttentionBox } from "./attention-box";
import { CyberButton } from "./cyber-button";
import { CyberSlider } from "./cyber-slider";
import { CyberBadge } from "./cyber-badge";
import { CyberTag } from "./cyber-tag";
import { PillSelector } from "./pill-selector";
import { CyberToggle } from "./cyber-toggle";
import { StyleSection } from "./style-kit";

type UIElementsShowcaseProps = {
  sections?: Array<{
    title: string;
    blocks: Array<{
      title: string;
      content: React.ReactNode;
    }>;
  }>;
  className?: string;
};

const defaultSections = [
  {
    title: "Attention Boxes",
    blocks: [
      {
        title: "Alerts",
        content: (
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
        )
      }
    ]
  },
  {
    title: "Interactive Components",
    blocks: [
      {
        title: "Buttons",
        content: (
          <div className="flex flex-wrap gap-4">
            <CyberButton variant="primary">Execute</CyberButton>
            <CyberButton variant="secondary">Cancel</CyberButton>
            <CyberButton variant="gold">Gold-Tier</CyberButton>
            <CyberButton variant="primary" disabled>
              Locked
            </CyberButton>
          </div>
        )
      },
      {
        title: "Switches & Sliders",
        content: (
          <div className="space-y-4">
            <div className="flex gap-8">
              <CyberToggle label="Encryption" defaultChecked />
              <CyberToggle label="Neural Link" />
            </div>
            <CyberSlider label="Signal Strength" defaultValue={75} />
            <CyberSlider label="Power Output" defaultValue={42} />
          </div>
        )
      }
    ]
  },
  {
    title: "Selection & Indicators",
    blocks: [
      {
        title: "Pill Selectors",
        content: (
          <PillSelector
            options={[
              { label: "Night City", value: "nc" },
              { label: "Chiba City", value: "cc" },
              { label: "Neo-Tokyo", value: "nt" }
            ]}
            defaultValue="cc"
          />
        )
      },
      {
        title: "Badges & Tags",
        content: (
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
        )
      }
    ]
  }
] satisfies UIElementsShowcaseProps["sections"];

export function UIElementsShowcase({
  sections = defaultSections,
  className
}: UIElementsShowcaseProps) {
  return (
    <div className={`space-y-12 ${className ?? ""}`}>
      {sections.map((section) => (
        <StyleSection key={section.title} title={section.title}>
          <div className={`grid gap-8 ${section.blocks.length > 1 ? "md:grid-cols-2" : ""}`}>
            {section.blocks.map((block) => (
              <div key={block.title} className="space-y-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-(--color-accent)">
                  {block.title}
                </h4>
                {block.content}
              </div>
            ))}
          </div>
        </StyleSection>
      ))}
    </div>
  );
}
