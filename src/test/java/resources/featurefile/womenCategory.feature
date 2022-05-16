Feature: Women CategoryTest
  As user I want to login into automation website
@regression
  Scenario Outline: : user should add product to the cart successfully
    Given I am on homepage
    When I click on women tab
    And I click on product"<product>"
    And I change quantity"<qty>"
    And I select size"<size>"
    And I select colour"<colour>"
    And I click on cart button
    And I should see message "Product successfully added to your shopping cart"
    Then I click on x button and close the popup

    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |
