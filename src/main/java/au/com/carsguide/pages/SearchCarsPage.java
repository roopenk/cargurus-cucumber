package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class SearchCarsPage extends Utility {

    private static final Logger log = LogManager.getLogger(SearchCarsPage.class.getName());
    // Declaring locators
    @CacheLookup
    @FindBy(css = "#makes")
    WebElement carMake;
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement carModel;
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement carLocation;
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement carMaxPrice;
    @CacheLookup
    @FindBy(xpath = "//input[@value='Find My Next Car']")
    WebElement clickOnFindMyNextCar;

    // Defining Methods
    // Method to select Car make from make drop down menu
    public void selectingCarMakeFromMakeDropDownMenu(String make) {
        //clickOnElement(carMake);
        selectByValueFromDropDown(carMake, make);
        log.info("Selecting Car Make From Make Drop Down : " + carMake.toString());
    }

    // Method to select Car model from model drop down menu
    public void selectingCarModelFromModelDropDownMenu(String model) {
        //clickOnElement(carModel);
        selectByValueFromDropDown(carModel, model);
        log.info("Selecting Car Model From Model Drop Down Menu : " + carModel.toString());
    }

    // Method to select Car location from location drop down menu
    public void selectingLocationFromLocationDropDownMenu(String location) {
        //clickOnElement(carLocation);
        selectByValueFromDropDown(carLocation, location);
        log.info("Selecting Car Location From Location Drop Down Menu : " + carLocation.toString());
    }

    // Method to select Maximum price from price drop down menu
    public void selectingMaxPriceFromPriceDropDownMenu(String price) {
        //clickOnElement(carMaxPrice);
        selectByVisibleTextFromDropDown(carMaxPrice, price);
        log.info("Selecting Maximum Price From Price Drop Down Menu : " + carMaxPrice.toString());
    }

    public void clickingOnFindMyNextCarButton() { // Method to click on Find my next car button
        clickOnElement(clickOnFindMyNextCar);
        log.info("Clicking On Find My Next Car Button : " + clickOnFindMyNextCar.toString());
    }
}
