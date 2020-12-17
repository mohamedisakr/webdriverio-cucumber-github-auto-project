import { Then } from "cucumber";
import { isSubstringFound } from "../../utils/functions";

Then("the user redirectd to Create your account", () => {
  const join = "join";
  let url = "";
  browser.waitUntil(
    async () => {
      url = await browser.getUrl();
      return isSubstringFound(url, join);
    },
    {
      timoutMsg: `Can't redirect to Create your account page`,
    }
  );

  expect(url).toContain(join);
});
