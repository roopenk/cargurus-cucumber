package au.com.carsguide.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.ResultsPage;
import au.com.carsguide.pages.SearchCarsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuySteps {
    @Given("^I Am On Homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I Mouse Hover On “buy\\+sell” Tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoveringOnBuyPlusSellMenu();
    }

    @And("^I Click ‘Search Cars’ Link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickingOnSearchCarsOption();
    }

    @Then("^I Navigate To ‘new and used car search’ Page$")
    public void iNavigateToNewAndUsedCarSearchPage() {

    }

    @And("^I Select Car Make \"([^\"]*)\"$")
    public void iSelectCarMake(String make) throws InterruptedException {
        Thread.sleep(1000);
        new SearchCarsPage().selectingCarMakeFromMakeDropDownMenu(make);
    }

    @And("^I Select Car Model \"([^\"]*)\"$")
    public void iSelectCarModel(String model) throws InterruptedException {
        Thread.sleep(1000);
        new SearchCarsPage().selectingCarModelFromModelDropDownMenu(model);
    }

    @And("^I Select The Location \"([^\"]*)\"$")
    public void iSelectTheLocation(String location) throws InterruptedException {
        Thread.sleep(1000);
        new SearchCarsPage().selectingLocationFromLocationDropDownMenu(location);
    }

    @And("^I Select The Maximum Price \"([^\"]*)\"$")
    public void iSelectTheMaximumPrice(String price) throws InterruptedException {
        Thread.sleep(1000);
        new SearchCarsPage().selectingMaxPriceFromPriceDropDownMenu(price);
    }

    @And("^I Click On Find My Next Car Button$")
    public void iClickOnFindMyNextCarButton() {
        new SearchCarsPage().clickingOnFindMyNextCarButton();
    }

    @Then("^I Navigate to ‘Used Cars For Sale’ page$")
    public void iNavigateToUsedCarsForSalePage() {
    }

    @And("^I Click On Used Cars Link$")
    public void iClickOnUsedCarsLink() {
        new HomePage().clickingOnUsedCarsOption();
    }

    @Then("^I should see the make “<make>” in results$")
    public void iShouldSeeTheMakeMakeInResults(String make) {
        Assert.assertTrue(make, new ResultsPage().gettingMakeTextFromResultText().contains(make));
    }
}
