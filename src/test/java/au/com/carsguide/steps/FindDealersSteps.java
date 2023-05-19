package au.com.carsguide.steps;

import au.com.carsguide.pages.DealersPage;
import au.com.carsguide.pages.HomePage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class FindDealersSteps {
    @And("^I click ‘Find a Dealer’$")
    public void iClickFindADealer() {
        new HomePage().clickingOnFindDealersOption();
    }

    @Then("^I navigate to ‘car-dealers’ page$")
    public void iNavigateToCarDealersPage() {
    }

    @And("^I should see the dealer names <dealersName> are display on page$")
    public void iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage(DataTable dataTable) {
        List<String> expectedList = dataTable.asList(String.class);
        for (String data : expectedList) {
            while (new DealersPage().gettingNameOfDealer(data) == null) {
                new DealersPage().clickOnNextButton();
            }
            Assert.assertEquals("Dealer name not found!", data, new DealersPage().gettingNameOfDealer(data));
        }
    }
}
