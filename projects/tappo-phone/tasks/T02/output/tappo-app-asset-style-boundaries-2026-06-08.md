# Tappo App Asset Style Boundaries - 2026-06-08

## Input Received

User direction:

- Target a 2025-2026 popular UI feeling.
- Image style should be clear, simple, softly graduated, comfortable, and lightweight.
- Avoid traditional, old, heavy UI styles.
- Keep Tappo orange as the primary brand/action color.

Reference images imply:

- Soft gradient icon tiles.
- Pale translucent surfaces.
- Rounded-square app icon geometry.
- Friendly but minimal assistant/robot expression.
- Light 3D objects with low-detail shapes.
- Airy mobile app layouts with blue/white atmospheric backgrounds and card-based hierarchy.

External trend check:

- Figma's 2026 design trend guidance highlights subtle gradients and soft shadows as tactile/refined treatments: https://www.figma.com/resource-library/web-design-trends/
- Webflow's 2025 neumorphism review supports limited soft dimensionality, but warns against low-contrast full-page neumorphism: https://webflow.com/blog/neumorphism
- Figma app-design guidance reinforces connecting every visual feature back to the app's core function: https://www.figma.com/resource-library/app-design/

## Target Asset Direction

Use this style phrase:

`clear soft-gradient intelligent operations UI`

The Tappo App asset system should feel:

- 2025-2026 current, not legacy SaaS/admin.
- Clean and breathable.
- Softly dimensional, but not heavy 3D.
- Orange-led and brand recognizable.
- Smart and trustworthy, not playful to the point of toy-like.
- Comfortable for repeated restaurant operations.

## Color Rules

Primary:

- Tappo orange leads brand, CTA, active state, progress, and core intelligent anchor.

Secondary atmosphere:

- Ice blue, cyan, mint, peach, soft yellow, and very light pink can support icon gradients and intelligent atmosphere.
- Blue is allowed as system/AI atmosphere, but not as brand replacement.

Surface:

- Use off-white, pale blue-gray, or warm white backgrounds.
- Large asset backgrounds should feel almost white, with a soft color wash.

Forbidden:

- Muddy beige-only pages.
- Heavy black/blue cyber AI.
- Old gray enterprise gradients.
- High-saturation rainbow gradients.
- Low-contrast text or action elements.

## Icon Style

Icon tiles:

- Rounded-square containers.
- Soft gradients with low-saturation transitions.
- Inner glyph can be simplified, slightly translucent, and centered.
- Use minimal detail; the shape should read at small sizes.
- Use one consistent light direction and shadow softness.

Sizes:

- `20-24px`: line icons for nav, list rows, and small actions.
- `32-40px`: functional icons in compact cards.
- `48-64px`: module icon tiles and settings/app entries.
- `88px+`: only for hero/support illustration, not dense lists.

Avoid:

- Emoji-style icons.
- Generic clipart.
- Thick old 3D plastic icons.
- Overly realistic POS objects.
- Mixed icon families on the same surface.
- Text embedded inside generated icons.

## Illustration Style

Allowed:

- Soft 3D / semi-flat hybrid.
- Rounded geometry.
- Translucent gradients.
- Gentle cast shadows.
- Simple object metaphors: store, receipt, POS, card, crown, smart core, device, checklist.
- Clear silhouettes with low detail.

Forbidden:

- Old-school skeuomorphic cash registers or hardware renders.
- Dark sci-fi AI visuals.
- Busy poster-like hero images.
- Photorealistic people.
- Stock illustration faces.
- Watermarks, fake logos, fake UI text, or accidental copy.
- One-off illustration styles per page.

Official logo handling:

- Do not generate a fake Tappo logo.
- If logo appears in an illustration, use only the official project logo asset as a placed design element, not AI-generated text.

## Assistant / 小T Boundary

小T remains flexible and not fixed.

Allowed:

- Small assistant avatar.
- Rounded robot-like face or orb character.
- Cropped companion expression.
- Abstract assistant bubble.
- Minor animated/visual cue in cover, role selection, owner/staff home, empty states, and help moments.

Avoid:

- Making 小T a mandatory mascot on every page.
- Large mascot on transaction, checkout, POS ordering, or form-heavy pages.
- Childlike toy character if the page needs business trust.
- Multiple unrelated assistant looks in the same release.

## Smart Orb / System Core Boundary

Use for serious intelligent surfaces:

- Data analysis.
- Settings.
- System health.
- AI insight.
- App management.
- Usage prediction.

Treatment:

- Orange core, soft edge glow.
- Optional blue/cyan secondary reflection.
- Simple orbital or layered form.
- Precise and controlled, not sci-fi.

Avoid:

- Generic gradient blob.
- Overly decorative glass sphere.
- Dark neon AI.
- Competing with charts, values, or CTAs.

## UI Layout Treatment From References

Use:

- Spacious top atmosphere.
- Bento-like card grouping.
- Clean mobile dashboard sections.
- Rounded white cards with soft shadows.
- Strong section titles and readable list cards.
- Light gradient headers where the page is Tier 1.

Do not copy:

- Blue-first brand identity.
- Education/job-app content patterns.
- Overly dense promotional banners.
- Crowded sticker-like visual language.

## Old UI Red Flags

Reject designs that show:

- Gray enterprise toolbar density.
- Thick borders and old drop shadows.
- Dark, glossy, late-2000s gradients.
- Overly literal cash register hardware.
- Tiny text packed into cards.
- Random icon colors without a palette.
- Decorative charts with no business hierarchy.

## Application By Tone Tier

Tier 1:

- Can use stronger soft gradient, assistant/orb anchor, and polished hero composition.

Tier 2:

- Use small helper visuals, smart chips, and soft icon cards; keep forms and lists dominant.

Tier 3:

- Use only restrained line/status icons and clear cards; avoid large generated illustrations.

## Reviewability Boundary

Every asset output must be visible and reviewable by a human before it is treated as accepted.

- Provide an openable review image, Figma node, local preview page, or `assets-review/` index.
- Label each asset with its ID, intended page/module, and pass/fail criteria.
- Do not provide prompt text alone as an asset deliverable.
- If an asset is not ready for visual review, state why, what can be reviewed now, and what must be produced next.

## Next Input Needed

The next step is to produce the first `App Style Kit` draft:

- Color tokens.
- Gradient recipes.
- Shadow/elevation recipes.
- Icon tile recipes.
- Assistant/orb usage matrix.
- Component specimen list.

No more broad visual direction input is required unless the user wants to add negative examples.
