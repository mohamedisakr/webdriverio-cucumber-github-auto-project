const page = require("../page-objects/pricing.page");

function load() {
  page.load();
}

function goToJoin() {
  page.$joinForFree.scrollIntoView();
  page.$joinForFree.click();
}

export { load, goToJoin };
