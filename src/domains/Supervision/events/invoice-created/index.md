---
name: invoice-created
summary: |
  An invoice has been created in Sirius
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

Supervision Payments needs to know when an invoice is created in order to apply the customer credit balance, 
and conditionally create a Direct Debit schedule via the Allpay API.

## Trigger

An invoice is created.

## Effect

Supervision Payments applies any credit balance to the invoice, and conditionally creates a Direct Debit schedule via the Allpay API.
