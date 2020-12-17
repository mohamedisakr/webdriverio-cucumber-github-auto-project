import { Then } from "cucumber";
import { goCloud, goServer } from "../../services/enterprise";
import page from "../../page-objects/enterprise.page";

Then("the user will choose enterprise cloud trial plan", () => {
  goCloud();
  expect(page.$username).toBeExisting();
});

Then("the user will choose enterprise server trial plan", () => {
  goServer();
  expect(page.$contactName).toBeExisting();
});
