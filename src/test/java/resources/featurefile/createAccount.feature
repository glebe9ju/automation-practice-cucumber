Feature: Create Account Test
  As user I want to login into automation website
@regression
Scenario: User should create account successfully
  Given I am on homepage
  When I click on signin link
  And I enter new email
  And I click on create account
  And user should be able see the message successfully "YOUR PERSONAL INFORMATION"
  And I select gender
  And I enter customer first name
  And I enter customer last name
  And I enter password
  And I enter customer second name
  And I enter customer second last name
  And I enter address
  And I enter city
  And I enter state
  And I enter zipcode
  And I enter country
  And I enter mobile no
  And I enter assign address
  And I click on register button
  Then I should see My Account