---
name: registration-blocked
version: 0.0.1
summary: |
    Announces that the registration of the LPA has been blocked
producers:
    - opg.poas.sirius
consumers:
    - opg.poas.makeregister
owners:
    - vega
    - mrlpa
---

## Details

When checking an LPA a caseworker may find problems that require communicating
with the donor to resolve for registration to take place. When this happens this
event is triggered.

MRLPA uses the event to update the progress tracker, so the donor knows the
application won't progress until the problem is resolved.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
