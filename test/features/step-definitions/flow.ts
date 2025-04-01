import { Given, Then } from "@wdio/cucumber-framework";
import { LoginPage } from "../../page-objects/loginPage";

const loginPage = new LoginPage();

Given(/^I navigate to herokupp application$/, async function (){
    await browser.url('https://the-internet.herokuapp.com/');
    await browser.maximizeWindow();
})

Then(/^I select the upload hyperlink$/, async function () {
    await $('=File Upload').click();
})

Then(/^I upload a file$/, async function (){
    await loginPage.upload(`/Users/krishnabharadwaj/Desktop/book1.xlsx`);
})