import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://viki.com/sign-in");

  await expect(page).toHaveTitle(
    "Watch Korean Dramas, Chinese Dramas and Movies Online | Rakuten Viki",
  );
});
