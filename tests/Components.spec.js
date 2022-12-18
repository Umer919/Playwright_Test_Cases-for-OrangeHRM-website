const{test, expect}  =  require('@playwright/test')
test.only('Demo login test 4', async({page}) => {
        
         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
       
        await page.getByRole('link', {name:'Admin'}).click()
        await page.getByRole('link',{name: 'PIM'}).click()
        await page.getByRole('link', {name: 'Leave'}).click()
        await page.getByRole('link', {name: 'Time'}).click()
        await page.getByRole('link', {name: 'Recruitment'}).click()
        await page.getByRole('link', {name: 'My Info'}).click()
        await page.getByRole('link', {name: 'Performance'}).click()
        await page.getByRole('link', {name: 'Dashboard'}).click()
        await page.getByRole('link', {name: 'Directory'}).click()
        await page.getByRole('link', {name: 'Maintenance'}).click()
        await page.getByRole('link', {name: 'Buzz'}).click()
        await page.close()


})