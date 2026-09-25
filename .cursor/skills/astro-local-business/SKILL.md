---
name: astro-local-business
description: >-
  Implementa el sitio estático Astro + Tailwind de Cámaras y Alarmas San José:
  islands mínimas, colecciones de contenido, SEO layout, assets y formularios
  externos. Usar al crear/configurar el proyecto Astro, layouts, pages,
  content collections, WhatsApp CTA o deploy estático.
---

# Astro local business — stack del proyecto

## Stack cerrado (requerimientos §6)

| Pieza | Elección |
|-------|----------|
| Framework | Astro (SSG) |
| CSS | Tailwind (integración oficial) |
| Islas | React o Preact solo si hace falta (formulario) |
| Imágenes | `astro:assets` |
| SEO | `@astrojs/sitemap` + JSON-LD propio |
| Forms | Formspree / Web3Forms / serverless mínima |
| Host | Vercel / Netlify / Cloudflare Pages |

No introducir backend propio ni CMS headless en MVP salvo decisión explícita.

## Estructura objetivo

```
src/
  content/          # colecciones tipadas (services, products, zones, faqs)
  layouts/BaseLayout.astro
  components/       # Header, Footer, WhatsAppFab, CTA, ProductCard…
  pages/            # rutas del sitemap §5
  data/site.ts      # NAP, brandName, phone, socials (single source)
public/
  robots.txt (o generado)
```

## Reglas de implementación

1. **`site.ts` / content** editan copy y NAP sin tocar páginas.
2. **Cero JS** en hero/servicios salvo necesidad real; CTA WhatsApp = enlace `wa.me`.
3. Metadatos vía props del layout + frontmatter; nunca titles hardcodeados duplicados.
4. Imágenes de producto con `alt` descriptivo (accesibilidad §8).
5. Botón flotante WhatsApp en layout base (todas las páginas).

## Colecciones mínimas (Fase 2 → 4)

- `services` — slug, title, intentKeywords, summary, body, cta
- `products` — type (bala|domo|ptz|sensor|panel), specs, audience (hogar|negocio|ambos)
- `zones` — name, type (city|nearby), priority
- `faqs` — question, answer, pageSlugs[]

## Performance / a11y gates (Fases 7)

- LCP < 2.5s, CLS < 0.1; Lighthouse ≥ 90.
- Contraste AA; focus visible; labels en formulario.

## Skills externos a consultar

- `.agents/skills/astro-seo`
- `.agents/skills/local-seo` / `seo-local-business`
- `.agents/skills/seo-audit` / `seo`
