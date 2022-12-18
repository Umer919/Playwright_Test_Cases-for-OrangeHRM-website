
   
 const { test, expect } = require('@playwright/test');
    test('Demo Login test 1', async({page}) => {

        await page.goto('https://demo.applitools.com/')
        await page.pause()
        await page.locator('//*[@id="username"]').fill('Umer')
        await page.locator('//*[@id="password"]').fill('ghostrider@919')
        await page.waitForSelector('text=Sign in', {timeout: 5000})

        await page.locator('//*[@id="log-in"]').click()

    })


    
