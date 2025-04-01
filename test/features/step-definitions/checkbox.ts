import { LoginPage } from "../../page-objects/loginPage";
import { Given, Then } from "@wdio/cucumber-framework";

const loginPage = new LoginPage();

Given(/^I am on the Herokupp checkbox page$/, async function () {
  await loginPage.navigateTo(process.env.URL! + "/checkboxes");
});

Then(
  /^I should see the checkbox is selected or unselected$/,
  async function () {
    await loginPage.assertCheckBox();
  }
);
