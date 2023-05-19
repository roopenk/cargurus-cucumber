Feature: As a User I want to verify the Car Search functionality

  @sanity @regression
  Scenario Outline: Search the buy car with model
    Given I Am On Homepage
    When I Mouse Hover On “buy+sell” Tab
    And I Click ‘Search Cars’ Link
    Then I Navigate To ‘new and used car search’ Page
    And I Select Car Make "<make>"
    And I Select Car Model "<model>"
    And I Select The Location "<location>"
    And I Select The Maximum Price "<price>"
    And I Click On Find My Next Car Button
   #Then I Should See The Make “<make>” In Results
    Examples:
      | make          | model             | location               | price    |
      | Audi          | A8                | NSW - Sydney           | $70,000  |
      | BMW           | 7 Series          | NSW - Central Coast    | $100,000 |
      | Land Rover    | Range Rover Sport | QLD - Sunshine Coast   | $100,000 |
      | Mercedes Benz | S-Class           | VIC - Central Victoria | $100,000 |
      | Aston Martin  | Virage            | NSW - Sydney           | $200,000 |
      | Bentley       | Continental GT    | VIC - Melbourne        | $200,000 |

  @smoke @regression
  Scenario Outline: Search the used car with model
    Given I Am On Homepage
    When I Mouse Hover On “buy+sell” Tab
    And I Click On Used Cars Link
    Then I Navigate to ‘Used Cars For Sale’ page
    And I Select Car Make "<make>"
    And I Select Car Model "<model>"
    And I Select The Location "<location>"
    And I Select The Maximum Price "<price>"
    And I Click On Find My Next Car Button
    Then I should see the make “<make>” in results
    Examples:
      | make          | model             | location               | price    |
      | Audi          | A8                | NSW - Sydney           | $70,000  |
      | BMW           | 7 Series          | NSW - Central Coast    | $100,000 |
      | Land Rover    | Range Rover Sport | QLD - Sunshine Coast   | $100,000 |
      | Mercedes Benz | S-Class           | VIC - Central Victoria | $100,000 |
      | Aston Martin  | Virage            | NSW - Sydney           | $200,000 |
      | Bentley       | Continental GT    | VIC - Melbourne        | $200,000 |