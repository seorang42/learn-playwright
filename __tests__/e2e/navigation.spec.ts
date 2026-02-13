import { expect, test } from "@playwright/test";

test("if user visit home and click 'Get Started', h1 'introduction' is visible and page title contains 'Introduction'", async ({
  page,
}) => {
  const START_URL = "https://nextjs.org/";
  const H1 = "Next.js Docs";
  const TITLE = /Next.js Docs/;

  await page.goto(START_URL);
  await page.getByRole("link", { name: "Get Started" }).click();

  await expect(page.getByRole("heading", { name: H1, level: 1 })).toBeVisible();
  await expect(page).toHaveTitle(TITLE);
});
