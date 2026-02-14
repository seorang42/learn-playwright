import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Vercel logomark Deploy Now" }).click();
  const page1 = await page1Promise;
  await expect(page1.getByTestId("new-project/title")).toContainText(
    "Let's build something new",
  );
  await page1.getByRole("textbox", { name: "Git Repository URL" }).click();
  await page1
    .getByRole("textbox", { name: "Git Repository URL" })
    .fill("input test");
  await expect(
    page1.getByRole("textbox", { name: "Git Repository URL" }),
  ).toHaveValue("input test");
});

test("new test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Documentation" }).click();
  const page1 = await page1Promise;
  await expect(
    page1.getByRole("heading", { name: "Next.js Docs" }),
  ).toBeVisible();
  await expect(page1.locator("h1")).toContainText("Next.js Docs");
  await page1.getByRole("textbox", { name: "Enter your email" }).click();
  await page1
    .getByRole("textbox", { name: "Enter your email" })
    .fill("seorang4242@naver.com");
  await expect(
    page1.getByRole("textbox", { name: "Enter your email" }),
  ).toHaveValue("seorang4242@naver.com");
  await expect(page1.getByRole("article")).toMatchAriaSnapshot(`
    - heading "Next.js Docs" [level=1]
    - paragraph: Welcome to the Next.js documentation!
    - heading "What is Next.js?Link to this section" [level=2]:
      - text: ""
      - link "Link to this section":
        - /url: "#what-is-nextjs"
    - paragraph: Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
    - paragraph: It also automatically configures lower-level tools like bundlers and compilers. You can instead focus on building your product and shipping quickly.
    - paragraph: Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
    - heading "How to use the docsLink to this section" [level=2]:
      - text: ""
      - link "Link to this section":
        - /url: "#how-to-use-the-docs"
    - paragraph: "The docs are organized into 3 sections:"
    - list:
      - listitem:
        - text: "-"
        - link "Getting Started":
          - /url: /docs/app/getting-started
        - text: ": Step-by-step tutorials to help you create a new application and learn the core Next.js features."
      - listitem:
        - text: "-"
        - link "Guides":
          - /url: /docs/app/guides
        - text: ": Tutorials on specific use cases, choose what's relevant to you."
      - listitem:
        - text: "-"
        - link "API Reference":
          - /url: /docs/app/api-reference
        - text: ": Detailed technical reference for every feature."
    - paragraph:
      - text: Use the sidebar to navigate through the sections, or search (
      - code: Ctrl+K
      - text: or
      - code: Cmd+K
      - text: ) to quickly find a page.
    - heading "App Router and Pages RouterLink to this section" [level=2]:
      - text: ""
      - link "Link to this section":
        - /url: "#app-router-and-pages-router"
    - paragraph: "Next.js has two different routers:"
    - list:
      - listitem:
        - text: "-"
        - strong: App Router
        - text: ": The newer router that supports new React features like Server Components."
      - listitem:
        - text: "-"
        - strong: Pages Router
        - text: ": The original router, still supported and being improved."
    - paragraph:
      - text: At the top of the sidebar, you'll notice a dropdown menu that allows you to switch between the
      - link "App Router":
        - /url: /docs/app
      - text: and the
      - link "Pages Router":
        - /url: /docs/pages
      - text: docs.
    - heading "React version handlingLink to this section" [level=3]:
      - text: ""
      - link "Link to this section":
        - /url: "#react-version-handling"
    - paragraph: "The App Router and Pages Router handle React versions differently:"
    - list:
      - listitem:
        - text: "-"
        - paragraph:
          - strong: App Router
          - text: ": Uses"
          - link "React canary releases":
            - /url: https://react.dev/blog/2023/05/03/react-canaries
            - text: ""
            - img
          - text: /built-in, which include all the stable React \\d+ changes, as well as newer features being validated in frameworks, prior to a new React release\\./
      - listitem:
        - text: "-"
        - paragraph:
          - strong: Pages Router
          - text: ": Uses the React version installed in your project's"
          - code: package.json
          - text: .
    - paragraph: This approach ensures new React features work reliably in the App Router while maintaining backwards compatibility for existing Pages Router applications.
    - heading "Pre-requisite knowledgeLink to this section" [level=2]:
      - text: ""
      - link "Link to this section":
        - /url: "#pre-requisite-knowledge"
    - paragraph: "Our documentation assumes some familiarity with web development. Before getting started, it'll help if you're comfortable with:"
    - list:
      - listitem: "- HTML"
      - listitem: "- CSS"
      - listitem: "- JavaScript"
      - listitem: "- React"
    - paragraph:
      - text: If you're new to React or need a refresher, we recommend starting with our
      - link "React Foundations course":
        - /url: /learn/react-foundations
      - text: ", and the"
      - link "Next.js Foundations course":
        - /url: /learn/dashboard-app
      - text: that has you building an application as you learn.
    - heading "AccessibilityLink to this section" [level=2]:
      - text: ""
      - link "Link to this section":
        - /url: "#accessibility"
    - paragraph: For the best experience when using a screen reader, we recommend using Firefox and NVDA, or Safari and VoiceOver.
    - heading "Join our CommunityLink to this section" [level=2]:
      - text: ""
      - link "Link to this section":
        - /url: "#join-our-community"
    - paragraph:
      - text: If you have questions about anything related to Next.js, you're always welcome to ask our community on
      - link "GitHub Discussions":
        - /url: https://github.com/vercel/next.js/discussions
        - text: ""
        - img
      - text: ","
      - link "Discord":
        - /url: https://discord.com/invite/bUG2bvbtHy
        - text: ""
        - img
      - text: ","
      - link "X (Twitter)":
        - /url: https://x.com/nextjs
        - text: ""
        - img
      - text: ", and"
      - link "Reddit":
        - /url: https://www.reddit.com/r/nextjs
        - text: ""
        - img
      - text: .
    `);
});
