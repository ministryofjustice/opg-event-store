---
name: lpa-updated
version: 0.0.1
summary: |
  Announces creation of or updates to an LPA
producers:
    - opg.poas.lpastore
consumers:
    - opg.poas.sirius
owners:
    - vega
---

## Details

When an LPA is created or updated, this event is triggered.

Sirius uses the event to update the LPA record and status, providing OPG staff with the latest data to provide application support.

MRLPA uses the event to update the status of the LPA and trigger communications to actors.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
