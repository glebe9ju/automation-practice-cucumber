Feature: Signin Test
  As user I want to login into automation website
@smoke
  Scenario: User should navigate to signIn page successfully
    Given I am on homepage
    When I click on signin link
    Then I user should able to see the message successfully "AUTHENTICATION"
@regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on signin link
    And I enter email "<username>"
    And I enter password "<password>"
    And I click on sign
    Then I should see the error message "<message>"
    Examples:
      | username       | password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |
@sanity
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I click on signin link
    And I enter valid email
    And I enter valid password
    And I click on sign
    Then I should see sign out link
@sanity
  Scenario: User should log out successfully
    Given I am on homepage
    When I click on signin link
    And I enter valid email
    And I enter valid password
    And I click on sign
    And I click on signout link
    Then I should see sign in link