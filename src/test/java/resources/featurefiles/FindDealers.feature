Feature: Find the dealers and verify
  @sanity @regression
  Scenario: Find the dealers and verify the dealers are in list
    Given I Am On Homepage
    When I Mouse Hover On “buy+sell” Tab
    And I click ‘Find a Dealer’
    Then I navigate to ‘car-dealers’ page
    And I should see the dealer names <dealersName> are display on page
      | dealersName |
      | 3 Point Motors Epping |
      | 4WD Specialist Group |
      | 5 Star Auto |
      | A & M Car Sales Pty Ltd |
      | A1 MOTORS COMPANY |
      | ANDREA MOTORI SERVICE |
      | Oxford Motors|
