---
name: further-info-requested
version: 0.0.1
summary: |
  An OPG user has send a letter to the user to request further information to support their application to pay a reduced fee for their LPA
producers:
    - opg.poas.sirius
consumers:
    - opg.poas.makeregister
owners:
    - vega
    - mrlpa
---

## Details

Caseworkers will review user requests to pay a reduced fee for their digital LPAs with the evidence provided by the user. If the evidence provided in insufficient, then a caseworker may send the user a letter asking them to provide further information in order to 'approve' the application.

Sirius sends this event when a caseworker has published a letter to request further evidence from the user, and the notify status of the letter is set to 'posted'.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
