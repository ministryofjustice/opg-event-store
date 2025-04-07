---
name: debt-position-changed
version: 0.0.1
summary: |
  The debt position for a client has changed
producers:
  - opg.supervision.sirius
consumers:
  - opg.supervision.finance
owners:
  - supervision
---

## Context

Events on a Supervision client in Sirius can cause the money owed to change and invoices be created. Automated processes in the Supervision Finance service need to be made aware of these changes to the debt position.

## Trigger

An invoice is created in Sirius.

## Effect

Supervision Finance attempts to reapply any excess credit on account for the client whose debt position changed.






