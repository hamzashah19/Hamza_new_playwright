// @ts-check
//import { defineConfig, devices } from '@playwright/test';
const {defineConfig , devices} = require ('@playwright/test')

require('dotenv').config();


/**
 * @see https://playwright.dev/docs/test-configuration
 */
 const config = ({
  testDir: './tests', 
  timeout: 40*1000,
   expect:{timeout: 40*1000},
   reporter: 'html',

   use: {browserName: 'chromium', baseURL: ''},

});

module.exports = defineConfig({
  use: {
    baseURL: 'https://rahulshettyacademy.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { open: 'never' }]],
});

