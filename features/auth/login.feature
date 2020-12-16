Feature: user login

Scenario: successful login with valid credentials
	Given a web broswer is at login page
	When a user enters valid credentials 
	Then no error message should be displayed
