/// <reference types='cypress' />

describe('search and sort', () => {
    before(() => {
        cy.intercept('/api/categories').as('categories');
        cy.intercept('/api/books').as('books');
        cy.visit('http://localhost:3000');
        cy.wait(['@categories', '@books']);
    });

    beforeEach(() => {
        cy.viewport(1440, 900);
    });

