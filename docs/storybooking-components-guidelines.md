# Component Documentation Guidelines

- Use Storybook as the default component documentation framework when this repository starts documenting reusable UI primitives interactively.
- Document reusable components in `src/components/` when they are shared, have multiple variants or states, or need usage guidance that is clearer in isolated examples.
- Prefer colocated story files such as `ComponentName.stories.tsx` next to the documented component so implementation and documentation evolve together.
- Route-local one-off markup does not need Storybook documentation unless it is being promoted into a reusable pattern.
- Each documented component should show its default state, important variants, interactive states when relevant, and any accessibility-sensitive usage notes.
- When documenting new components, use Storybook with `npm run storybook`.