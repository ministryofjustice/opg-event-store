---
name: paper-form-requested
version: 0.0.1
summary: |
  The donor has indicated an actor wants to complete their actions using a paper form
producers:
    - opg.poas.makeregister
consumers:
    - opg.poas.sirius
owners:
    - mrlpa
---

## Details

While making an LPA in MRLPA, a donor can choose online or paper for how they want their actors to complete their actions. This event is sent by MRLPA to indicate an actor needs a paper form to the sent to them to complete. It includes an access code that can be used by the actor to complete their part of the form online.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
