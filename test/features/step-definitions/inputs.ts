import { LoginPage } from "../../page-objects/loginPage";
import { Given, Then } from "@wdio/cucumber-framework";

const loginPage = new LoginPage();

Given(/^I am on the Herokupp input page$/, async function () {
  await loginPage.navigateTo(process.env.URL! + "/inputs");
});

Then(
  /^I should see the data entered into the input fields$/,
  async function () {
    const inputField = await $(`//input[@type='number']`);
    await loginPage.enterValues(inputField, "Hello World");
  }
);
