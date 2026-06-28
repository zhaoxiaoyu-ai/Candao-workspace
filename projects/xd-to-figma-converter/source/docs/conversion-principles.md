# Conversion Principles

## Auto Layout

- Preserve parent-child layout relationships when XD data can express them.
- Map spacing, padding and alignment into Figma Auto Layout semantics.
- Record fallback behavior for absolute-positioned nodes in the report.
- Do not flatten XD groups prematurely. Group structure is an input signal for Auto Layout reconstruction.
- Prefer nested frames with clear semantic containers such as header, form section, toolbar, footer and card body.
- If an XD group is reused or clearly functions as a repeated block, preserve it as a reusable frame or component candidate.

## Design Tokens

- Extract colors, typography, spacing, radius and effects from source data.
- Normalize duplicates before output.
- Treat extracted tokens as intermediate data, not final approved styles.
- Final Figma output must bind colors to existing variables whenever a variable match exists.
- Final Figma output must bind spacing and radius to tokenized values whenever the target system supports them.
- Raw numeric values are allowed only as explicit fallback items and must be listed in the report.

## Figma constraints

- Query Figma context first.
- Always use Figma components.
- Always use Figma variables and tokens.
- Never invent styles.
- If a component or variable mapping is missing, report a blocking issue instead of silently generating a custom style.

## Reporting

- Every run must produce a report.
- The report must identify policy failures, missing mappings and manual follow-up items.
- The report must explicitly separate:
  - unbound color values
  - unmatched spacing or radius values
  - flattened groups that should become Auto Layout containers
