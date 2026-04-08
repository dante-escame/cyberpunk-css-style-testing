import type { Meta, StoryObj } from "@storybook/react";
import { CyberSlider } from "./cyber-slider";

const meta: Meta<typeof CyberSlider> = {
  title: "UI/CyberSlider",
  component: CyberSlider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CyberSlider>;

export const Default: Story = {
  args: {
    label: "Signal Strength",
    defaultValue: 75,
  },
};
