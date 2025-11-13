---
name: client-made-inactive
summary: |
  A client has been made inactive in Sirius
producers:
  - opg.supervision.sirius
consumers:
  - opg.supervision.finance
owners:
  - supervision
domain: supervision
tags: events
---

## Context

When a client is made inactive in Sirius, any active Direct Debit mandates associated with that client must also be deactivated in the Supervision Finance system.

## Trigger

A client is made inactive.

## Effect

Active Direct Debit mandates associated with the client are cancelled.
