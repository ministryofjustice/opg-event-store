---
name: reduced-fee-declined
summary: |
  An OPG user has declined the donor's application to pay a reduced fee
producers:
  - opg.poas.sirius
consumers:
  - opg.poas.makeregister
owners:
  - vega
  - mrlpa
tags: events
domain: POAS
---

## Context

The online donor has applied for a reduced fee. OPG staff review all reduced fee applications.

An OPG user has declined the application.

## Trigger

A fee decision record with a "decline" outcome has been added in Sirius.

## Effect

The task list in MRLPA shows the payment task as declined and asks the donor to pay the full fee to continue.
