define('Cadastro', () =>{
  it('Sucesso', () => {
    cy.visit('http://localhost:4200/');
    cy.get('.nav-item:nth-child(2) > .nav-link').click();
    cy.get('.ng-untouched').click();
    cy.get('.ng-untouched').type('Camilla2');
    cy.get('.row').click();
    cy.get('.form-group:nth-child(2) > .form-control').type('{backspace}');
    cy.get('.form-group:nth-child(2) > .form-control').type('camilla2@uil.com');
    cy.get('.form-group:nth-child(3) > .form-control').click();
    cy.get('.col-md-6').click();
    cy.get('.btn').click();
    cy.get('.ng-dirty:nth-child(4)').submit();
  })
})
