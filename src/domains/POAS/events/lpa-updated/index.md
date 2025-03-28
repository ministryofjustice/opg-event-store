---
name: lpa-updated
version: 0.0.1
summary: |
  The LPA's details have changed
producers:
  - opg.poas.lpastore
consumers:
  - opg.poas.sirius
  - opg.poas.makeregister
owners:
  - vega
---

<Admonition type="info">When this is sent to the Sirius development event bus, it is also sent to all ephemeral Sirius environments. This is because the dev and ephemeral environments all use the dev LPA Store to avoid complex duplication.</Admonition>

## Context

The LPA has been signed and submitted.

## Trigger

Any changes to the contents of the LPA. This includes changing original information (like the donor moving house) or the addition of new information (like an attorney signing the LPA).

## Effect

Both Sirius and MRLPA make decisions of their effect based on what data is now in the store.

For Sirius this includes calculating progress indicators and detecting anomalies.

For MRLPA this includes updating the task list.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
