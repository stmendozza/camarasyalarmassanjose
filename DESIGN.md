# DESIGN.md — Cámaras de Seguridad San José

**Vigente desde 2026-09-30.** Sistema UI cristal/oro en home y páginas internas.

Marca en pantalla: **Cámaras de Seguridad San José**. No usar “Guaraví”.

## World

**“Blindaje de noche.”** Escena nocturna de seguridad local: cristal ahumado, oro del isotipo, acento cian en la promesa del home, WhatsApp verde. Hero full-bleed con foto; páginas internas con page-hero atmosférico (sin foto pesada). Sin navy de plantilla, sin tipografía condensada genérica.

Modo: **Persuade / landing** — home convierte (hero → SystemExplorer + modal → WhatsApp). El menú Servicios, footer y “Ver guía completa” enlazan las URLs SEO del clúster (`/camaras-de-seguridad`, `/alarmas`, etc.) para no perder posicionamiento local.

## Palette

| Token | Hex | Uso |
|-------|-----|-----|
| `--bg` | `#0d1114` | Fondo de página |
| `--bg-raised` | `#1a2228` | Bandas |
| `--fg` | `#f3f5f2` | Texto |
| `--fg-muted` | `#b7c0b8` | Secundario |
| `--gold` | `#f0b429` | Kickers, underline, iconos, CTA primario, focus |
| `--gold-ink` | `#1a1406` | Texto sobre botón oro |
| `--blue` / `--cyan` | `#3b82f6` / `#67e8f9` | Acento “en” del H1 home |
| `--green` | `#6fbf73` | WhatsApp header, estado “vivo” |
| `--glass-border` | blanco 14% | Bordes cristal |

## Componentes de página

- **Header / Footer / Wordmark** — logo lockup `logo.png` (original), nav cristal, WhatsApp verde.
- **Home hero** — full-bleed mobile-first: marca tipográfica + H1 + lead corto + CTA WhatsApp a ancho completo; strip de prueba debajo (scroll horizontal en móvil).
- **PageHero** — crumb oro, H1 fuerte, CTA oro + cristal (todas las internas).
- **CtaBand** — shell cristal + kicker “Siguiente paso” + CTA oro.
- **Panels / products / service-links / steps / FAQ / form** — cristal, hover borde oro.
- **Contacto** — canales en panel cristal + formulario cristal.

## Performance

- Hero: Astro Image WebP + srcset + `fetchpriority=high`.
- Geist self-hosted, `font-display: swap`.
- `backdrop-filter` solo con `@supports`.
- Motion corta; `prefers-reduced-motion`.

## Copy

- Segunda persona, oficio concreto.
- Sin fases/placeholders/B2 en pantalla.
- Sin precios ni reseñas inventadas.

## Anti-patrones

Barlow Condensed, navy de plantilla, FAB circular WA, inventar “Proyectos”, paneles lima del sistema anterior, tipografía navy sobre fondo oscuro retocada a la fuerza.
