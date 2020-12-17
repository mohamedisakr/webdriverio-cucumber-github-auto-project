const PageBase = require("./base.page");

class Career extends PageBase {
  constructor() {
    super("./about/careers");
  }

  get $$openPositions() {
    return $$(
      "button[type='button'][class='js-details-target d-block width-full btn-link h3-mktg text-normal muted-link']"
    );
  }
}
module.exports = new Career();
