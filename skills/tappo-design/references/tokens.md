# tappo-design - Tokens

## 0. Primitives

### Neutral Ramp (warm restaurant cream)

| Step | Hex / Value | Use |
| --- | --- | --- |
| 50 | `#fffbf6` | App canvas |
| 100 | `#fff9f1` | Accent tint, warm panels |
| 150 | `#fff5e9` | Illustration backplates |
| 200 | `#ffedd8` | Orange-tinted borders |
| 300 | `#f5f5f4` | Subtle card borders |
| 400 | `rgba(9, 5, 2, 0.30)` | Disabled text |
| 500 | `rgba(9, 5, 2, 0.45)` | Tertiary text |
| 600 | `rgba(9, 5, 2, 0.65)` | Secondary text |
| 950 | `rgba(9, 5, 2, 0.95)` | Primary text |

### Brand Ramp (Tappo orange)

| Step | Hex | Use |
| --- | --- | --- |
| 50 | `#fff9f1` | Soft orange surfaces |
| 100 | `#ffedd8` | Borders, progress tracks |
| 300 | `#ffa764` | Hover highlight |
| 500 | `#ff8a3d` | Primary accent |
| 600 | `#db6a2e` | Active/pressed accent |
| 700 | `#b95223` | High-contrast accent text |

### Support Colors

| Role | Foreground | Background | Use |
| --- | --- | --- | --- |
| Success | `#32b963` | `#f0fdf4` | Paid, received, available |
| Warning | `#fc8e17` | `#fff7e8` | Pending, attention |
| Error | `#ff4040` | `#fff1f1` | Fault, destructive |
| Info | `#3b82f6` | `#eef6ff` | Balance, external status |
| Sage | `#55b887` | `#edfff5` | Chart segment |
| Peach | `#f1b487` | `#fff3e6` | Chart segment |

---

## 1. Typography

### Font Stack

| Role | Font | Fallback | Weight | Use |
| --- | --- | --- | --- | --- |
| Display | `"OPPO Sans"` | `-apple-system, BlinkMacSystemFont, "PingFang SC", "PingFang TC", sans-serif` | 750-800 | Screen titles, hero numbers |
| Body / UI | `"OPPO Sans"` | `-apple-system, BlinkMacSystemFont, "PingFang SC", "PingFang TC", sans-serif` | 400-750 | Body text, descriptions, labels |
| Metrics | `"Montserrat"` | `"OPPO Sans", -apple-system, BlinkMacSystemFont, sans-serif` | 700-800 | Money, counts, percentages |

`mono_for_code: false` and `mono_for_metrics: true`. Tappo is not a developer product; monospace code styling is not part of the identity. Numeric values still need tabular-feeling clarity, so metrics use Montserrat or the metric stack.

### Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Use |
| --- | --- | --- | --- | --- | --- |
| `--display` | `30px` | `38px` | `0` | `800` | Primary balance, hero statement |
| `--h1` | `25px` | `32px` | `0` | `750` | Page title |
| `--h2` | `18px` | `26px` | `0` | `750` | Section title |
| `--h3` | `16px` | `22px` | `0` | `750` | Card/list title |
| `--body` | `15px` | `22px` | `0` | `400` | Standard UI body |
| `--body-sm` | `14px` | `21px` | `0` | `400` | Secondary text |
| `--caption` | `13px` | `19px` | `0` | `400` | Metadata, captions |
| `--label` | `12px` | `16px` | `0` | `700` | Badges, bottom nav labels |

### Typographic Rules

- Body text below `14px` is banned.
- `12px` is only for nav labels, compact badges, and tiny metadata.
- Letter spacing is always `0`.
- Important numbers use the metric stack and must align consistently.
- Chinese/HK labels wrap naturally; do not truncate prototype labels unless the user approves.

---

## 2. Color System

### Light Mode

| Token | Value | Role |
| --- | --- | --- |
| `--background` | `#fffbf6` | Page background |
| `--bg` | `var(--background)` | Alias |
| `--surface1` | `#ffffff` | Cards |
| `--surface2` | `#fff9f1` | Warm grouped surfaces |
| `--surface3` | `#f8f8f8` | Inset controls |
| `--border` | `#f5f5f4` | Decorative card edge |
| `--border-visible` | `rgba(9, 5, 2, 0.08)` | Intentional separators |
| `--text1` | `rgba(9, 5, 2, 0.95)` | Primary text |
| `--text2` | `rgba(9, 5, 2, 0.65)` | Secondary text |
| `--text3` | `rgba(9, 5, 2, 0.45)` | Tertiary text |
| `--text4` | `rgba(9, 5, 2, 0.30)` | Disabled text |
| `--accent` | `#ff8a3d` | Primary interactive color |
| `--accent-subtle` | `#fff9f1` | Accent tint |
| `--success` | `#32b963` | Positive states |
| `--success-bg` | `#f0fdf4` | Positive tint |
| `--warning` | `#fc8e17` | Warning states |
| `--warning-bg` | `#fff7e8` | Warning tint |
| `--error` | `#ff4040` | Error/destructive |
| `--error-bg` | `#fff1f1` | Error tint |

