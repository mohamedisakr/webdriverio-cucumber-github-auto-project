const page = require("../page-objects/home.page");

function load() {
  page.load();
}

function register(email) {
  page.$email.setValue(email);
  page.$createAccountButton.click();
}

export { load, register };
