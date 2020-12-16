import { When } from "cucumber";
import { login } from "../../services/auth";
import { user1 } from "../../fixtures/users";

When(/^a user enters valid credentials$/, () => {
  const { email, password } = user1;
  console.log(`The valid user is ${email} ${password}`);
  login(user1);
});
