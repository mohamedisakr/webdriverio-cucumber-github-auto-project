const PageBase = require("./base.page");

class PasswordReset extends PageBase {
  constructor() {
    super("./password_reset");
  }

  //
  get $email() {
    return $("#email_field");
  }

  //
  get $submit() {
    return $("input[name='commit'][type='submit']");
  }

  get $returnButton() {
    return $("a[class='btn btn-block']"); // [class="btn btn-block"]
  }

  get $flash() {
    return $("[class='container-lg px-2']"); // $("#js-flash-container");
  }
}

module.exports = new PasswordReset();
