import App from '../../src/App';
import React from 'react';

describe('App.cy.js', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });
  it('checks App Component', () => {
    cy.mount(<App/>);
    cy.get('.nav-link').first().should('have.text', 'Home');
    cy.get('.nav-link').first().click();
    cy.get('.home').first().should('have.text', 'Home');
    cy.get('.nav-link').eq(1).should('have.text', 'Employees');
    cy.get('.nav-link').eq(1).click();
    cy.get('.btn').eq(0).should('have.text', 'Create Employee');
    cy.get('.btn').eq(0).click();
    cy.get('input').eq(0).type('emp14341');
    cy.get('input').eq(1).type('employee 14341');
    cy.get('input').eq(2).type('emp14341@sdf.com');
    cy.get('input').eq(3).type('1434114341');
    cy.get('select').eq(0).select('1');
    cy.get('textarea').eq(0).type('emp1434 emp14341@sdf.com 1434114341');
    cy.contains('Submit').click();
  })
})