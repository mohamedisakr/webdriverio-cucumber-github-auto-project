import { Then } from "cucumber";

Then("user redircted to join page", () => {
  const expectedUrl = "https://github.com/join";
  browser.waitUntil(
    () => {
      return browser.getUrl() === expectedUrl;
    },
    {
      timoutMsg: `Can't redirect to ${expectedUrl}`,
    }
  );
});
