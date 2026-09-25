# Cámaras y Alarmas San José — sitio Astro

App estática (Fase 4). Diseño canon: `../DESIGN.md` · prototipo: `../prototypes/fase-03/`.

## Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Dependencias |
| `npm run dev` | Dev en `localhost:4321` |
| `npm run build` | Salida en `dist/` |
| `npm run preview` | Preview del build |

## Estructura

- `src/data/site.ts` — NAP, marca, WhatsApp
- `src/data/pages-meta.ts` — titles/descriptions borrador
- `src/content/` — colecciones `services`, `products`, `zones`, `faqs`
- `src/layouts/BaseLayout.astro` — shell global + SEO + JSON-LD

## Deploy

Build: `npm run build`. Producción: `https://www.camarasyalarmassanjose.lat` (Vercel redirige el apex a www). `siteUrl` vive en `src/data/site.ts` y `astro.config.mjs`.
