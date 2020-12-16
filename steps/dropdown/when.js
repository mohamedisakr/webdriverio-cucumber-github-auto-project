import { When } from "cucumber";
import { checkMenuItem } from "../../services/dropdown";

When("the user hover over the navigation menu items", () => {
  checkMenuItem();
});
