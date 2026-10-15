---
title: Ferre & Inversiones MIGAL ERP
summary: ERP architecture design on Odoo 18 to centralize inventory, sales, purchasing and accounting for a hardware store.
status: in-progress
year: 2026
tech: [Odoo 18, ERP, Point of sale, Process modeling]
image: ../../../assets/mock/project-migal-erp.svg
imageAlt: Mockup of an ERP dashboard with inventory, sales, purchasing and accounting modules
repo: https://github.com/dieg0-29/migal-erp
order: 4
---

## The problem

The hardware store Ferre & Inversiones MIGAL relies on paper records, mental math and WhatsApp orders. There is no inventory traceability across its store and two warehouses, and no clear view of actual profit or stock valuation.

## The proposal

A team project that designs the architecture of an Odoo 18 ERP to turn those informal processes into an integrated data flow:

- **Warehouse:** inventory synced across the store and both warehouses, with automatic restocking alerts to suppliers.
- **Point of sale:** formal logging of daily sales with Odoo's POS module.
- **External orders:** phone and WhatsApp sales recorded as sales orders so inventory is deducted correctly.
- **Basic accounting:** reliable information for decision-making.
