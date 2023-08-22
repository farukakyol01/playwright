import { test, expect, chromium, firefox } from "@playwright/test";
import HomePage from "../pages/home.page";
import LandingPage from "../pages/landing.page";
const path = require("path");
test.describe("RegressionSuite", () => {
  test("Login to Ebayy", async ({ page }) => {
    await page.goto("https://www.ebay.com/");

    //await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(
      "Electronics, Cars, Fashion, Collectibles & More | eBay"
    );

    await page
      .locator("//*[@id='gh-ug']//*[text()='Sign in']")
      .waitFor({ state: "visible", timeout: 10000 });

    await page.locator("//*[@id='gh-ug']//*[text()='Sign in']").click();

    await expect(
      page.locator("//button[@id='signin-continue-btn']")
    ).toBeEditable({ timeout: 3000 });

    await page
      .locator("//input[@id='userid']")
      .waitFor({ state: "attached", timeout: 10000 });

    await page.locator("//input[@id='userid']").type("faak_8271");

    await page.locator("//button[@id='signin-continue-btn']").click();

    await page.locator("#pass").waitFor({ state: "visible", timeout: 10000 });
    await page.locator("#pass").click();
    await page.locator("#pass").type("Farukakyol1");
    await page.locator("#sgnBt").click();
    await page
      .locator("//*[@title='My eBay']")
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .locator("//button[@id='gh-ug']")
      .waitFor({ state: "visible", timeout: 10000 });
    await page
      .locator("//button[@id='gh-ug']")
      .waitFor({ state: "visible", timeout: 10000 });
    await page.locator("//button[@id='gh-ug']").hover();

    await page.locator("//a[text()='Sign out']").click();

    await expect(page.locator("#signout-banner-text")).toContainText(
      "You've signed out.",
      { timeout: 10000 }
    );

    await page.waitForTimeout(3000);
  });

  test("Login to Ebay", async ({ page }) => {
    await page.goto("https://www.ebay.com/");

    //await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(
      "Electronics, Cars, Fashion, Collectibles & More | eBay"
    );

    //css selector with id
    //await page.locator("#get-started").click();
    //await expect(page).toHaveURL(/.*#SignIn/);

    //text selector
    //const textLogin = await page.locator('text=Log in');
    //await expect(textLogin).toBeVisible();
    //textLogin.click();

    //text and css selector
    //const textwithCss = await page.locator("#primary-menu >> text=Home");
    //const textwithCss = await page.locator('#primary-menu:has-text("Home")');
    //await expect(textwithCss).toBeVisible();

    //working with elements arrray with menu lists
    //const navLinks = page.locator("").nth(3);
    //expect(await navLinks.allTextContents()).toEqual('')
    //for (const el of await navLinks.elementHandles()) {
    //  console.log(await el.textContent());
    //}

    //add a soft assertion
    //await expect.soft(page.locator('//*[@class="hl-cat-nav__container"]/li')).toHaveText("Faruk");

    //hard coded wait, conditional wait, assertion wait
    //hardcoded wait
    await page.waitForTimeout(1000);

    const menuList = page.locator('//*[@class="hl-cat-nav__container"]/li');

    console.log(await menuList.count());

    for (const el of await menuList.elementHandles()) {
      console.log((await el.textContent()) + " - ");
    }

    await page
      .locator("//*[@id='gh-ug']//*[text()='Sign in']")
      .waitFor({ state: "visible", timeout: 10000 });

    await page.locator("//*[@id='gh-ug']//*[text()='Sign in']").click();

    await page
      .locator("//input[@id='userid']")
      .waitFor({ state: "visible", timeout: 10000 });
    //await page.waitForTimeout(5000);

    await page.locator("//input[@id='userid']").type("sdasdassdasda");

    await page.waitForTimeout(5000);
  });

  test("should upload a test file", async ({ page }) => {
    // Open url
    await page.goto("https://practice.automationbro.com/cart/");

    // provide test file path
    const filePath = path.join(__dirname, "../images.png");

    // upload test file
    await page.setInputFiles("input#upfile_1", filePath);

    // click the submit button
    await page.locator("#upload_1").click();

    // assertion
    await expect(page.locator("#wfu_messageblock_header_1_1")).toContainText(
      "uploaded successfully"
    );
  });

  test("should upload a test file on a hidden input field", async ({
    page,
  }) => {
    // Open url
    await page.goto("https://practice.automationbro.com/cart/");

    // provide test file path
    const filePath = path.join(__dirname, "../images.png");

    // DOM manipulation
    await page.evaluate(() => {
      const selector = document.querySelector("input#upfile_1");
      if (selector) {
        selector.className = "";
      }
    });

    // upload test file
    await page.setInputFiles("input#upfile_1", filePath); // throws error

    // click the submit button
    await page.locator("#upload_1").click();

    // assertion
    await expect(page.locator("#wfu_messageblock_header_1_1")).toContainText(
      "uploaded successfully"
    );
  });

  test("should upload2 a test file on a hidden input field", async ({
    page,
  }) => {




  });
});
