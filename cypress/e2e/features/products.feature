Feature: products

  Scenario: User can see a list of products
    Given I visit the products page
    Then I see a list of products

  Scenario Outline: User can see a product details
    Given I visit the products page
    When I click on a product "<product>"
    Then I see the "<product>" details "<details>" and "<description>" and "<price>"

    Examples:
      | product                           | details                           | description                                                                                                                                                            | price  |
      | Sauce Labs Backpack               | Sauce Labs Backpack               | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                                 | $29.99 |
      | Sauce Labs Bike Light             | Sauce Labs Bike Light             | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.        | $9.99  |
      | Sauce Labs Bolt T-Shirt           | Sauce Labs Bolt T-Shirt           | Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.                        | $15.99 |
      | Sauce Labs Fleece Jacket          | Sauce Labs Fleece Jacket          | It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. | $49.99 |
      | Sauce Labs Onesie                 | Sauce Labs Onesie                 | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.        | $7.99  |
      | Test.allTheThings() T-Shirt (Red) | Test.allTheThings() T-Shirt (Red) | This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.              | $15.99 |

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


#  Scenario: User can remove a product from the cart
#    Given I visit the products page
#    When I click on a product
#    And I click on the add to cart button
#    And I click on the remove from cart button
#    Then I don't see the product in the cart
#
#  Scenario: User can see the cart
#    Given I visit the products page
#    When I click on a product
#    And I click on the add to cart button
#    And I click on the cart button
#    Then I see the cart
#
#  Scenario: User can see the cart total
#    Given I visit the products page
#    When I click on a product
#    And I click on the add to cart button
#    And I click on the cart button
#    Then I see the cart total

