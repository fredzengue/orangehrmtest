const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",  // Indique où trouver les fichiers .feature
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())
    },
  },
})
