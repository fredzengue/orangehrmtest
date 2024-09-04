class PIMpage {
    elements = {
        username: () => cy.get("input[name=username]"),
        password: () => cy.get("input[name=password]"),
        submitButton: () => cy.get("button[type=submit]"),
        linkPIM: () => cy.get(':nth-child(2) > .oxd-main-menu-item'),
        firstname: () => cy.get("input[name=firstName]"),
        lastname: () => cy.get("input[name=lastName]"),
        AddButton: () => cy.get('.orangehrm-header-container > .oxd-button'),
        submitSaveButton: () => cy.get("button[type=submit]"),
    }

    enterFirstName(firstname) {
        this.elements.firstname().clear().type(firstname);
    }

    enterLastName(lastname) {
        this.elements.lastname().clear().type(lastname);
    }

    clickOnAddButton() {
        this.elements.AddButton().click();

    }

    clickOnSaveButton() {
        this.elements.submitSaveButton().click();
    }

    enterUserName(username) {
        this.elements.username().clear().type(username);
    }

    enterPassword(password) {
        this.elements.password().clear().type(password);
    }

    clickButton() {
        this.elements.submitButton().click();
    }

    clickOnLinkPIM() {
        this.elements.linkPIM().click();
    }
}

module.exports = new PIMpage();