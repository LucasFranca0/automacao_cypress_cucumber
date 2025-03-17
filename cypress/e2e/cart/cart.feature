Feature: cart

  Scenario Outline: User can add a product to the cart
    Given I visit the products page
    When I click on a product "<product>"
    And I click on the add to cart button
    Then I see the product in the cart "<product>" "<price>"

    Examples:
      | product                           | price  |
      | Sauce Labs Backpack               | $29.99 |
      | Sauce Labs Bike Light             | $9.99  |
      | Sauce Labs Bolt T-Shirt           | $15.99 |
      | Sauce Labs Fleece Jacket          | $49.99 |
      | Sauce Labs Onesie                 | $7.99  |
      | Test.allTheThings() T-Shirt (Red) | $15.99 |


  Scenario Outline: User can remove a product from the cart
    Given I visit the products page
    When I click on a product "<product>"
    And I click on the add to cart button
    And I click on the remove from cart button
    Then I don't see the product in the cart "<product>"

    Examples:
      | product                           |
      | Sauce Labs Backpack               |
      | Sauce Labs Bike Light             |
      | Sauce Labs Bolt T-Shirt           |
      | Sauce Labs Fleece Jacket          |
      | Sauce Labs Onesie                 |
      | Test.allTheThings() T-Shirt (Red) |