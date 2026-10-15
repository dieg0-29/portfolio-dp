# Portafolio · Diego Pinedo

Portafolio personal bilingüe (ES/EN) construido con **Astro** y **Tailwind CSS**. Rápido, accesible y fácil de mantener: los proyectos y la experiencia son archivos Markdown.

## Comandos

| Comando           | Acción                                              |
| ----------------- | --------------------------------------------------- |
| `npm install`     | Instala dependencias                                |
| `npm run dev`     | Servidor local en `http://localhost:4321`           |
| `npm run build`   | Verifica tipos/contenido y genera el sitio en `dist/` |
| `npm run preview` | Sirve la build de producción localmente             |

## Estructura

```
src/
├─ assets/mock/          # Imágenes de ejemplo (avatar y proyectos), reemplazar
├─ components/
│  ├─ sections/          # Hero, About, Skills, Projects, Experience, Contact
│  ├─ ui/                # Icon, Skeleton, SmartImage, SectionHeading, StatusBadge
│  └─ ...                # Header, Footer, ProjectCard, ProjectDetail, Home
├─ content/
│  ├─ projects/{es,en}/  # Un .md por proyecto y por idioma
│  └─ experience/{es,en}/
├─ data/site.ts          # Nombre, rol, bio, redes, CV y habilidades
├─ i18n/ui.ts            # Textos de la interfaz en ES y EN
├─ layouts/BaseLayout.astro
├─ pages/                # / (ES), /en/ (EN) y /projects/[slug]
└─ styles/global.css     # Paleta de colores (tokens claro/oscuro) y estilos base
public/
├─ cv/                   # CV en PDF (ES y EN), reemplazar
├─ og.png                # Imagen para compartir en redes
└─ favicon.svg
```

## Reemplazar el contenido de ejemplo

Todo lo provisional está marcado con `MOCK` en el código.

1. **Datos personales:** edita `src/data/site.ts` (correo, LinkedIn, ubicación, bio, idiomas y habilidades).
2. **Foto de perfil:** copia tu foto a `src/assets/` (p. ej. `profile.jpg`, idealmente cuadrada, ≥ 640 px) y cambia el `import avatar` en `src/data/site.ts`. Astro la optimiza automáticamente.
3. **CV:** reemplaza `public/cv/cv-diego-pinedo-es.pdf` y `public/cv/cv-diego-pinedo-en.pdf` (mismos nombres).
4. **Proyectos y experiencia:** reemplaza los archivos de `src/content/` (ver abajo).
5. **Dominio:** cuando tengas la URL final, actualiza `site` en `astro.config.mjs` y la línea `Sitemap` de `public/robots.txt`.

## Agregar un proyecto

Crea el mismo archivo en ambos idiomas, por ejemplo `src/content/projects/es/mi-app.md` y `src/content/projects/en/mi-app.md`:

```md
---
title: Mi App
summary: Una línea que explique qué hace y para quién.
status: in-progress        # done | in-progress
year: 2026
tech: [React, TypeScript, Node.js]
image: ../../../assets/projects/mi-app.png
imageAlt: Captura de la pantalla principal de Mi App
demo: https://mi-app.vercel.app   # opcional
repo: https://github.com/dieg0-29/mi-app   # opcional
featured: true             # aparece primero con la etiqueta "Destacado"
order: 1                   # menor = más arriba
---

## El problema
...

## La solución
...
```

El contenido Markdown se muestra en la página de detalle (`/projects/mi-app/`). Si falta un campo o tiene un formato incorrecto, `npm run build` lo indica.

La experiencia funciona igual en `src/content/experience/{es,en}/` (`role`, `org`, `type: work | education`, `start`, `end` opcional = actualidad, `summary`, `tech`).

## Diseño y UX

- **Paleta fría** (azul noche, cian e índigo) definida como variables CSS en `src/styles/global.css`; cambia ahí los colores de ambos temas.
- **Tema oscuro por defecto** con botón para cambiar a claro (se recuerda la preferencia).
- **Skeletons** con efecto shimmer mientras cargan las imágenes, que luego aparecen con fade-in; el espacio está reservado para que no haya saltos de diseño.
- Navegación fija con indicador de la sección activa, menú móvil, animaciones de entrada sutiles (desactivadas con `prefers-reduced-motion`), enlace "saltar al contenido", contraste AA y navegación por teclado.

## Despliegue en Vercel

1. Entra en [vercel.com/new](https://vercel.com/new) e importa el repositorio `dieg0-29/portfolio-dp`.
2. Vercel detecta Astro automáticamente; no hace falta configurar nada (sitio estático, sin adaptador).
3. Cada `git push` a `main` vuelve a desplegar el sitio.

## Convenciones

- Se usa [Conventional Commits](https://www.conventionalcommits.org/es/): `feat`, `fix`, `style`, `refactor`, `docs`, `chore`, y `feat(content)` para cambios de proyectos o experiencia. Ejemplo: `feat(content): add mi-app project`.
- No se usan emojis en el código, los comentarios, la documentación ni el contenido.
