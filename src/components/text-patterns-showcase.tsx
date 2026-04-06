import React from "react";
import { TextPatternBlock } from "./text-pattern-block";

export function TextPatternsShowcase() {
  return (
    <div className="grid gap-8">
      <TextPatternBlock
        subtitle="Typography Test 01"
        title="Heading hierarchy & paragraphs"
        variant="cyan"
      >
        <p>
          The cyberpunk aesthetic relies heavily on high-contrast typography.
          By combining <span className="text-(--color-cyan)">monospaced fonts</span> with
          neon-inspired colors, we create a sense of technical precision and
          urban decay. This block tests how paragraphs flow and how they interact
          with the surrounding panel structure.
        </p>
        <h4 className="text-lg font-bold uppercase tracking-tight text-(--color-heading)/90">
          Sub-heading Level 4
        </h4>
        <p>
          Readability remains a priority. Despite the saturated colors, the
          generous line-height (leading-8) and font-size (12px base) ensure that
          long-form technical data or narrative descriptions are easy to parse
          under high-glare conditions.
        </p>
      </TextPatternBlock>

      <TextPatternBlock
        subtitle="Typography Test 02"
        title="Cyan accent & word highlights"
        variant="cyan"
      >
        <p>
          Selective use of <span className="text-(--color-cyan)">cyan</span> allows
          us to draw the user's eye to critical information without overwhelming
          the primary <span className="text-(--color-text)">pink</span> palette.
          This balance is crucial for maintaining a tactical interface feel.
        </p>
        <div className="border-l-2 border-(--color-cyan)/30 pl-4 italic text-(--color-heading)/70">
          "The sky above the port was the color of television, tuned to a dead channel."
          <br />
          — William Gibson, Neuromancer
        </div>
        <p>
          Testing section spacing here: notice the gap between the blockquote
          and this paragraph. It uses standard Tailwind spacing tokens to ensure
          consistency across the entire dashboard.
        </p>
      </TextPatternBlock>

      <TextPatternBlock
        subtitle="Typography Test 03"
        title="Technical data & lists"
      >
        <p>
          Data density is a hallmark of the genre. Here we test how lists and
          small-caps labels behave within a content block:
        </p>
        <ul className="space-y-2 text-sm uppercase tracking-wide text-(--color-cyan)">
          <li className="flex items-center gap-3">
            <span className="h-1 w-1 bg-(--color-cyan)"></span>
            Neural Link: [Stable]
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1 w-1 bg-(--color-cyan)"></span>
            Encryption: [Active]
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1 w-1 bg-(--color-cyan)"></span>
            Signal Strength: 89%
          </li>
        </ul>
        <p className="pt-2 text-xs opacity-60">
          // End of technical summary. All systems nominal.
        </p>
      </TextPatternBlock>
    </div>
  );
}
