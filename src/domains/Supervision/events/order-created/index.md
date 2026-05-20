---
name: order-created
summary: |
  A new order has been created for a client in Sirius
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

An order is created in Sirius for a client. As the client may have had a previous order that was paid via Direct Debit, 
case managers will need to review the client's payment method to ensure it is still valid for the new order.

## Trigger

An order is created for a client.

## Effect

In the event that the client's payment method is still set to Direct Debit, the Finance service will send an event to Sirius
to create a review task.
