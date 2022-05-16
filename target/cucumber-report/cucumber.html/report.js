$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Test",
  "description": "As user I want to login into automation website",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5720468900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should create account successfully",
  "description": "",
  "id": "create-account-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter new email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able see the message successfully \"YOUR PERSONAL INFORMATION\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select gender",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter customer first name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter customer last name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter customer second name",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter customer second last name",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter address",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter city",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter state",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter zipcode",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter country",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter mobile no",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter assign address",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see My Account",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 78523900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 3019819900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterNewEmail()"
});
formatter.result({
  "duration": 84913100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iClickOnCreateAccount()"
});
formatter.result({
  "duration": 62090000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YOUR PERSONAL INFORMATION",
      "offset": 50
    }
  ],
  "location": "CreateAccount.userShouldBeAbleSeeTheMessageSuccessfully(String)"
});
formatter.result({
  "duration": 1575545600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iSelectGender()"
});
formatter.result({
  "duration": 54867200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterCustomerFirstName()"
});
formatter.result({
  "duration": 104076900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterCustomerLastName()"
});
formatter.result({
  "duration": 68900600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterPassword()"
});
formatter.result({
  "duration": 67279700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterCustomerSecondName()"
});
formatter.result({
  "duration": 71135100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterCustomerSecondLastName()"
});
formatter.result({
  "duration": 59015800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterAddress()"
});
formatter.result({
  "duration": 79056200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterCity()"
});
formatter.result({
  "duration": 130584200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterState()"
});
formatter.result({
  "duration": 82239800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterZipcode()"
});
formatter.result({
  "duration": 69182700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterCountry()"
});
formatter.result({
  "duration": 70156200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterMobileNo()"
});
formatter.result({
  "duration": 70356700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterAssignAddress()"
});
formatter.result({
  "duration": 75367300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1411136500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iShouldSeeMyAccount()"
});
formatter.result({
  "duration": 34940100,
  "status": "passed"
});
formatter.after({
  "duration": 705998000,
  "status": "passed"
});
formatter.uri("signin.feature");
formatter.feature({
  "line": 1,
  "name": "Signin Test",
  "description": "As user I want to login into automation website",
  "id": "signin-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4490615900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to signIn page successfully",
  "description": "",
  "id": "signin-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I user should able to see the message successfully \"AUTHENTICATION\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 109900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 2679015900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 52
    }
  ],
  "location": "SignInSteps.iUserShouldAbleToSeeTheMessageSuccessfully(String)"
});
formatter.result({
  "duration": 30653700,
  "status": "passed"
});
formatter.after({
  "duration": 675512800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on sign",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 17,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 18,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 20,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 21,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4877172900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on sign",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 1349550900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "SignInSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 50974600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 69479800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSign()"
});
formatter.result({
  "duration": 1188181100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 30780200,
  "status": "passed"
});
formatter.after({
  "duration": 679298000,
  "status": "passed"
});
formatter.before({
  "duration": 4924737800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on sign",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 2819846700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 15
    }
  ],
  "location": "SignInSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 71285300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 55998200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSign()"
});
formatter.result({
  "duration": 1208910900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 26120800,
  "status": "passed"
});
formatter.after({
  "duration": 672828100,
  "status": "passed"
});
formatter.before({
  "duration": 5177544700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on sign",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 3778796700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 15
    }
  ],
  "location": "SignInSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 62351000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 63069300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSign()"
});
formatter.result({
  "duration": 1361215500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 26641900,
  "status": "passed"
});
formatter.after({
  "duration": 662145200,
  "status": "passed"
});
formatter.before({
  "duration": 5338124300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on sign",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 137800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 3420997600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 15
    }
  ],
  "location": "SignInSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 71341700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 63339900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSign()"
});
formatter.result({
  "duration": 786087900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 32272900,
  "status": "passed"
});
formatter.after({
  "duration": 668064700,
  "status": "passed"
});
formatter.before({
  "duration": 4379269800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "signin-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter valid email",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on sign",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see sign out link",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 47600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 1471293200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iEnterValidEmail()"
});
formatter.result({
  "duration": 72707100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iEnterValidPassword()"
});
formatter.result({
  "duration": 69630800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSign()"
});
formatter.result({
  "duration": 2096926100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldSeeSignOutLink()"
});
formatter.result({
  "duration": 34555500,
  "status": "passed"
});
formatter.after({
  "duration": 687024200,
  "status": "passed"
});
formatter.before({
  "duration": 7731926200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should log out successfully",
  "description": "",
  "id": "signin-test;user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter valid email",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on sign",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on signout link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see sign in link",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 5960000900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iEnterValidEmail()"
});
formatter.result({
  "duration": 65216000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iEnterValidPassword()"
});
formatter.result({
  "duration": 70087500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSign()"
});
formatter.result({
  "duration": 3808425500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignoutLink()"
});
formatter.result({
  "duration": 5648184500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldSeeSignInLink()"
});
formatter.result({
  "duration": 41970100,
  "status": "passed"
});
formatter.after({
  "duration": 684816600,
  "status": "passed"
});
formatter.uri("womenCategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women CategoryTest",
  "description": "As user I want to login into automation website",
  "id": "women-categorytest",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": user should add product to the cart successfully",
  "description": "",
  "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product\"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change quantity\"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select size\"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour\"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on cart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on x button and close the popup",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 16,
      "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 17,
      "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 18,
      "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 19,
      "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 20,
      "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4424849400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": ": user should add product to the cart successfully",
  "description": "",
  "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product\"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change quantity\"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select size\"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour\"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on cart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on x button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 67300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2091518500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 19
    }
  ],
  "location": "WomenCategory.iClickOnProduct(String)"
});
formatter.result({
  "duration": 22507182600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WomenCategory.iChangeQuantity(String)"
});
formatter.result({
  "duration": 101162000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 14
    }
  ],
  "location": "WomenCategory.iSelectSize(String)"
});
formatter.result({
  "duration": 86531700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 16
    }
  ],
  "location": "WomenCategory.iSelectColour(String)"
});
formatter.result({
  "duration": 69415800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnCartButton()"
});
formatter.result({
  "duration": 47459700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "WomenCategory.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 27117500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 985975200,
  "status": "passed"
});
formatter.after({
  "duration": 683910200,
  "status": "passed"
});
formatter.before({
  "duration": 4226470700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": user should add product to the cart successfully",
  "description": "",
  "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product\"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change quantity\"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select size\"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour\"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on cart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on x button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 83300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2167521700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 19
    }
  ],
  "location": "WomenCategory.iClickOnProduct(String)"
});
formatter.result({
  "duration": 21574697900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WomenCategory.iChangeQuantity(String)"
});
formatter.result({
  "duration": 96206400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 14
    }
  ],
  "location": "WomenCategory.iSelectSize(String)"
});
formatter.result({
  "duration": 97038300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 16
    }
  ],
  "location": "WomenCategory.iSelectColour(String)"
});
formatter.result({
  "duration": 57908700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnCartButton()"
});
formatter.result({
  "duration": 52142400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "WomenCategory.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 27641500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 1479587000,
  "status": "passed"
});
formatter.after({
  "duration": 691966000,
  "status": "passed"
});
formatter.before({
  "duration": 4506658400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": user should add product to the cart successfully",
  "description": "",
  "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product\"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change quantity\"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select size\"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour\"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on cart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on x button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2775667700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 19
    }
  ],
  "location": "WomenCategory.iClickOnProduct(String)"
});
formatter.result({
  "duration": 22417795700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WomenCategory.iChangeQuantity(String)"
});
formatter.result({
  "duration": 96724400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 14
    }
  ],
  "location": "WomenCategory.iSelectSize(String)"
});
formatter.result({
  "duration": 39451100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 16
    }
  ],
  "location": "WomenCategory.iSelectColour(String)"
});
formatter.result({
  "duration": 68880500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnCartButton()"
});
formatter.result({
  "duration": 64526500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "WomenCategory.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 24870500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 2745582500,
  "status": "passed"
});
formatter.after({
  "duration": 705378600,
  "status": "passed"
});
formatter.before({
  "duration": 9622872500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": ": user should add product to the cart successfully",
  "description": "",
  "id": "women-categorytest;:-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product\"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change quantity\"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select size\"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour\"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on cart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on x button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnWomenTab()"
});
formatter.result({
  "duration": 5168354200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 19
    }
  ],
  "location": "WomenCategory.iClickOnProduct(String)"
});
formatter.result({
  "duration": 5047582700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WomenCategory.iChangeQuantity(String)"
});
formatter.result({
  "duration": 76575500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 14
    }
  ],
  "location": "WomenCategory.iSelectSize(String)"
});
formatter.result({
  "duration": 78114000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 16
    }
  ],
  "location": "WomenCategory.iSelectColour(String)"
});
formatter.result({
  "duration": 57112500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnCartButton()"
});
formatter.result({
  "duration": 54117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "WomenCategory.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 24087400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 6642340500,
  "status": "passed"
});
formatter.after({
  "duration": 692685700,
  "status": "passed"
});
});