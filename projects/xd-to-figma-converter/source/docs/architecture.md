# Architecture

## Conversion pipeline (current)

1. `xd-parser` reads a JSON fixture and builds an internal XD node tree via a strict runtime
   validator (`validation.ts`). Binary `.xd` files raise `XdBinaryUnsupportedError` rather than
   silently producing an empty document.
2. `library-loader` loads and validates the Figma context file — components (`entries`),
   variables (`variables`), and Code Connect mappings (`codeConnect`). Each entry is schema-checked.
3. `token-extractor` derives intermediate tokens (colors, typography, spacing, radius, effects)
   from the XD tree.
4. `figma-policy.buildFigmaContextSnapshot` computes the real counts of components / variables /
   Code Connect entries loaded, and the variable-coverage ratio against the extracted tokens.
5. `figma-policy.enforceFigmaPolicy` blocks generation if components or variables are missing,
   or if the token set is empty; raises `VARIABLE_COVERAGE_LOW` below the 50% threshold; warns
   about missing Code Connect.
6. `figma-mapper` binds XD styles to Figma variables node by node and records every unbound literal.
7. `converter` writes `figma-document.json`, `design-tokens.json`, and `conversion-report.json`;
   the report includes the policy snapshot, bound/unbound counts, and nodeId-tagged warnings.

## Module boundaries

- `src/core/validation.ts` — small runtime type guards + `ValidationError`
- `src/core/xd-parser.ts` — JSON fixture parsing + schema validation + binary rejection
- `src/core/token-extractor.ts` — tokens from the XD tree
- `src/core/library-loader.ts` — strict loading of components / variables / Code Connect
- `src/core/figma-policy.ts` — snapshot + gate enforcement
- `src/core/figma-mapper.ts` — XD → Figma mapping with variable binding
- `src/core/converter.ts` — orchestration + artifact output + `PolicyGateError`
- `src/cli.ts` — strict CLI flag parser

## Required Figma constraints (enforced)

- Components must come from the library file (`entries`).
- Variables must come from the library file (`variables`) — blocking if absent.
- Styles are bound to a Figma variable reference when a matching variable exists; otherwise the
  literal is kept and an `UNBOUND_*` warning is emitted against the node id.
- XD `layoutMode` is written through only when XD supplied it — the mapper never fabricates a
  direction.
- Primary and counter axis sizing modes are computed independently.
- Non-text nodes preserve type (`FRAME` / `GROUP` / `RECTANGLE` / `ELLIPSE` / `DOCUMENT`) or become
  an `INSTANCE` if bound to a component entry.

## Conversion quality gates (status)

| Gate | Status | Implementation |
|---|---|---|
| `variable binding gate` | ✅ enforced | `figma-mapper.ts` `resolvePaint`/`resolveFloatBinding` emit `UNBOUND_*` warnings on unmatched literals |
| `layout token gate` | ✅ enforced | spacing/radius are resolved against `FLOAT` variables; unmatched ones are reported per node |
| `structure gate` | ✅ enforced | `STRUCTURAL_XD_TYPES` preserves FRAME/GROUP/ARTBOARD/DOCUMENT/SECTION hierarchy instead of flattening |
| `auto layout gate` | ⚠️ partial | layout direction + alignment + sizing flow through when XD provides them; semantic *inference* (stack / bar / card heuristics) is still future work |

## Planned integrations

- MCP-based Figma context reader that populates the library file live instead of from disk
- Semantic auto-layout heuristics that derive direction from grouping + alignment signals
- Binary `.xd` parsing (currently raises `XdBinaryUnsupportedError`)
