import { test, expect } from '@playwright/test';

test('router.reject renders correct component', async ({ page, baseURL }) => {
  await page.goto('/requires-auth');

  const title = page.locator('h1')
  await expect(title).toHaveText('Login')
});

test('router.reject does not change URL', async ({ page, baseURL }) => {
  await page.goto('/requires-auth');

  expect(page.url()).toBe(`${baseURL}/requires-auth`)
});
