import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../support/pageObjects/cartPage";
import "../../support/step_definitions/commonSteps";

const cartPage = new CartPage();

When("I click on the add to cart button", () => {
    cy.getByData('add-to-cart').click();
});

When("I click on the remove from cart button", () => {
    cy.getByData('remove').click();
});

Then("I see the product in the cart {string} {string}", (product, price) => {
    cy.get('.shopping_cart_badge').should('have.text', '1').click();
    cy.get('.cart_list').should('contain', product);
});

Then("I don't see the product in the cart {string}", (product) => {
    cy.get('.shopping_cart_badge').should('not.exist', '0');
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_list').should('not.contain', product);
});

