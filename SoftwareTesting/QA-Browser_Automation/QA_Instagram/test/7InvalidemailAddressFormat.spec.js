// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('7Invalid_emailAddressFormat', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('7Invalid_emailAddressFormat', async function() {
    await driver.get("https://www.instagram.com/")
    await driver.manage().window().setRect({ width: 1650, height: 900 })
    await driver.wait(until.elementLocated(By.css('[name="username"]')), 10000);
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("username")).sendKeys("backsideHungary@gmail")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("$FC5SnS!EdQtHKF")
    await driver.findElement(By.xpath("//*[@id=\"loginForm\"]//button[contains(.,\"Log in\")]")).click()

    const errorMessageElement = await driver.wait(until.elementLocated(By.xpath("//p[@id=\"slfErrorAlert\"]")), 10000);
    const errorMessage = await errorMessageElement.getText();
    const expectedErrorMessage = "Sorry, your username was incorrect. Please double-check your username.";
    assert.strictEqual(errorMessage, expectedErrorMessage);

  })
})
