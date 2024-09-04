/// <reference types="cypress" />

class LoginPage{
    elements = {
        usernameElement: () => cy.get("[name='username']"),
        passwordElement: () => cy.get("[name='password']"),
        btnElement: () => cy.get("[type='submit']"),
        errorMessage: () => cy.get(".oxd-alert-content--error"),
    }

  
    enterUsername(value){
        this.elements.usernameElement().clear().type(value)
    }
    enterUserPasssword(value){
        this.elements.passwordElement().clear().type(value)
    }
    displayErrorMessage(){
        this.elements.displayErrorMessage();
    }

    clickOnLoginBtn(){
        this.elements.btnElement().click();
    }
}

module.exports = new LoginPage();