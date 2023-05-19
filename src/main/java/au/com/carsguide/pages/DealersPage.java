package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class DealersPage extends Utility {

    private static final Logger log = LogManager.getLogger(DealersPage.class.getName());

    public DealersPage() {
        PageFactory.initElements(driver, this);
    }


    // Declaring locators
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Find a Dealer')]")
    WebElement findADealerButton;
    @CacheLookup
    @FindBy(xpath = "//div[@class='dealerListing--name']/a")
    List<WebElement> nameOfDealers;
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Next')]")
    WebElement nextButton;

    // Defining Methods

    public void clickingOnFindDealersButton() {
        clickOnElement(findADealerButton);
        log.info("Clicking On Find Dealers Button : " + findADealerButton.toString());
    }

    public String gettingNameOfDealer(String text) {
        log.info("Fetching Dealer Name  : " + nameOfDealers.toString());
        for (WebElement data : nameOfDealers) {
            String str = data.getText();
            if (str.equalsIgnoreCase(text)) {
                return str;
            }
        }
        return null;
    }

    public void clickOnNextButton() {
        clickOnElement(nextButton);
        log.info("Clicking on Next Button : " + nextButton.toString());
    }
}
