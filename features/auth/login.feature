Feature: user login

Background: 
	Given a web broswer is at login page

Scenario: successful login with valid credentials
	When a user enters valid credentials 
	Then no error message should be displayed

Scenario: failed login with invalid credentials
	When a user enters invalid credentials 
	Then an error message should be displayed
