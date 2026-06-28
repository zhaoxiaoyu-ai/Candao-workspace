# Figma MCP Rules

## Mandatory workflow

1. Query Figma context first.
2. Read available components.
3. Read available variables and tokens.
4. Resolve Code Connect mappings when relevant.
5. Generate output only after the previous steps succeed.

## Hard constraints

- Always use components from Figma.
- Always use variables and tokens from Figma.
- Never invent styles locally.
- If no matching component exists, record a blocking issue instead of fabricating a replacement style.
- If no matching variable exists, record a blocking issue instead of emitting raw style values as final output.

## Implementation impact

- Conversion is split into `analysis` and `generation`.
- `analysis` must fetch Figma library context before node mapping is finalized.
- `generation` can only consume approved component and variable references from analysis output.
- Reports must clearly distinguish missing component mappings, missing variable mappings and blocked nodes.
