---
name: invoice-created
summary: |
  An invoice is created in Sirius
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

When an invoice is created in Sirius, clients using the Direct Debit payment method need to have Direct Debit schedules
issued to Allpay in order to collect payment.

## Trigger

An invoice is created for a client.

## Effect

If the client is set up to pay via Direct Debit, a schedule is created in Allpay to collect the outstanding debt, after
any reductions and credit is applied.
