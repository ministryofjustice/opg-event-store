---
name: reduced-fee-declined
version: 0.0.1
summary: |
  An OPG user has declined an end user's application to pay a reduced fee
producers:
    - opg.poas.sirius
consumers:
    - opg.poas.makeregister
owners:
    - vega
    - mrlpa
---

## Details

Caseworkers will review user requests to pay a reduced fee for their LPA. If users are found to be not eligible, then a caseworker will not apply the reduced fee and 'decline' the request.

Sirius sends this event when a caseworker has declined a reduced fee to a case so that MRLPA can inform the user of the outcome, allowing them to pay the outstanding fee if there is one, and proceed with the next steps of their application.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
