import { When } from "cucumber";
import { login } from "../../services/auth";
import { user1, user2, emptyEmail, emptyPassword } from "../../fixtures/users";

When(/^a user enters valid credentials$/, () => {
  login(user1);
});

When(/^a user enters invalid credentials$/, () => {
  login(emptyPassword);
});

// When(/^a user enters invalid credentials$/, () => {
//   login(user2);
// });

// When(/^a user enters invalid credentials$/, () => {
//   login(emptyEmail);
// });
