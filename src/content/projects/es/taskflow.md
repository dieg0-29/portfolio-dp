---
# MOCK: proyecto de ejemplo, pendiente de reemplazo por uno real.
title: TaskFlow
summary: Gestor de tareas colaborativo tipo Kanban con tableros en tiempo real, roles y notificaciones.
status: done
year: 2025
tech: [React, TypeScript, Node.js, PostgreSQL, Socket.IO]
image: ../../../assets/mock/project-taskflow.svg
imageAlt: Vista de un tablero Kanban con tres columnas de tareas
demo: https://example.com
repo: https://github.com/dieg0-29
featured: true
order: 1
---

## El problema

Los equipos pequeños usaban hojas de cálculo y chats para coordinar tareas, lo que generaba información duplicada y poca visibilidad del avance.

## La solución

Una aplicación web con tableros Kanban colaborativos donde los cambios se sincronizan en tiempo real entre todos los miembros.

- Arrastrar y soltar tarjetas entre columnas con actualizaciones instantáneas.
- Roles de usuario (administrador, editor, lector) y tableros privados.
- Notificaciones cuando te asignan o mencionan en una tarea.

## Lo que aprendí

Diseñar un modelo de datos que soporte cambios concurrentes y optimizar el renderizado de listas largas en React.
