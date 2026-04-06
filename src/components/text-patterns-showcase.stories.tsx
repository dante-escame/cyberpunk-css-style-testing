import type { Meta, StoryObj } from "@storybook/react";
import { TextPatternsShowcase } from "./text-patterns-showcase";

const meta: Meta<typeof TextPatternsShowcase> = {
  title: "Sections/TextPatternsShowcase",
  component: TextPatternsShowcase,
  parameters: {
    layout: "fullscreen"
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-(--color-bg) p-8 text-(--color-text)">
        <div className="mx-auto max-w-4xl">
          <Story />
        </div>
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof TextPatternsShowcase>;

export const Default: Story = {};
