import { Given } from "cucumber";
import { load } from "../../services/enterprise";

Given("a web broswer is at GitHub for enterprises page", () => {
  load();
});
