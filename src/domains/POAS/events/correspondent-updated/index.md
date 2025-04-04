---
name: correspondent-updated
version: 0.0.1
summary: |
  The correspondent details for the LPA have been updated.
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.sirius-proposed
owners:
  - vega
  - mrlpa
tags: events
---

## Context

The donor has entered, edited, or removed the details for a correspondent on their LPA.

## Trigger

When the donor:

- enters details for a correspondent
- says they don't want a correspondent after previously entering details for one

## Effect

Sirius provides this data to caseworkers so that they can correctly address correspondence.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
