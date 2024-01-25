---
name: notification-sent
version: 0.0.1
summary: |
  A notification has been sent by MRLPA to an actor on a LPA
producers:
    - opg.poas.makeregister
consumers:
    - opg.poas.sirius
owners:
    - mrlpa
---

## Details

MRLPA sends SMS and email notifications to LPA actors via GOV UK Notify. OPG caseworkers need to know when these notifications have been sent to support queries made to the contact centre and, in some cases, to trigger other actions within Sirius.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
