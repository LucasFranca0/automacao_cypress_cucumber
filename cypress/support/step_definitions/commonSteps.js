import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../pageObjects/ProductsPage";

const productsPage = new ProductsPage();

Given("I visit the products page", () => {
    cy.fixture('users.json').then((users) => {
        const validUser = users.validUsers[0];
        cy.login(validUser.username, validUser.password);
    });
});

When("I click on a product {string}", (product) => {
    productsPage.clickProduct(product);
});

Then("I see a list of products", () => {
    productsPage.verifyProducts();
});

Then("I see the {string} details {string} and {string} and {string}", (product, details, desc, price) => {
    cy.get('.inventory_details_img').should('have.attr', 'alt', product);
    cy.get('.inventory_details_name').should('have.text', details);
    cy.get('.inventory_details_desc').should('have.text', desc);
    cy.get('.inventory_details_price').should('have.text', price);
});