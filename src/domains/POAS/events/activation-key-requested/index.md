---
name: activation-key-requested
summary: |
  A letter containing a Use an LPA activation key is requested to be sent
producers:
  - opg.poas.use
consumers:
  - opg.poas.sirius-proposed
owners:
  - vega
  - use
tags: events
domain: POAS
---

## Context

Use an LPA users can request an activation key be sent, so they can start using
the service. This is sent by letter from Sirius.

## Trigger

A user of Use an LPA goes through the journey to request an activation key.

## Details

Send the activation key letter to the actor given.
