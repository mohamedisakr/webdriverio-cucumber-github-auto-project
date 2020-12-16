import { Given } from "cucumber";
import { load } from "../../services/dropdown";

Given("a web broswer is at github home page", () => {
  load();
});
