import type { Meta, StoryObj } from "@storybook/react";
import { CyberTag } from "./cyber-tag";

const meta: Meta<typeof CyberTag> = {
  title: "UI/CyberTag",
  component: CyberTag,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CyberTag>;

export const Cyan: Story = {
  args: {
    children: "Cybernetics",
    variant: "cyan",
  },
};

export const Pink: Story = {
  args: {
    children: "Hardware",
    variant: "pink",
  },
};

export const Gold: Story = {
  args: {
    children: "Legendary",
    variant: "gold",
  },
};
