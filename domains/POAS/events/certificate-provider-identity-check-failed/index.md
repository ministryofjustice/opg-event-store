---
name: certificate-provider-identity-check-failed
version: 0.0.1
summary: |
  A certificate provider acting on paper has failed to prove their identity
producers:
  - opg.poas.sirius-proposed
consumers:
  - opg.poas.makeregister
owners:
  - vega
  - mrlpa
---

## Context

The donor is drafting their LPA online and the certificate provider is acting on paper. The LPA has been signed by the donor and witnessed by the certificate provider.

## Trigger

The certificate provider has attempted, and failed, to prove their identity with a caseworker over the phone.

## Effect

An email is sent to the donor advising them the certificate provider has failed their identity check, and they need to create a new LPA or register the LPA with the Court of Protection.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
