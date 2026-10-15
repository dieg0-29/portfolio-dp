# Portafolio · Diego Pinedo

Portafolio personal bilingüe (español e inglés) construido con **Astro** y **Tailwind CSS**. El sitio es estático, accesible y de fácil mantenimiento: los proyectos y la experiencia se gestionan como archivos Markdown.

## Comandos

| Comando           | Acción                                                          |
| ----------------- | --------------------------------------------------------------- |
| `npm install`     | Instalar las dependencias.                                      |
| `npm run dev`     | Iniciar el servidor local en `http://localhost:4321`.           |
| `npm run build`   | Verificar tipos y contenido, y generar el sitio en `dist/`.     |
| `npm run preview` | Servir localmente la versión de producción.                     |

## Estructura

```
src/
├─ assets/mock/          # Imágenes provisionales (avatar y proyectos)
├─ components/
│  ├─ sections/          # Hero, About, Skills, Projects, Experience, Contact
│  ├─ ui/                # Icon, Skeleton, SmartImage, SectionHeading, StatusBadge
│  └─ ...                # Header, Footer, ProjectCard, ProjectDetail, Home
├─ content/
│  ├─ projects/{es,en}/  # Un archivo .md por proyecto y por idioma
│  └─ experience/{es,en}/
├─ data/site.ts          # Nombre, rol, biografía, redes, CV y habilidades
├─ i18n/ui.ts            # Textos de la interfaz en español e inglés
├─ layouts/BaseLayout.astro
├─ pages/                # / (ES), /en/ (EN) y /projects/[slug]
└─ styles/global.css     # Paleta de colores (tokens claro/oscuro) y estilos base
public/
├─ cv/                   # CV en PDF (ES y EN), provisionales
├─ og.png                # Imagen de vista previa para redes sociales
└─ favicon.svg
```

## Reemplazo del contenido provisional

Todo el contenido provisional está marcado con `MOCK` en el código.

1. **Datos personales:** editar `src/data/site.ts` (correo, LinkedIn, ubicación, biografía, idiomas y habilidades).
2. **Foto de perfil:** copiar la imagen en `src/assets/` (por ejemplo, `profile.jpg`; se recomienda formato cuadrado de al menos 640 px) y actualizar el `import avatar` de `src/data/site.ts`. Astro optimiza la imagen automáticamente.
3. **CV:** reemplazar `public/cv/cv-diego-pinedo-es.pdf` y `public/cv/cv-diego-pinedo-en.pdf`, conservando los mismos nombres.
4. **Proyectos y experiencia:** reemplazar los archivos de `src/content/` (véase la sección siguiente).
5. **Dominio:** una vez definida la URL final, actualizar `site` en `astro.config.mjs` y la línea `Sitemap` de `public/robots.txt`.

## Incorporación de un proyecto

Crear el mismo archivo en ambos idiomas, por ejemplo `src/content/projects/es/mi-app.md` y `src/content/projects/en/mi-app.md`:

```md
---
title: Mi App
summary: Descripción breve, en una línea, del propósito y el público del proyecto.
status: in-progress        # done | in-progress
year: 2026
tech: [React, TypeScript, Node.js]
image: ../../../assets/projects/mi-app.png
imageAlt: Captura de la pantalla principal de Mi App
demo: https://mi-app.vercel.app   # opcional
repo: https://github.com/dieg0-29/mi-app   # opcional
featured: true             # se muestra primero, con la etiqueta "Destacado"
order: 1                   # un valor menor implica una posición más alta
---

## El problema
...

## La solución
...
```

El cuerpo en Markdown se muestra en la página de detalle (`/projects/mi-app/`). Si falta un campo obligatorio o su formato es incorrecto, `npm run build` informa del error.

La experiencia se gestiona del mismo modo en `src/content/experience/{es,en}/`, con los campos `role`, `org`, `type` (`work` o `education`), `start`, `end` (opcional; su ausencia indica que el puesto continúa vigente), `summary` y `tech`.

## Diseño y experiencia de usuario

- **Paleta fría** (azul noche, cian e índigo), definida como variables CSS en `src/styles/global.css`, donde se configuran los colores de ambos temas.
- **Tema oscuro por defecto**, con un control para cambiar al tema claro; la preferencia se conserva entre visitas.
- **Skeletons** con efecto shimmer durante la carga de imágenes, que luego aparecen con una transición de opacidad. El espacio de cada imagen se reserva de antemano para evitar desplazamientos del diseño.
- Navegación fija con indicador de la sección activa, menú para dispositivos móviles, animaciones de entrada sutiles (desactivadas con `prefers-reduced-motion`), enlace para saltar al contenido, contraste AA y navegación completa por teclado.

## Despliegue en Vercel

1. Acceder a [vercel.com/new](https://vercel.com/new) e importar el repositorio `dieg0-29/portfolio-dp`.
2. Vercel detecta Astro automáticamente; no se requiere configuración adicional (sitio estático, sin adaptador).
3. Cada `git push` a la rama `main` genera un nuevo despliegue.
