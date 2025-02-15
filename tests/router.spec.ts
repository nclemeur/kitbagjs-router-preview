import { test, expect } from '@playwright/test';

test('initial URL works', async ({ page }) => {
  await page.goto('/');

  const title = page.locator('h1')
  await expect(title).toHaveText('Home')
});

test('external links render', async ({ page }) => {
  await page.goto('/'); 

  const docsLink = page.locator('a').filter({ hasText: 'Documentation' })
  await expect(docsLink).toHaveAttribute('href', 'https://router.kitbag.dev')
});

test('internal links work', async ({ page, baseURL }) => {
  await page.goto('/'); 

  const settingsLink = page.locator('a').filter({ hasText: 'Settings' })
  
  await settingsLink.click()

  await expect(page).toHaveURL(`${baseURL}/settings`)
});

test('browser navigation works', async ({ page, baseURL }) => {
  await page.goto('/'); 

  const settingsLink = page.locator('a').filter({ hasText: 'Settings' })
  
  await settingsLink.click()

  await page.goBack()

  await expect(page).toHaveURL(`${baseURL}/`)

  await page.goForward()

  await expect(page).toHaveURL(`${baseURL}/settings`)
});