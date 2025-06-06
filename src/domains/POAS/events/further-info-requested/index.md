---
name: further-info-requested
summary: |
  An OPG user has sent a letter to the donor to request further information to support their application to pay a reduced fee
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

An OPG user has identified that they cannot approve or reject the reduced fee application without further information and has sent a letter to the donor asking for more specifics.

## Trigger

Sirius sends the event when the letter asking for more information has been successfully posted by GOV.UK Notify.

## Effect

The task list in MRLPA shows a link to upload the further information.
