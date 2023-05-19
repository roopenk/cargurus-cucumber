package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ResultsPage extends Utility {

    private static final Logger log = LogManager.getLogger(ResultsPage.class.getName());

    public ResultsPage() {
        PageFactory.initElements(driver, this);
    }

    // Declaring locators
    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement searchResultText;

    // Defining Methods
    public String gettingMakeTextFromResultText() {
        log.info("Returning Result Text : " + searchResultText);
        return getTextFromElement(searchResultText);
    }
}
