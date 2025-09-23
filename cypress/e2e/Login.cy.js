/// <reference types ="cypress" />
const login = require('../fixtures/Login.json')
const { faker } = require('@faker-js/faker');
let emailFaker = faker.internet.email()
let senhaFaker = faker.internet.password()

describe('Login com credenciais válidas', () => {

    beforeEach(() => {
        cy.visit('https://qe-test.recrutamento.avantsoft.com.br/login')
    });
 


    it('CT001 - Login com crecenciais válidas', () => {
        cy.loginCV(login)
    });


    it('CT002 - Login com credenciais inválidas ', () => {
        cy.loginCI(emailFaker, senhaFaker)
    });
})