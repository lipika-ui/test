import { getGreeting } from '../support/app.po';

describe('ubc-pages', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.visit('http://localhost:4200');
  });
});
