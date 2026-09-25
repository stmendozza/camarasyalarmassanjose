---
name: client-work-practices
description: >-
  Gobierna el trabajo fase a fase del sitio Cámaras y Alarmas San José: alcance
  cerrado, checklists de requerimientos.md, bloqueantes del cliente y criterios
  de cierre. Usar al iniciar/cerrar fases, actualizar avance, negociar pendientes
  o cuando el usuario mencione fases, alcance, bloqueantes o client-work-practices.
---

# Client work practices — Cámaras y Alarmas San José

## Fuente de verdad

`requerimientos.md` es el documento vivo. Toda decisión de alcance, estado de fase y pendiente abierto se refleja ahí antes de dar por cerrada una sesión sustancial.

## Reglas de fase (no negociables)

1. **Una fase a la vez.** No implementar código de Fase N+1 mientras N tenga checklist abierto, salvo aceptación escrita del cliente.
2. **Alcance cerrado antes de iniciar.** Al abrir una fase: listar entregables, supuestos y bloqueantes. Si hay bloqueante crítico, documentarlo y avanzar solo el trabajo no bloqueado.
3. **Cierre = checklist 100%.** Marcar `✅ Completada` en la tabla §0 solo cuando todos los ítems `- [ ]` de esa fase en §9 estén `- [x]` o explícitamente diferidos por escrito del cliente (anotar en §10).
4. **Actualizar avance global** = fases completadas / 8 × 100.
5. **No inventar datos del cliente** (reseñas GBP, dirección exacta, horarios, zonas). Usar placeholders tipados y dejar pendiente en §10.

## Flujo al abrir una fase

```
1. Leer §0, §9 (fase actual) y §10
2. Declarar: entregables | supuestos | bloqueantes | out-of-scope
3. Ejecutar solo ítems no bloqueados
4. Actualizar checklists y % en requerimientos.md
5. Pedir al usuario/cliente lo bloqueante con pregunta concreta
```

## Flujo al cerrar una fase

- Verificar checklist §9 de la fase.
- Actualizar tabla §0 (estado + %).
- Registrar fecha ISO en "Última actualización".
- Anunciar siguiente fase y sus bloqueantes.

## Bloqueantes conocidos (proyecto)

| ID | Bloqueante | Impacta |
|----|------------|---------|
| B1 | ~~Nombre de marca~~ ✅ Cámaras y Alarmas San José | — |
| B2 | Capturas/acceso GBP y Facebook | F3 prueba social, F6 NAP |
| B3 | Zonas de cobertura exactas | `/cobertura`, schema `areaServed` |

- **Trabajo permitido con B1 abierto:** ~~N/A — B1 cerrado.~~
- **Marca en código/docs:** siempre `Cámaras y Alarmas San José`.

## Entregables por tipo de fase

| Fase | Entregable mínimo |
|------|-------------------|
| 2 IA/SEO | Sitemap validado + keyword→URL + schema de colecciones |
| 3 UI/UX | Wireframes + tokens + prototipo (aprobación cliente) |
| 4 Setup | Repo Astro + Tailwind + sitemap + layout SEO base |
| 5–8 | Según §9; no saltar QA ni GSC |

## Anti-patrones

- Marcar fase completa con ítems abiertos "porque el cliente no respondió".
- Cambiar stack (dejar Astro) sin decisión explícita.
- Hardcodear precios/reseñas no verificadas.
- Avanzar maquetado (F5) sin diseño (F3) ni setup (F4).
---

## Skills relacionados en este repo

- `.cursor/skills/seo-expert-senior` — estrategia SEO
- `.cursor/skills/astro-local-business` — implementación Astro
- `.agents/skills/*` — astro-seo, local-seo, seo-audit, seo, seo-local-business
