# Tappo App Module Style Classification - 2026-06-08

## Sources

- Current prototype entry: `https://tappophone.netlify.app/phone/login_flow`
- Verified prototype pages under `/phone/`:
  - `boss_dashboard.html`
  - `boss_reports.html`
  - `boss_points.html`
  - `boss_app_management.html`
  - `settings.html`
  - `staff_binding_new.html`
  - `staff_app_center_new.html`
  - `staff_pos_tables.html`
  - `staff_pos_order.html`
  - `staff_pos_checkout.html`
  - `staff_pos_success.html`
  - `staff_booking_list.html`
  - `staff_booking_new.html`
  - `staff_payment_settings.html`
  - `staff_settings.html`
- Existing local content baseline: `tasks/T02/output/prototype-content-map.md`
- User direction: cover, role selection, owner/staff home, data analysis, and settings can show stronger intelligence; pure detail and operation pages should be more restrained.

## Principle

The App style system should not apply the same level of visual intelligence to every screen.

- High-level entry, home, analytics, app, and settings surfaces can carry stronger `智能感`.
- Operational and detail flows should stay clear, calm, and trustworthy.
- Orange remains the primary brand/action color on all tiers.
- Blue, glow, mascot/orb, and AI visual cues are secondary and should appear only where they support comprehension or guidance.

## Tier 1 - Strong Intelligent Tone

These pages can use the strongest App Style Kit expression.

| Page / Module | Prototype Source | Why | Allowed Treatment |
| --- | --- | --- | --- |
| App cover / splash | `login_flow` | First impression and brand tone setting | Orange-led soft gradient, light intelligent atmosphere, mascot/orb, high-polish hero composition |
| Role selection | `login_flow` | User chooses owner/staff mental model | Two smart role cards, assistant guidance copy, soft icon/illustration pair, clear orange primary route |
| Owner home | `boss_dashboard.html` | Owner needs operating summary and next action | AI business companion, daily brief, exception insight cards, data highlights, orange action/progress, restrained blue smart accents |
| Staff home / app center | `staff_app_center_new.html` | Staff needs quick work entry and capability guidance | Smart workbench, app tiles, assistant hint, capability status, warm icon system |
| Data analysis / reports | `boss_reports.html` | Best surface for AI interpretation | AI summary, anomaly explanation, smart filter chips, chart cards, suggested next action, strong data hierarchy |
| App management | `boss_app_management.html` | Product capability and activation suggestions | Smart recommendation cards, activation status, module grouping, orange activation CTA |
| Settings overview | `settings.html`, `staff_settings.html` | System confidence and configuration entry | System health language, smart status chips, guided settings groups, restrained support illustration |

Style notes:

- Use more atmospheric background treatment than detail pages, but keep the page readable.
- Use one intelligent visual anchor per page, not multiple competing decorative elements.
- AI copy should be phrased as assistance or explanation, not autonomous decision making.

## Tier 2 - Moderate Intelligent Assistance

These pages can use smart cues, but the task structure remains primary.

| Page / Module | Prototype Source | Why | Allowed Treatment |
| --- | --- | --- | --- |
| Owner login / registration | `login_flow` | Important first-use flow, but form clarity matters | Clean form, subtle assistant/help cue, orange CTA, light background atmosphere |
| Staff PIN login / staff selection | `login_flow` | Operational login must be fast | Friendly identity chips, clear keypad, minimal smart guidance |
| Region / organization selection | `login_flow` | Decision list, not marketing | Search/list clarity, light cards, tiny smart prompt if needed |
| Points purchase / recharge overview | `boss_points.html` | Financial and usage context can be assisted | Usage forecast, balance risk prompt, orange primary CTA; payment steps remain restrained |
| Staff table list | `staff_pos_tables.html` | Staff needs quick state scan | Table status intelligence, availability chips, light recommendations, no visual noise |
| Booking list | `staff_booking_list.html` | Status and exceptions matter | Smart conflict/status hint, clean booking cards, restrained empty state |
| Payment settings | `staff_payment_settings.html` | Configuration with technical confidence | Health/status chips, connection state, setup guidance |
| Device binding | `staff_binding_new.html` | Setup guidance helpful, input must stay clear | Small assistant help, step guidance, device-code input priority |

Style notes:

- Use AI/assistant cues as secondary helper blocks, not page hero by default.
- Avoid large mascot/3D hero if it pushes forms, lists, or actions down.
- Maintain clear error, disabled, loading, and confirmation states.

## Tier 3 - Restrained Operation / Detail Tone

These pages should be visually cleaner and more operational.

| Page / Module | Prototype Source | Why | Allowed Treatment |
| --- | --- | --- | --- |
| POS ordering | `staff_pos_order.html` | High-frequency, speed and accuracy first | Compact categories, clear item cards, orange selected/CTA states, minimal smart recommendation area only if useful |
| Checkout / order confirmation | `staff_pos_checkout.html` | Payment-adjacent, high trust required | White cards, strong totals, clear method selection, no decorative hero |
| Payment success | `staff_pos_success.html` | Confirmation and return action | Calm success state, clear amount/order/table details, small friendly mark only |
| New booking form | `staff_booking_new.html` | Form completion and validation | Structured fields, restrained helper text, no heavy illustration |
| Transaction record/detail | Current `/transactions` and future detail pages | Audit trail, trust, scannability | Dense but readable cards, status icons, aligned amounts, no mascot |
| Order info/detail | Current `OrderInfo.vue` and future details | Operational lookup | Clear rows, status tags, action footer, minimal decoration |

Style notes:

- No large AI hero, no big mascot, no atmospheric background competing with task content.
- Use orange for decisive actions and active states only.
- Blue may appear as an info/status color, not as page atmosphere.
- Detail pages should optimize legibility, alignment, and predictable interaction.

## App Style Kit Implication

The Style Kit should include tier-aware element rules:

- `Smart Hero`: allowed only in Tier 1, rare in Tier 2, forbidden in Tier 3.
- `AI Insight Card`: common in Tier 1, optional in Tier 2, only inline/minimal in Tier 3.
- `Mascot/Orb`: common in cover/home/settings, small helper in setup flows, absent from checkout/detail.
- `Chart/Data Card`: strong in owner home and reports, compact in finance/recharge, absent from form-only pages.
- `Operational List Row`: required across all tiers, with the most restrained style in Tier 3.
- `Orange CTA`: available across all tiers, but especially strict and clear in payment/operation flows.

## Intelligent Visual Anchor Decision

Decision received on 2026-06-08:

- Use a hybrid visual anchor.
- 小T is not fixed; treat it as a flexible assistant expression layer.
- Use 小T or assistant cues where warmth and guidance matter.
- Use orange smart orb/system-core visuals where data, settings, system health, and AI insight need more trust and precision.

See `tasks/T02/output/tappo-app-intelligent-visual-anchor-decision-2026-06-08.md`.
