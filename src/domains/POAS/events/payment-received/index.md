---
name: payment-received
version: 0.0.1
summary: |
  The payment has been successful in GOV.UK Pay
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.sirius
owners:
  - vega
  - mrlpa
tags: events
---

## Trigger

MRLPA has directed a user to GOV.UK Pay and GOV.UK Pay has sent them back with confirmation that the transaction is complete.

This does not mean the payment has arrived in OPG's bank account.

## Effect

Sirius fetches the payment details from GOV.UK Pay and stores a payment record in its database so the payment can be displayed in the UI.






