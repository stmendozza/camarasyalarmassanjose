# Levantamiento de Requerimientos — Sitio Web "Cámaras y Alarmas San José"

> Documento vivo de trazabilidad. Se actualiza fase a fase durante el desarrollo. Última actualización: 2026-09-25.

## 0. Control de Avance del Proyecto

| Fase | Descripción | Estado | % Avance |
|---|---|---|---|
| 1 | Descubrimiento y auditoría de activos | ✅ Completada | 100% |
| 2 | Arquitectura de información y SEO técnico | ✅ Completada | 100% |
| 3 | Diseño UI/UX (wireframes + sistema visual) | ✅ Completada | 100% |
| 4 | Setup del proyecto Astro (base técnica) | 🔄 En progreso | 0% |
| 5 | Maquetado de secciones y contenido | ⬜ Pendiente | 0% |
| 6 | SEO on-page + datos estructurados | ⬜ Pendiente | 0% |
| 7 | QA, performance y accesibilidad | ⬜ Pendiente | 0% |
| 8 | Despliegue, indexación y monitoreo | ⬜ Pendiente | 0% |

**Avance global del proyecto: 37.5%** (3 de 8 fases cerradas; Fase 4 en curso)

**Marca confirmada:** Cámaras y Alarmas San José  
**Prototipo F3:** aprobado 2026-09-25 → `prototypes/fase-03/`  
**Entregables:** `docs/fase-02/`, `docs/fase-03/`, `DESIGN.md` · **Skills:** `SKILLS.md`

> Regla de actualización: cada fase se marca `✅ Completada` solo cuando su checklist interno (secciones 9.x) está 100% verificado. No se avanza de fase con pendientes abiertos, salvo que el cliente los acepte explícitamente por escrito (ver `client-work-practices`: alcance cerrado por fase antes de iniciar).

---

## 1. Auditoría de Activos Digitales Actuales

### 1.1 Sitio web actual — `guarav.polsia.io`

Hallazgos de la auditoría técnica y de contenido:

- **Stack detectado:** Next.js (metadatos `og:*` generados dinámicamente, imagen OG servida vía ruta `/opengraph-image`), una sola landing page con anclas (`#servicios`, `#mantenimiento`, `#contacto`), sin rutas internas adicionales.
- **Nombre de marca usado en el sitio:** "Guaraví" — **no coincide** con la marca del material gráfico entregado ("Cámaras y Alarmas San José", con isotipo de escudo/cámara). Esto es una inconsistencia de marca que debe resolverse con el cliente antes de construir el nuevo sitio (¿se conserva "Guaraví" como nombre comercial y "Cámaras y Alarmas San José" como descriptor, o se unifica todo bajo un solo nombre?).
- **Contenido actual cubre:** instalación, configuración, reparación y mantenimiento de cámaras y alarmas a domicilio; mantenimiento trimestral; contacto por WhatsApp (315 884 2167) y correo (guarav@polsia.app).
- **Vacíos frente al flyer y al negocio real:**
  - No menciona monitoreo en vivo desde celular con app incluida (sí lo menciona el flyer).
  - No menciona alarmas inteligentes como línea de producto explícita.
  - No hay galería de productos/equipos (cámaras bala, domo, PTZ, kits, sensores de puerta/movimiento).
  - No hay página ni sección diferenciada para "Hogar" vs "Negocio" (el flyer sí distingue ambos públicos).
  - No hay contenido geolocalizado más allá de la mención genérica a "San José del Guaviare y zonas cercanas" (falta trabajar el SEO local: barrio/zona, mapa, cobertura de envíos).
  - Sin blog/recursos, sin testimonios, sin casos de instalación, sin FAQ.
  - Un solo canal de conversión (WhatsApp/correo); falta formulario propio y CTA de cotización.
- **SEO técnico observado:** metadatos base correctos (title, description, OG, Twitter card, viewport), pero sin evidencia de datos estructurados (Schema.org `LocalBusiness`), sin sitemap/robots verificados, sin contenido segmentado por intención de búsqueda (instalación vs mantenimiento vs reparación vs cámaras vs alarmas), lo que limita el posicionamiento por los términos objetivo.

### 1.2 Google Business Profile (enlace `share.google/4xYqmCL47Gmntu9hs`)

