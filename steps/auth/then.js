import { Then } from "cucumber";
import auth from "../../page-objects/auth.page";

Then("no error message should be displayed", () => {
  expect(auth.$errorMessage).not.toBeExisting();
});
