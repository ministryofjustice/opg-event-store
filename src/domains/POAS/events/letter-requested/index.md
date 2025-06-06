---
name: letter-requested
version: 0.0.1
summary: |
  A letter is requested to be sent
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.sirius-proposed
owners:
  - vega
  - mrlpa
tags: events
domain: POAS
---

## Context

Make and Register will send reminders to the various actors involved in the
creation of an LPA. If the actor is acting on paper this will be a letter, which
will be sent from Sirius.

## Trigger

Make and Register needs a letter to be sent to an actor due to certain
conditions being met which vary depending on what letter and to which recipient.

## Details

Send the specified letter to the correspondent given.






