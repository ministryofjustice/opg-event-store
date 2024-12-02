---
name: lpa-access-granted
version: 0.0.1
summary: |
  Actor granted access in Use An LPA
producers:
  - opg.poas.use
consumers:
  - opg.poas.mrlpa
owners:
  - use
---

## Context

The LPA has been newly registered and the appropriate actors from MRLPA has been granted access in Use An LPA

## Trigger

Once user registration has been success (account created)

## Effect

The event will allow UaL to create a record in order to associate the newly registered LPA with accounts we hold

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
