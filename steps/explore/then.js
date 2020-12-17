import { Then } from "cucumber";
import { isSubstringFound } from "../../utils/functions";

Then("the user will see topics browse popular topics on gitHub", () => {
  const topics = "topics";
  let url = "";
  browser.waitUntil(
    async () => {
      url = await browser.getUrl();
      return isSubstringFound(url, topics);
    },
    {
      timoutMsg: `Can't redirect to Browse popular topics on GitHub. page`,
    }
  );
  //   console.log(`banner is existing: ${explorePage.$topicsBanner.isExisting()}`);
  //   expect(explorePage.$topicsBanner).toBeExisting();
  expect(url).toContain(topics);
});
