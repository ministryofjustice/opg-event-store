---
id: application-updated
name: application-updated
version: 0.0.1
summary: |
  Announces changes to the core data of an draft LPA application
# producers:
#     - opg.poas.makeregister
# consumers:
#     - opg.poas.sirius
owners:
    - vega
    - mrlpa
---

## Details

When a donor creates an application in MRLPA, or later updates their details, this event is triggered.

Sirius uses the event to keep a copy of the donor's identity, allowing OPG staff to search for the case and provide application support.

<NodeGraph title="Consumer / Producer Diagram" />

<AccordionGroup>
  <Accordion title="Example">
  ```json
    {
    "uid": "M-1234-5678-9012",
    "createdAt": "2023-08-02T08:56:09.655503014Z",
    "type": "hw",
    "donor": {
      "firstNames": "Jack",
      "lastName": "Rubik",
      "dob": "1938-03-18",
      "address": {
        "line1": "Flat 312",
        "line2": "1 Scotland Street",
        "line3": "Old Town",
        "town": "Edinburgh",
        "postcode": "N184EQ",
        "country": "GB"
      }
    },
    "previousApplicationUid": "M-4567-1234-0001"
  }
  ```
  </Accordion>
</AccordionGroup>

<Schema file="schema.json" />
