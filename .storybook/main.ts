import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {}
  }
};

export default config;
