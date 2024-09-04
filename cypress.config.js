const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'ugb3pt',
  e2e: {
    specPattern: "**/*.feature",  // Indique où trouver les fichiers .feature
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())
    },
    
  },
})
