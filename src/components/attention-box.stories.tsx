import type { Meta, StoryObj } from "@storybook/react";
import { AttentionBox } from "./attention-box";

const meta: Meta<typeof AttentionBox> = {
  title: "UI/AttentionBox",
  component: AttentionBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AttentionBox>;

export const Default: Story = {
  args: {
    title: "System Alert",
    children: "High-voltage interference detected in sector 7.",
    variant: "default",
  },
};

export const Gold: Story = {
  args: {
    title: "Neuromancer Protocol",
    children: "Protocol Gold-Alpha is now active.",
    variant: "gold",
  },
};
