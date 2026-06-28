# XD to Figma Converter

CLI tool for converting Adobe XD input into Figma-oriented structured output.

## Default stack

- Language: TypeScript
- Runtime: Node.js 20+
- Form: CLI

## Current scope

- validate and read input files
- support development-time JSON fixtures
- extract intermediate design tokens
- map nodes into Figma-oriented JSON
- load approved Figma component mappings
- enforce Figma MCP generation constraints
- write conversion artifacts and reports

## Figma MCP constraints

- Always use components from Figma.
- Always use variables and tokens from Figma.
- Never invent styles.
- Query Figma context first, then generate output.

The current codebase now enforces these rules through `src/core/figma-policy.ts`.

## Quick start

```bash
npm install
npm run dev -- --input ./assets/sample/sample-xd.json --output ./dist/result --library ./assets/sample/figma-library.json
```

## Outputs

- `figma-document.json`
- `design-tokens.json`
- `conversion-report.json`