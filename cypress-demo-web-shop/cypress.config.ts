import { defineConfig } from 'cypress';

export default defineConfig({

  viewportWidth: 1000,
  viewportHeight: 660,
  watchForFileChanges: false,
  defaultCommandTimeout: 20000,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: "https://demowebshop.tricentis.com/",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