### Dark Mode

Dark mode is warm, not inverted. It is optional for the current phone WebView but must be intentional if implemented.

| Token | Value | Role |
| --- | --- | --- |
| `--background` | `#17120f` | Dark canvas |
| `--surface1` | `#211916` | Cards |
| `--surface2` | `#2b211d` | Grouped surfaces |
| `--surface3` | `#342822` | Inset surfaces |
| `--border` | `rgba(255, 250, 244, 0.08)` | Decorative edge |
| `--border-visible` | `rgba(255, 250, 244, 0.16)` | Intentional separators |
| `--text1` | `rgba(255, 250, 244, 0.96)` | Primary text |
| `--text2` | `rgba(255, 250, 244, 0.68)` | Secondary text |
| `--text3` | `rgba(255, 250, 244, 0.46)` | Tertiary text |
| `--text4` | `rgba(255, 250, 244, 0.30)` | Disabled text |
| `--accent` | `#ffa764` | Dark-mode accent |
| `--accent-subtle` | `rgba(255, 138, 61, 0.14)` | Accent tint |

### Color Usage Rules

- One primary accent action per card or section.
- Use blue only for account/info surfaces, never as a second brand identity.
- Chart tones must remain distinguishable: orange, sage, peach.
- Red is reserved for fault reporting, destructive action, or payment error.

---

## 3. Spacing

8px base grid.

| Token | Value | Use |
| --- | --- | --- |
| `--space-2xs` | `2px` | Optical adjustments |
| `--space-xs` | `4px` | Icon-to-label gaps |
| `--space-sm` | `8px` | Tight internal gaps |
| `--space-md` | `16px` | Page stack, standard padding |
| `--space-lg` | `24px` | Card section padding |
| `--space-xl` | `32px` | Major section spacing |
| `--space-2xl` | `48px` | Hero separation |
| `--space-3xl` | `64px` | Large page divisions |
| `--space-4xl` | `96px` | Rare full-screen breathing room |

---

## 4. Borders And Radii

| Token | Value | Use |
| --- | --- | --- |
| `--radius-element` | `12px` | Small controls |
| `--radius-icon-frame` | `16px` | Icon tiles |
| `--radius-control` | `999px` | Primary pill buttons |
| `--radius-button-box` | `16px` | Rectangular action buttons |
| `--radius-compact-card` | `16px` | Dense cards/charts |
| `--radius-tile` | `20px` | List/settings tile |
| `--radius-card` | `24px` | Standard cards |
| `--radius-hero` | `28px` | Top visual card |
| `--radius-modal` | `24px` | Dialogs and sheets |

Cards use a subtle border plus soft shadow. Inputs use visible borders. Tags are pills.

---

## 5. Elevation

| Level | Light | Dark | Use |
| --- | --- | --- | --- |
| 0 | none | none | Inline elements |
| 1 | `0 2px 8px rgba(9, 5, 2, 0.08)` | `0 2px 10px rgba(0, 0, 0, 0.22)` | Low controls |
| 2 | `0 4px 20px rgba(229, 215, 204, 0.40)` | `0 8px 24px rgba(0, 0, 0, 0.28)` | Cards |
| 3 | `0 4px 24px rgba(0, 0, 0, 0.16)` | `0 16px 38px rgba(0, 0, 0, 0.40)` | Sheets/dialogs |

Depth must be soft and operational. Never use large black shadows on warm cards.

---

## 6. Motion

Personality: smooth and restrained.

| Type | Duration | Easing | Use |
| --- | --- | --- | --- |
| Micro | `180ms` | `ease` | Button press, active nav |
| Standard | `220ms` | `ease-in-out` | Card reveal, route transitions |
| Emphasis | `320ms` | `ease-in-out` | Bottom sheet/modal |

Pressed actions move by `translateY(1px)` only. No bounce, no elastic overshoot.

---

## 7. Iconography

Observed style: soft semi-dimensional product icons, centered inside rounded-square tinted frames. Icons may be generated PNGs for product-specific modules or deterministic SVG for simple chart categories.

Fallback kit: project generated PNG assets or code-native SVG. Do not claim any external icon kit is Tappo's real icon set.

| Context | Size |
| --- | --- |
| Inline with body text | `18-22px` |
| Buttons | `20-22px` |
| Bottom nav | `28px` |
| Settings/list icon frame | `52px` frame, `36px` asset |
| App tile hero icon | `62-76px` |

Color rule: icon frames may be tinted blue/orange/green/cyan/violet, but the page must still read as warm-neutral plus orange.

