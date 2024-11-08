const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // This pattern tells Cypress where to look for test files
    specPattern: "cypress/integration/**/*.spec.js",

    // Base URL for your application
    baseUrl: "http://localhost:3000",
  },
});
