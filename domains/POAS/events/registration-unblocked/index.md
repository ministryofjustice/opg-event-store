---
name: registration-unblocked
version: 0.0.1
summary: |
    Announces that the registration of the LPA has been unblocked
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
with the donor to resolve. When that problem has been resolved this event is
triggered.

MRLPA uses the event to update the progress tracker, so the donor knows the
problem is resolved and registration can continue.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
