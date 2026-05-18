---
name: client-update
summary: |
  A client's surname has been updated in Sirius
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

As Allpay uses the client's surname as an identifier for mandates, we need to update the value in Allpay when the surname
is updated in Sirius. The event has been structured to allow for future updates to other client details, if required.

## Trigger

A client's surname is updated.

## Effect

Allpay is updated with the new surname, ensuring that future Direct Debit interactions are successful.
