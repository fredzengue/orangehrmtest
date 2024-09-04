/// <reference types="cypress"/>

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PIMPageCy from "../pages/PIMPage";

Given('je navigue sur le lien {string}', (s) => {
    cy.visit(s);
})

When('je clique sur le bouton Add', () => {
    PIMPageCy.clickOnAddButton();
})

When('je renseigne le lastname {string}', (s) => {
    PIMPageCy.enterLastName(s);
})

When('je renseigne le firstname {string}', (s) => {
    PIMPageCy.enterFirstName(s);
})

Then('affichage dun toast de succes', () => {
    cy.get('.oxd-toast-container .oxd-toast').should('contain', 'Successfully Saved');
})

Then('jaccede à la page dajout dun nouvel employee', () => {
    cy.url().should("include", "addEmployee")
})

When('je renseigne mon mot de passe {string}', (s) => {
    PIMPageCy.enterPassword(s)
})

When('je renseigne mon username {string}', (s) => {
    PIMPageCy.enterUserName(s);
})

When('je clique sur le bouton login', () => {
    PIMPageCy.clickButton();
})

Then('jaccede sur dashboard', () => {
    cy.url().should("include", "dashboard")
})

When('je clique sur le lien PIM', () => {
    PIMPageCy.clickOnLinkPIM();
})

When('je clique sur le bouton save', () => {
    PIMPageCy.clickOnSaveButton();
})