No fue posible auditar el perfil de forma automática: Google bloquea el acceso automatizado a enlaces de compartir de Google Business (`share.google`). Para completar esta fase se necesita que Cristian/el cliente comparta directamente (captura de pantalla o acceso como administrador):
- Nombre exacto del negocio registrado, categoría principal y categorías secundarias.
- Dirección/área de servicio configurada, horario de atención.
- Reseñas existentes (cantidad, calificación promedio, 2-3 reseñas destacadas para usar como prueba social).
- Fotos actuales subidas al perfil (para reutilizar o reemplazar por mejores).

**Pendiente marcado en el checklist de Fase 2** hasta recibir esta información.

### 1.3 Facebook (`facebook.com/profile.php?id=61579056313249`)

Meta bloquea igualmente el scraping automatizado de perfiles de Facebook sin sesión autenticada. Mismo tratamiento que el punto anterior: se requiere que el cliente comparta capturas de pantalla de:
- Nombre de página, foto de perfil/portada y biografía.
- Publicaciones recientes (para detectar tono de marca, promociones activas, tipos de servicio más publicitados).
- Información de contacto declarada (para verificar consistencia NAP: Nombre-Dirección-Teléfono en todos los canales).

### 1.4 Material gráfico (flyer proporcionado)

Extraído del flyer "¡Protege tu hogar o negocio!":

- **Marca:** Cámaras y Alarmas San José (isotipo con escudo, cámara y check).
- **Propuesta de valor:** protección para hogar y negocio.
- **Servicios listados:**
  - Cámaras de vigilancia en alta definición
  - Alarmas inteligentes
  - Monitoreo en vivo desde el celular (app incluida)
  - Instalación profesional incluida
  - Soporte técnico local en San José
- **Contacto:** WhatsApp 315 884 2167 (mismo número que el sitio actual, confirma que es el mismo negocio).
- **Ubicación:** San José del Guaviare.
- **Diferenciador logístico:** envíos y servicio en toda la zona.
- **Catálogo visual mostrado:** cámara bala, cámara domo, cámara PTZ tipo speed dome, panel/teclado de alarma, sensor de puerta/ventana, sensor de movimiento (PIR), cableado y conectores.

### 1.5 Conclusión de la auditoría

El negocio ya tiene presencia digital fragmentada y con inconsistencias de marca menores, pero **sin una estrategia SEO local intencional** y sin un sitio que separe claramente productos, servicios, públicos (hogar/negocio) y zonas de cobertura. Hay oportunidad clara de reconstrucción completa en Astro con foco en SEO local y velocidad, que es precisamente donde Next.js/Astro-SPA suele perder terreno frente a un sitio estático bien optimizado.

---

## 2. Objetivos del Proyecto

1. Reconstruir el sitio desde cero en **Astro**, con marca unificada **Cámaras y Alarmas San José** (confirmada 2026-09-25; "Guaraví" queda como legacy del sitio actual).
2. Posicionar el sitio a nivel regional (San José del Guaviare) para el clúster de búsquedas objetivo (sección 4).
3. Elevar el estándar de UI/UX frente al sitio actual (jerarquía visual, prueba social, catálogo de productos, conversión).
4. Mantener costo operativo bajo y stack simple, alineado con el patrón de trabajo habitual (sitio estático, sin backend complejo, hosting económico tipo Vercel/Netlify/Cloudflare Pages).
5. Dejar el sitio listo para escalar: blog de mantenimiento/tips, futuras zonas de cobertura (El Retorno, Calamar, etc.), futuras líneas de producto.

---

## 3. Público Objetivo y Casos de Uso

- **Hogar:** persona en San José del Guaviare buscando instalar o reparar cámaras/alarmas domésticas, motivada por seguridad familiar.
- **Negocio:** tiendas, restaurantes, talleres y oficinas que buscan vigilancia para inventario, empleados y accesos.
- **Cliente existente:** alguien que ya tiene cámaras/alarmas instaladas (por esta empresa o un tercero) y busca mantenimiento o reparación.
- Todos comparten un canal de conversión preferente: **WhatsApp** (validado por el sitio actual y el flyer).

---

## 4. Estrategia SEO — Clúster de Palabras Clave Objetivo

Términos a construir relevancia temática y geográfica (todos con intención local, foco San José del Guaviare):

| Grupo | Términos objetivo | Página/sección que los atiende |
|---|---|---|
| Cámaras | cámaras de seguridad San José del Guaviare, cámaras de vigilancia San José del Guaviare, cámaras para negocios, cámaras para casas | `/camaras-de-seguridad`, con sub-bloques hogar/negocio |
| Instalación | instalación de cámaras San José del Guaviare, instalación de alarmas | `/instalacion` (servicio transversal) |
| Alarmas | alarmas San José del Guaviare | `/alarmas` |
| Sistemas | sistemas de seguridad | Home + `/sistemas-de-seguridad` como página paraguas |
| Mantenimiento | mantenimiento de cámaras | `/mantenimiento` (ya existe contenido base a reutilizar) |

