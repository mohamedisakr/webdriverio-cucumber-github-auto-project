const PageBase = require("./base.page");

class Pricing extends PageBase {
  constructor() {
    super("./pricing"); // https://github.com/pricing
  }

  get $joinForFree() {
    return $(
      "[class='text-center px-2 '] [class='btn-block btn-mktg h4-mktg']"
    );
  }
}

module.exports = new Pricing();
