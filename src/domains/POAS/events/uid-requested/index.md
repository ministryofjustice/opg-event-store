---
name: uid-requested
version: 0.0.1
summary: |
  A UID has been requested for the LPA
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.makeregister
owners:
  - mrlpa
tags: events
---

<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>This event is internal to MRLPA</strong></div>

## Context

A donor has started a new LPA application online.

## Trigger

The donor confirms which type of LPA they want.

## Details

MRLPA asynchronously gets a UID via the UID service and attaches it to the LPA. It then emits a [application-updated](../application-updated) event.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
