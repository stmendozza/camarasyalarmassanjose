# Colecciones de contenido Astro — Fase 2

**Fecha:** 2026-09-25  
**Objetivo:** contenido editable sin tocar páginas (NFR §8)

## Single source de negocio

Archivo previsto: `src/data/site.ts` (o `src/content/config` + data).

```ts
export const site = {
  brandName: 'Cámaras y Alarmas San José', // confirmado 2026-09-25
  brandNameLegacy: 'Guaraví',
  tagline: 'Protege tu hogar o negocio',
  phoneDisplay: '315 884 2167',
  phoneE164: '+573158842167',
  whatsappUrl: 'https://wa.me/573158842167',
  email: 'guarav@polsia.app', // confirmar con cliente
  city: 'San José del Guaviare',
  region: 'Guaviare',
  country: 'CO',
  // address, geo, hours: TBD (B2 GBP)
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61579056313249',
    googleBusiness: 'https://share.google/4xYqmCL47Gmntu9hs',
  },
  schemaType: 'HomeAndConstructionBusiness', // o LocalBusiness
} as const;
```

## Content Collections (`src/content.config.ts`)

### 1. `services`

| Campo | Tipo | Notas |
|-------|------|-------|
| `title` | string | |
| `slug` | string | coincide con ruta |
| `summary` | string | card / meta corta |
| `intentKeywords` | string[] | del keyword-map |
| `audience` | `'hogar' \| 'negocio' \| 'ambos'` | |
| `order` | number | |
| `ctaLabel` | string | default Cotizar por WhatsApp |
| `body` | markdown | |

**Entradas seed:** camaras-de-seguridad, alarmas, instalacion, mantenimiento, sistemas-de-seguridad.

### 2. `products`

| Campo | Tipo | Notas |
|-------|------|-------|
| `name` | string | |
| `type` | `'bala' \| 'domo' \| 'ptz' \| 'panel' \| 'sensor-puerta' \| 'sensor-movimiento' \| 'kit'` | del flyer |
| `audience` | `'hogar' \| 'negocio' \| 'ambos'` | |
| `specs` | `{ label: string; value: string }[]` | resolución, visión nocturna, etc. |
| `useCase` | string | |
| `image` | image() | astro assets |
| `featured` | boolean | |
| `order` | number | |

### 3. `zones`

| Campo | Tipo | Notas |
|-------|------|-------|
| `name` | string | |
| `kind` | `'primary' \| 'nearby' \| 'tbd'` | |
| `description` | string | |
| `priority` | number | |
| `confirmed` | boolean | false hasta B3 |

**Seed:** San José del Guaviare (`primary`, confirmed). El Retorno / Calamar / Miraflores (`nearby`, `confirmed: false`) solo si el cliente confirma.

### 4. `faqs`

| Campo | Tipo | Notas |
|-------|------|-------|
| `question` | string | |
| `answer` | markdown | |
| `pageSlugs` | string[] | dónde se renderiza |
| `order` | number | |

### 5. `pages` (opcional frontmatter en `.md` de rutas)

Para landings `/hogar`, `/negocios`, `/sobre-nosotros`, `/cobertura`, `/contacto`:

| Campo | Tipo |
|-------|------|
| `title` | string |
| `description` | string |
| `heroHeadline` | string |
| `heroSub` | string |
| `noindex` | boolean? |

## Relación páginas ↔ colecciones

| Ruta | Collections |
|------|-------------|
| `/` | services (featured), products (featured), faqs (home) |
| `/camaras-de-seguridad` | service + products (cámaras) + faqs |
| `/alarmas` | service + products (alarmas/sensores) + faqs |
| `/instalacion` | service + faqs |
| `/mantenimiento` | service + faqs |
| `/sistemas-de-seguridad` | services (comparativa) |
| `/hogar` · `/negocios` | products filtrados + services |
| `/cobertura` | zones |
| `/contacto` | site.ts |

## Schema JSON-LD (contrato de datos)

Campos mínimos desde `site` + página:

- `@type`: `HomeAndConstructionBusiness`
- `name`, `telephone`, `email`, `url`
- `address` / `areaServed` (city + zones confirmed)
- `openingHoursSpecification` cuando B2 entregue horarios
- `sameAs`: Facebook, GBP

No emitir dirección inventada.

## Resultado

Estructura de datos **definida** para implementar en Fase 4 (`content.config.ts` + seeds).
