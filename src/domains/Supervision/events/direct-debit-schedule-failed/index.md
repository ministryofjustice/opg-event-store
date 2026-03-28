---
name: direct-debit-schedule-failed
summary: |
  An error occurred when attempting to schedule a Direct Debit payment for a client
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

If an error occurs when attempting to schedule a Direct Debit payment for a client, the case manager needs to be notified to review the client's payment method.

## Trigger

A Direct Debit payment schedule attempt fails for a client.

## Effect

Sirius Supervision creates a task for the case manager to review the client's payment method.
