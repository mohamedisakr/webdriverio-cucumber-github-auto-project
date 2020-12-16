const PageBase = require("./base.page");

class DropdownMenu extends PageBase {
  constructor() {
    super("./");
  }

  get $$menu() {
    return $$(
      "[class='HeaderMenu-details details-overlay details-reset width-full']"
    );
  }
}

module.exports = new DropdownMenu();
