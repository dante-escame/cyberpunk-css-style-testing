import type { Preview } from "@storybook/nextjs";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "cyberpunk",
      values: [
        { name: "cyberpunk", value: "#030010" },
        { name: "panel", value: "#0b0320" }
      ]
    }
  }
};

export default preview;
