import type { Meta, StoryObj } from "@storybook/react";

import { PrototypeNavTabs } from "./prototype-nav-tabs";

const meta: Meta<typeof PrototypeNavTabs> = {
  title: "Components/PrototypeNavTabs",
  component: PrototypeNavTabs,
  parameters: {
    layout: "centered"
  }
};

export default meta;

const panelContent = (heading: string, body: string) => (
  <div className="space-y-3 rounded border border-(--color-accent)/60 bg-[rgba(10,3,14,0.85)] p-4 text-sm leading-6 text-(--color-text)">
    <h3 className="text-lg font-semibold text-(--color-heading)">{heading}</h3>
    <p>{body}</p>
  </div>
);

type Story = StoryObj<typeof PrototypeNavTabs>;

export const HomeTab: Story = {
  args: {
    activeTab: "home",
    homePanel: panelContent(
      "Day 2 Home Panel",
      "This server-rendered panel mirrors the home tab in the app and keeps the layout consistent while the tabs stay interactive."
    ),
    simpleAssetsPanel: panelContent(
      "Simple Assets",
      "Token previews, palettes, and design notes live in this panel."
    ),
    textPatternsPanel: panelContent(
      "Text Patterns",
      "Focused typography lab for testing headings, paragraphs, and readability."
    )
  }
};

export const SimpleAssetsTab: Story = {
  args: {
    activeTab: "simple-assets",
    homePanel: panelContent(
      "Day 2 Home Panel",
      "This server-rendered panel mirrors the home tab in the app and keeps the layout consistent while the tabs stay interactive."
    ),
    simpleAssetsPanel: panelContent(
      "Simple Assets",
      "Token previews, palettes, and design notes live in this panel."
    ),
    textPatternsPanel: panelContent(
      "Text Patterns",
      "Focused typography lab for testing headings, paragraphs, and readability."
    )
  }
};

export const TextPatternsTab: Story = {
  args: {
    activeTab: "text-patterns",
    homePanel: panelContent(
      "Day 2 Home Panel",
      "This server-rendered panel mirrors the home tab in the app."
    ),
    simpleAssetsPanel: panelContent(
      "Simple Assets",
      "Token previews, palettes, and design notes live in this panel."
    ),
    textPatternsPanel: panelContent(
      "Text Patterns",
      "This panel renders typography tests, ensuring the cyberpunk palette stays readable in longer copy formats."
    )
  }
};
