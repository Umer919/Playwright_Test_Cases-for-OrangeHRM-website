const{test, expect}  =  require('@playwright/test')
test.only('Demo login test 4', async({page}) => {
        
         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         await page.locator('//*[@id="username"]').fill('Umer')
        await page.locator('//*[@id="password"]').fill('ghostrider@919')
        await page.locator('//*[@id="log-in"]').click()

})