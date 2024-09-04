/// <reference types="cypress" />

import { Given} from "cypress-cucumber-preprocessor/steps";
import RecrutementPage from "../pages/RecrutementPage";



beforeEach(() => {
    cy.login(); 
  });
  

Given('aller sur le lien {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  cy.visit(s);
})

When('je renseigne {string} dans le champs firstname dutilisateur', (s) => {
  // Write code here that turns the phrase above into concrete actions
  RecrutementPage.enterfirstname(s);
})

When('je saisi {string} dans le champs middlname', (s) => {
  // Write code here that turns the phrase above into concrete actions
  RecrutementPage.entermiddlename(s);
})

When('je saisi {string} dans le champs lastname', (s) => {
  // Write code here that turns the phrase above into concrete actions
  RecrutementPage.enterlastname(s);
})



When('je choisi le job {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  RecrutementPage.clickchoisijob(s);
})

When('je saisi {string} dans le champs mail', (s) => {
  // Write code here that turns the phrase above into concrete actions
  RecrutementPage.mail(s);
})

When('je clique sur  le bouton add', () => {
  // Write code here that turns the phrase above into concrete actions
  RecrutementPage.clickaddBtn();
})
Then('affichage le message denregistrament', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.url().should("include","/recrutement");
})
