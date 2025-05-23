/// <reference types= "cypress" />

describe('Funcionalidade: Detalhes da conta', () =>{

    beforeEach(() => {

        cy.visit('minha-conta/edit-account')
        cy.login('teste.giovanna@teste.com.br', 'teste123')
        cy.fixture('perfil').then(login =>{
         cy.login(login.usuario, login.senha)   
        })
        
    });

    it.only('Deve completar detalhes da conta com sucesso', () =>{
        cy.detalhesConta('Giovanna', 'Carvalho','gi.qa')
       

        
    })
    
})