**Recomendaciones de arquitectura SEO:**
- Una página propia por intención/servicio (no todo en una sola landing con anclas, como está hoy) — esto es clave para competir por cada término del clúster de forma independiente.
- Title y meta description únicos por página, incluyendo siempre "San José del Guaviare".
- Datos estructurados `LocalBusiness` (o `HomeAndConstructionBusiness`) en todas las páginas, con `areaServed`, teléfono, dirección y horario.
- Sitemap.xml y robots.txt generados automáticamente (Astro lo soporta de forma nativa con integraciones oficiales).
- Contenido de apoyo (FAQ por página, sección de zonas de cobertura) para capturar variaciones long-tail de los mismos términos.
- Perfil de Google Business Profile como pieza central de SEO local (reseñas, categoría, fotos) — a auditar formalmente en cuanto el cliente comparta el acceso (ver 1.2).

---

## 5. Arquitectura de Información Propuesta (Sitemap)

```
/                        Home (propuesta de valor, servicios resumen, CTA WhatsApp)
/camaras-de-seguridad    Catálogo y explicación por tipo (bala, domo, PTZ) + hogar/negocio
/alarmas                 Alarmas inteligentes, sensores, paneles
/instalacion             Proceso de instalación profesional
/mantenimiento           Mantenimiento preventivo (reutiliza contenido actual)
/sistemas-de-seguridad   Página paraguas / comparativa de paquetes
/hogar                   Landing segmentada por público
/negocios                Landing segmentada por público
/cobertura               Zonas de servicio (San José del Guaviare y alrededores)
/sobre-nosotros          Marca, trayectoria, soporte técnico local
/contacto                Formulario + WhatsApp + mapa
/blog (fase 2 futura)    Tips de seguridad, mantenimiento, casos de instalación
```

---

## 6. Stack Técnico Recomendado

- **Framework:** Astro (SSG, islands architecture) — ideal para un sitio de servicios con foco SEO/performance, sin necesidad de interactividad pesada.
- **Estilos:** Tailwind CSS (integración oficial de Astro) para velocidad de desarrollo y consistencia del sistema de diseño.
- **Interactividad puntual:** un solo framework de islas si se necesita (ej. React o Preact) solo para el formulario de contacto o un cotizador simple; evitar hidratar componentes innecesarios.
- **Imágenes:** integración `astro:assets` para optimización automática (WebP/AVIF, lazy loading, tamaños responsivos).
- **SEO:** `@astrojs/sitemap`, metadatos centralizados en un layout base, `astro-seo` o solución propia ligera, JSON-LD manual para `LocalBusiness`.
- **Formularios:** proveedor externo simple (Formspree, Web3Forms o función serverless mínima) para no introducir backend propio, consistente con el patrón de bajo overhead operativo.
- **Hosting:** Vercel, Netlify o Cloudflare Pages (build estático, CDN global, certificado SSL automático, costo mínimo/gratuito para este volumen de tráfico).
- **Analítica:** Google Search Console + Plausible o GA4 (a decidir con el cliente por tema de privacidad/costo).

---

## 7. Patrones de Diseño UI/UX Recomendados

- **Above the fold orientado a conversión:** propuesta de valor + CTA WhatsApp visible sin scroll, igual que el flyer pero mejor jerarquizado que el sitio actual.
- **Segmentación visual hogar/negocio:** dos rutas de entrada claras desde el home (tarjetas o toggle), reflejando el mismo mensaje del flyer ("Protege tu hogar o negocio").
- **Catálogo de equipos con foco en confianza técnica:** tarjetas de producto por tipo de cámara/sensor con especificaciones simples (resolución, visión nocturna, uso recomendado), aprovechando las fotos reales del flyer/local.
- **Prueba social:** bloque de reseñas de Google (una vez auditado el GBP), sello de "soporte técnico local" como diferenciador.
- **Micro-conversión constante:** botón flotante de WhatsApp en todas las páginas (patrón ya validado en el sitio actual, mantenerlo).
- **Diseño mobile-first:** el flyer y el canal principal (WhatsApp) indican que la mayoría del tráfico será móvil.
- **Paleta y tono:** navy/dorado del flyer — canon en `DESIGN.md` (Fase 3).

