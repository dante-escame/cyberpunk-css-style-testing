import type { Meta, StoryObj } from "@storybook/react";
import { CyberBadge } from "./cyber-badge";

const meta: Meta<typeof CyberBadge> = {
  title: "UI/CyberBadge",
  component: CyberBadge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CyberBadge>;

export const Pink: Story = {
  args: {
    children: "Admin",
    variant: "pink",
  },
};

export const Cyan: Story = {
  args: {
    children: "User",
    variant: "cyan",
  },
};

export const Gold: Story = {
  args: {
    children: "Root",
    variant: "gold",
  },
};
