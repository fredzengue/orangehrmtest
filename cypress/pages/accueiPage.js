/// <reference types="cypress" />
class AccueilPage {
    // Selecteurs
    static adminbutton = ' []';
    static passwordInput = '[]' ;
    static loginButton = '[]';
    // Méthode pour visiter la page de connexion
    static visit() {
    cy.visit ("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    }
  
    }
    export default  AccueilPage