import { test, expect } from "@playwright/test";

test("File input takes avatar image and displays it. Remove image and change image is visable", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "upload icon" }).click();
  await page.locator(`input[type="file"]`).setInputFiles("randome avatar.png");
  await expect(page.getByRole("img", { name: "uploaded image" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Remove image" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Change image" })
  ).toBeVisible();
  await page.getByRole("textbox", { name: "Full Name" }).click();
  await page
    .getByRole("textbox", { name: "Full Name" })
    .fill("Piotr Grzybowski");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("grzybowski@wp.pl");
  await page.getByRole("textbox", { name: "GitHub Username" }).click();
  await page.getByRole("textbox", { name: "GitHub Username" }).fill("@wp.pl");
  await page.getByRole("button", { name: "Generate My Ticket" }).click();
  await expect(page.getByRole("img", { name: "Avatar preview" })).toBeVisible();
  await page.getByTestId("ticket-number").click();
  await expect(page.getByRole("heading")).toContainText("Piotr");
  await expect(page.getByRole("heading")).toContainText("Grzybowski");
  await expect(page.locator("#root")).toContainText("Piotr Grzybowski");
  await expect(page.locator("#root")).toContainText("@wp.pl");
  await expect(
    page.getByText(
      "Coding ConfJan 31, 2025 / Austin, TXPiotr Grzybowski@wp.pl#"
    )
  ).toBeVisible();
});
