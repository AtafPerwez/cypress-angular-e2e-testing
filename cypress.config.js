const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:4300",
    specPattern: "cypress/e2e/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
  },
});