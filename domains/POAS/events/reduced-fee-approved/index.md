---
name: reduced-fee-approved
version: 0.0.1
summary: |
  An OPG user has approved the donor's application to pay a reduced fee
producers:
  - opg.poas.sirius
consumers:
  - opg.poas.makeregister
owners:
  - vega
  - mrlpa
---

## Context

The online donor has applied for a reduced fee. OPG staff review all reduced fee applications.

An OPG user has approved the application.

## Trigger

A fee reduction record has been added in Sirius.

## Effect

The task list in MRLPA shows the payment task as completed.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
