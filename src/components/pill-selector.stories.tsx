import type { Meta, StoryObj } from "@storybook/react";
import { PillSelector } from "./pill-selector";

const meta: Meta<typeof PillSelector> = {
  title: "UI/PillSelector",
  component: PillSelector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PillSelector>;

export const Default: Story = {
  args: {
    options: [
      { label: "Night City", value: "nc" },
      { label: "Chiba City", value: "cc" },
      { label: "Neo-Tokyo", value: "nt" },
    ],
    defaultValue: "cc",
  },
};
