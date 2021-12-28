const params = require('../fixtures/parameters.json');
const API = Cypress.env('API');

Cypress.Commands.add('login', () => {
    cy.intercept('GET', API + '/commons/countries/biMonthly').as('commons/countries/biMonthly');
    cy.visit('/login');
    cy.wait('@commons/countries/biMonthly');
    cy.get('[name="email"]').type(params.user);
    cy.get('[name="password"]').type(params.pass);

    cy.intercept('POST', API + '/login').as('login');
    cy.get('form').submit();
    cy.wait('@login');
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
