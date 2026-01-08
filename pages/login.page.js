class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#signInBtn');
    this.errorMessage = page.locator("//*[@id='login-form']/div[1]");
  
  }

  async navigate() {
    await this.page.goto('/loginpagePractise');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  
  }
}

module.exports = { LoginPage };