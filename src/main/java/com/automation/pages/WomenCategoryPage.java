package com.automation.pages;

import com.automation.drivermanager.ManageDriver;
import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WomenCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());

    public WomenCategoryPage() {
        PageFactory.initElements(ManageDriver.driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement women;
    @CacheLookup
    @FindBy(xpath = "//span[@class='category-name']")
    WebElement womenTab;
    @CacheLookup
    @FindBy(xpath = "//ul[@id='ul_layered_id_attribute_group_3']//li")
    List<WebElement> colourList;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='product_list grid row']//h5//a")
    List<WebElement> productList;

    public void clickOnWomen() {
        clickOnElement(women);
        log.info("Click on Women tab " + women.toString());
    }

    public String verifyWomen() {
        String message = getTextFromElement(womenTab);
        log.info("Verify women tab " + womenTab.toString());
        return message;
    }

    public void selectColour(String colour) {
        for (WebElement colur : colourList) {
            log.info("Select colour " + colourList.toString());
            if (colur.getText().contains(colour)) {
                System.out.println(colur);
                mouseHoverToElementAndClick(colur);
            }
        }
    }
}