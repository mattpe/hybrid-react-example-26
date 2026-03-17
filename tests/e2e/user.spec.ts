import {test, expect} from '@playwright/test';

const testUser = {
  username: 'matti6',
  password: 'salakala',
  email: 'matti6@example.com',
};

test('has title', async ({page}) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/hybrid-react-example/);
});

test('login to service and view profile page', async ({page}) => {
  await page.goto('http://localhost:5173/');
  // Navigate to login page
  await page.getByRole('link', {name: 'Login'}).click();
  await expect(page.getByRole('heading', {name: 'Login'})).toBeVisible();

  // Fill & submit login form
  await page.fill('input[name="username"]', testUser.username);
  await page.fill('input[name="password"]', testUser.password);
  await page.click('button[type="submit"]');
  await expect(page.getByRole('heading', {name: 'My Media'})).toBeVisible();

  // go to profile page
  await page.getByRole('link', {name: 'Profile'}).click();
  await expect(page.getByRole('heading', {name: testUser.username})).toBeVisible();

});
