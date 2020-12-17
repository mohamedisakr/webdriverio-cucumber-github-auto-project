Feature: started with gitHub enterprise

  Background: 
	Given a web broswer is at GitHub for enterprises page
    When the user go to pick your trial plan page

  Scenario: enterprise cloud    
    Then the user will choose enterprise cloud trial plan
  
  Scenario: enterprise server    
    Then the user will choose enterprise server trial plan