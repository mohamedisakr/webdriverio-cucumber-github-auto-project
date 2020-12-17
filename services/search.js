const page = require("../page-objects/search.page");

function load() {
  page.load();
}

function search(keyword) {
  page.$searchBox.clearValue();
  page.$searchBox.setValue(keyword);
  page.$searchBox.keys("\uE007");
}

function selectFirstResult() {
  page.$language.waitForExist();
  page.$language.click();

  page.$firstResult.waitForExist();
  page.$firstResult.click();
}

export { load, search, selectFirstResult };
