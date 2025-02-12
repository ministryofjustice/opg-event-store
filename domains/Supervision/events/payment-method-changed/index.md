---
name: payment-method-changed
version: 0.0.1
summary: |
  The client's payment method have changed
producers:
  - opg.supervision.finance
consumers:
  - opg.supervision.sirius
owners:
  - supervision
---

## Context

When the client's payment method has been changed in the finance hub, this triggers an event for Sirius to
produce a timeline event.

## Trigger

The client's payment method is changed.

## Effect

Sirius Supervision creates a timeline event.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
