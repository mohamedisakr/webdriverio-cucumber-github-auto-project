import { When } from "cucumber";
import { reset } from "../../services/reset";
// /^the user tries to use "(valid|invalid)" credentials, "(.*)" to login$/
When(/^valid (.*)$/, (email) => {
  reset(email);
});

When(/^invalid (.*)$/, (email) => {
  reset(email);
});
