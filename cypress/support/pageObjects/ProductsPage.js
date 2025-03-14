class ProductsPage {
    verifyProducts() {
        cy.get('.inventory_item').should('have.length', 6);
    }

    clickProduct(productName) {
        cy.contains('.inventory_item_name', productName).click();
    }

}

export default ProductsPage;