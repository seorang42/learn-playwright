// import { test, expect } from "@playwright/test";

// // 동일한 텍스트의 버튼이 여러 개인 경우 Locator Chaining으로 필터링
// test("basic test", async ({ page }) => {
//   // 원하는 버튼을 선택할 수 없음
//   page.getByRole("button", { name: "Add to cart" }).click();

//   // Locator Chaining으로 특정 버튼 선택
//   page
//     .getByRole("listitem")
//     .filter({ hasText: "Product 2" })
//     .getByRole("button", { name: "Add to cart" })
//     .click();

//   // Locator로 필터링
//   page
//     .getByRole("listitem")
//     .filter({ has: page.getByRole("heading", { name: "Product 2" }) })
//     .getByRole("button", { name: "Add to cart" })
//     .click();

//   // 순서로 선택 (fisrt, last, nth)
//   page.getByRole("button", { name: "Add to cart" }).nth(2);
// });
