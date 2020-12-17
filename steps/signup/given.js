import { Given } from "cucumber";
import { load } from "../../services/home";

Given("a web broswer is at signup page", () => {
  load();
});
