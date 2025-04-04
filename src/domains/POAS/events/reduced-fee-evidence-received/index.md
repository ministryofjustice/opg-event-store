---
name: reduced-fee-evidence-received
version: 0.0.1
summary: |
  The evidence uploaded to support a reduced fee request has arrived in Sirius
producers:
  - opg.poas.sirius.s3.reduced-fee-evidence
consumers:
  - opg.poas.sirius
owners:
  - vega
tags: events
---

<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>This event is internal to MRLPA</strong></div>

## Context

The online donor has applied for a reduced fee and upload evidence to support their application.

In the [reduced-fee-requested event](../reduced-fee-requested/), MRLPA has told Sirius what files to expect as evidence. Sirius creates placeholder documents that are visible in the UI.

The uploaded file is saved in MRLPA's S3 bucket and then synchronised to a bucket in Sirius. Since this happens on an irregular schedule, Sirius needs to process the upload asynchronously.

## Trigger

A file has finished being copied into Sirius's reduced fee evidence bucket.

## Details

Sirius finds the placeholder document for the evidence, adds the uploaded file contents, and sets its retrieved date.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
