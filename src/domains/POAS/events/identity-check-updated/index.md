---
name: identity-check-updated
summary: |
  An offline identity check has been updated
producers:
  - opg.poas.identity-check
consumers:
  - opg.poas.sirius
owners:
  - vega
tags: events
domain: POAS
---

## Context

An offline identity check can be a distributed, asynchronous process. In order for OPG to track the progress of an identity check, Sirius needs to be updated when key events occur.

In a happy path journey, an identity check may immediately go to `SUCCESS`. But it may also go through several steps to get there, as shown in the following example:

1. EXIT
   - The donor finds out they are not able to complete the check over the phone
1. COUNTER_SERVICE_STARTED
   - The donor instead chooses to use counter service
1. FAILURE
   - The counter service check fails
1. VOUCH_STARTED
   - The donor instead elects someone to voucher for them
1. SUCCESS
   - The voucher vouches for the donor's identity

## Trigger

This event is triggered at the end of some sort of process in the identity check process. For example, a phone call from an actor might result in a `SUCCESS` state, or `COP_STARTED` if they need to go to the Court of Protection. A notification from our counter service provider that they've reviewed the actor's ID also might result in a `SUCCESS`, or a `FAILURE` if the ID was insufficient.

The important thing is that **every journey in the Paper ID process should provide some sort of update** when it concludes. It is then up to Sirius to decide what happens.

## Effect

In all cases, the relevant progress indicator in Sirius will be updated to reflect the state of the ID check, and a note will be added to the timeline.

If the state is **`SUCCESS`**, the identity check details will be added to the LPA Store record. (If the LPA has not been submitted, the information is held in Sirius until it is.)

If the state is **`VOUCH_STARTED`**, Sirius will send a letter to the donor once the LPA is submitted. (If the LPA has been submitted, the letter will be sent immediately.)
