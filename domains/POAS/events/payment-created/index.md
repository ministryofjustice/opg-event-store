---
name: payment-created
version: 0.0.1
summary: |
  A payment has been created in GovUK Pay
producers:
    - opg.poas.makeregister
consumers:
    - opg.poas.sirius-proposed
owners:
    - vega
    - mrlpa
---

## Details

When a payment is created in GovUK Pay this event is sent. Multiple payments may be created for a single LPA.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
