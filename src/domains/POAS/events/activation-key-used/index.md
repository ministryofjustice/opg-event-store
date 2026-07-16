---
name: activation-key-used
summary: |
  A Use an LPA user has used an activation key
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

To add an LPA to their Use an LPA account a customer is sent an activation
key. For caseworkers it is helpful to see when an activation key has been used
in Sirius.

## Trigger

A user of Use an LPA adds an LPA to their account by using an activation key.

## Details

Add an event in Sirius showing the activation key has been used.
