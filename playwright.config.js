/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	use: {
		baseURL: 'https://develop.bluecopa.com/dashboards',
		browserName: 'chromium',
		headless: false
	}
};

export default config;
