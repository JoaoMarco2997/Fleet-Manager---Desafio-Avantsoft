/// <reference types ="cypress" />
const login = require('../fixtures/Login.json')


describe('', () => {
    beforeEach(() => {
        cy.visit('https://qe-test.recrutamento.avantsoft.com.br/login')
    });

    
    it.only('Alugar veículo sem cupom', () => {
        cy.aluguelCC(login)
    });


});