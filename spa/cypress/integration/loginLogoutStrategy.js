describe('Login and Logout Strategies', function () {
  it('will login on TheGodStack', function () {
    cy.visit('http://spa.local.thegodstack.com/')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('#email')
      .type('admin@thegodstack.com')
      .should('have.value', 'admin@thegodstack.com')
    cy.get('#password')
      .type('thegodstack')
      .should('have.value', 'thegodstack')
    cy.get('#login').click()
    cy.get('body').should('contain', 'Welcome, Super User!')
  })

  it('will logout on TheGodStack', function () {
    cy.contains('Logout').click()
    cy.get('body').should('not.contain', 'Welcome, Super User!')
  })
})