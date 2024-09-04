/// <reference types="cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pages/LoginPage"


When('je rends un nom  d utilisateur {string}', (s) => {
    LoginPage.enterUsername(s)
  // Write code here that turns the phrase above into concrete actions
})

Then('je devrai voir  mon compte', () => {
    // cy.url().should("include", "/dashboard");
  // Write code here that turns the phrase above into concrete actions
})

When('le mot de passe correct {string}', (s) => {
    LoginPage.enterUserPasssword(s)
  // Write code here that turns the phrase above into concrete actions
})

Given('je navige sur la page OrangeHRM {string}', (s) => {
    cy.visit(s)
  // Write code here that turns the phrase above into concrete actions
})

When('je click sur le button submit', () => {
  LoginPage.clickOnLoginBtn();
  // Write code here that turns the phrase above into concrete actions
})

Then('display error message', () => {

  // Write code here that turns the phrase above into concrete actions
})

Then('display error message', () => {
  // Write code here that turns the phrase above into concrete actions
})

