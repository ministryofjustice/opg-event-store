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

<Admonition type="warning">
    <strong>11th September:</strong> We haven't yet identifed whether this event occurs as soon as the request is made or once the evidence has been validated (i.a. being scanned for viruses)
</Admonition>

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
