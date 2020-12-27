describe('Conduit Login', () => {
  it('login sucesso', () => {
    cy.login('testecypress@testecypress.com', 'testecypress')
    cy.get('.nav-item:nth-child(4) > .nav-link').click()
    cy.get('.btn:nth-child(5)').click()
    cy.url().should('contain', '/settings')
  })

  it('Dados inválidos', () => {
    cy.login('usuario@inexistente.com', 'senhaincorreta')
    cy.get('.error-messages > li')
    .should('contain', 'email or password is invalid')
  })
})
