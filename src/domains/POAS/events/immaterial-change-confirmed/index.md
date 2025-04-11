---
name: immaterial-change-confirmed
version: 0.0.1
summary: |
  A change to LPA data after signing has been confirmed as immaterial in nature
producers:
  - opg.poas.sirius-proposed
consumers:
  - opg.poas.makeregister
owners:
  - vega
  - mrlpa
tags: events
domain: POAS
---

## Context

A change to LPA data has been made after the LPA has been signed and submitted.

## Trigger

A caseworker has manually reviewed the changed data and identified it as an immaterial change (e.g. does not invalidate the data the change related to).

## Effect

The data the change relates to will up updated in the LPA store.

Depending on the state of the LPA, and the actor that made the change, this could complete a task in MRLPA (e.g. identity mismatched details) or send notifications to actors advising the change was accepted. The MRLPA progress tracker is updated to reflect the change was accepted.






