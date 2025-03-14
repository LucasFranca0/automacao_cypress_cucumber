// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Comandos personalizados Page Object

Cypress.Commands.add('blockBacktrace', () => {
  cy.intercept('POST', '**/events.backtrace.io/**', { statusCode: 200, body: {} }).as('blockedBacktrace');
});

// Área de login
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('input[name="user-name"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('input[type="submit"]').click();
});
Cypress.Commands.add('logout', () => {
  cy.get('.bm-burger-button').click();
  cy.get('#logout_sidebar_link').click();
  cy.url().should('include', '');
});
Cypress.Commands.add('verifyErrorLogin', (error) => {
  cy.getByData('error').should('exist').contains(`${error}`);
});

// Área de compras
Cypress.Commands.add('addProductToCart', (productName) => {
  cy.get('.inventory_item_name').contains(productName).siblings('.pricebar').children('.btn_primary').click();
});
Cypress.Commands.add('removeProductFromCart', (productName) => {
    cy.get('.inventory_item_name').contains(productName).siblings('.pricebar').children('.btn_secondary').click();
});
Cypress.Commands.add('verifyProductInCart', (productName) => {
  cy.get('.cart_item').should('contain', productName);
});
Cypress.Commands.add('verifyProductNotInCart', (productName) => {
  cy.get('.cart_item').should('not.contain', productName);
});
Cypress.Commands.add('verifyCartBadge', (badgeCount) => {
  cy.get('.shopping_cart_badge').should('contain', badgeCount);
});
Cypress.Commands.add('verifyCartBadgeNotVisible', () => {
  cy.get('.shopping_cart_badge').should('not.be.visible');
});
Cypress.Commands.add('verifyCartBadgeVisible', () => {
  cy.get('.shopping_cart_badge').should('be.visible');
});
Cypress.Commands.add('verifyCartEmpty', () => {
  cy.get('.cart_list').should('not.exist');
});
Cypress.Commands.add('verifyCartNotEmpty', () => {
  cy.get('.cart_list').should('exist');
});
Cypress.Commands.add('verifyCartTotal', (total) => {
  cy.get('.summary_subtotal_label').should('contain', total);
});
Cypress.Commands.add('verifyCartTax', (tax) => {
  cy.get('.summary_tax_label').should('contain', tax);
});
Cypress.Commands.add('verifyCartItems', (items) => {
  cy.get('.cart_item').should('have.length', items);
});

// Comandos personalizados pegar dados
Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});




