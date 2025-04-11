---
name: metric
version: 0.0.1
summary: |
  An event has occurred that increments a metric
producers:
  - opg.poas.makeregister
  - opg.poas.lpastore
consumers:
  - opg.digital.metrics
owners:
  - vega
  - mrlpa
tags: events
domain: POAS  
---

## Context

An event has occurred that increments a metric.

## Trigger

An event that is to be monitored and measured. Up to 20 metrics per event.

## Effect

The event is transformed and forwarded to the OPG Digital metrics service data stream to be used in quantifying performance and productivity of OPG Digital services.
