Feature: pricing menu item
  Scenario: user can choose to create new account for free 
    Given a web broswer is at github pricing page
    When the user join for free
    Then the user redirectd to Create your account