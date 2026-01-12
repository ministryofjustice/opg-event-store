---
name: direct-debit-collection-failed
summary: |
  The Direct Debit payment collection for a client has failed
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

In the event that a Direct Debit payment collection fails for a client, the case manager needs to be notified to review the client's payment method.

## Trigger

A Direct Debit payment collection fails for a client.

## Effect

Sirius Supervision creates a task for the case manager to review the client's payment method.
