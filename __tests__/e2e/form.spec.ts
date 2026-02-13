import { test, expect } from "@playwright/test";

test.describe("sign-up", () => {
  test.describe("validation", () => {
    test("if select plan type and fill name, submit enabled", async ({
      page,
    }) => {
      const START_URL = "https://vercel.com/signup";

      await page.goto(START_URL);
      await expect(
        page.getByRole("button", { name: "Continue" }),
      ).toBeDisabled();

      await page.getByText("I'm working on personal projects").click();

      await page.getByLabel("Your Name").fill("a");

      await expect(
        page.getByRole("button", { name: "Continue" }),
      ).toBeEnabled();
    });
  });
});
