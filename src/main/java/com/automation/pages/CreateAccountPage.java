package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CreateAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createEmailAcc;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement createAcc;
    @CacheLookup
    @FindBy(xpath = "//h3[normalize-space()='Your personal information']")
    WebElement personalInfo;
    @CacheLookup
    @FindBy(xpath = "//input[@name='id_gender']")
    List<WebElement> gender;
    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement firstName;
    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lastName;
    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailAdd;
    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passWord;
    @CacheLookup
    @FindBy(xpath = "//input[@id='firstname']")
    WebElement secondName;
    @CacheLookup
    @FindBy(xpath = "//input[@id='lastname']")
    WebElement secondLast;
    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement address;
    @CacheLookup
    @FindBy(xpath = "//input[@id='city']")
    WebElement cityAdd;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement stateAdd;
    @CacheLookup
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement zipCode;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement countryAdd;
    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobile;
    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement assignAdd;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement register;
    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='My account']")
    WebElement myAcc;

    public void enterEmailAdd(String email) {
        sendTextToElement(createEmailAcc, email);
        log.info("Create Emil Account" + createEmailAcc.toString());
    }
    public void clickCreateAcc() {
        clickOnElement(createAcc);
        log.info("Create Account" + createAcc.toString());
    }
    public String verifyPersonalInfo() {
        String message = getTextFromElement(personalInfo);
        log.info("Getting text from :" + personalInfo.toString());
        return message;
    }
    public void selectGender(String Mr) {
        switch (Mr) {
            case "Mr":
                gender.get(0).click();
                log.info("Select option" + Mr + "from the genderM option" + gender.get(0).toString());
                break;
            case "Mrs":
                gender.get(1).click();
                log.info("Select optin " + Mr + "from the genterF" + gender.get(1).toString());
                break;
        }
    }
    public void enterFirstName(String first) {
        sendTextToElement(firstName, first);
        log.info((" Enter First Name : " + first + " in firstname field " + firstName.toString()));
    }
    public void enterLastName(String last) {
        sendTextToElement(lastName, last);
        log.info((" Enter Last Name : " +  last + " in lastname field " + lastName.toString()));
    }
    public void enterEmail(String email) {
        sendTextToElement(emailAdd, email);
        log.info("Enter Email : " + email + " in email address field " + emailAdd.toString());
    }
    public void enterPassWord(String pass) {
        sendTextToElement(passWord, pass);
        log.info("Enter Password : " + pass + " in password field " + passWord.toString());
    }
    public void enterSecondName(String name) {
        sendTextToElement(secondName, name);
        log.info("Enter Secon Name : " + name + " in secondname " + secondName.toString());
    }
    public void enterSecondLast(String last) {
        sendTextToElement(secondLast, last);
        log.info("Enter Last Name :" + last + " in secondlast field " + secondLast.toString());
    }
    public void enterAddress(String add) {
        sendTextToElement(address, add);
        log.info("Enter Address : " + add + " in address field " + address.toString());
    }
    public void enterCity(String city) {
        sendTextToElement(cityAdd, city);
        log.info("Enter City :" + city + " in city field " + cityAdd.toString());
    }
    public void enterState(String state) {
        selectByVisibleTextFromDropDown(stateAdd, state);
        log.info("Enter State :" + state + " in state field " + stateAdd.toString());
    }
    public void enterZipCode(String zip) {
        sendTextToElement(zipCode, zip);
        log.info("Enter Zipcode :" + zip + " in zip field " + zipCode.toString());
    }

    public void enterCountry(String country) {
        sendTextToElement(countryAdd, country);
        log.info("Enter Country :" + country + " in country field " + countryAdd.toString());
    }

    public void enterMobile(String mob) {
        sendTextToElement(mobile, mob);
        log.info("Enter Mobile :" + mob + " in mobile field " + mobile.toString());
    }

    public void enterAssignAdd(String add) {
        sendTextToElement(assignAdd, add);
        log.info("Enter Assign Address : " + add + "in assign address " + assignAdd.toString());
    }

    public void clickRegister() {
        clickOnElement(register);
        log.info("Click on Register" + register.toString());
    }

    public String verifyMyAcc() {
        String message =  getTextFromElement(myAcc);
        log.info("Getting text from element" + myAcc.toString());
        return message;
    }
}
