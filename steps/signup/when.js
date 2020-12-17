import { When } from "cucumber";
import { register } from "../../services/home";
import { user2 } from "../../fixtures/users";

When("user fills details to Register", () => {
  const { email } = user2;
  register(email);
});
