import { expect, test } from '@playwright/test';

test.describe('WHEN application is launched', () => {
	test('THEN Dashboards page should render', async ({ page }) => {
		const response = await page.goto('https://develop.bluecopa.com/dashboards');

		const url = process.env.url || 'https://develop.bluecopa.com/dashboards';
		expect(page.url()).toBe(url);
	});

	test('THEN Workspace page should render', ({ page }) => {});

	test('THEN Tasks page should render', ({ page }) => {});

	test('THEN Data page should render', ({ page }) => {});

	test('THEN Integrations page should render', ({ page }) => {});
});
