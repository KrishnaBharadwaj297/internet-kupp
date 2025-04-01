import { LoginPage } from "../../page-objects/loginPage";
import { Given, Then } from "@wdio/cucumber-framework";

const loginPage = new LoginPage();

Given(/^User is on the dropdown page$/, async function (){
    await loginPage.navigateTo(process.env.URL! + "/dropdown");
})

Then(/^The selected option should be displayed in the dropdown$/, async function(){
    await loginPage.assertDropDown();
})