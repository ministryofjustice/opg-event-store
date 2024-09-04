---
name: priority-correspondence-sent
version: 0.0.1
summary: |
  An OPG user has sent a letter to the online donor to inform about a problem which needs attention.
producers:
  - opg.poas.sirius
consumers:
  - opg.poas.makeregister-proposed
owners:
  - vega
  - mrlpa
---

## Context

An OPG user has identified that there is a problem with the donor's application and has sent a letter to the donor informing about it.

## Trigger

Sirius sends the event when the letter informing about the problem has been successfully sent by GOV.UK Notify.

## Effect

The task list in MRLPA will inform the donor that a letter has been sent that needs attention.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
