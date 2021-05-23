import { HTTP_SPA_URL } from '../../../../src/environment'

context('Sign up a user', () => {
  beforeEach(() => {
    cy.visit(`${HTTP_SPA_URL}signup`)
  })
  it('will successfully sign up a user', () => {
    cy.get('input#name')
      .type('Test user name')
      .should('have.value', 'Test user name')
    cy.get('input#email')
      .type('breno.mazieiro@maildrop.cc')
      .should('have.value', 'breno.mazieiro@maildrop.cc')
    cy.get('input#username')
      .type('breno.mazieiro')
      .should('have.value', 'breno.mazieiro')
    cy.get('input#password')
      .type('12345678')
      .should('have.value', '12345678')
    cy.get('input#confirmPassword')
      .type('12345678')
      .should('have.value', '12345678')
    cy
      .get('[type="submit"]')
      .click()
    cy
      .get('#register_success')
      .should('exist')
  })
})
