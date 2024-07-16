---
id: payment-received
name: payment-received
version: 0.0.1
summary: |
  A payment has been successful in GovUK Pay
# producers:
#     - opg.poas.makeregister
# consumers:
#     - opg.poas.sirius-proposed
owners:
    - vega
    - mrlpa
---

## Details

When a payment is taken in GovUK Pay and the result is success, this event is sent. Multiple payments may be created for a single LPA.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
