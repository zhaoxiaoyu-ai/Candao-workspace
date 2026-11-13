# 餐道 Stitch Prompt Template v2

日期：2026-08-20

## 使用原则

项目已有 Stitch Design System「餐道 Operations Architecture」。生成 prompt 不重复写颜色、字体、圆角和 token；只写页面意图、构图、业务对象和视觉气质。

## Base Generation Prompt

```markdown
[PAGE TITLE] for 餐道 international website.

Create one Web Desktop screen in Traditional Chinese for enterprise restaurant operations SaaS.

Use the existing project design system and match the approved homepage direction: cinematic restaurant operations hero, enterprise product workbench, dense but scannable B2B content, and clear conversion actions.

PAGE PURPOSE:
[One sentence: who this page serves and what decision / action it supports.]

PRIMARY COMPOSITION:
1. Header:
   Sticky navigation with 餐道 brand, primary nav items, language switch, and demo CTA.

2. Hero:
   A high-impact operations scene with a clear headline, short explanatory copy, one primary CTA, one secondary CTA, and a right-side product / workflow stage.
   The right-side stage should feel like a real product decision surface, not a decorative card.

3. Main Content:
   [3-5 modules only. Describe each module by layout and business role.]

4. Conversion Section:
   A compact CTA section that routes visitors to the next relevant page.

COPY AND TERMS:
Use Traditional Chinese copy. Brand display is 餐道. Preserve product term casing: OMS, COMS, SOMS, DMS, iDMS, CDBI, Finance Center, AMS / Connector, SaaS.
Use only supplied business objects and approved product terms; do not invent metrics, legal footer details, customer logos, support promises, or fake product data.
```

## Targeted Visual Edit Prompt

```markdown
Refine only the [specific section] of this screen.

Keep the existing page structure, navigation, copy, and all other sections unchanged.

Change:
- [One visual/layout change]
- [Optional second closely related change]

Design intent:
[Explain the section's role in the user journey.]

Do not rewrite the page, do not add new metrics, do not change product term casing.
```

## QA Cleanup Prompt

```markdown
Clean up only visible production-readiness issues.

Keep layout and visual hierarchy unchanged.

Fix these exact issues:
- Replace any visible Candao brand text in Traditional Chinese content with 餐道, except technical URLs or file names.
- Remove fake legal footer details such as ICP numbers or generic copyright claims.
- Replace visible Material Symbols ligature text with neutral icon shapes or remove the icon.
- Remove or rewrite unsupported claims: SLA, 24/7, seamless integration, invented team size, invented customer logos, invented metrics.
- Preserve product term casing: iDMS, SaaS, AMS / Connector.

Do not redesign sections. Do not add new content.
```

## Example: Solutions Base Prompt v2

```markdown
解決方案 page for 餐道 international website.

Create one Web Desktop screen in Traditional Chinese for enterprise restaurant operations SaaS.

Use the existing project design system and match the approved homepage direction: cinematic restaurant operations hero, enterprise product workbench, dense but scannable B2B content, and clear conversion actions.

PAGE PURPOSE:
Help brand decision makers and operations leaders recognize their restaurant O2O operation scenario, then route them to the relevant product capability and demo path.

PRIMARY COMPOSITION:
1. Header:
   Sticky navigation with 餐道 brand, primary nav items, language switch, and demo CTA.

2. Hero:
   Left side: headline about solving restaurant O2O operation complexity by scenario.
   Right side: an operations workflow stage showing order channels, store operations, delivery, finance, and data flowing into a central product workbench.
   This should feel like a system map plus product cockpit, not a generic SaaS illustration.

3. Scenario Explorer:
   A two-column module with a vertical scenario rail on the left and a detailed scenario panel on the right.
   Scenarios: multi-platform orders, menu and store operations, delivery fulfillment, reconciliation and reporting, membership and data, system integration.
   The detail panel must show problem, business objects, related products, and next action.

4. Product Capability Bridge:
   A structured workbench module mapping scenarios to OMS / COMS / SOMS, DMS / iDMS, CDBI / Finance Center, and AMS / Connector.

5. Proof / Next Step:
   A compact section linking to customer cases and product demo. Use text-based proof slots if assets are missing; do not create fake logos.

COPY AND TERMS:
Use Traditional Chinese copy. Brand display is 餐道. Preserve product term casing: OMS, COMS, SOMS, DMS, iDMS, CDBI, Finance Center, AMS / Connector, SaaS.
Use only supplied business objects and approved product terms; do not invent metrics, legal footer details, customer logos, support promises, or fake product data.
```
