import { Given } from "cucumber";
import { load } from "../../services/pricing";

Given("a web broswer is at github pricing page", () => {
  load();
});
