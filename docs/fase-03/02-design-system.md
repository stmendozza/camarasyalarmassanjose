# Sistema de diseño — Fase 3

Canon: raíz [`DESIGN.md`](../../DESIGN.md). Este doc resume tokens para implementación Astro/Tailwind (F4).

## CSS variables (prototipo)

```css
:root {
  --ink: #071525;
  --navy: #0F2C56;
  --navy-mid: #1A4578;
  --gold: #C4A035;
  --gold-bright: #E0BE4A;
  --paper: #EEF2F6;
  --white: #FFFFFF;
  --slate: #3D4F63;
  --signal: #0D7A4F;
  --wa: #25D366;
  --font-display: "Barlow Condensed", sans-serif;
  --font-body: "Source Sans 3", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --radius: 2px; /* casi recto = autoridad; no pills */
  --space-section: clamp(3.5rem, 8vw, 6rem);
}
```

## Tipografía escala

| Token | Size | Weight | Family |
|-------|------|--------|--------|
| brand | clamp(2.5rem, 8vw, 4.5rem) | 700 | display |
| h1 | clamp(2rem, 5vw, 3.25rem) | 700 | display |
| h2 | clamp(1.5rem, 3vw, 2rem) | 600 | display |
| body | 1.0625rem / 1.65 | 400 | body |
| spec | 0.75rem | 500 | mono |

## Componentes

| Nombre | Comportamiento |
|--------|----------------|
| `BtnPrimary` | Fondo gold, texto ink, hover bright |
| `BtnWhatsApp` | Fondo `--wa`, icono + “Cotizar por WhatsApp” |
| `BtnGhost` | Borde white/navy según fondo |
| `AudienceGate` | Dos paneles full-width, franja gold al hover/focus |
| `ProductSpec` | Nombre + type mono + 2–3 specs |
| `WhatsAppFab` | fixed bottom-right, 56px, z-50 |
| `LocalBadge` | Texto “Soporte técnico local · San José del Guaviare” + gold rule |

## Accesibilidad

- Contraste AA texto sobre paper/ink
- Focus ring `2px solid var(--gold)` offset 2px
- Targets táctiles ≥ 44px
- Form labels visibles

## Mapeo Tailwind (F4)

`navy` → `colors.navy`, etc. Fonts en `tailwind.config` / `@theme`.
