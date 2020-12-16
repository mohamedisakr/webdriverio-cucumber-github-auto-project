const page = require("../page-objects/dropdown.page");

function load() {
  page.load();
}

function checkMenuItem() {
  page.$$menu.forEach((item) => {
    item.waitForDisplayed();
    item.waitForClickable();
    item.moveTo();
    item.click();
  });
}

export { checkMenuItem, load };
