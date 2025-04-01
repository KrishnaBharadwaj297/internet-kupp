import type { ChainablePromiseElement } from "webdriverio";

export class Page {
  constructor() {}
  async navigateTo(path: string) {
    await browser.url(path);
    await browser.maximizeWindow();
  }

  async clickAction(element: ChainablePromiseElement) {
    await element.waitForClickable({ timeout: 5000 });
    await element.click();
  }

  async enterValues(element: ChainablePromiseElement, value: string) {
    await element.setValue(value);
  }

  async assertTitle(expected: string) {
    const title = await browser.getTitle();
    expect(title).toBe(expected);
  }

  async upload(filepath: string) {
    const upload = $(`#file-upload`);
    await upload.setValue(filepath);
    await $("#file-submit").click();
  }

  async assertDropDown() {
    try {
      const element = $(`//select[@id='dropdown']`);
      await element.selectByVisibleText("Option 1");
      expect(await element.getValue()).toBe("1");
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async assertCheckBox() {
    const checkBoxes = $$(`//input[@type='checkbox']`);
    console.log(
      `Total number of checkboxes in the page: ${await checkBoxes.length}`
    );
    for (let i = 0; i < (await checkBoxes.length); i++) {
      if (await checkBoxes[i].isSelected()) {
        console.log(`Checkbox ${i + 1} is selected`);
      } else {
        console.log(`Checkbox ${i + 1} is not selected`);
      }
    }
  }
}
