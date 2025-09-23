/// <reference types ="cypress" />
const login = require('../fixtures/Login.json')


describe('', () => {
    beforeEach(() => {
        cy.visit('https://qe-test.recrutamento.avantsoft.com.br/login')
    });

    it.only('CT004 - Alugar um veículo por 03 dias com cartão de crédito', () => {
        cy.aluguelCC(login)
    });

        it('CT005 - Alugar um veículo por 03 dias com cartão de crédito', () => {
        cy.aluguelPX(login)
    });

        it('CT006 - Alugar um veículo por 03 dias com cartão de crédito', () => {
        cy.aluguelCCC(login)
    });

        it('CT007 - Alugar um veículo por 03 dias com cartão de crédito', () => {
        cy.aluguelPXC(login)
    });

        it('CT008 - Alugar um veículo por 03 dias com cartão de crédito', () => {
        cy.aluguelC(login)
    });
});