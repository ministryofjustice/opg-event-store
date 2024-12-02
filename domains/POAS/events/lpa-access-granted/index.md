---
name: lpa-updated
version: 0.0.1
summary: |
  The LPA's details have changed
producers:
  - opg.poas.lpastore
consumers:
  - opg.poas.sirius
  - opg.poas.makeregister
owners:
  - vega
---

## Context

The LPA has been newly registered

## Trigger

Once user registration has been success (account created)

## Effect

The event will allow UaL to create a record in order to associate the newly registered LPA with accounts we hold

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
