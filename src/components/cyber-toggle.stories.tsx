import type { Meta, StoryObj } from "@storybook/react";
import { CyberToggle } from "./cyber-toggle";

const meta: Meta<typeof CyberToggle> = {
  title: "UI/CyberToggle",
  component: CyberToggle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CyberToggle>;

export const Off: Story = {
  args: {
    label: "Neural Link",
    defaultChecked: false,
  },
};

export const On: Story = {
  args: {
    label: "Encryption",
    defaultChecked: true,
  },
};
