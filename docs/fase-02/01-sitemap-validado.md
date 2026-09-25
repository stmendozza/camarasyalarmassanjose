# Sitemap validado — Fase 2

**Fecha:** 2026-09-25  
**Estado:** Validado para MVP (sin `/blog`)

## Decisión

Se confirma el sitemap de `requerimientos.md` §5 con estos ajustes de arquitectura SEO:

1. **MVP indexable:** todas las rutas excepto `/blog` (futura).
2. **Home** = hub de intención "sistemas de seguridad" + conversión; no compite solo por "cámaras".
3. **Páginas de público** (`/hogar`, `/negocios`) enlazan a servicios/productos; no canibalizan head terms de producto.
4. **`/cobertura`** existe aunque zonas secundarias estén TBD (contenido mínimo + disclaimer hasta B3).
5. **`/sobre-nosotros`** refuerza E-E-A-T local; no es página de keyword head.

## Árbol definitivo MVP

```
/                        Home — propuesta de valor + rutas hogar/negocio + CTA
/camaras-de-seguridad    Cámaras (bala, domo, PTZ) + bloques hogar/negocio
/alarmas                 Alarmas inteligentes, paneles, sensores
/instalacion             Proceso de instalación profesional
/mantenimiento           Mantenimiento preventivo / correctivo
/sistemas-de-seguridad   Paraguas / comparativa de paquetes
/hogar                   Landing público hogar
/negocios                Landing público negocio
/cobertura               Zonas de servicio (SJ del Guaviare + alrededores TBD)
/sobre-nosotros          Marca, soporte técnico local
/contacto                Formulario + WhatsApp + mapa (cuando haya dirección)
```

### Fuera de MVP (no indexar aún)

```
/blog                    Tips / casos — fase futura
```

## Enlazado interno mínimo (hub & spoke)

| Desde | Hacia (prioridad) |
|-------|-------------------|
| `/` | cámaras, alarmas, instalación, mantenimiento, hogar, negocios, contacto |
| `/camaras-de-seguridad` | instalación, hogar, negocios, cobertura, contacto |
| `/alarmas` | instalación, hogar, negocios, contacto |
| `/instalacion` | cámaras, alarmas, mantenimiento, contacto |
| `/mantenimiento` | instalación, contacto |
| `/sistemas-de-seguridad` | cámaras, alarmas, hogar, negocios |
| `/hogar` · `/negocios` | cámaras, alarmas, instalación, contacto |
| `/cobertura` | servicios + contacto |
| `/sobre-nosotros` | contacto |
| Todas | WhatsApp FAB + footer a contacto |

## Prioridad de crawl (orientativa sitemap)

| Prioridad | Rutas |
|-----------|-------|
| 1.0 | `/` |
| 0.9 | `/camaras-de-seguridad`, `/alarmas`, `/instalacion` |
| 0.8 | `/mantenimiento`, `/sistemas-de-seguridad`, `/hogar`, `/negocios` |
| 0.7 | `/cobertura`, `/contacto` |
| 0.5 | `/sobre-nosotros` |

## Validación vs sitio actual

| Actual (`guarav.polsia.io`) | Nuevo |
|-----------------------------|-------|
| Una landing con anclas | Páginas por intención |
| Sin catálogo | `/camaras-de-seguridad` + productos en colección |
| Sin hogar/negocio | `/hogar`, `/negocios` |
| Sin cobertura SEO | `/cobertura` |
| Solo WA/correo | `/contacto` + WA FAB |

**Resultado:** sitemap §5 **aprobado** para pasar a diseño (F3) y setup (F4).
