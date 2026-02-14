import { expect, test } from "@playwright/test";

test("if user visit home and click 'Get Started', h1 'introduction' is visible and page title contains 'Introduction'", async ({
  page,
}) => {
  const START_URL = "https://nextjs.org/";
  const H1 = "Next.js Docs";
  const TITLE = /Next.js Docs/;

  await page.goto(START_URL);
  await page.getByRole("link", { name: "Get Started" }).click();

  // 화면에 렌더링 되기 전 isVisible을 결정해 테스트 실패 (불안정한 테스트)
  // const isVisible = await page
  //   .getByRole("heading", { name: H1, level: 1 })
  //   .isVisible();
  // expect(isVisible).toEqual(true);
  // => Web-first Assertions를 사용 권장

  await expect(page.getByRole("heading", { name: H1, level: 1 })).toBeVisible();
  await expect(page).toHaveTitle(TITLE);
});
