const page = require("../page-objects/dropdown.page");

function checkMenuItem() {
  page.$$menu.forEach((item) => {
    item.waitForDisplayed();
    item.waitForClickable();
    item.moveTo();
    item.click();
  });
}

function load() {
  page.load();
}

export { checkMenuItem, load };
