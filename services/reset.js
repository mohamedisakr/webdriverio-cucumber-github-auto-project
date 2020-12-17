const page = require("../page-objects/reset-password.page");

function load() {
  page.load();
}

function reset(email) {
  page.$email.setValue(email);
  page.$submit.click();

  // wait until either the reset email button is gone or an error appears
  browser.waitUntil(
    () => {
      const submitInExist = page.$submit.isExisting();
      const errorMessageExist = page.$flash.isExisting();
      return !submitInExist || errorMessageExist;
      // return !submitInExist;
    },
    {
      timoutMsg:
        'The "Send password reset email" button still exists and an error never appeared',
    }
  );
}

export { load, reset };
