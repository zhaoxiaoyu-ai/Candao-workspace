# T30 Backend Diagnostic

## Date

2026-07-31

## Reason For Diagnostic

The user asked to continue after the second Agent-PD design attempt failed. The goal was to check whether the native Agent-PD run could continue through a different available backend without exposing secrets.

## Findings

- Agent-PD's current `src/agent_pd/llm.py` reads `DEEPSEEK_API_KEY` directly.
- The local Agent-PD `.env` exists.
- The local `.env` has:
  - `DEEPSEEK_API_KEY=<set>`
  - `AGENTPD_LLM_BASE_URL=https://api.deepseek.com`
  - `AGENTPD_LLM_MODEL=deepseek-chat`
  - `AGENTPD_MAX_ITERATIONS=25`
  - `AGENTPD_TOKEN_CAP=<set>`
  - `AGENTPD_WALLCLOCK_CAP_S=1800`
- The current shell process does not expose alternate provider keys:
  - `OPENAI_API_KEY=<unset>`
  - `ANTHROPIC_API_KEY=<unset>`
  - `DEEPSEEK_API_KEY=<unset>` in process env; Agent-PD loads it from `.env`.

## Conclusion

The repeated Agent-PD failure is not caused by the T30 agent idea, prompt shape, local schema, missing dependencies, or proxy settings. It is caused by the configured DeepSeek-compatible backend returning:

```text
APIStatusError: Error code: 402 - Insufficient Balance
```

Because Agent-PD currently has no funded alternate backend configured, native Agent-PD design generation cannot proceed in this environment.

## Current Usable Deliverable

The manual fallback remains the active T30 deliverable:

- `web-competitor-style-analyst.agent_spec.json`
- `web-competitor-style-analyst.md`
- `agent-pd-run-log.md`

The fallback spec passed Agent-PD L1 validation with:

```text
L1 validation passed
```

## Next Recovery Options

1. Restore balance for the configured DeepSeek API key, then rerun the Agent-PD design command.
2. Change Agent-PD `.env` to a funded OpenAI-compatible backend while keeping the expected `DEEPSEEK_API_KEY` variable name, because the current code reads that name directly.
3. Patch Agent-PD `llm.py` to support provider-specific key names such as `OPENAI_API_KEY`, then configure a funded key and rerun.

After recovery, compare the native Agent-PD output against the current T30 fallback spec and keep whichever has stronger tool contracts, failure semantics, eval coverage, and compliance boundaries.
