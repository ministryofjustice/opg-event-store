---
name: certificate-provider-started
summary: |
  The certificate provider has been prompted to provide the certificate
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.sirius
owners:
  - vega
  - mrlpa
tags: events
domain: POAS
---

## Context

The donor is drafting their LPA online.

## Trigger

When the LPA has been signed and witnessed by the certificate provider and payment has been confirmed.

## Effect

Sirius can update its progress tracker to say that the "CP submission" and "CP identity check" progress indicators are "in progress".
