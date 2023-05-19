$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Buy.feature");
formatter.feature({
  "line": 1,
  "name": "As a User I want to verify the Car Search functionality",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-car-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Am On Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Mouse Hover On “buy+sell” Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Click ‘Search Cars’ Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Navigate To ‘new and used car search’ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Select Car Make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Car Model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select The Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select The Maximum Price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click On Find My Next Car Button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 14,
      "value": "#Then I Should See The Make “\u003cmake\u003e” In Results"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A8",
        "NSW - Sydney",
        "$70,000"
      ],
      "line": 17,
      "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "7 Series",
        "NSW - Central Coast",
        "$100,000"
      ],
      "line": 18,
      "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover Sport",
        "QLD - Sunshine Coast",
        "$100,000"
      ],
      "line": 19,
      "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Mercedes Benz",
        "S-Class",
        "VIC - Central Victoria",
        "$100,000"
      ],
      "line": 20,
      "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Aston Martin",
        "Virage",
        "NSW - Sydney",
        "$200,000"
      ],
      "line": 21,
      "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Bentley",
        "Continental GT",
        "VIC - Melbourne",
        "$200,000"
      ],
      "line": 22,
      "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5951702900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Am On Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Mouse Hover On “buy+sell” Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Click ‘Search Cars’ Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Navigate To ‘new and used car search’ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Select Car Make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Car Model \"A8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select The Location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select The Maximum Price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click On Find My Next Car Button",
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 98402600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 426132200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 139345400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 14300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectCarMake(String)"
});
formatter.result({
  "duration": 1758134000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A8",
      "offset": 20
    }
  ],
  "location": "BuySteps.iSelectCarModel(String)"
});
formatter.result({
  "duration": 1104468200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 23
    }
  ],
  "location": "BuySteps.iSelectTheLocation(String)"
});
formatter.result({
  "duration": 1088855400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 28
    }
  ],
  "location": "BuySteps.iSelectTheMaximumPrice(String)"
});
formatter.result({
  "duration": 1087969000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarButton()"
});
formatter.result({
  "duration": 1833653500,
  "status": "passed"
});
formatter.after({
  "duration": 686835700,
  "status": "passed"
});
formatter.before({
  "duration": 3339584400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Am On Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Mouse Hover On “buy+sell” Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Click ‘Search Cars’ Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Navigate To ‘new and used car search’ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Select Car Make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Car Model \"7 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select The Location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select The Maximum Price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click On Find My Next Car Button",
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 457250500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 154471000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 88300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectCarMake(String)"
});
formatter.result({
  "duration": 1679883800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7 Series",
      "offset": 20
    }
  ],
  "location": "BuySteps.iSelectCarModel(String)"
});
formatter.result({
  "duration": 1103175200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 23
    }
  ],
  "location": "BuySteps.iSelectTheLocation(String)"
});
formatter.result({
  "duration": 1083670700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 28
    }
  ],
  "location": "BuySteps.iSelectTheMaximumPrice(String)"
});
formatter.result({
  "duration": 1075014500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarButton()"
});
formatter.result({
  "duration": 1742312400,
  "status": "passed"
});
formatter.after({
  "duration": 673799900,
  "status": "passed"
});
formatter.before({
  "duration": 3414043900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Am On Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Mouse Hover On “buy+sell” Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Click ‘Search Cars’ Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Navigate To ‘new and used car search’ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Select Car Make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Car Model \"Range Rover Sport\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select The Location \"QLD - Sunshine Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select The Maximum Price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click On Find My Next Car Button",
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 403036300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1754750900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectCarMake(String)"
});
formatter.result({
  "duration": 1108100400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Range Rover Sport",
      "offset": 20
    }
  ],
  "location": "BuySteps.iSelectCarModel(String)"
});
formatter.result({
  "duration": 1080566700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - Sunshine Coast",
      "offset": 23
    }
  ],
  "location": "BuySteps.iSelectTheLocation(String)"
});
formatter.result({
  "duration": 1087825000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 28
    }
  ],
  "location": "BuySteps.iSelectTheMaximumPrice(String)"
});
formatter.result({
  "duration": 1071529000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarButton()"
});
formatter.result({
  "duration": 1674359000,
  "status": "passed"
});
formatter.after({
  "duration": 677044400,
  "status": "passed"
});
formatter.before({
  "duration": 5258307500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Am On Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Mouse Hover On “buy+sell” Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Click ‘Search Cars’ Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Navigate To ‘new and used car search’ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Select Car Make \"Mercedes Benz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Car Model \"S-Class\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select The Location \"VIC - Central Victoria\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select The Maximum Price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click On Find My Next Car Button",
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 164763000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 112599700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes Benz",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectCarMake(String)"
});
formatter.result({
  "duration": 21475367000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Mercedes Benz\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:291)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:194)\r\n\tat au.com.carsguide.utility.Utility.selectByValueFromDropDown(Utility.java:157)\r\n\tat au.com.carsguide.pages.SearchCarsPage.selectingCarMakeFromMakeDropDownMenu(SearchCarsPage.java:34)\r\n\tat au.com.carsguide.steps.BuySteps.iSelectCarMake(BuySteps.java:36)\r\n\tat ✽.And I Select Car Make \"Mercedes Benz\"(Buy.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "S-Class",
      "offset": 20
    }
  ],
  "location": "BuySteps.iSelectCarModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Central Victoria",
      "offset": 23
    }
  ],
  "location": "BuySteps.iSelectTheLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 28
    }
  ],
  "location": "BuySteps.iSelectTheMaximumPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 832229400,
  "status": "passed"
});
formatter.before({
  "duration": 4538328400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Am On Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Mouse Hover On “buy+sell” Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Click ‘Search Cars’ Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Navigate To ‘new and used car search’ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Select Car Make \"Aston Martin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Car Model \"Virage\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select The Location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select The Maximum Price \"$200,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click On Find My Next Car Button",
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 270696400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 145052200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 11000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aston Martin",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectCarMake(String)"
});
formatter.result({
  "duration": 1500164100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virage",
      "offset": 20
    }
  ],
  "location": "BuySteps.iSelectCarModel(String)"
});
formatter.result({
  "duration": 1097829600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 23
    }
  ],
  "location": "BuySteps.iSelectTheLocation(String)"
});
formatter.result({
  "duration": 1097944600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$200,000",
      "offset": 28
    }
  ],
  "location": "BuySteps.iSelectTheMaximumPrice(String)"
});
formatter.result({
  "duration": 1091220500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarButton()"
});
formatter.result({
  "duration": 1729442300,
  "status": "passed"
});
formatter.after({
  "duration": 687361300,
  "status": "passed"
});
formatter.before({
  "duration": 4567758000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-car-search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Am On Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Mouse Hover On “buy+sell” Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Click ‘Search Cars’ Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Navigate To ‘new and used car search’ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Select Car Make \"Bentley\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Car Model \"Continental GT\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select The Location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select The Maximum Price \"$200,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click On Find My Next Car Button",
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 166471900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 128750000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 48600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bentley",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectCarMake(String)"
});
formatter.result({
  "duration": 1547518600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continental GT",
      "offset": 20
    }
  ],
  "location": "BuySteps.iSelectCarModel(String)"
});
formatter.result({
  "duration": 21123363800,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Continental GT\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:291)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:194)\r\n\tat au.com.carsguide.utility.Utility.selectByValueFromDropDown(Utility.java:157)\r\n\tat au.com.carsguide.pages.SearchCarsPage.selectingCarModelFromModelDropDownMenu(SearchCarsPage.java:41)\r\n\tat au.com.carsguide.steps.BuySteps.iSelectCarModel(BuySteps.java:42)\r\n\tat ✽.And I Select Car Model \"Continental GT\"(Buy.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Melbourne",
      "offset": 23
    }
  ],
  "location": "BuySteps.iSelectTheLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$200,000",
      "offset": 28
    }
  ],
  "location": "BuySteps.iSelectTheMaximumPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 856987900,
  "status": "passed"
});
formatter.uri("FindDealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4655078500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I Am On Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Mouse Hover On “buy+sell” Tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \u003cdealersName\u003e are display on page",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 9
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 10
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 11
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 12
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 13
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 14
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 15
    },
    {
      "cells": [
        "Oxford Motors"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 165087600,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 19969411900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: a[href\u003d\u0027//www.carsguide.com.au/car-dealers\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat au.com.carsguide.pages.HomePage.clickingOnFindDealersOption(HomePage.java:45)\r\n\tat au.com.carsguide.steps.FindDealersSteps.iClickFindADealer(FindDealersSteps.java:15)\r\n\tat ✽.And I click ‘Find a Dealer’(FindDealers.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FindDealersSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16802100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.126)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9d07e01619440f2d8da51ffcff2147f1, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.126, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Roope\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58272}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58272/devtoo..., se:cdpVersion: 113.0.5672.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9d07e01619440f2d8da51ffcff2147f1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat au.com.carsguide.utility.Utility.getScreenshot(Utility.java:333)\r\n\tat au.com.carsguide.Hooks.tearDown(Hooks.java:27)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});