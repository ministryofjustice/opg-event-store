---
id: reduced-fee-approved
name: reduced-fee-approved
version: 0.0.1
summary: |
  An OPG user has approved an end user's application to pay a reduced fee
# producers:
#     - opg.poas.sirius
# consumers:
#     - opg.poas.makeregister
owners:
    - vega
    - mrlpa
---

## Details

Caseworkers will review user requests to pay a reduced fee for their LPA. If users are found to be eligible, then a caseworker will apply a reduced fee to the case to 'approve' the request.

Sirius sends this event when a caseworker has applied a reduced fee to a case so that MRLPA can inform the user of the outcome, allowing them to pay the outstanding fee if there is one, and proceed with the next steps of their application.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
