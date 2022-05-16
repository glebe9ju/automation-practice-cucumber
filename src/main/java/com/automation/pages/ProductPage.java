package com.automation.pages;

import com.automation.drivermanager.ManageDriver;
import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(ManageDriver.driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Blouse'][normalize-space()='Blouse']")
    WebElement blouse;
    @CacheLookup
    @FindBy(xpath = "//a[@id='color_8']")
    WebElement white;
    @CacheLookup
    @FindBy(xpath = "//li[@class='ajax_block_product col-xs-12 col-sm-6 col-md-4 last-in-line first-item-of-tablet-line last-item-of-mobile-line']//a[@title='Printed Dress'][normalize-space()='Printed Dress']")
    WebElement printedDress;
    @CacheLookup
    @FindBy(xpath = "//a[@id='color_13']")
    WebElement colorOrg;
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Printed Chiffon Dress']")
    WebElement prichiDress;
    @CacheLookup
    @FindBy(xpath = "//a[@id='color_15']")
    WebElement colorGrn;
    @CacheLookup
    @FindBy(xpath = "//li[@class='ajax_block_product col-xs-12 col-sm-6 col-md-4 first-item-of-tablet-line']//a[@title='Printed Summer Dress'][normalize-space()='Printed Summer Dress']")
    WebElement summerDress;
    @CacheLookup
    @FindBy(xpath = "//a[@id='color_14']")
    WebElement colorBlu;
    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement sizesel;
    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement qtyAdd;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addCart;
    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement verifyAddText;
    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeBtn;


    public void selProduct(String proName) {
        if (proName.equalsIgnoreCase("Blouse")) {
            clickOnElement(blouse);
            log.info("Select" + blouse.toString());
        } else if (proName.equalsIgnoreCase("Printed Dress")) {
            clickOnElement(printedDress);
            log.info("Select" + printedDress.toString());
        } else if (proName.equalsIgnoreCase("printed Chiffon Dress")) {
            clickOnElement(prichiDress);
            log.info("Select" + prichiDress.toString());
        } else if (proName.equalsIgnoreCase("Printed Summer Dress with price $28.98"))
            clickOnElement(summerDress);
        log.info("Select" + summerDress.toString());


    }

    public void selColour(String color) {
        if (color.equalsIgnoreCase("White")) {
            clickOnElement(white);
            log.info("Select colour" + white.toString());
        } else if (color.equalsIgnoreCase("Orange")) {
            clickOnElement(colorOrg);
            log.info("Select colour" + colorOrg.toString());
        } else if (color.equalsIgnoreCase("Green")) {
            clickOnElement(colorGrn);
            log.info("Select colour" + colorGrn.toString());
        } else if (color.equalsIgnoreCase("Blue")) {
            clickOnElement(colorBlu);
            log.info("Select colour" + colorBlu.toString());
        }
    }

    public void enterQtyAdd(String qty) {
        qtyAdd.clear();
        sendTextToElement(qtyAdd, qty);
        log.info("Enter Address : " + qty + " Add quantiy " + qtyAdd.toString());
    }

    public void selectSize(String size) {
        selectByVisibleTextFromDropDown(sizesel, size);
        log.info("Select size" + size + " size select " + sizesel.toString());
    }

    public void clickAddCart() {
        clickOnElement(addCart);
        log.info("Click Add to cart " + addCart.toString());
    }

    public void getAddMes(String message) {
        verifyThatTextIsDisplayed(verifyAddText, message);
        log.info("Verify : " + message + " Verify add to text " + verifyAddText.toString());
    }
    public void setCloseBtn() {
        clickOnElement(closeBtn);
        log.info("Click on : " + closeBtn.toString());
    }
}
