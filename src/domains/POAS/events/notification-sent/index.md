---
name: notification-sent
version: 0.0.1
summary: |
  The notification has been sent by MRLPA to an actor on a LPA
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.sirius
owners:
  - mrlpa
tags: events
---

## Context

We send notifications to all actors during the LPA application and registration journey.

Notifications might be sent by email or SMS, depending on each actor's preference and available contact details.

Letter notifications may also be sent, but are sent by Sirius rather than MRLPA so do not trigger this event.

## Trigger

The notification has successfully been sent to GOV.UK Notify.

This does not mean it has successfully been delivered to the actor.

## Effect

Sirius downloads the notification information and content from GOV.UK Notify and saves a copy of it.

The notification is visible in the Documents tab of Sirius.






