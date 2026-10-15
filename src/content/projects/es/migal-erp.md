---
title: ERP Ferre & Inversiones MIGAL
summary: Diseño de una arquitectura ERP con Odoo 18 para centralizar inventario, ventas, abastecimiento y contabilidad de una ferretería.
status: in-progress
year: 2026
tech: [Odoo 18, ERP, Punto de venta, Modelado de procesos]
image: ../../../assets/mock/project-migal-erp.svg
imageAlt: Maqueta de un panel ERP con módulos de inventario, ventas, compras y contabilidad
repo: https://github.com/dieg0-29/migal-erp
order: 4
---

## El problema

La ferretería Ferre & Inversiones MIGAL depende de registros en papel, cálculos mentales y pedidos por WhatsApp. No hay trazabilidad del inventario entre su tienda y sus dos almacenes, ni información clara sobre ganancias reales y valoración del stock.

## La propuesta

Proyecto en equipo que diseña la arquitectura de un ERP basado en Odoo 18 para transformar esos procesos informales en un flujo de datos integrado:

- **Almacén:** inventario sincronizado entre la tienda y los dos almacenes, con alertas automáticas de reposición a proveedores.
- **Punto de venta:** registro formal de las ventas diarias con el módulo POS de Odoo.
- **Pedidos externos:** registro de las ventas por llamada o WhatsApp como órdenes de venta, para descontar correctamente el inventario.
- **Contabilidad básica:** información confiable para la toma de decisiones.
