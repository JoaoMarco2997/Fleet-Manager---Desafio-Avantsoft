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

//Login com credenciais válidas
Cypress.Commands.add('loginCV', (login) => {
    cy.get('#email').type(login.Email)
    cy.get('#password').type(login.Senha, { log: false })
    cy.get('.inline-flex').click()
    cy.get('.container > .inline-flex').contains('Sair')
    cy.get('.container > .inline-flex').click()
})

//Login com credenciais inválidas
Cypress.Commands.add('loginCI', (email, senha) => {
    cy.get('#email').type(email)
    cy.get('#password').type(senha, { log: false })
    cy.get('.inline-flex').click()
    cy.get('[data-title=""]').contains('Erro no login')
    cy.get('[data-description=""]').contains('Credenciais inválidas')

})


// --------------------------- TESTE ALUGUEL ----------------------------------


//Alugar veículo sem cupom
Cypress.Commands.add('aluguelCC', (login) => {
    cy.get('#email').type(login.Email)
    cy.get('#password').type(login.Senha, { log: false })
    cy.get('.inline-flex').click()

    cy.get(':nth-child(8) > .pt-0 > .justify-between > .justify-center').click()
    cy.get('.bg-primary').click()
    
})


