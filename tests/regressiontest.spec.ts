import { test, expect, chromium, firefox } from "@playwright/test";
test.describe("RegressionSuite", () => {
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

    const menuList = page.locator('//*[@class="hl-cat-nav__container"]/li');
    console.log(await menuList.count());

    for (const el of await menuList.elementHandles()) {
      console.log(await el.textContent() + ' - ');
    }

    const signInButton = await page.locator(
      "//*[@id='gh-ug']//*[text()='Sign in']"
    );
    await expect(signInButton).toBeVisible();
    signInButton.click();
    await page.waitForTimeout(1000);
  });
});
