---
id: reduced-fee-evidence-received
name: reduced-fee-evidence-received
version: 0.0.1
summary: |
  Uploaded evidence to support a reduced fee request has arraived in Sirius
# producers:
#     - opg.poas.sirius
# consumers:
#     - opg.poas.sirius
owners:
    - vega
---

## Details

When donors request a reduced fee, they must provide evidence to support their request. They can either upload this to MRLPA or send it to the OPG in the post.

MRLPA sends a [reduced-fee-requested event](../reduced-fee-requested/) when the donor makes the request, which contains the paths of any expected evidence uploads. Those uploads are then asynchronously replicated into Sirius, generating a **reduced-fee-evidence-received** event for each as they arrive.

<NodeGraph title="Consumer / Producer Diagram" />

<EventExamples />

<Schema />
