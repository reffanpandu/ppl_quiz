const { Builder, By, Key, util } = require("selenium-webdriver");

async function test() {
  let driver = await new Builder().forBrowser("chrome").build();
  let assert = require("assert");

  try {
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/log");
    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms", Key.RETURN);

    const text = await driver.findElement(By.xpath("//li")).getText();
    assert.equal(text, "Welcome Admin", "Tes Fail");
    console.log("Test Success");
  } catch (error) {
    console.log("Test Fail");
  }
}
test();
