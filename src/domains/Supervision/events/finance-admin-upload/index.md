---
name: finance-admin-upload
version: 0.0.1
summary: |
  The payment report has been uploaded
producers:
  - opg.supervision.finance.admin
consumers:
  - opg.supervision.finance
owners:
  - supervision
---

## Context

When a payment report is uploaded from the finance admin system, the finance hub API needs to download the report and process it's contents. This event indicates to the finance hub that a file has been uploaded, and provides its location.

## Trigger

A payment report is uploaded.

## Effect

The finance hub API downloads the report from S3 and processes its payments.






