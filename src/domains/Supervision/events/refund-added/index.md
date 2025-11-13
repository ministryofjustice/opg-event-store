---
name: refund-added
summary: |
  A refund has been added for the client
producers:
  - opg.supervision.finance
consumers:
  - opg.supervision.sirius
owners:
  - supervision
domain: supervision
tags: events
---

## Context

When a refund is added for a client in the Finance service, it requires approval from a manager in order to be issued.

## Trigger

A refund is added for a client.

## Effect

A task is created in Sirius for a manager to review and approve the refund.
