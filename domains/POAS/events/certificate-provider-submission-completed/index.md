---
name: certificate-provider-submission-completed
version: 0.0.1
summary: |
  The certificate provider has completed their LPA submission
producers:
  - opg.poas.sirius-proposed
consumers:
  - opg.poas.makeregister
owners:
  - vega
  - mrlpa
---

## Context

The paper certificate provider has signed the document we sent them and returned it to us.

The document has been scanned and uploaded as structured data to the LPA Store.

## Trigger

If there are no anomalies detected in the data, Sirius immeditely sends the event.

If there are anomalies in the data, Sirius waits until a case worker has resolved them and then sends the event.

## Effect

MRLPA sends notifications to attorneys asking them to sign the LPA.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
