---
name: material-change-confirmed
version: 0.0.1
summary: |
  A change to LPA data after signing has been confirmed as material in nature
producers:
  - opg.poas.sirius-proposed
consumers:
  - opg.poas.makeregister
owners:
  - vega
  - mrlpa
---

## Context

A change to LPA data has been made after the LPA has been signed and submitted.

## Trigger

A caseworker has manually reviewed the changed data and identified it as a material change (e.g. invalidates the data the change related to).

## Effect

Depending on the state of the LPA a notification may be sent to all actors advising that the LPA cannot be registered or an actor can no longer remain part of the LPA. For example, an LPA with multiple attorneys would not be invalidated by a material change to an attorney as along as other valid attorneys remain part of the LPA. The MRLPA progress tracker is updated to show this.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
