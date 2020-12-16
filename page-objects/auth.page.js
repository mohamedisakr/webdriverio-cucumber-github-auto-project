const PageBase = require("./base.page");

class Auth extends PageBase {
  constructor() {
    super("./login");
  }
  get $email() {
    return $("#login_field");
  }
  get $password() {
    return $("#password");
  }
  get $signIn() {
    return $("input[type='submit'][name='commit']");
  }

  get $errorMessage() {
    return $("div[class='container-lg px-2']"); //$("#js-flash-container");
  }

  get flashText() {
    return "Incorrect username or password."; //this.$errorMessage.getText();
  }
}

module.exports = new Auth();
