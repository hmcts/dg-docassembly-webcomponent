module.exports = [
  {
    "key": "order.date",
    "type": "date",
    "templateOptions": {
      "label": " Enter the order date"
    }
  },
  {
    "key": "judicial.lastName",
    "type": "input",
    "templateOptions": {
      "label": "Judge Last Name"
    }
  },
  {
    "key": "directionsStatement1isIncluded",
    "type": "checkbox",
    "templateOptions": {
      "label": "The defendant may be helped by small claims mediation service"
    },
    "defaultValue": true
  },
  {
    "key": "directionsStatement2isIncluded",
    "type": "checkbox",
    "templateOptions": {
      "label": "The defendant may be helped by speaking to a friend…"
    }
  },
  {
    "key": "directionsStatement3isIncluded",
    "type": "checkbox",
    "templateOptions": {
      "label": "The defendant may be helped by going to Shelter or the CAB"
    }
  },
  {
    "key": "directionsStatement4isIncluded",
    "type": "checkbox",
    "templateOptions": {
      "label": "The Advice Now website may help the defendant what to do next"
    }
  },
  {
    "key": "directionsAdditionalStatement1",
    "type": "input",
    "templateOptions": {
      "label": "Additional direction statement"
    }
  },
  {
    "key": "orderDirections1isIncluded",
    "type": "checkbox",
    "templateOptions": {
      "label": "The defendant must send to the court and to the defence"
    }
  },
  {
    "key": "orderDirections1.date",
    "type": "date",
    "templateOptions": {
      "label": "If selected, enter the final order direction date for Step 2"
    }
  },
  {
    "key": "orderDirections2isIncluded",
    "type": "checkbox",
    "templateOptions": {
      "label": "The claimant must send witness statements"
    }
  },
  {
    "key": "orderDirections2.date",
    "type": "date",
    "templateOptions": {
      "label": "If selected, enter the final order direction date for Step 3"
    }
  },
  {
    "key": "orderDirections3isIncluded",
    "type": "checkbox",
    "templateOptions": {
      "label": "The defendant must send witness statements"
    }
  },
  {
    "key": "orderDirections3.date",
    "type": "date",
    "templateOptions": {
      "label": "If selected, enter the final order direction date for Step 4"
    }
  },
  {
    "key": "orderDirections4isIncluded",
    "type": "checkbox",
    "templateOptions": {
      "label": "The claimant must send copies of their housing file"
    }
  },
  {
    "key": "orderDirections4.date",
    "type": "date",
    "templateOptions": {
      "label": "If selected, enter the final order direction date for Step 5"
    }
  },
  {
    "key": "orderDirections5.order",
    "type": "input",
    "templateOptions": {
      "label": "Additional order direction (1)"
    }
  },
  {
    "key": "orderDirections5.date",
    "type": "date",
    "templateOptions": {
      "label": "If entered, enter the final order direction date for Step 6"
    }
  },
  {
    "key": "orderDirections6.order",
    "type": "input",
    "templateOptions": {
      "label": "Additional order direction (2)"
    }
  },
  {
    "key": "orderDirections6.date",
    "type": "date",
    "templateOptions": {
      "label": "If entered, enter the final order direction date for Step 7"
    }
  },
  {
    "key": "orderDirections7.order",
    "type": "input",
    "templateOptions": {
      "label": "Additional order direction (3)"
    }
  },
  {
    "key": "orderDirections7.date",
    "type": "date",
    "templateOptions": {
      "label": "If entered, enter the final order direction date for Step 8"
    }
  },
  {
    "key": "hearingisRequired",
    "type": "checkbox",
    "templateOptions": {
      "label": "Court hearing required"
    }
  },
  {
    "key": "preferredCourt",
    "type": "input",
    "templateOptions": {
      "label": "Preferred Court"
    }
  },
  {
    "key": "preferredCourtAddress",
    "type": "input",
    "templateOptions": {
      "label": "Preferred Court Address"
    }
  },
  {
    "key": "hearing.date",
    "type": "date",
    "templateOptions": {
      "label": "Enter the hearing date"
    }
  },
  {
    "key": "hearingDurationSelection",
    "type": "radio",
    "templateOptions": {
      "label": "Select hearing duration",
      "options": [
        {
          "value": 1,
          "label": "The hearing will last half hour"
        },
        {
          "value": 2,
          "label": "The hearing will last one hour"
        },
        {
          "value": 3,
          "label": "The hearing will last one and half hours"
        },
        {
          "value": 4,
          "label": "The hearing will last two hours"
        },
        {
          "value": 5,
          "label": "The hearing will last three hours"
        },
        {
          "value": 6,
          "label": "The hearing will last one day"
        }
      ]
    }
  },
  {
    "key": "hearingTimeSelection",
    "type": "radio",
    "templateOptions": {
      "label": "Select hearing start time",
      "options": [
        {
          "value": 1,
          "label": "The hearing start at 10am"
        },
        {
          "value": 2,
          "label": "The hearing start at 2pm"
        }
      ]
    }
  },
  {
    "key": "hearingStatement1",
    "type": "input",
    "templateOptions": {
      "label": "Additional hearing statement"
    }
  }
];
