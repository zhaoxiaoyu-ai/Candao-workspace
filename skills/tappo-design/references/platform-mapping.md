# tappo-design - Platform Mapping

## 1. Vue / CSS

### Font Declaration

Tappo Phone currently relies on local/system availability for OPPO Sans and Montserrat. Declare this stack in global CSS:

```css
:root {
  --font-display: "OPPO Sans", -apple-system, BlinkMacSystemFont, "PingFang SC", "PingFang TC", sans-serif;
  --font-body: "OPPO Sans", -apple-system, BlinkMacSystemFont, "PingFang SC", "PingFang TC", sans-serif;
  --font-metric: "Montserrat", "OPPO Sans", -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
}
```

If web fonts are later required, load them explicitly and verify license/availability before replacing the stack.

### CSS Custom Properties - Light Mode

```css
:root {
  --background: #fffbf6;
  --bg: var(--background);
  --surface1: #ffffff;
  --surface2: #fff9f1;
  --surface3: #f8f8f8;
  --border: #f5f5f4;
  --border-visible: rgba(9, 5, 2, 0.08);
  --text1: rgba(9, 5, 2, 0.95);
  --text2: rgba(9, 5, 2, 0.65);
  --text3: rgba(9, 5, 2, 0.45);
  --text4: rgba(9, 5, 2, 0.30);
  --accent: #ff8a3d;
  --accent-hover: #ffa764;
  --accent-active: #db6a2e;
  --accent-subtle: #fff9f1;
  --accent-border: #ffedd8;
  --success: #32b963;
  --success-bg: #f0fdf4;
  --warning: #fc8e17;
  --warning-bg: #fff7e8;
  --error: #ff4040;
  --error-bg: #fff1f1;
  --info: #3b82f6;
  --info-bg: #eef6ff;

  --font-display: "OPPO Sans", -apple-system, BlinkMacSystemFont, "PingFang SC", "PingFang TC", sans-serif;
  --font-body: "OPPO Sans", -apple-system, BlinkMacSystemFont, "PingFang SC", "PingFang TC", sans-serif;
  --font-metric: "Montserrat", "OPPO Sans", -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;

  --text-display: 30px;
  --text-h1: 25px;
  --text-h2: 18px;
  --text-h3: 16px;
  --text-body: 15px;
  --text-body-sm: 14px;
  --text-caption: 13px;
  --text-label: 12px;

  --space-2xs: 2px;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  --radius-element: 12px;
  --radius-icon-frame: 16px;
  --radius-control: 999px;
  --radius-button-box: 16px;
  --radius-compact-card: 16px;
  --radius-tile: 20px;
  --radius-card: 24px;
  --radius-hero: 28px;
  --radius-modal: 24px;

  --shadow-low: 0 2px 8px rgba(9, 5, 2, 0.08);
  --shadow-card: 0 4px 20px rgba(229, 215, 204, 0.40);
  --shadow-modal: 0 4px 24px rgba(0, 0, 0, 0.16);
  --shadow-bottom: 0 -2px 12px rgba(51, 51, 51, 0.08);

  --ease-fast: ease;
  --ease-standard: ease-in-out;
  --duration-fast: 180ms;
  --duration-standard: 220ms;
  --duration-emphasis: 320ms;
}
```

### Existing Tappo Token Compatibility

Map current project variables directly:

```css
:root {
  --tp-primary: var(--accent);
  --tp-primary-hover: var(--accent-hover);
  --tp-primary-active: var(--accent-active);
  --tp-primary-light: var(--accent-subtle);
  --tp-primary-border: var(--accent-border);
  --tp-bg: var(--background);
  --tp-surface: var(--surface1);
  --tp-subtle: var(--surface3);
  --tp-border: var(--border);
  --tp-text: var(--text1);
  --tp-text-secondary: var(--text2);
  --tp-text-tertiary: var(--text3);
  --tp-text-disabled: var(--text4);
  --tp-hairline: var(--border-visible);
  --tp-success: var(--success);
  --tp-error: var(--error);
  --tp-warning: var(--warning);
  --tp-info: var(--info);
  --tp-shadow-low: var(--shadow-low);
  --tp-shadow-card: var(--shadow-card);
  --tp-shadow-modal: var(--shadow-modal);
  --tp-shadow-bottom: var(--shadow-bottom);
  --tp-font: var(--font-body);
  --tp-number-font: var(--font-metric);
}
```

