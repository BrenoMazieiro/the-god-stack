context('Login', () => {
  beforeEach(() => {
    cy.visit('http://spa.local.thegodstack.com/')
  })
  it('will login with valid user', () => {
    cy.get('#username')
      .type('breno.mazieiro').should('have.value', 'breno.mazieiro')
    cy.get('#password')
      .type('12345678').should('have.value', '12345678')
    cy.get('[type="submit"]').click()
    cy.get('#homepage').should('exist')
    cy.get('[type="button"]').click()
  })

  it('will not login with invalid user', () => {
    cy.get('#username')
      .type('breno.mazieiro').should('have.value', 'breno.mazieiro')
    cy.get('#password')
      .type('1234567').should('have.value', '1234567')
    cy.get('[type="submit"]').click()
    cy.get('#errorMessage').should('contain.text', 'Invalid username or password!')
  })
})