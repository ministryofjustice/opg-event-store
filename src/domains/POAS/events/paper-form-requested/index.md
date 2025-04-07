---
name: paper-form-requested
version: 0.0.1
summary: |
  MRLPA has requested a paper form be sent to the certificate provider or an attorney
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.sirius-proposed
owners:
  - mrlpa
tags: events
---

## Context

A certificate provider or attorney has opted to sign a paper form rather than doing so online.

The application LPA process is ready for them to sign.

## Trigger

For the certificate provider: either the donor has just completed their section online, or they've done so on paper and MRLPA has received the [donor-submission-completed](../donor-submission-completed) event

For the attorney: either the certificate provider has just completed their section online, or they've done so on paper and MRLPA has received the [certificate-provider-submission-completed](../certificate-provider-submission-completed) event

## Effect

Sirius generates the form appropriate to the actor and sends it to them (either via GOV.UK Notify or Xerox). The `accessCode` provided in the event is included in the covering letter so that the actor can switch to the online channel.






