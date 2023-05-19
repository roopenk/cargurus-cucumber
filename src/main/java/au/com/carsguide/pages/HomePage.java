package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    // Declaring locators
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='buy + sell']")
    WebElement buyPlusSellMenu;
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Search Cars']")
    WebElement searchCarsOption;
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Used']")
    WebElement usedCarsOption;
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Find a Dealer']")
    WebElement findDealersOption;

    // Defining Methods
    public void mouseHoveringOnBuyPlusSellMenu() { // Method to mouse hover on Buy+Sell Menu
        mouseHoverToElement(buyPlusSellMenu);
        log.info("Mouse Hovering On Buy + Sell Menu : " + buyPlusSellMenu.toString());
    }

    public void clickingOnSearchCarsOption() { // Method to click on Search cars option
        clickOnElement(searchCarsOption);
        log.info("Clicking On Search Cars Option : " + searchCarsOption.toString());
    }

    public void clickingOnUsedCarsOption() { // Method to click on Used Cars option
        clickOnElement(usedCarsOption);
        log.info("Clicking On Used Cars Option : " + usedCarsOption.toString());
    }

    public void clickingOnFindDealersOption() { // Method to click on Find dealers option
        clickOnElement(findDealersOption);
        log.info("Clicking On Find Dealers Option : " + findDealersOption.toString());
    }
}
