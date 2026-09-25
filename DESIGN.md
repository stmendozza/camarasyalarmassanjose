# DESIGN.md — Cámaras y Alarmas San José

**Vigente desde 2026-09-25.** Reemplaza el mundo “puesto de vigilancia” (navy + dorado + Barlow Condensed) del prototipo `prototypes/fase-03/`. Esa versión queda como archivo, no como UI de producción.

Referencia visual obligatoria: [guarav.polsia.io](https://guarav.polsia.io/). Se copia el sistema (ritmo, tipo, color, composición). No se copia el nombre “Guaraví”: la marca en pantalla sigue siendo **Cámaras y Alarmas San José**.

## World

**“Taller oscuro, voz baja.”** Fondo casi negro con un verde de bosque apenas teñido. Un solo campo de color fuerte (panel lima) y un punto coral. Tipografía grotesca grande, tracking negativo, mucho aire. Se siente como una marca de servicio premium de 2026: segura, concreta, sin escudos, sin oro, sin rejilla de “cámara de seguridad genérica”.

Modo de la home: **Persuade** — el visitante entiende el oficio y escribe por WhatsApp.

## Palette

Valores medidos en el sitio de referencia (oklch). Los hex son equivalentes de trabajo para Tailwind.

| Token | Referencia | Hex de trabajo | Uso |
|-------|------------|----------------|-----|
| `--bg` | `oklch(0.16 0.012 145)` | `#1c211e` | Fondo de página, header |
| `--bg-raised` | `oklab(0.26 … / 0.45)` | `#2a312c` | Tarjetas y bandas elevadas |
| `--fg` | `oklch(0.96 0.006 145)` | `#f3f5f2` | Texto principal |
| `--fg-muted` | mezcla al 70% | `#b7c0b8` | Párrafos secundarios |
| `--green` | `oklch(0.67 0.12 145)` | `#6fbf73` | Eyebrows, iconos, botón WhatsApp |
| `--green-ink` | `oklch(0.18 0.02 145)` | `#1a2a1c` | Texto sobre botón verde |
| `--lime` | panel “03.” | `#8FCB6A` | Un solo bloque de acento por home |
| `--coral` | punto del “03.” y del hero | `#ff5a6a` | Un punto, no un botón |
| `--line` | hairline | `rgb(255 255 255 / 0.12)` | Divisores de filas |

Prohibido en UI nueva: navy `#0F2C56`, oro `#C4A035`, papel `#EEF2F6`, scanlines, degradados de producto.

## Typography

| Rol | Familia | Notas |
|-----|---------|-------|
| Display y UI | **Geist** (o **Inter** solo si Geist no carga) | No Barlow Condensed. No mono como voz de sección. |
| Cuerpo | La misma familia | 16px / 1.5. Peso 400. |
| Display hero | 600, `clamp(3.25rem, 8vw, 4.5rem)`, tracking ≈ `-0.055em`, line-height ≈ 0.96 | Una sola frase gigante. |
| H2 de sección | 600, `clamp(2.25rem, 5vw, 3rem)`, tracking ≈ `-0.04em` | Sentence case, no mayúsculas sostenidas. |
| Eyebrow | 12–13px, 500, tracking amplio, color `--green`, mayúsculas | Una por sección. |
| Números 01–04 | misma familia, muted, tabular | A la izquierda de la fila. |

## Layout

- Fondo continuo oscuro. No alternar “papel claro / banda navy”.
- Ancho de lectura ≈ `72rem`. Padding de sección `clamp(4.5rem, 10vw, 7rem)`.
- Header fijo, hairline inferior: navegación a la izquierda, botón WhatsApp (píldora verde, radio ~4px, flecha), wordmark a la derecha.
- Hero en dos columnas en desktop: texto a la izquierda, ilustración de línea (cámara + arcos de radar en verde) a la derecha. En móvil, ilustración debajo o recortada, nunca un vacío negro.
- Servicios como **filas** con divisor, no como grilla de cards: `01` + icono + título + una frase. Cada fila enlaza a su página.
- Un panel `--lime` con número enorme (`03.`) y punto coral. Un solo momento así en la home.
- Cierre: titular + dos acciones (WhatsApp y correo) + NAP en texto, sin mapa inventado.
- Las páginas internas heredan header, tipo, fondo y filas. No vuelven al page-hero navy.

## Wordmark

- Header y pie: **Cámaras y Alarmas** con punto verde, y debajo o al lado en pequeño **San José**.
- El hero no repite el nombre legal en 72px (no cabe y rompe el parecido). El H1 es la promesa, al estilo de la segunda lectura del referente: una frase corta de oficio.
- “Guaraví” no aparece en la interfaz.

## Home — orden de secciones

Igual al ritmo de [guarav.polsia.io](https://guarav.polsia.io/), con enlaces al sitemap ya construido:

1. **Hero** — píldora “Atención a domicilio”, H1 de promesa, párrafo local, dos CTA (formulario / WhatsApp), ilustración.
2. **Oficio** — eyebrow verde, H2, texto, nota de públicos (hogares y negocios) y filas 01–04: Instalación, Configuración, Reparación, Mantenimiento. Enlazan a `/instalacion`, `/camaras-de-seguridad`, `/mantenimiento` según corresponda. Reparación puede vivir dentro de `/mantenimiento` hasta tener URL propia.
3. **Mantenimiento** — panel lima `03.` / “meses, una revisión con propósito” + lista corta (imagen, cableado, grabador, app). Enlace a `/mantenimiento`.
4. **Acompañamiento** — un H2 y dos párrafos. Sin reseñas inventadas.
5. **Contacto** — “Cuéntanos qué quieres cuidar”, WhatsApp, correo, ciudad. Sin dirección postal hasta B2.

La puerta dual Hogar | Negocio a ancho completo sale de la home. Hogar y negocio siguen como páginas, enlazadas desde la nota de públicos y el menú secundario.

## Motion

- Casi quieto. Hover de filas: la línea y el título pasan a `--fg`.
- El punto coral puede pulsar muy lento (opacidad), apagado si `prefers-reduced-motion`.
- Sin scan, sin fade de 600ms en cada bloque, sin FAB circular “WA” si el header ya tiene WhatsApp visible. En móvil, el botón del header basta; si se conserva un acceso fijo, es la misma píldora, no un círculo con sigla.

## Copy

- Segunda persona, frases cortas, oficio concreto (DVR, NVR, app, visión nocturna).
- Prohibido en pantalla: “Fase 5”, “placeholder”, “pendiente de capturas”, “B2”, “B3”.
- Si falta una foto o una reseña, se omite el bloque. No se explica el proceso interno.
- Sin precios. “El alcance se define para cada instalación.”

## Anti-patrons

Barlow Condensed en mayúsculas, oro, navy, cards con degradado y la palabra “referencia”, kickers mono “Ruta 01”, stats de hero, pills de features, glassmorphism, modo claro de catálogo, copiar el texto “Guaraví” como marca.
