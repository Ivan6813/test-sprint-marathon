/// <reference types="cypress" />

describe('Test choose category', () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.visit('http://localhost:3000/#/auth');
        cy.get("form");
        cy.get('input[name="identifier"]').type("ilinkevich").should("have.value", "ilinkevich");
        cy.get('input[name="password"]').type("Kbyrtdbx347799").should("have.value", "Kbyrtdbx347799");
        cy.get('[data-test-id=sign-in-button]').click();
        cy.wait(6000);
    });

    it('active category should be programming', () => {
        cy.get('[data-test-id=navigation-programming]').click();
        cy.get('[data-test-id=cards-list]').children().should("have.length", 4);
        cy.get('[data-test-id=app]').screenshot('active-category-programming');
    });

    it('active category should be design', () => {
        cy.get('[data-test-id=navigation-design]').click();
        cy.get('[data-test-id=cards-list]').children().should("have.length", 3);
        cy.get('[data-test-id=app]').screenshot('active-category-design');
    });

    // it('should found matches', () => {
    //     cy.get('input[name="search-input"]').type("грокаем аЛгОрИтМы").should("have.value", "грокаем аЛгОрИтМы");
    //     // cy.get('[data-test-id=cards-list]').children().should("contain", /грокаем алгоритмы/i);
    //     cy.get('[data-test-id=cards-list]').children().then((items) => {
    //         // const list = Array.from(items, (item) => item.innerText)
    //         const list = [...items].map((item) => item.innerText)
    //         expect(list).to.include('Грокаем алгоритмы')
    //     });
    //     cy.get('[data-test-id=cards-list]').children().should("have.length", 1);
    //     // cy.get('[data-test-id=app]').screenshot('search-value-1');

    //     cy.get('input[name="search-input"]').clear().should("have.value", "");

    //     cy.get('input[name="search-input"]').type("ДизАйН").should("have.value", "ДизАйН");
    //     // cy.get('[data-test-id=cards-list]').children().should("include.text", "дизайр");
    //     cy.get('[data-test-id=cards-list]').children().should("have.length", 4);
    //     cy.get('[data-test-id=cards-list]').children().first().should("include.text", "Ещё нет оценок");
    //     // cy.get('[data-test-id=app]').screenshot('search-value-2');
    // });

    // it('test layout book-page', () => {
    //     cy.get('[data-test-id=card]').first().click()
    //     cy.get('[data-test-id=app]').screenshot('book-page');
    // });
});

// describe('Test width 768px', () => {
//     beforeEach(() => {
//         cy.viewport(768, 576);
//         cy.visit('http://localhost:3000');
//         cy.get("form");
//         cy.get('input[name="identifier"]').type("ilinkevich").should("have.value", "ilinkevich");
//         cy.get('input[name="password"]').type("Kbyrtdbx347799").should("have.value", "Kbyrtdbx347799");
//         cy.get('[data-test-id=sign-in-button]').click().wait(10000);;
//     });

//     it('test layout content view', () => {
//         cy.get('[data-test-id=button-menu-view-list]').should('be.exist').click();
//         cy.get('[data-test-id=app]').screenshot('content-list 768px');
//         cy.get('[data-test-id=button-menu-view-window]').should('be.exist').click();
//         cy.get('[data-test-id=app]').screenshot('content-window 768px');
//     });

//     it('test layout book-page', () => {
//         cy.get('[data-test-id=card]').first().click()
//         cy.get('[data-test-id=app]').screenshot('book-page 768px');
//     });
// });
