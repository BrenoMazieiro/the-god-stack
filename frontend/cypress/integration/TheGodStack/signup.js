import { HTTP_SPA_URL } from '../../../src/environment'

context('Login', () => {
  beforeEach(() => {
    cy.visit(`${HTTP_SPA_URL}signup`)
  })
  it('will successfully create a user', () => {
    cy.get('#name')
      .type('Test user name').should('have.value', 'Test user name')
    cy.get('#email')
      .type('tgsusertes@mailinator.com').should('have.value', 'tgsusertes@mailinator.com')
    cy.get('#username')
      .type('tgs.usertest').should('have.value', 'tgs.usertest')
    cy.get('#password')
      .type('12345678').should('have.value', '12345678')
    cy.get('#confirmPassword')
      .type('12345678').should('have.value', '12345678')
  })
})
