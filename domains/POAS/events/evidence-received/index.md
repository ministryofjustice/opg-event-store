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

A donor has applied for a reduced fee. OPG staff review all reduced fee applications.

The user has sent evidence to the OPG to support this application and it has been scanned on to the system.

This may be their initial submission of evidence, or further evidence that the OPG has requested after review.

## Trigger

Sirius has ingested correspondence which it has identified<sup>[how?]</sup> as evidence for the donor's reduced fee application.

## Details

The task list in MRLPA tells the user that their evidence has been received by the OPG.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
