Feature: career open positions
  Scenario: user can browse all open positions
    Given a web broswer is at github career page
    When the user can navigate through open positions
    Then output all Open positions in console
