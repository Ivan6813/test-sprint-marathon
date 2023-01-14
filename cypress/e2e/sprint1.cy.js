/// <reference types="cypress" />

describe('Test width 1440px', () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.visit('http://localhost:3000');
        cy.get("form");
        cy.get('input[name="identifier"]').type("ilinkevich").should("have.value", "ilinkevich");
        cy.get('input[name="password"]').type("Kbyrtdbx347799").should("have.value", "Kbyrtdbx347799");
        cy.get('[data-test-id=sign-in-button]').click().wait(10000);
    });

    it('test layout content view', () => {
        cy.get('[data-test-id=button-menu-view-list]').should('be.exist').click();
        cy.get('[data-test-id=app]').screenshot('content-list');
        cy.get('[data-test-id=button-menu-view-window]').should('be.exist').click();
        cy.get('[data-test-id=app]').screenshot('content-window');
    });

    it('test layout book-page', () => {
        cy.get('[data-test-id=card]').first().click()
        cy.get('[data-test-id=app]').screenshot('book-page');
    });
});

describe('Test width 768px', () => {
    beforeEach(() => {
        cy.viewport(768, 576);
        cy.visit('http://localhost:3000');
        cy.get("form");
        cy.get('input[name="identifier"]').type("ilinkevich").should("have.value", "ilinkevich");
        cy.get('input[name="password"]').type("Kbyrtdbx347799").should("have.value", "Kbyrtdbx347799");
        cy.get('[data-test-id=sign-in-button]').click().wait(10000);;
    });

    it('test layout content view', () => {
        cy.get('[data-test-id=button-menu-view-list]').should('be.exist').click();
        cy.get('[data-test-id=app]').screenshot('content-list 768px');
        cy.get('[data-test-id=button-menu-view-window]').should('be.exist').click();
        cy.get('[data-test-id=app]').screenshot('content-window 768px');
    });

    it('test layout book-page', () => {
        cy.get('[data-test-id=card]').first().click()
        cy.get('[data-test-id=app]').screenshot('book-page 768px');
    });
});


describe('Test width 320px', () => {
    beforeEach(() => {
        cy.viewport(320, 240);
        cy.visit('http://localhost:3000');
        cy.get("form");
        cy.get('input[name="identifier"]').type("ilinkevich").should("have.value", "ilinkevich");
        cy.get('input[name="password"]').type("Kbyrtdbx347799").should("have.value", "Kbyrtdbx347799");
        cy.get('[data-test-id=sign-in-button]').click().wait(10000);;
    });

    it('test layout content view', () => {
        cy.get('[data-test-id=button-menu-view-list]').should('be.exist').click();
        cy.get('[data-test-id=app]').screenshot('content-list 320px');
        cy.get('[data-test-id=button-menu-view-window]').should('be.exist').click();
        cy.get('[data-test-id=app]').screenshot('content-window 320px');
    });

    it('test layout book-page', () => {
        cy.get('[data-test-id=card]').first().click()
        cy.get('[data-test-id=app]').screenshot('book-page 320px');
    });
});
