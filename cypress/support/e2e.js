import '@badeball/cypress-cucumber-preprocessor';
import '@cypress/code-coverage/support'
import './commands';

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

afterEach(() => {
    cy.reload();
});