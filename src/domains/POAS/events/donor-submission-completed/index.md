---
name: donor-submission-completed
version: 0.0.1
summary: |
  The donor has completed their LPA submission
producers:
  - opg.poas.sirius-proposed
consumers:
  - opg.poas.makeregister
owners:
  - vega
  - mrlpa
---

## Context

The paper certificate provider has signed their application and returned it to us.

The document has been scanned and uploaded as structured data to the LPA Store.

## Trigger

Sirius requires the following criteria to send this event:

- The LPA has been saved in the LPA Store
  - And has a status of "In progress"
- Either no anomalies were detected, or they have all been resolved
- Payment has been received

Therefore the trigger for the event may be one of:

- The LPA arriving at the store (if there were no anomalies and it was already paid for)
- The "review anomalies" task being completed (if the LPA has been paid for)
- Payment being received (if anomalies are resolved)

<Admonition type="info">
The donor's identity check may not be complete, and the Restrictions and Conditions may still need to be reviewed
</Admonition>

## Effect

MRLPA sends a notification to the Certificate Provider asking them to sign the LPA.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
