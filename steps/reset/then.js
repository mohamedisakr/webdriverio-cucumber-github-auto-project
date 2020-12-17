import { Then } from "cucumber";
import resetPage from "../../page-objects/reset-password.page";

Then("send password reset email", () => {
  //   expect(resetPage.$flash).not.toBeExisting();
  expect(resetPage.$returnButton).toBeExisting();
});

Then("error message should be displayed", () => {
  const message = "That address is not a";
  expect(resetPage.$flash).toHaveTextContaining(message);
});
