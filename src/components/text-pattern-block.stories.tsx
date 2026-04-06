import type { Meta, StoryObj } from "@storybook/react";
import { TextPatternBlock } from "./text-pattern-block";

const meta: Meta<typeof TextPatternBlock> = {
  title: "Components/TextPatternBlock",
  component: TextPatternBlock,
  parameters: {
    layout: "padded"
  }
};

export default meta;

type Story = StoryObj<typeof TextPatternBlock>;

export const Default: Story = {
  args: {
    title: "Typography Hierarchy",
    subtitle: "Test Pattern 01",
    children: (
      <>
        <p>
          This is a standard paragraph within a cyberpunk content block. It tests
          the base font size, line height, and color contrast against the dark
          background.
        </p>
        <h4 className="text-lg font-bold uppercase tracking-tight text-(--color-heading)/90">
          Secondary Heading
        </h4>
        <p>
          Another paragraph follows the heading to test the spacing between
          different block-level elements.
        </p>
      </>
    )
  }
};

export const CyanVariant: Story = {
  args: {
    title: "Cyan Highlight Pattern",
    subtitle: "Test Pattern 02",
    variant: "cyan",
    children: (
      <>
        <p>
          This variant uses the <span className="text-(--color-cyan)">cyan</span> accent
          color for the border and subtitle, creating a secondary visual rhythm
          that breaks up the dominant purple and pink palette.
        </p>
        <ul className="space-y-2 text-sm uppercase tracking-wide text-(--color-cyan)">
          <li>• System Diagnostic: [OK]</li>
          <li>• Link Integrity: 100%</li>
        </ul>
      </>
    )
  }
};
