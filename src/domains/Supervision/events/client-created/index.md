---
name: client-created
version: 0.0.1
summary: |
  A client has been created in Sirius
producers:
  - opg.supervision.sirius
consumers:
  - opg.supervision.finance
owners:
  - supervision
domain: supervision  
tags: events
---

## Context

In order to increase the performance of some queries, the finance hub needs access to the court reference for the finance client from its own schema. This event populates that field on creation of a client.

## Trigger

A client is created.

## Effect

The supervision_finance.finance_client table is updated, setting the value of court_ref.






