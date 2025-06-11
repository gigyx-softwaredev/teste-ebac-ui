/// <reference types="cypress"/>

import produtosPage from "../../support/products-objects/produtos.page";

describe('Funcionalidade: produtos', () => {
 
    beforeEach(() => {
        produtosPage.visitarUrl()
        
    });
    

  it('Deve selecionar um produto da lista', () => {
    cy.get('.products > .row').contains('Abominable Hoodie').click();
    cy.get('#tab-title-description > a').should('be.visible');
    cy.get('#tab-description > :nth-child(1)').should('be.visible');
});



    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
    produtosPage.buscarProduto('Aether Gym Pant');
    cy.get('.products .product').contains('Aether Gym Pant').click();
    cy.get('.product_title', { timeout: 10000 }).should('contain', produto);
});

    it('Deve visitar a página do produto',() =>{

        produtosPage.visitarProduto('Atlas-Fitness-Tank')
        cy.get('.product_title').should('contain', 'Atlas Fitness Tank')
        
    })

    it.only('Deve adicionar produto ao carrinho',() =>{

        produtosPage.buscarProduto('Atlas Fitness Tank')
        produtosPage.addCarrinho()        
    })
});