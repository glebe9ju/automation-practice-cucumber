package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement singIn;
    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailAddress;
    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordField;
    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitLogin']")
    WebElement signButton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailAdd;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement createAcc;
    @CacheLookup
    @FindBy(xpath = "//span[@class='navigation_page']")
    WebElement authentication;
    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger']//li")
    WebElement errorMessage;
    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOut;

    public void clickSignIn() {
        clickOnElement(singIn);
        log.info("Click on signin " + singIn.toString());
    }
    public void enterEmail(String email) {
        sendTextToElement(emailAddress, email);
        log.info(" Enter emil " + email + "in emil addressfield " + emailAddress.toString());
    }

    public void enterPassword(String pass) {
        sendTextToElement(passwordField, pass);
        log.info("Enter password " + pass + " in password field " + passwordField.toString());
    }
    public void clickSign() {
        clickOnElement(signButton);
        log.info("Click on signin " + signButton.toString());
    }

    public void enterEmailAdd(String emai) {
        sendTextToElement(emailAdd, emai);
        log.info("Enter email address " + emai + "in email field " + emailAdd.toString());
    }
    public void clickCreateAcc() {
        clickOnElement(createAcc);
        log.info("Click to create Account " + createAcc.toString());
    }
    public String verifyAuthentication() {
        String message = getTextFromElement(authentication);
        log.info("Getting text from : " + authentication.toString());
        return message;
    }

    public boolean verifySignOut() {
        log.info("check sign out displyed " + signOut.toString());
        return signOut.isDisplayed();

    }

    public String getErrorMessage() {
        log.info("check error message is diplyed " + errorMessage.toString());
        return getTextFromElement(errorMessage);
    }
    public void clickSignOut() {
        clickOnElement(signOut);
        log.info("Click to sign out " + signOut.toString());
    }

    public boolean verifySignIn() {
        log.info("Verify sign in " + singIn.toString());
        return singIn.isDisplayed();

    }
}
