---
name: voucher-acted
version: 0.0.1
summary: |
  A voucher has confirmed their identity and vouched for a donors identity
producers:
  - opg.poas.makeregister
consumers:
  - opg.poas.sirius-proposed
owners:
  - mrlpa
---

## Context

A donor has been unable to prove their identity via Gov OneLogin and has chosen a voucher to vouch for their identity.

## Trigger

The voucher successfully passes an identity check via Gov OneLogin and signs a declaration to confirm the identity of the donor.

## Details

The Sirius progress tracker for the LPA is updated to show the identity check task has been completed.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
