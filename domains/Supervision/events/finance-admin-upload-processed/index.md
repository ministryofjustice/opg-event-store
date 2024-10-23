---
name: finance-admin-upload-processed
version: 0.0.1
summary: |
  The payment report has been successfully processed
producers:
  - opg.supervision.finance
consumers:
  - opg.supervision.finance.admin
owners:
  - supervision
---

## Context

The finance hub API will automatically process payment reports uploaded to it's S3 directory. This event triggers an email to the uploader outlining the results of the report's processing.

## Trigger

A payment report is processed.

## Effect

An email is sent to the report's uploader describing its success, partial failure or full error, and the reason.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
