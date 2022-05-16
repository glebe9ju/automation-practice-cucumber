package com.automation.cucumber.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        System.out.println("I am on homepage");
    }
    @When("^I click on signin link$")
    public void iClickOnSigninLink() {
        new SignInPage().clickSignIn();
    }
    @Then("^I user should able to see the message successfully \"([^\"]*)\"$")
    public void iUserShouldAbleToSeeTheMessageSuccessfully(String arg0) {
        String expected = "Authentication";
        String actual = new SignInPage().verifyAuthentication();
        Assert.assertEquals("not displayed ", expected, actual);
    }
    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String username) {
        new SignInPage().enterEmail(username);
    }
    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new SignInPage().enterPassword(password);
    }
    @And("^I click on sign$")
    public void iClickOnSign() {
        new SignInPage().clickSign();
    }
    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String message) {
        Assert.assertEquals("Error in message", message, new SignInPage().getErrorMessage());
    }
    @And("^I enter valid email$")
    public void iEnterValidEmail() {
        new SignInPage().enterEmail("abc23@yahoo.com");
    }
    @And("^I enter valid password$")
    public void iEnterValidPassword() {
        new SignInPage().enterPassword("rebecca123");
    }
    @Then("^I should see sign out link$")
    public void iShouldSeeSignOutLink() {
        Assert.assertTrue("not displayed",new SignInPage().verifySignOut());
    }
    @And("^I click on signout link$")
    public void iClickOnSignoutLink() {
        new SignInPage().clickSignOut();
    }
    @Then("^I should see sign in link$")
    public void iShouldSeeSignInLink() {
        Assert.assertTrue("not displayed",new SignInPage().verifySignIn());
    }

}
