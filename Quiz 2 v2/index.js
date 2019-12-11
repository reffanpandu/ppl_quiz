const { Builder, By, Key, util } = require("selenium-webdriver");

async function test() {
  let driver = await new Builder().forBrowser("chrome").build();
  let assert = require("assert");

  try {
    await driver.get("https://demo.1crmcloud.com/login.php");
    await driver.findElement(By.id("login_user")).sendKeys("admin");
    await driver.findElement(By.id("login_pass")).sendKeys("admin");
    await driver.findElement(By.id("login_button")).click();

    await driver.sleep(5000);
    await driver.findElement(By.className("default-avatar")).click();

    await driver.wait(until.elementLocated(By.id("_form_header")));

    const text = await driver.findElement(By.css("#_form_subheader > h4")).getText();
  
    let values = text.split(" ");
    let expect = values[values.length - 1];
    assert.equal(expect, "admin");
    console.log("Test Success");
  } catch (error) {
    console.log("Test Fail");
  }
}
test();
