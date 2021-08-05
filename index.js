const { Builder, By, } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function loginTest01() {
    try {
        await driver.get("https://travel-guru-mihr.web.app/login");
        await driver.findElement(By.name("email")).sendKeys("");
        await driver.findElement(By.id("exampleInputPassword1")).sendKeys("");
        await driver.findElement(By.name("loginBtn")).click();
    }
    catch (error) {
        console.log(error);
    }
}
loginTest01();

// async function loginTest02() {
//     try {
//         await driver.get("https://travel-guru-mihr.web.app/login");
//         await driver.findElement(By.name("email")).sendKeys("ihrashik.dev@gmail.com");
//         await driver.findElement(By.id("exampleInputPassword1")).sendKeys("123456");
//         await driver.findElement(By.name("loginBtn")).click();
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// loginTest02();
async function loginTest03() {
    try {
        await driver.get("https://travel-guru-mihr.web.app/login");
        await driver.findElement(By.name("email")).sendKeys("hudumudu10@gmail.com");
        await driver.findElement(By.id("exampleInputPassword1")).sendKeys("hudumudu");
        await driver.findElement(By.name("loginBtn")).click();
    }
    catch (error) {
        console.log(error);
    }
}
loginTest03();