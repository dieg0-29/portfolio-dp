---
title: TrikaWeb
summary: Plataforma académica que centraliza exámenes antiguos, solucionarios y reseñas de profesores para estudiantes de la UNI.
status: done
year: 2026
tech: [Astro, React, Tailwind CSS, Supabase, PostgreSQL, Playwright]
image: ../../../assets/mock/project-trikaweb.svg
imageAlt: Maqueta de un repositorio académico con buscador y lista de documentos
repo: https://github.com/ccUnicode/TrikaWeb
featured: true
order: 1
---

## El proyecto

TrikaWeb es una plataforma colaborativa desarrollada en UNICODE para consultar y compartir recursos académicos universitarios: exámenes anteriores, solucionarios, información de cursos y valoraciones de docentes. Participé en su desarrollo entre febrero y setiembre de 2026.

## Mi aporte

- Expandí la base de datos para integrar los sistemas y subsistemas de evaluación de los cursos.
- Normalicé la subida de archivos mediante selectores desplegables, lo que redujo los errores manuales.
- Rediseñé el panel de administración con un menú lateral dinámico.
- Configuré una autenticación restrictiva que solo admite correos institucionales en el inicio de sesión.

## Stack

Astro y React con Tailwind CSS en el frontend, rutas API de Astro en el backend, y Supabase (PostgreSQL, Auth y Storage) para datos, autenticación y archivos. Las pruebas end-to-end se realizan con Playwright.
