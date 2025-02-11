import { test, expect } from '@playwright/test';

test('sort has default', async ({ page, baseURL }) => {
  await page.goto('/settings/keys'); 

  const sortSelect = page.locator('select')
  
  const value = await sortSelect.inputValue()

  expect(value).toBe('asc')
});

test('sort can be set from query', async ({ page, baseURL }) => {
  await page.goto('/settings/keys?sort=desc'); 

  const sortSelect = page.locator('select')
  
  const value = await sortSelect.inputValue()

  expect(value).toBe('desc')
});


test('search is written to query', async ({ page, baseURL }) => {
  await page.goto('/settings/keys'); 

  const searchInput = page.locator('input')
  
  await searchInput.fill('test')

  expect(page.url()).toBe(`${baseURL}/settings/keys?search=test&sort=asc`)
});