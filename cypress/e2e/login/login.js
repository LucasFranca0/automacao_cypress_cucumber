import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pageObjects/LoginPage";

const loginPage = new LoginPage();

Given("I am on the login page", () => {
    loginPage.visitLoginPage();
});

When("I enter the credentials {string} {string}", (user, password) => {
    loginPage.fillLoginForm(user, password);
});

When("I click the login button", () => {
    cy.getByData('login-button').click();
});

Then("I should be logged in", () => {
    loginPage.verifyLoggedIn();
});

Then("I should see an error message {string}",(error_message) => {
    loginPage.verifyErrorMessage(error_message)
});