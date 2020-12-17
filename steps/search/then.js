import { Then } from "cucumber";

Then("the user can select the first search result", () => {
  expect(browser).toHaveUrl("webdriverio", { containing: true });
});
