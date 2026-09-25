# DESIGN.md — Cámaras y Alarmas San José

## World

**“Puesto de vigilancia local”** — autoridad calmada de seguridad (marino profundo + latón/dorado del flyer), no tech-startup oscuro ni plantilla púrpura. Gana confianza y empuja a WhatsApp.

## Palette

| Token | Hex | Uso |
|-------|-----|-----|
| `--ink` | `#071525` | Fondos hero / footer |
| `--navy` | `#0F2C56` | Primario marca |
| `--navy-mid` | `#1A4578` | Hover / superficies |
| `--gold` | `#C4A035` | Acento CTA secundario, check, sellos |
| `--gold-bright` | `#E0BE4A` | Highlights |
| `--paper` | `#EEF2F6` | Fondo página (fresco, no cream) |
| `--white` | `#FFFFFF` | Superficies |
| `--slate` | `#3D4F63` | Texto secundario |
| `--signal` | `#0D7A4F` | Éxito / “protegido” (escaso) |
| `--wa` | `#25D366` | Solo botón WhatsApp |

## Typography

| Rol | Familia | Notas |
|-----|---------|-------|
| Display | **Barlow Condensed** | Marca + H1; tracking tight; peso 600–700 |
| Body | **Source Sans 3** | Lectura móvil; 400/600 |
| Utility | **IBM Plex Mono** | Specs técnicas de producto (pequeño) |

No usar Inter / Roboto / Arial / system-ui como voz de marca.

## Layout

- Mobile-first; max content `72rem`
- Hero **full-bleed** (plano visual edge-to-edge): marca dominante, 1 headline, 1 subtítulo, grupo CTA, atmósfera (rejilla/scan ligera), sin cards ni badges flotantes encima del media
- Tras el hero: **bifurcación Hogar | Negocio** (una sección, un job)
- Secciones: un propósito, un H2, una frase de apoyo
- Cards solo donde hay interacción (producto cotizable, form fields)

## Signature

**Puerta dual Hogar/Negocio** a ancho completo con tipografía condensada + franja dorada — el recuerdo visual del sitio junto al isotipo escudo.

## Motion

- Entrada suave del hero (fade/slide 400–600ms)
- Hover en CTAs y puerta dual
- Respetar `prefers-reduced-motion`

## Components (inventario F3)

Header sticky, Hero, AudienceGate, ServiceStrip, ProductSpec, SocialProof (placeholder), LocalBadge, ContactForm, WhatsAppFab, Footer

## Anti-patterns

Purple gradients, glassmorphism genérico, hero con 4 stats, pills de features, cream+serif+terracotta, dark-mode por defecto en todo el sitio.
