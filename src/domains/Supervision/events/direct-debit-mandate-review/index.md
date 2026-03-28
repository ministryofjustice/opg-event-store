---
name: direct-debit-mandate-review
summary: |
  A client with an existing Direct Debit mandate has a new order created in Sirius
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

When a client has an order closed for non-termination reasons, the Direct Debit mandate is left active in case there is 
a replacement order. If a new order is received for the client, the case manager needs to review the existing Direct Debit 
mandate to ensure the payment details are still valid.

## Trigger

A new order is created for a client.

## Effect

If the client's payment method is still set to Direct Debit, the Finance service will send an event to Sirius to create 
a review task.
