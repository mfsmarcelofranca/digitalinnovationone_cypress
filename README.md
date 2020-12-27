## Projeto da Aula da Digital Innovation One
### Aula: Utilizando o Cypress E2E para testar um Blog em Angular
#### Especialistas:
##### Alessandro Do Valle Nunes
##### Paulo Moreira Marinho

#### Exemplos de comandos
##### clonar projeto
###### git clone https://github.com/gothinkster/angular-realworld-example-app
###### cd angular-realworld-example-app
###### npm install
###### npm run start


##### install cypress
###### npx install cypress --save-dev
###### npm cypress -v


##### remover o Protactor
###### npm unistall protractor --save-dev
###### excluir pasta e2e
###### excluir do package.json a linha: "e2e": "ng e2e"

##### abrir interface grafica do cypress
###### npx cypress open

##### exemplo teste
###### describe('Primeiro Teste', () => {
######   it('Exemplos Cypress', () => {
######     cy.visit('https://example.cypress.io')
######    expect(true).to.equal(true)
###### })
###### })

##### definições
###### describe and it vem da biblioteca Mocha
###### expect vem da biblioteca Chai


##### executar testes do cypress
###### npx cypress run
###### npx cypress run --spec "cypress/integration/exemplo.spec.js"

##### configurações cypress.json
###### {
######   "baseUrl": "http://localhost:4200",
######   "pageLoadTimeout": 30000,
######   "defaultCommandTimeout": 30000,
######   "viewportHeight": 800,
######   "viewportWidth": 500,
######   "retries": 3
###### }

##### configurações pasta support/commands
###### Cypress.Commands.add('login', (username, password) => {
######   cy.visit('/login')
######   cy.url().should('include', '/login')
######   cy.get('[formcontrolname=email]').type(username)
######   cy.get('[formcontrolname=password]').type(password)
######   cy.get('.btn').click()
###### })

