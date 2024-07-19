---
name: reduced-fee-requested
version: 0.0.1
summary: |
  The donor has requested to pay a reduced fee
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.sirius
owners:
  - vega
  - mrlpa
---

## Context

The online donor has applied for a reduced fee.

## Trigger

If the donor provides their evidence online: all files have successfully been uploaded and passed a virus scan.

If the donor provides their evidence on paper: the donor has read the instructions for sending their evidence and confirmed they understand them.

## Effect

Sirius creates a task for a caseworker to review the evidence.

If evidence is being provided on paper, the task will become available in 10 business days.

If evidence is being provided online, the task is available instantly. Sirius creates a placeholder document record for each of the online files expected, and will receive a [reduced-fee-evidence-received](../reduced-fee-evidence-received) event when each arrives in S3.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
