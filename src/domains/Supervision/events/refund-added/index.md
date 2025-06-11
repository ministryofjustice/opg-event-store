---
name: refund-added
summary: |
  The client has a refund added
producers:
  - opg.supervision.finance
consumers:
  - opg.supervision.sirius
owners:
  - supervision
domain: supervision
tags: events
---

## Context

When a refund is added for a client by a user, the refund request needs to be approved before it can be actioned.

## Trigger

A refund is added by a user.

## Effect

Sirius Supervision creates a Pending Refund task on the client.
