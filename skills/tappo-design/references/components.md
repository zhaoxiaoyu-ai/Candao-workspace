# tappo-design - Components

## 1. Buttons

### Variants

| Variant | Background | Text | Border | Radius | Height |
| --- | --- | --- | --- | --- | --- |
| Primary | `linear-gradient(180deg, #ffa764, #ff8a3d)` | `#fff` | none | `999px` | `44px` md / `48px` lg |
| Secondary | `rgba(9, 5, 2, 0.05)` | `--text1` | none | `999px` | `44px` |
| Ghost | transparent | `--text2` | none | `999px` | `40px` |
| Dark action | `--text1` | `#fff` | none | `16px` | `48-56px` |
| Destructive | `#dd391d` or `--error` | `#fff` | none | `16px` | `44-56px` |

### Specs

| Property | Value |
| --- | --- |
| Min touch target | `44px` |
| Padding md | `0 18px` |
| Padding lg | `0 22px` |
| Font | body stack, `15-16px`, `700-800` |
| Gap | `8px` |
| Active | `translateY(1px)` |
| Disabled | opacity `0.48`, no transform |

Use pill buttons for standard Tappo actions. Use 16px rounded rectangle buttons only inside cards that already follow Figma POS settings treatment.

---

## 2. Cards And Surfaces

### Standard Card

- Background: `--surface1`
- Border: `1px solid --border`
- Radius: `24px`
- Padding: `18px`
- Shadow: `0 4px 20px rgba(229, 215, 204, 0.40)`

### Compact Card

- Radius: `16px`
- Padding: `14px`
- Used for dense chart cards and small summary panels.

### Featured / Hero Card

- Radius: `28px`
- Padding: `20-22px`
- Background: white/warm gradient, often with a restrained radial orange wash.
- May include one generated raster illustration, cropped only after 402px validation.

### Settings/List Tile

| Property | Value |
| --- | --- |
| Min height | `80px` |
| Radius | `20px` |
| Padding | `14px` |
| Columns | `icon frame / minmax text / accessory` |
| Background | `rgba(255,255,255,0.92)` |
| Shadow | card shadow |
| Title | `16px / 22px / 750` |
| Caption | `13px / 18px / --text3` |
| Accessory | `24px`, `--text3` |

---

## 3. Inputs

| Property | Value |
| --- | --- |
| Height | `44px` |
| Background | `--surface1` |
| Border default | `1px solid --border-visible` |
| Border focus | `1px solid --accent` |
| Radius | `16px` |
| Padding | `0 14px` |
| Font | body `15px` |
| Placeholder | `--text3` |

Input labels sit above fields with `6px` gap, `14px / 21px`, `--text2`.

---

## 4. Lists And Data Rows

### Standard Row

| Property | Value |
| --- | --- |
| Min height | `64px` |
| Padding | `12px 14px` |
| Divider | `1px solid --border` only when rows are dense |
| Label | body stack, `15px`, `--text1` |
| Value | metric stack if numeric, `--text1` |
| Accessory | right chevron or status dot |

### Data Row

- Left label in `--text2`.
- Right value in `--text1`, metric stack for money/counts.
- Unit suffix in `--caption`, `--text3`.
- Preserve every prototype row even when converting tables into charts.

---

## 5. Charts And Metrics

### Metric Card

- One primary number per card, `24-30px`, metric stack.
- Label above number, `13px`, `--text3`.
- Supporting badges use `13px`, not smaller.

### Share Rail

- Height `16px`
- Radius `999px`
- Padding `3px`
- Track `#fff4e8`
- Segments: orange, sage, peach. Minimum segment width `4px`.

### Chart Row

- Grid: icon `54px`, body minmax, percentage pill.
- Row radius `18px`, padding `12px`.
- Meter height `7px`, radius `999px`.
- Amount labels `13px`, metric stack, `--text2`.

---

## 6. Navigation

### Bottom Nav

| Property | Value |
| --- | --- |
| Width | `min(100%, 440px)` |
| Position | fixed bottom center |
| Padding | `10px 18px calc(10px + safe-area)` |
| Radius | top corners `24px` |
| Background | `rgba(255,255,255,0.94)` |
| Shadow | `0 -2px 12px rgba(51,51,51,0.08)` |
| Label | `12px / 16px / 650` |
| Icon | generated PNG, `28px` |
| Active | `--accent` text, `--accent-subtle` background, `16px` radius |

Disabled nav items keep layout and use opacity `0.72`.

### Top Bar

- Title: `20-24px` depending on density, `--text1`.
- Subtitle: `13-14px`, `--text3`.
- Right utility icon may sit in a `40px` circular white surface with low shadow.

---

## 7. Tags And Chips

| Property | Value |
| --- | --- |
| Height | `28-34px` |
| Padding | `6px 10px` |
| Radius | `999px` |
| Font | `13px`, `700` |
| Background | `--accent-subtle` or status tint |
| Text | semantic foreground |
| Border | none unless needed for contrast |

---

## 8. Overlays

### Dialog

| Property | Value |
| --- | --- |
| Background | `--surface1` |
| Radius | `24px` |
| Shadow | `--shadow-modal` |
| Backdrop | `rgba(9,5,2,0.36)` |
| Padding | `20px` |

### Bottom Sheet

- Background `--surface1`
- Top radius `24px`
- Handle `36px x 4px`, `rgba(9,5,2,0.16)`, radius `999px`
- Use for payment pending, filters, table selection, and confirmation details.

---

## 9. State Patterns

### Empty State

- Centered within the functional area, not full marketing page.
- Use one generated or code-native icon at `64-88px`.
- Headline `18px`, description `14px`.
- CTA appears `16px` below description.

### Loading

- Prefer skeletons matching final component radius.
- Avoid loading layouts that hide known prototype labels.
- For bridge/payment states, show explicit pending status and retain order context.

### Error

- Inline field errors use `13px`, `--error`.
- Screen-level errors use a card with a clear retry action.
- Fault reporting uses red action only where the content specifically asks for it.

### Disabled

- Opacity `0.4-0.72` depending on whether the item still needs to be legible.
- Disabled placeholders must remain visible when they represent mapped prototype routes.

---

## 10. Generated Asset Cards

For illustration-backed hero cards:

- Image is project-bound under `source/src/assets/generated/`.
- No text/logos inside image.
- Use `object-fit: cover` only after validating crop at 402px.
- Place image to the right/bottom, with text readable on the left.
- If image background clashes, regenerate with solid warm cream or remove it from the card.

