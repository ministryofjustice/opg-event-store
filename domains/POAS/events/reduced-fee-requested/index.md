---
name: reduced-fee-requested
version: 0.0.1
summary: |
  The applicant has requested to pay a reduced fee
producers:
    - opg.poas.makeregister
consumers:
    - opg.poas.sirius
owners:
    - vega
    - mrlpa
---

## Details

If the donor believes they qualify for a reduced fee then the OPG needs to assess their claim, review supporting evidence, and decide whether to apply a fee reduction.

MRLPA sends this event when a donor has made a reduced fees request so that Sirius can create tasks for caseworkers to review the evidence.

This event will be sent after the evidence has been scanned for viruses but in the case of online delivery the documents may not yet have replicated to the destination S3 bucket.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
