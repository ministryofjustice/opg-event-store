---
name: schedule-to-remove
summary: |
  A scheduled payment in Allpay needs removing
producers:
  - opg.supervision.finance
consumers:
  - opg.supervision.finance
owners:
  - supervision
domain: supervision
tags: events
---

## Context

In transferring Direct Debit mandates from SSCL to Allpay, mandates were created with future scheduled payments, which were 
never intended on being collected. These now need to be removed, but due to the large number of schedules and no guarantees
from Allpay for API response times, these are being handled asynchronously by using EventBridge to queue schedule removal
requests.

Processing these in bulk may be a one-off task, but this will be retained for future use in case of similar requirements.

## Trigger

A Direct Debit payment schedule needs removing. A file is uploaded to Payments Admin, which is processed by Payments API,
and an event is emitted for each schedule to be removed.

## Effect

The schedule is removed from Allpay, and the pending collection is cancelled in our database if present.
