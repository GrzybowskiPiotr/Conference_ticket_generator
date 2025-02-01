import { test, expect } from "@playwright/test";

test("Form Error/validation ", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Generate My Ticket" }).click();
  await expect(page.getByText("Pleas upload avatar image.")).toBeVisible();
  await expect(page.getByTestId("form")).toContainText("Full Name is required");
  await expect(page.getByTestId("form")).toContainText(
    "Email field is requierd!"
  );
  await page.getByText("GitHub Username is required!").click();
  await expect(page.getByTestId("form")).toContainText(
    "GitHub Username is required!"
  );
});
