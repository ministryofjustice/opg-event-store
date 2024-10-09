---
name: credit-on-account
version: 0.0.1
summary: |
  The client has credit on account that cannot be applied to any open invoice or debt
producers:
  - opg.supervision.finance
consumers:
  - opg.supervision.sirius
owners:
  - supervision
---

## Context

When a payment or other credit is received for a client but is greater than the client's outstanding debt, that credit 
is retained on their account. This may need to result in a refund to the client.

## Trigger

A client's credit balance is larger than their outstanding debt position.

## Effect

Sirius Supervision creates a Refund Review task on the client.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
