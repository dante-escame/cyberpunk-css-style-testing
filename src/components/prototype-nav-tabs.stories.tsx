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

const tabs = [
  { id: "home", label: "Home", hint: "Server-rendered overview", href: "/" },
  {
    id: "simple-assets",
    label: "Simple Assets",
    hint: "Server-rendered token lab",
    href: "?tab=simple-assets"
  },
  {
    id: "text-patterns",
    label: "Text Patterns",
    hint: "Content typography test",
    href: "?tab=text-patterns"
  },
  {
    id: "ui-elements",
    label: "UI Elements",
    hint: "Interactive component library",
    href: "?tab=ui-elements"
  }
];

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
    tabs,
    panels: {
      home: panelContent(
        "Day 2 Home Panel",
        "This server-rendered panel mirrors the home tab in the app and keeps the layout consistent while the tabs stay interactive."
      ),
      "simple-assets": panelContent(
        "Simple Assets",
        "Token previews, palettes, and design notes live in this panel."
      ),
      "text-patterns": panelContent(
        "Text Patterns",
        "Focused typography lab for testing headings, paragraphs, and readability."
      ),
      "ui-elements": panelContent(
        "UI Elements",
        "Interactive controls and indicators live in this panel."
      )
    }
  }
};

export const SimpleAssetsTab: Story = {
  args: {
    activeTab: "simple-assets",
    tabs,
    panels: {
      home: panelContent(
        "Day 2 Home Panel",
        "This server-rendered panel mirrors the home tab in the app and keeps the layout consistent while the tabs stay interactive."
      ),
      "simple-assets": panelContent(
        "Simple Assets",
        "Token previews, palettes, and design notes live in this panel."
      ),
      "text-patterns": panelContent(
        "Text Patterns",
        "Focused typography lab for testing headings, paragraphs, and readability."
      ),
      "ui-elements": panelContent(
        "UI Elements",
        "Interactive controls and indicators live in this panel."
      )
    }
  }
};

export const TextPatternsTab: Story = {
  args: {
    activeTab: "text-patterns",
    tabs,
    panels: {
      home: panelContent(
        "Day 2 Home Panel",
        "This server-rendered panel mirrors the home tab in the app."
      ),
      "simple-assets": panelContent(
        "Simple Assets",
        "Token previews, palettes, and design notes live in this panel."
      ),
      "text-patterns": panelContent(
        "Text Patterns",
        "This panel renders typography tests, ensuring the cyberpunk palette stays readable in longer copy formats."
      ),
      "ui-elements": panelContent(
        "UI Elements",
        "Interactive controls and indicators live in this panel."
      )
    }
  }
};
