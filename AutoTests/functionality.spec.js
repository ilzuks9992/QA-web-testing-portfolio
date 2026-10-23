
// AT12. Verify that the user can open the "News" section
// AT13. Verify that the user can open an article in the "News" section
// AT14. Verify that the user can use the search option
// AT15. Verify that the user can use the search option and open an article
// AT16. Verify ticket selection functionality after searching for train schedules
// AT17. Verify that the user can open the ticket selection page after searching for train schedules
// AT18. Verify that the user can select a ticket and proceed to the authorization page

import { test, expect } from '@playwright/test';


test('AT12: User can open the "News" section', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  await page.getByRole('link', {
    name: /Jaunumi/i
  }).first().click();

  await page.pause();
    await expect(page).not.toHaveURL('https://www.vivi.lv/lv/');

});


test('AT13: User can open an article in the "News" section', async ({ page }) => {
await page.goto('https://www.vivi.lv/lv/');

await page.getByRole('link', { name: /Jaunumi/i }).first().click();

  await page.pause();

await page.getByRole('link', {
name: /Svētdien visi vilcieni sāks kursēt pēc jaunā/i
}).click();

await expect(page).toHaveURL(/ziemas-laika/i);

await expect(
page.getByRole('heading', {
name: /Svētdien visi vilcieni sāks kursēt pēc jaunā/i
})
).toBeVisible();
  await page.pause();

});



test('AT14: User can use the search option', async ({ page }) => {
await page.goto('https://www.vivi.lv/lv/');

const searchButton = page.getByTitle('Meklēšana');
await expect(searchButton).toBeVisible();
await searchButton.click();

await page.pause();

const searchInput = page.getByRole('textbox', { name: 'Meklēt...' });
await expect(searchInput).toBeVisible();
await searchInput.fill('vilcieni');
await expect(searchInput).toHaveValue('vilcieni');

await page.pause();

  // Izpilda meklēšanu
await searchInput.press('Enter');

  // Pārbauda, ka URL mainās pēc meklēšanas
  await expect(page).not.toHaveURL(/\/lv\/$/);

  await page.pause();

});



test('AT15: User can use the search option and open an article', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');
  // Atver sadaļu "Jaunumi"
  await page.getByRole('link', { name: /Jaunumi/i }).first().click();
  // Atver meklēšanu
  await page.getByTitle('Meklēšana').click();
  // Ievada meklēšanas frāzi
  const searchInput = page.getByRole('textbox', { name: 'Meklēt...' });
  await expect(searchInput).toBeVisible();
  await searchInput.fill('vilcieni');
  // Izpilda meklēšanu
  await searchInput.press('Enter');
  // Pārbauda, ka URL mainās pēc meklēšanas
  await expect(page).not.toHaveURL(/\/lv\/$/);

    await page.pause();

  // Pārbauda, ka ir pieejama saite "Lasīt vairāk"
  const readMoreLink = page.getByRole('link', { name: /Lasīt vairāk/i }).first();
  await expect(readMoreLink).toBeVisible();
  // Atver pirmo rakstu
  await readMoreLink.click();
  // Pārbauda, ka raksta lapa ir atvērta
  await expect(page).not.toHaveURL(/\/lv\/$/);
});



test('AT16: User can search for train schedules', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

  await expect(
    page.getByRole('heading', {
      name: 'Vilcienu kustības saraksts',
      exact: true
    })
  ).toBeVisible();

  const departureField = page.getByRole('textbox', { name: 'No' });
  const destinationField = page.getByRole('textbox', { name: 'Uz' });
  const dateField = page.locator('#routes_search_departureDate');

  await expect(departureField).toBeVisible();
  await expect(destinationField).toBeVisible();
  await expect(dateField).toBeVisible();

  await departureField.fill('Rīga');
  await destinationField.fill('Daugavpils');
  await expect(departureField).toHaveValue('Rīga');
  await expect(destinationField).toHaveValue('Daugavpils');

  await page.pause();

  await page.getByRole('button', { name: ' Meklēt' }).click();

await expect(page.getByText('Rīga - Daugavpils').first()).toBeVisible();

});

test('AT17: User can open the ticket selection page after searching for train schedules', async ({ page }) => {
  await page.goto('https://www.vivi.lv/lv/');

 const departureField = page.getByRole('textbox', { name: 'No' });
  const destinationField = page.getByRole('textbox', { name: 'Uz' });
  const dateField = page.locator('#routes_search_departureDate');

  await departureField.fill('Rīga');
  await destinationField.fill('Daugavpils');
  await expect(departureField).toHaveValue('Rīga');
  await expect(destinationField).toHaveValue('Daugavpils');

  await page.getByRole('button', { name: ' Meklēt' }).click();

  // Add ticket to cart
await page.getByRole('link').filter({ hasText: /^$/ }).nth(2).click();

await expect(page.getByRole('link', { name: ' Biļetes izvēle' })).toBeVisible();

  await page.getByRole('link', { name: ' Biļetes izvēle' }).click();

  await expect(
    page.getByRole('link', { name: 'Vienreizējās biļetes' })
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'Laika biļetes', exact: true })
  ).toBeVisible();

  // Select one ticket
  await page.locator('.fal.fa-plus').first().click();

  // Add ticket to cart
  await page.getByRole('button', {
    name: ' Ielikt grozā  1 8.90€'
  }).click();

  // Verify that the authorization page is displayed
  await expect(
    page.getByRole('heading', { name: 'Bez autorizācijas' })
  ).toBeVisible();
});





// npx playwright test tests/functionality.spec.js --headed --grep "AT17"
