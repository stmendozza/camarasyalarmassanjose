# Auditoría UI y requerimientos de rediseño — 2026-09-25

**Referencia:** [guarav.polsia.io](https://guarav.polsia.io/)  
**Sitio en producción visual actual:** `cyan-chaos/` (sistema navy/dorado, prototipo F3)  
**Canon nuevo:** `DESIGN.md`  
**SEO (Fase 6):** detenido hasta cerrar este rediseño.

## Qué se auditó

Dos lecturas independientes del home actual, más una inspección visual del referente.

- Revisión de dirección: el sistema navy/dorado es coherente, pero la home todavía se lee como prototipo (notas internas, equipos sin imagen, tres bandas oscuras seguidas).
- Detector mecánico sobre `index.astro` y `src/components`: 0 hallazgos. El problema no es un error de markup; es la dirección visual.

## Veredicto

El sitio nuevo no se parece al referente y tampoco se siente como una empresa de este segmento en 2026. [guarav.polsia.io](https://guarav.polsia.io/) es oscuro, quieto y editorial: grotesca grande con tracking negativo, verde bosque, un panel lima con un número enorme y filas de servicio numeradas. El build actual es un afiche de vigilancia (marino, oro, condensada, puerta dual, catálogo de recuadros). Hay que reemplazar el mundo visual, no pulirlo.

## Qué copiar del referente

| Pieza | En guarav.polsia.io | En el sitio nuevo |
|-------|---------------------|-------------------|
| Fondo | Casi negro verdoso, continuo | Igual en todas las páginas |
| Tipo | Sans geométrica, H1 ~72px, tracking muy negativo | Geist, mismas escalas |
| Header | Nav izquierda, WhatsApp píldora, marca a la derecha | Misma composición |
| Hero | Píldora, promesa, dos CTA, ilustración de cámara en línea | Igual; H1 = promesa, no el nombre legal gigante |
| Servicios | Filas 01–04 con icono, no cards | Filas que enlazan a las URLs ya existentes |
| Acento | Un panel lima `03.` con punto coral | Un solo panel así, en mantenimiento |
| Cierre | WhatsApp + correo + ciudad, sin mapa falso | Igual |
| Marca en pantalla | “Guaraví.” | **No.** Cámaras y Alarmas San José |

## Qué no copiar

- El nombre Guaraví.
- Colapsar el sitio a una sola landing. El sitemap (cámaras, alarmas, hogar, negocios, cobertura) se mantiene; cambia la piel y el orden de la home.
- Precios, reseñas o dirección que el referente tampoco publica y que aquí siguen bloqueadas (B2, B3).

## Requerimientos UI (para implementar)

1. Sustituir tokens y tipografía según `DESIGN.md`. Retirar Barlow, oro y navy de la UI.
2. Recomponer header, hero, filas de servicio, panel `03.`, acompañamiento y cierre.
3. Quitar de la home la puerta dual, el catálogo de placeholders y cualquier frase que hable del proyecto (“fotos que reemplazarán”, “reseñas cuando compartan”).
4. Ilustración de línea (cámara + arcos) en SVG propio, en verde sobre el fondo. No una foto de stock de cámara CCTV.
5. Páginas internas con el mismo fondo, tipo y filas. El page-hero navy desaparece.
6. WhatsApp sigue siendo la acción primaria (`315 884 2167`). El formulario de contacto se mantiene en `/contacto`, con los mismos campos, dentro del tema oscuro.
7. Contraste del texto muted sobre `--bg` en AA. El panel lima usa texto casi negro.
8. `prefers-reduced-motion` apaga el punto que pulsa.
9. Aprobación visual del cliente sobre la home antes de abrir la Fase 6.

## Fuera de este rediseño

- Congelar titles SEO, Search Console, fotos reales de equipos, reseñas de Google, mapa con dirección.
