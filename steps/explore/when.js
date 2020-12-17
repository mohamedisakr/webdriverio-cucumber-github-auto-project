import { When } from "cucumber";
import { clickTopics } from "../../services/explore";

When("the user go to Topics tab", () => {
  clickTopics();
});
