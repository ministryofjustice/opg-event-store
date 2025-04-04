---
name: application-updated
version: 0.0.1
summary: |
  The draft LPA application's details have changed
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.sirius
owners:
  - vega
  - mrlpa
tags: events
---

## Context

The donor is drafting their LPA online.

## Trigger

When a donor creates an application in MRLPA, or later updates their personal details in MRLPA.

## Effect

Sirius uses the event to keep a copy of the donor's personal details as a Draft LPA. OPG staff can then search for the case in Sirius to provide support during the application process.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
