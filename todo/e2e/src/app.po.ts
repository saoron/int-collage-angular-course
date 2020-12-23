import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  clickGoToTODO() {
    element(by.id('todo')).click();
  }

  getCurrentURL() {
    return browser.baseUrl;
  }

  enterLoginCredentialsAndLogin() {
    element(by.name('username')).sendKeys('demo');
    element(by.name('password')).sendKeys('123');
    element(by.id('login')).click();
  }
}
