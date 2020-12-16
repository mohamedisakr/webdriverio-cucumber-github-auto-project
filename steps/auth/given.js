import { Given } from "cucumber";
import { load } from "../../services/auth";

Given("a web broswer is at login page", () => {
  load();
});
