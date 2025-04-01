import { LoginPage } from "../../page-objects/loginPage";
import { Given, Then } from "@wdio/cucumber-framework";

const loginPage = new LoginPage();
Given(/^I am on the Herokupp upload page$/, async function () {
  await loginPage.navigateTo(process.env.URL! + "/upload");
});

Then(/^I should select a file and upload it$/, async function () {
    await loginPage.upload(`/Users/krishnabharadwaj/Desktop/book1.xlsx`);
});
