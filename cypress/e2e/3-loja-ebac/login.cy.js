/// <reference types="cypress"/>

    const perfil = require('../../fixtures/perfil.json') 
describe('funcionalidade login', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('teste.giovanna@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
          .should('contain', 'Olá, teste.giovanna (não é teste.giovanna? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        cy.get('#username').type('giovanna@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li')
          .should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve dar uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('teste.giovanna@teste.com.br')
        cy.get('#password').type('teste124') // senha incorreta
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error')
          .should('contain', 'Erro: A senha fornecida para o e-mail teste.giovanna@teste.com.br está incorreta. Perdeu a senha?')
    })
    
    it('Deve fazer login com sucesso usando a massa de dados', () => {
        
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
          .should('contain', 'Olá, teste.giovanna (não é teste.giovanna? Sair)')
    });

    it('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture('perfil').then (dados =>{

             cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
          .should('contain', 'Olá, teste.giovanna (não é teste.giovanna? Sair)')

        })
        
    });

})