### Dark Mode

```css
[data-theme="dark"] {
  --background: #17120f;
  --bg: var(--background);
  --surface1: #211916;
  --surface2: #2b211d;
  --surface3: #342822;
  --border: rgba(255, 250, 244, 0.08);
  --border-visible: rgba(255, 250, 244, 0.16);
  --text1: rgba(255, 250, 244, 0.96);
  --text2: rgba(255, 250, 244, 0.68);
  --text3: rgba(255, 250, 244, 0.46);
  --text4: rgba(255, 250, 244, 0.30);
  --accent: #ffa764;
  --accent-subtle: rgba(255, 138, 61, 0.14);
  --success: #55c77f;
  --success-bg: rgba(85, 199, 127, 0.14);
  --warning: #ffb45c;
  --warning-bg: rgba(255, 180, 92, 0.14);
  --error: #ff6b66;
  --error-bg: rgba(255, 107, 102, 0.14);
  --shadow-card: 0 8px 24px rgba(0, 0, 0, 0.28);
}
```

## 2. Vue Component Usage

Prefer existing project components:

- `TpCard` for standard card surfaces.
- `TpButton` for pill buttons.
- `TpTopBar` for page title/subtitle.
- `TpBottomNav` for fixed bottom navigation.
- `TpGeneratedIcon` for generated PNG icons.
- `TpSoftIcon` for deterministic chart/category icons.

Do not create a duplicate component if an existing Tappo component can be extended within the same visual rules.

## 3. Tailwind Mapping

If a Tailwind prototype is required:

```js
theme: {
  extend: {
    colors: {
      background: "var(--background)",
      surface: {
        1: "var(--surface1)",
        2: "var(--surface2)",
        3: "var(--surface3)",
      },
      text: {
        1: "var(--text1)",
        2: "var(--text2)",
        3: "var(--text3)",
        4: "var(--text4)",
      },
      accent: {
        DEFAULT: "var(--accent)",
        subtle: "var(--accent-subtle)",
      },
      success: { DEFAULT: "var(--success)", bg: "var(--success-bg)" },
      warning: { DEFAULT: "var(--warning)", bg: "var(--warning-bg)" },
      error: { DEFAULT: "var(--error)", bg: "var(--error-bg)" },
    },
    fontFamily: {
      display: ["OPPO Sans", "-apple-system", "BlinkMacSystemFont", "PingFang SC", "sans-serif"],
      body: ["OPPO Sans", "-apple-system", "BlinkMacSystemFont", "PingFang SC", "sans-serif"],
      metric: ["Montserrat", "OPPO Sans", "-apple-system", "sans-serif"],
    },
    borderRadius: {
      card: "24px",
      tile: "20px",
      icon: "16px",
      pill: "999px",
    },
    boxShadow: {
      card: "var(--shadow-card)",
      low: "var(--shadow-low)",
    },
  },
}
```

## 4. SwiftUI / Flutter Shell Notes

The current deliverable is Vue in Flutter WebView. If native shell UI is required:

- Use system SF/PingFang fallback, not OPPO Sans unless bundled.
- Keep the same color hex values and radii.
- Use continuous rounded rectangles for card/tile surfaces.
- Safe-area padding must match WebView behavior; do not hide the bottom nav behind the home indicator.

## 5. Verification

For Tappo Phone code changes:

```bash
npm run typecheck
npm run build
```

For visual changes:

- Capture `402 x 874`.
- Check no horizontal overflow.
- Check all prototype content remains visible.
- Check text fits and icons are centered.
- Write screenshot and note under `projects/tappo-phone/tasks/<task-id>/output/`.

