import type { Meta, StoryObj } from "@storybook/react";
import { CyberButton } from "./cyber-button";

const meta: Meta<typeof CyberButton> = {
  title: "UI/CyberButton",
  component: CyberButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CyberButton>;

export const Primary: Story = {
  args: {
    children: "Execute",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Cancel",
    variant: "secondary",
  },
};

export const Gold: Story = {
  args: {
    children: "Gold-Tier",
    variant: "gold",
  },
};

export const Disabled: Story = {
  args: {
    children: "Locked",
    variant: "primary",
    disabled: true,
  },
};
