import { test, expect } from '@playwright/test';

test('backend-has title', async ({ page }) => {
  await page.goto('http://localhost:8001/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('backend-get started link', async ({ page }) => {
  await page.goto('http://localhost:8001/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("backend-login", async ({ page }) => {
  await page.goto("http://localhost:8001/login");

  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Password").fill("password123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/dashboard/);
});

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("login", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Password").fill("password123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/dashboard/);
});
