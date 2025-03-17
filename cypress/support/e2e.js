import '@badeball/cypress-cucumber-preprocessor';
import './commands';

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

afterEach(() => {
    cy.reload();
});