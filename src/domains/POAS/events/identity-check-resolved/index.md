---
name: identity-check-resolved
version: 0.0.1
summary: |
  An offline identity check has been resolved
producers:
  - opg.poas.identity-check
consumers:
  - opg.poas.sirius
owners:
  - vega
tags: events
---

<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>This event has been deprecated. Use <a href="../identity-check-updated/">identity-check-updated</a> instead</strong></div>

## Context

An offline identity check has been resolved, whether successful, a failure or an exit.

## Trigger

The identity check has been completed, so one of:

- The Sirius user has exited the identity check process (e.g. the caller decided not to proceed with ID check)
- The actor has completed their identity check over the phone
- The actor has completed their identity check at the Post Office, and the Post Office have told us so

## Effect

If the outcome was successful, it is added to the LPA Store record. (If the LPA has not been executed, the information is held in Sirius until it is.)

It the outcome was an exit, a note is added to the timeline stating the the ID check was incomplete.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
