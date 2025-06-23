class ProdutosPage{

    visitarUrl(){
        
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {

 cy.get('products > .row')

  .contains(nomeProduto)

  .focus()

  .type('{enter}');

}

    visitarProduto(nomeProduto){
       // cy.visit(`produtos/${nomeProduto}`)

       const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)

    }

    addProdutoCarrinho(){
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()
    }
}
    export default new ProdutosPage()