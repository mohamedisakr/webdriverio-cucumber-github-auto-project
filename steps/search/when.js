import { When } from "cucumber";
import { search, selectFirstResult } from "../../services/search";

When("the user can type webdriverio and press enter", () => {
  search("webdriverio");
  selectFirstResult();
});
