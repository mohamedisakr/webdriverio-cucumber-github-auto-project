import { When } from "cucumber";
import { startFreeTrial } from "../../services/enterprise";

When("the user go to pick your trial plan page", () => {
  startFreeTrial();
});
