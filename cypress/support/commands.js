// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//-------------------------- TESTE LOGIN -------------------------------------

//CT001 - Login com credenciais válidas
Cypress.Commands.add('loginCV', (login) => {
    cy.get('#email').type(login.Email)
    cy.get('#password').type(login.Senha, { log: false })
    cy.get('.inline-flex').click()
    cy.get('.container > .inline-flex').contains('Sair')
    cy.get('.container > .inline-flex').click()
})

//CT002 - Login com credenciais inválidas
Cypress.Commands.add('loginCI', (email, senha) => {
    cy.get('#email').type(email)
    cy.get('#password').type(senha, { log: false })
    cy.get('.inline-flex').click()
    cy.get('[data-title=""]').contains('Erro no login')
    cy.get('[data-description=""]').contains('Credenciais inválidas')

})


// --------------------------- TESTE ALUGUEL ----------------------------------


//CT004 - Alugar um veículo por 03 dias com cartão de crédito
Cypress.Commands.add('aluguelCC', (login) => {
    cy.get('#email').type(login.Email)
    cy.get('#password').type(login.Senha, { log: false })
    cy.get('.inline-flex').click()



})

//CT005 - Alugar um veículo por 03 dias com Pix
Cypress.Commands.add('aluguelPX', (login) => {




})


//CT006 - Alugar um veículo por 03 dias com cartão de crédito e cupom de desconto
Cypress.Commands.add('aluguelCCC', (login) => {




})

//CT007 - Alugar um veículo por 03 dias com Pix e cupom de desconto
Cypress.Commands.add('aluguelPXC', (login) => {



})

//CT008 - Alugar um veículo por 01 dia com diária menor que 50 reias e utilizando cupom de desconto
Cypress.Commands.add('aluguelC', (login) => {



})


