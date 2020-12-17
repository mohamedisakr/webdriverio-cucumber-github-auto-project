import { When } from "cucumber";
import { goToJoin } from "../../services/pricing";

When("the user join for free", () => {
  goToJoin();
});
