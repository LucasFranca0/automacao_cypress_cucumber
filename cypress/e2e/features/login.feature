Feature: login

  Scenario Outline: login with valid credentials user: <username> and password: <password>
    Given I am on the login page
    When I enter the credentials "<username>" "<password>"
    And I click the login button
    Then I should be logged in

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | problem_user            | secret_sauce |

  Scenario Outline: login erro <tipo_cenario>
    Given I am on the login page
    When I enter the credentials "<username>" "<password>"
    And I click the login button
    Then I should see an error message "<error_message>"

    Examples:
      | tipo_cenario           | username       | password       | error_message                                                             |
      | com senha errada       | standard_user  | wrong_password | Epic sadface: Username and password do not match any user in this service |
      | campo senha vazio      | empty_password |                | Epic sadface: Password is required                                        |
      | campo usuario vazio    |                | secret_sauce   | Epic sadface: Username is required                                        |
      | credenciais incorretas | wrong_user     | wrong_password | Epic sadface: Username and password do not match any user in this service |

