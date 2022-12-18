
const{test, expect} = require('@playwright/test');
test.only('Modules for Website', async({page}) => {
       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
       await page.waitForTimeout(3000)
      await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span').click()
       await page.waitForTimeout(4000)
       await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click()
       await page.waitForTimeout(3000)
       await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a/span').click()
      await page.waitForTimeout(2000)
       await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a/span').click()
       await page.waitForTimeout(3000)
       await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a/span').click()
       await page.waitForTimeout(2000)
       await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a/span').click()
       await page.waitForTimeout(3000)
       

       await page.pause()

      await page.close()



})
