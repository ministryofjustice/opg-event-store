---
name: metric
version: 0.0.1
summary: |
  An event has occurred that increments a metric
producers:
  - opg.poas.sirius-proposed
  - opg.poas.makeregister
consumers:
  - opg.digital.metrics
owners:
  - vega
  - mrlpa
---

## Context

An event has occurred that increments a metric.

## Trigger

An event that is to be monitored and measured

## Effect

The event is transformed and forwarded to the OPG Digital metrics service data stream to be used in quantifying performance and productivity of OPG Digital services.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
