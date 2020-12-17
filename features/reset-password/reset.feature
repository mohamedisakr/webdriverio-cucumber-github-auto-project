Feature: Forget password email validation
  
  Background: 
	Given a web broswer is at reset your password page

  Scenario Outline: correct format    
    When valid "<email>"
    Then send password reset email
  
    Examples:
      | email | 
      | tom-smith-coder@tmpbox.net |

  Scenario Outline: incorrect format
    When invalid "<email>"
    Then error message should be displayed

    Examples:
      | email | 
      | @tmpbox.net |
      | tmpbox@net |