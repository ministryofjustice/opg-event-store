---
name: scheduled-event
summary: |
  Scheduled events in EventBridge triggered by CloudWatch Events rules.
producers:
  - opg.supervision.infra
consumers:
  - opg.supervision.finance
owners:
  - supervision
domain: supervision
tags: events
---

## Context

Scheduled events are used to trigger recurring tasks in the Supervision Finance service. Due to limitations in CloudWatch
Events, the various scheduled events are all defined under one detail type `scheduled-event`, with the specific task to be performed
specified in the event detail under the `trigger` parameter.

Scheduled events can be modified further by using the optional `override` parameter in the event detail.

## Trigger

Scheduled CloudWatch Events rule.

## Effect

The Finance service processes the scheduled event.
