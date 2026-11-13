# 餐道国际官网 Stitch-ready 低保真 Prompt Pack

版本：2026-08-19  
Locale：繁體中文 `/TC`  
用途：供 Stitch 按页面生成高保真 screen 时使用。页面 HTML 位于同目录，可作为结构和内容参考。

## 全局 Prompt

Generate a Traditional Chinese first international SaaS website.

Language:
Traditional Chinese.

Do not display bilingual content.

Include language switch:
繁中 / EN

Visible Chinese / Traditional Chinese brand name:
餐道

Preserve protected terms exactly:
iDMS, SaaS, AMS / Connector, OMS, COMS, SOMS, CDBI, DMS, Menu Center, 財務對賬, Data Asset.

Do not invent:
customer logos, product screenshots, metrics, SLA, integration status, partner status, certifications, price, fake dashboard data, fake product UI, or unsupported claims.

Use the provided low-fidelity HTML as the page structure reference. Keep the page story path and module order. Improve visual hierarchy, spacing, typography, product-stage composition, and interaction affordance without rewriting the business meaning.

The current HTML includes an in-page visual media layer. Preserve the role of each media structure:
- `photo-scene`: restaurant operation or customer service photography composition.
- `product-shot-frame`: product screenshot area or screenshot-style interface skeleton.
- `concept-illustration`: topology or business relationship illustration.
- `motion-strip`: motion keyframes for a later Remotion, Stitch interaction, or frontend animation.
- `video-thumb`: product video entry area.
- `metric-chart`: chart expression for authorized metrics.

Before generating any page, also read:
`element-placement-map.json`

Element rules:
Use the matching page modules in `element-placement-map.json` to decide whether each section needs a product stage, topology map, metrics, customer case card, resource router, support board, timeline, form, or CTA band.
When the HTML already shows a visual media structure inside a module, translate it into a polished high-fidelity static section or motion-ready layout instead of deleting it or moving it to a separate instruction block.

When a module requires a real product screenshot, product video, customer logo, customer photo, company photo, certificate image, or customer quote image, do not invent one. Use the defined fallback: clean media area, text customer name, abstract topology, low-fidelity product stage, or card layout.

Never turn 餐道-specific business objects into generic SaaS cards. Preserve business objects, statuses, conditions, metrics, product names, and next actions.

## 页面生成顺序

1. `home.html`
2. `solutions.html`
3. `platform.html`
4. `integrations.html`
5. `customers.html`
6. `resources.html`
7. `about.html`
8. `demo.html`

## Home

Use `home.html` as the low-fidelity reference.

Goal:
Build first-screen recognition for 餐道 as a 餐飲與零售 O2O 營運中樞, then route visitors to platform capability, customer proof, and demo.

Must preserve:
Hero, operations hub, capability explorer, service-scale metrics, customer case summary, final CTA.

Element placement:
- Hero: left copy + dual CTA; right product stage showing order, store, DMS / iDMS delivery, and 財務對賬 status rows.
- Operations hub: central `餐道營運中樞` topology connected to external delivery platforms, owned ordering, POS / KDS, CRM / membership, delivery, payment / ERP, and finance data.
- Capability explorer: five-item rail with right-side media area, two business points, and Platform CTA.
- In-page visual media: preserve product screenshot-style frames and motion keyframes that show channel import, status update, and data return.
- Service scale: six authorized metric cards only: 5000+, 500M+, 400+, 200K+, 4.5B+, 30% up.
- Customer case summary: featured named customer text card; use customer names when logo assets are not supplied.
- Final CTA: dark conversion band with Demo and Platform actions.

## Solutions

Use `solutions.html` as the low-fidelity reference.

Goal:
Help brand decision makers and operations teams identify which part of their O2O operation needs improvement.

Must preserve:
multi-platform order fulfillment, store/menu operation, delivery fulfillment, finance reconciliation, member/data, and store/menu scenario switching.

Element placement:
- Hero: scenario map showing fragmented order, store, delivery, and reconciliation workflows returning to a traceable operation chain.
- Common problems: three business problem cards, not a product catalog.
- Scenario explorer: six-item rail with a detail panel containing problem, product capability, business object, result direction, case CTA, and Demo CTA.
- Detail flow: use a problem -> capability -> result chain. Do not add unconfirmed metrics.
- In-page visual media: preserve the concept illustration and scenario keyframes in the corresponding sections.
- Case routing: compact case entry only; do not expand a full Customers page inside Solutions.

## Platform

Use `platform.html` as the low-fidelity reference.

Goal:
Explain how 餐道 products work through business objects, statuses, operations, product names, and next actions.

Must preserve:
OMS / COMS / SOMS, Menu Center, Mobile Ordering, DMS / iDMS, CDBI / 財務對賬, AMS / Connector.

