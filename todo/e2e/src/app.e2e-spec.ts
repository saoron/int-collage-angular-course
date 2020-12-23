import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('This is NG course!!!:');
  });

  it('should not be able to access Todo without login', () => {
    page.navigateTo();

    page.clickGoToTODO();
    expect(page.getCurrentURL()).toEqual('http://localhost:4200/');
  });

  it('should access Todo after login', () => {
    page.navigateTo();

    page.clickGoToTODO();

    // now we're on login page
    page.enterLoginCredentialsAndLogin();

    expect(page.getTitleText()).toEqual('This is NG course!!!:');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
