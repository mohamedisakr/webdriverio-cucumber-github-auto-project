const page = require("../page-objects/explore.page");

function load() {
  page.load();
}

function clickTopics() {
  page.$topicsButton.click();
  page.$topicsBanner.waitForDisplayed();
}

export { load, clickTopics };
