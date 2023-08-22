npm init playwright@latest playwrightPractises
npx playwright test
npx playwright show-report

debugging
- debug console DEBUG=pw:api npx command ----
- trace viewer
- inspector PWDEBUG =1


npm i -D @playwright/test allure-playwright
npm i -D allure-commandline
allure test tests

 npx playwright test tests
npx allure generate allure-results --clean && npx allure open
