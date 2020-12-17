import { Given } from "cucumber";
import { load } from "../../services/career";

Given("a web broswer is at github career page", () => {
  load();
});
