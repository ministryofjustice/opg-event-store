---
name: application-updated
version: 0.0.1
summary: |
  Announces changes to the core data of an draft LPA application
producers:
    - opg.poas.makeregister
consumers:
    - opg.poas.sirius
owners:
    - vega
    - mrlpa
---

## Details

When a donor creates an application in MRLPA, or later updates their details, this event is triggered.

Sirius uses the event to keep a copy of the donor's identity, allowing OPG staff to search for the case and provide application support.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
