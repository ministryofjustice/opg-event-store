---
name: lpa-access-granted
summary: |
  Actor granted access in Use An LPA
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.use
owners:
  - use
tags: events
domain: POAS
---

## Context

The LPA has been newly registered and the appropriate actors from MRLPA has been granted access in Use An LPA

## Trigger

Once the LPA has been registered

## Effect

The event will allow UaL to create a record in order to associate the newly registered LPA with accounts we hold
