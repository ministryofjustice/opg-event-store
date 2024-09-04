---
name: priority-correspondence-sent
version: 0.0.1
summary: |
  An OPG user has sent a letter to the online donor to inform about a problem which needs attention.
producers:
  - opg.poas.sirius-proposed
consumers:
  - opg.poas.makeregister
owners:
  - vega
  - mrlpa
---

## Context

An OPG user has identified that there is a problem with the donor's application and has sent a letter to the donor informing about it.

## Trigger

Sirius sends the event when the letter informing about the problem has been successfully sent by GOV.UK Notify.

## Effect

The task list in MRLPA shows a link to view the problem.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
