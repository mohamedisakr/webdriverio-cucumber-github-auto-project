
Feature: search github
  Scenario: user can search for webdriverio
    Given a web broswer is at github home page
    When the user can type webdriverio and press enter
    Then the user can select the first search result