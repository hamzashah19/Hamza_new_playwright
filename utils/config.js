const CONFIG = {
  baseURL: 'https://rahulshettyacademy.com/loginpagePractise',
  headless: process.env.CI === 'true' ? true : false,  
  slowMo: process.env.CI === 'true' ? 0 : 100, 
  timeout: 30000,
  credentials: {
    validUsername: 'rahulshettyacademy',
    validPassword: 'learning'
  },
  screenshots: {
    enabled: true,
    path: './screenshots/'
  },
  testData: {
    excelPath: './testdata/login-testcases.xlsx',
    sheetName: 'TestCases'
  }
};

module.exports = CONFIG;