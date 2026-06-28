# Pilot Feedback Constraints

## Confirmed issues from the first Figma write

1. Fill colors were not bound to the target variable system.
2. Spacing, padding and border radius values were not mapped through tokens.
3. Group structure was not preserved well enough to rebuild the page with meaningful Auto Layout.

## Updated conversion rules

- Use Figma variables for final colors whenever a matching variable exists.
- Use tokenized spacing and radius values before raw numeric fallbacks.
- Treat XD groups as structural hints, not disposable wrappers.
- Build nested Auto Layout containers from XD group hierarchy where layout intent is clear.

## Impact on the next pilot

- The next `表单页` conversion should be a real page reconstruction, not just a component preview.
- The bottom action area should still reuse `Button` components, but the surrounding container must also respect tokenized spacing and radius.
- Form sections should be rebuilt as grouped frames with Auto Layout instead of loose nodes.
