---
name: case-cleanse-requested
summary: |
  A case is requested to be cleansed by a caseworker
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

Use an LPA users can request an activation key be sent, this can only be done
immediately for cases with good data (those registered after September 2019, or
that have been previously cleansed). In other cases we need a caseworker to look
at a case and check/update the data so we know it can be used accurately.

## Trigger

A user of Use an LPA goes through the journey to request an activation key.

## Details

Create a task for a caseworker to cleanse the case given.
