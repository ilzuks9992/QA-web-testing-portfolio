
// AT1. Verify that the user can open the Vivi.lv homepage
// AT2. Verify that the user can open the homepage without seeing a browser error page
// AT3. Verify that the user can see the title of the homepage
// AT4. Verify that the user can see the search button on the homepage
// AT5. Verify that the user can see the navigation links on the homepage
// AT6. Verify that the user can see images on the homepage
// AT7. Verify that the user can see the link to the news section on the homepage
// AT8. Verify that the user can see the site navigation
// AT9. Verify that the user can see the link to the contact information on the homepage
// AT10. Verify that the user can see the link to the accessibility information on the homepage
// AT11. Verify that the user can see the link to changes on the homepage

import { test, expect } from '@playwright/test';


test('AT1: User can open the Vivi.lv homepage', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  await expect(page.locator('body')).toBeVisible();
});


test('AT2: User can open the homepage without seeing a browser error page', async ({ page }) => {
  const response = await page.goto('https://www.vivi.lv/lv/');

  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);
});


test('AT3: User can see the title of the homepage', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  await expect(page).toHaveTitle(/Vivi/i);
});


test('AT4: User can see the search button on the homepage', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  await expect(
    page.getByRole('button', { name: /Meklēt/i })
  ).toBeVisible();
});


test('AT5: User can see the navigation links on the homepage', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  const links = page.getByRole('link');

  await expect(links.first()).toBeVisible();
  expect(await links.count()).toBeGreaterThan(0);
});


test('AT6: User can see images on the homepage', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  const images = page.locator('img');

  await expect(images.first()).toBeVisible();
  expect(await images.count()).toBeGreaterThan(0);
});


test('AT7: User can see the link to the news section on the homepage', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  await expect(
    page.getByRole('link', { name: /Jaunumi/i }).first()
  ).toBeVisible();
});


test('AT8: User can see the site navigation', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  const navigation = page.getByRole('navigation').first();

  await expect(navigation).toBeVisible();
});


test('AT9: User can see the link to the contact information on the homepage', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  const contactLink = page.getByRole('link', {
    name: /Kontakti/i
  });

  await expect(contactLink.first()).toBeVisible();
});


test('AT10: User can see the link to the accessibility information on the homepage', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  const accessibilityLink = page.getByRole('link', {
    name: /Pieejamība/i
  });

  await expect(accessibilityLink.first()).toBeVisible();
});



test('AT11: User can see the link to the changes on the homepage', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  const changesLink = page.getByRole('link', {
    name: 'Izmaiņas',
    exact: true
  });
  await expect(changesLink).toBeVisible();
});