Element placement:
- Hero: product stage with OMS order queue, Menu Center sold-out sync, and DMS delivery status rows.
- Capability map: six-item rail; right side must include product media area, title, description, business object list, status / operation list, product mapping, and Demo CTA.
- Product demo entry: video or screenshot cards for OMS, Menu / Store, DMS / iDMS, and CDBI / 財務對賬. Keep video entry cards when video assets are not supplied.
- In-page visual media: preserve product screenshot-style workbench and 2x2 video thumbnail cards.
- Final CTA: route to Demo, Integrations, and Customers.

## Integrations

Use `integrations.html` as the low-fidelity reference.

Goal:
Show how external systems and data objects return to 餐道 operation workflows.

Must preserve:
external delivery platforms, owned ordering entry, POS / KDS, CRM / membership, payment / ERP, delivery API.

Element placement:
- Hero: Connector network linking delivery platforms, owned ordering, POS / KDS, CRM, payment / ERP, delivery API, and 餐道 workflows.
- Integration switcher: six-item rail with data object list, suitable context, and assessment CTA.
- Data flow: show external system -> AMS / Connector -> OMS / Data Asset / 財務對賬 / DMS as an abstract topology.
- In-page visual media: preserve Connector topology and data-flow keyframes.
- Do not claim all systems can connect, and do not show fake interface status or partner status.

## Customers

Use `customers.html` as the low-fidelity reference.

Goal:
Use service scale, named customer cases, and industry case data to establish proof.

Must preserve:
Pizza-Box, JIA Group, Jardine Group, service-scale metrics, and industry outcome cards.

Element placement:
- Hero: case story opening, not a generic testimonial wall.
- Service scale: six authorized metric cards only.
- Named cases: customer rail + detail card with customer name, cooperation scope, product coverage, operation change, and next step.
- Industry outcomes: cards for dessert chain, hotpot chain, Chinese restaurant chain, coffee brand, fresh food retail, and delivery-intensive brand, using only authorized numbers.
- In-page visual media: preserve customer scene photography composition, case data dashboard, metric charts, and before / during / after keyframes.
- Customer logos or case photos require supplied assets. Without assets, use customer names and clean media areas.

## Resources

Use `resources.html` as the low-fidelity reference.

Goal:
Route evaluation, onboarding, daily operations, and technical questions to the right resource.

Must preserve:
question stage switcher, access checklist, operations Q&A, case resources, support center, company/media resources, demo routing.

Element placement:
- Hero: resource path cards for evaluation, onboarding, and daily operation.
- Stage Q&A: stage rail with Q&A panel and support / inquiry CTA.
- Access checklist: system object board covering channels, store systems, enterprise data, and AMS / Connector.
- Operations FAQ: cards organized by multi-platform orders, menu sync, and 財務對賬.
- Case resources: industry map linking to Customers.
- Support center: ticket board with issue type, related system, business object, and visible exception.
- Demo routing: canvas covering industry, store scale, current systems, main problem, and recommended demo modules.
- In-page visual media: preserve resource journey keyframes, case photography composition, demo-routing product frame, and motion sequence.

## About

Use `about.html` as the low-fidelity reference.

Goal:
Build company credibility through company background, product evolution, service delivery, and quality proof.

Must preserve:
2014 company foundation, Guangzhou headquarters, Beijing / Shanghai / Hong Kong branches, Chengdu operations center, product timeline, service lifecycle, ISO 27001, ISO 20000, DMS 500 Order/second, 99.95% over.

Element placement:
- Hero: company network map showing Guangzhou headquarters, Hong Kong, Beijing, Shanghai, and Chengdu operations center.
- Journey: timeline with 2000, 2003, 2008, 2014, 2017, and 2020. Do not invent additional years or events.
- Product and service capabilities: separate sections for OMS / COMS / SOMS, CDBI / 財務對賬, DMS / iDMS, AMS / Connector, and Merchant Service / Helpdesk.
- Service lifecycle: four-step flow for onboarding, training, operation support, and Helpdesk.
- Trust band: ISO 27001, ISO 20000, 500 Order/second, 99.95% over. Do not add 99.99%, 24/7 SLA, or unsupported claims.
- In-page visual media: preserve company service photography composition and certificate / system stability tiles.

## Demo

Use `demo.html` as the low-fidelity reference.

Goal:
Convert visitor intent into demo routing based on business scenario, systems, channels, role, region, and problem.

Must preserve:
contact intent, company / brand name, market / region, store scale, role, current channels, existing systems, problem description, recommended demo modules.

Element placement:
- Hero: demo summary card showing intent, recommended modules, and next step.
- Intent selection: three choice cards for product demo, sales inquiry, and support inquiry.
- Form: field grid for company / brand, region, store scale, role, current channels, existing systems, and main problem.
- Module summary: side panel listing OMS / COMS / SOMS, DMS / iDMS, CDBI / 財務對賬, and AMS / Connector.
- In-page visual media: preserve demo-routing product frame and arranged-demo keyframes.
- Keep support as a secondary route to Resources.
