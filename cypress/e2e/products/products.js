import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pageObjects/LoginPage";
import ProductsPage from "../../support/pageObjects/ProductsPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

Given("I visit the products page", () => {
    cy.fixture('users.json').then((users) => {
        const validUser = users.validUsers[0];
        console.log(validUser);
        loginPage.visitLoginPage();
        loginPage.fillLoginForm(validUser.username, validUser.password);
        cy.getByData('login-button').click();
    });
});

When("I click on a product {string}", (product) => {
    productsPage.clickProduct(product);
});

When("I click on the add to cart button", () => {
    cy.getByData('add-to-cart').click();
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

Then("I see the product in the cart {string} {string}", (product, price) => {
    cy.get('.shopping_cart_badge').should('have.text', '1').click();
    cy.get('.cart_list').should('contain', product);

})