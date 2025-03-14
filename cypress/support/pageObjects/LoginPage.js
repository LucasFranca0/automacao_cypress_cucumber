class LoginPage {
    visitLoginPage() {
        cy.visit('https://www.saucedemo.com', {failOnStatusCode: false});
    }

    fillLoginForm(username, password) {
        if (username === '' && password === '') {
        } else if (username === '') {
            cy.getByData('password').type(password);
        } else if (password === '') {
            cy.getByData('username').type(username);
        } else {
            cy.getByData('username').type(username);
            cy.getByData('password').type(password);
        }
    }

    verifyLoggedIn() {
        cy.url().should('include', '/inventory');
    }

    verifyErrorMessage(error) {
        cy.getByData('error').should('be.visible').contains(error);
    }
}

export default LoginPage;