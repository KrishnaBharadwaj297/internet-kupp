import { LoginPage } from "../../page-objects/loginPage";
import { Given, Then } from "@wdio/cucumber-framework";

const loginPage = new LoginPage();

Given(/^I am on the Herokupp home page$/, async () => {
  await loginPage.navigateTo(process.env.URL!);
  console.log(`Browser object: ${JSON.stringify(browser)}`);
});

Then(/^I should see the title The Internet$/, async () => {
  await loginPage.assertTitle("The Internet");
});
