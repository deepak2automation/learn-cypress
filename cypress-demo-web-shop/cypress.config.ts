import { defineConfig } from 'cypress';
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
///<reference types='@shelex/cypress-allure-plugin' />

export default defineConfig({

  viewportWidth: 1000,
  viewportHeight: 660,
  watchForFileChanges: false,
  defaultCommandTimeout: 20000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  //reporter: 'cypress-mochawesome-reporter',
  //reporter: 'junit',
  //reporterOptions: { mochaFile: 'cypress/reports/e2e-tests-report-[hash].html' },
  //reporter: "cypress-multi-reporters",
  //reporterOptions: {
  //reporterEnabled: "mochawesome",
  /*mochawesomeReporterOptions: {
    reportDir: "cypress/reports",
    quite: true,
    overwrite: false,
    html: false,
    json: true
  }
},*/
  env: {
    allure: true,
    allureReuseAfterSpec: true,
    allureResultsPath: "allure-results",
    allureLogCypress: true
  },
  e2e: {
    baseUrl: "https://demowebshop.tricentis.com/",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
})
