package com.automation.cucumber.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.utility.Utility;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccount {
    @And("^I enter new email$")
    public void iEnterNewEmail() {
       int a =  new Utility().generateRandomNumber();
        new CreateAccountPage().enterEmailAdd("xyz" + a + "@yahoo.com");
    }

    @And("^I click on create account$")
    public void iClickOnCreateAccount() {
        new CreateAccountPage().clickCreateAcc();
    }

    @And("^user should be able see the message successfully \"([^\"]*)\"$")
    public void userShouldBeAbleSeeTheMessageSuccessfully(String text) {
        Assert.assertEquals("not displayed", text, new CreateAccountPage().verifyPersonalInfo());
    }

    @And("^I select gender$")
    public void iSelectGender() {
        new CreateAccountPage().selectGender("Mrs");
    }

    @And("^I enter customer first name$")
    public void iEnterCustomerFirstName() {
        new CreateAccountPage().enterFirstName("Rebecca");
    }

    @And("^I enter customer last name$")
    public void iEnterCustomerLastName() {
        new CreateAccountPage().enterLastName("Mori");
    }
    @And("^I enter password$")
    public void iEnterPassword() {
        new CreateAccountPage().enterPassWord("xyz123");
    }
    @And("^I enter customer second name$")
    public void iEnterCustomerSecondName() {
        new CreateAccountPage().enterSecondName("Rebecca");
    }
    @And("^I enter customer second last name$")
    public void iEnterCustomerSecondLastName() {
        new CreateAccountPage().enterSecondLast("Mori");
    }
    @And("^I enter address$")
    public void iEnterAddress() {
        new CreateAccountPage().enterAddress("89,RedFord");
    }
    @And("^I enter city$")
    public void iEnterCity() {
        new CreateAccountPage().enterCity("Manchester");
    }
    @And("^I enter state$")
    public void iEnterState() {
        new CreateAccountPage().enterState("Alaska");
    }
    @And("^I enter zipcode$")
    public void iEnterZipcode() {
        new CreateAccountPage().enterZipCode("12345");
    }
    @And("^I enter country$")
    public void iEnterCountry() {
        new CreateAccountPage().enterCountry("UnitedStates");
    }
    @And("^I enter mobile no$")
    public void iEnterMobileNo() {
        new CreateAccountPage().enterMobile("91234556789");
    }
    @And("^I enter assign address$")
    public void iEnterAssignAddress() {
        new CreateAccountPage().enterAssignAdd("89,RedFord");
    }
    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickRegister();
    }
    @Then("^I should see My Account$")
    public void iShouldSeeMyAccount() {
Assert.assertEquals("not displyed","MY ACCOUNT",new CreateAccountPage().verifyMyAcc());
    }
}
