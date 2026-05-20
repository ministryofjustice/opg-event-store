---
name: direct-debit-collection
summary: |
  A Direct Debit collection has been scheduled for a client
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

On scheduling a collection for a Direct Debit, Sirius needs to send a letter to the client confirming the collection details.

## Trigger

A Direct Debit payment collection is scheduled for a client.

## Effect

Sirius Supervision creates a Direct Debit collection confirmation letter to the client.
