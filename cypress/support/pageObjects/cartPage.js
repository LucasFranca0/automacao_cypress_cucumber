class CartPage {
    getCartItems() {
        return cy.get('.cart_item')
    }

    getCheckoutButton() {
        return cy.get('.checkout_button')
    }

    getContinueShoppingButton() {
        return cy.get('.btn_secondary')
    }

    getCartTotal() {
        return cy.get('.summary_subtotal_label')
    }

    getCartTax() {
        return cy.get('.summary_tax_label')
    }


}

export default CartPage;