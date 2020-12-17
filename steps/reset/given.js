import { Given } from "cucumber";
import { load } from "../../services/reset";

Given("a web broswer is at reset your password page", () => {
  load();
});
