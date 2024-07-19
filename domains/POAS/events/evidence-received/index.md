---
name: evidence-received
version: 0.0.1
summary: |
  The OPG has received paper evidence to support a donor's reduced fee application
producers:
  - opg.poas.sirius-proposed
consumers:
  - opg.poas.makeregister
owners:
  - vega
  - mrlpa
---

## Context

A paper donor has applied for a reduced fee. OPG staff review all reduced fee applications.

An OPG user has identified that they cannot approve or reject the reduced fee application without further information and has sent a letter to the donor asking for more specifics.

The user has sent the additional evidence to the OPG and it has been scanned on to the system

## Trigger

Sirius has ingested correspondence which it has identified<sup>[how?]</sup> as evidence for the donor's reduced fee application.

## Details

The task list in MRLPA tells the user that their evidence has been received by the OPG.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
