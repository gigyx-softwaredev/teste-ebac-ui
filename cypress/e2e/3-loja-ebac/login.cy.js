/// <reference types="cypress"/>

describe('funcionalidade login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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

})
