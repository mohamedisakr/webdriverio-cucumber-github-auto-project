import { Given } from "cucumber";
import { load } from "../../services/explore";

Given("a web broswer is at github explore page", () => {
  load();
});
