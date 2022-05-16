package com.automation.cucumber.steps;

import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomenCategory {
    @When("^I click on women tab$")
    public void iClickOnWomenTab() {
        new WomenCategoryPage().clickOnWomen();
    }

    @And("^I click on product\"([^\"]*)\"$")
    public void iClickOnProduct(String product)  {
        new ProductPage().selProduct(product);
    }

    @And("^I change quantity\"([^\"]*)\"$")
    public void iChangeQuantity(String qty)  {
        new ProductPage().enterQtyAdd(qty);
    }

    @And("^I select size\"([^\"]*)\"$")
    public void iSelectSize(String size)  {
        new ProductPage().selectSize(size);
    }

    @And("^I select colour\"([^\"]*)\"$")
    public void iSelectColour(String colour)  {
        new ProductPage().selColour(colour);
    }

    @And("^I click on cart button$")
    public void iClickOnCartButton() {
        new ProductPage().clickAddCart();
    }

    @And("^I should see message \"([^\"]*)\"$")
    public void iShouldSeeMessage(String text)  {
        new ProductPage().getAddMes(text);
    }

    @Then("^I click on x button and close the popup$")
    public void iClickOnXButtonAndCloseThePopup() {
        new ProductPage().setCloseBtn();
    }
}
