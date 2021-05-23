import { HTTP_SPA_URL } from '../../../../src/environment'

context('Login', () => {
  beforeEach(() => {
    cy.visit(`${HTTP_SPA_URL}login`)
  })
  it('will login with valid user', () => {
    cy
      .get('input#username')
      .type('breno.mazieiro')
      .should('have.value', 'breno.mazieiro')
    cy
      .get('input#password')
      .type('12345678')
      .should('have.value', '12345678')
    cy
      .get('[type="submit"]')
      .click()
    cy
      .get('#MainTemplate')
      .should('exist')
    cy
      .get('[type="button"]')
      .click()
  })

  it('will not login with invalid user', () => {
    cy.get('input#username')
      .type('breno.mazieiro')
      .should('have.value', 'breno.mazieiro')
    cy.get('input#password')
      .type('1234567')
      .should('have.value', '1234567')
    cy
      .get('[type="submit"]')
      .click()
    cy
      .get('#errorMessage')
      .should('contain.text', 'Invalid username or password')
  })
})