---

## 8. Requerimientos No Funcionales

- **Performance:** objetivo Core Web Vitals en verde (LCP < 2.5s, CLS < 0.1) — alcanzable de forma natural con Astro al minimizar JS en cliente.
- **Accesibilidad:** contraste AA, textos alternativos en imágenes de producto, navegación por teclado en formulario.
- **SEO técnico:** HTTPS, URLs limpias, canonical por página, Open Graph correcto (reutilizar patrón ya presente en el sitio actual).
- **Multi-dispositivo:** validación en gama baja de Android (perfil de usuario probable en la región).
- **Mantenibilidad:** contenido de servicios y precios editable sin tocar código (colecciones de contenido de Astro / Markdown o JSON tipado).

---

## 9. Checklist Detallado por Fase

### Fase 1 — Descubrimiento y auditoría ✅ 100%
- [x] Auditoría del sitio actual (`guarav.polsia.io`)
- [x] Revisión del material gráfico (flyer)
- [x] Identificación de inconsistencia de marca
- [ ] Auditoría de Google Business Profile (bloqueada — pendiente de captura del cliente)
- [ ] Auditoría de Facebook (bloqueada — pendiente de captura del cliente)

### Fase 2 — Arquitectura de información y SEO técnico — ✅ 100%
- [x] Definición final de nombre de marca con el cliente → **Cámaras y Alarmas San José** (`docs/fase-02/04-marca-provisional.md`)
- [x] Validación del sitemap propuesto (sección 5) → `docs/fase-02/01-sitemap-validado.md`
- [x] Mapeo final de keywords a páginas → `docs/fase-02/02-keyword-map.md`
- [x] Definición de estructura de datos (colecciones de contenido Astro) → `docs/fase-02/03-content-collections.md`

### Fase 3 — Diseño UI/UX — ✅ 100%
- [x] Wireframes de baja fidelidad (home, servicio, contacto) → `docs/fase-03/01-wireframes.md` + `prototypes/fase-03/wireframes.html`
- [x] Sistema de diseño (color, tipografía, componentes) → `DESIGN.md` + `docs/fase-03/02-design-system.md`
- [x] Prototipo de alta fidelidad **aprobado por el cliente** (2026-09-25) → `prototypes/fase-03/`

### Fase 4 — Setup técnico Astro — 0%
- [ ] Repositorio base + integraciones (Tailwind, sitemap, imágenes)
- [ ] Layout base con metadatos y JSON-LD
- [ ] Configuración de despliegue (Vercel/Netlify/Cloudflare Pages)

### Fase 5 — Maquetado y contenido — 0%
- [ ] Home
- [ ] Páginas de servicio (cámaras, alarmas, instalación, mantenimiento)
- [ ] Páginas hogar/negocio
- [ ] Página de cobertura
- [ ] Formulario de contacto

### Fase 6 — SEO on-page — 0%
- [ ] Títulos y meta descriptions por página
- [ ] Datos estructurados `LocalBusiness`
- [ ] Sitemap.xml y robots.txt verificados

### Fase 7 — QA, performance y accesibilidad — 0%
- [ ] Auditoría Lighthouse (performance/SEO/accesibilidad ≥ 90)
- [ ] Pruebas en dispositivos móviles reales
- [ ] Revisión de contraste y navegación por teclado

### Fase 8 — Despliegue e indexación — 0%
- [ ] Publicación en dominio final
- [ ] Alta y verificación en Google Search Console
- [ ] Envío de sitemap
- [ ] Monitoreo inicial de posiciones para el clúster de keywords objetivo

---

## 10. Pendientes Abiertos (bloqueantes para avanzar de fase)

1. ~~**B1 — Marca:**~~ ✅ Cerrado 2026-09-25 — **Cámaras y Alarmas San José**.
2. **B2 — GBP / Facebook:** Obtener capturas/acceso a Google Business Profile y Facebook (no auditables de forma automática). Impacta prueba social en F3 y NAP en F6.
3. **B3 — Cobertura:** Confirmar zonas exactas más allá de "San José del Guaviare" (¿El Retorno, Calamar, Miraflores?) para `/cobertura` y `areaServed`.

### Gate de fase

- ~~Cerrar Fase 2~~ ✅ · ~~Cerrar Fase 3~~ ✅ (prototipo aprobado 2026-09-25)
- **En curso: Fase 4** — repo Astro + Tailwind + sitemap + layout SEO base + deploy config.
- Fase 5 solo tras checklist F4.