const page = require("../page-objects/auth.page");

function load() {
  page.load();
}

function login(user) {
  const { email, password } = user;
  page.$email.setValue(email);
  page.$password.setValue(password);
  page.$signIn.click();

  // wait until either the sign in button is gone or an error appears
  browser.waitUntil(
    () => {
      const signInExist = page.$signIn.isExisting();
      const errorMessageExist = page.$errorMessage.isExisting();
      return !signInExist || errorMessageExist;
    },
    {
      timoutMsg:
        'The "Sign in" button still exists and an error never appeared',
    }
  );
}

export { load, login };
