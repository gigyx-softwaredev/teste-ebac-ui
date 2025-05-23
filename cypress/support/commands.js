
 Cypress.Commands.add('login', (usuario, senha) => { 

    cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()


  })
  Cypress.Commands.add('preCadastro', (email,senha,primeiroNome,segundoNome) =>{

    cy.get('#reg_password').type(senha);
            cy.get('#reg_email').type(email);
            cy.get(':nth-child(4) > .button').click();
    
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
            cy.get('#account_first_name').type(primeiroNome);
            cy.get('#account_last_name').type(segundoNome);
            cy.get('.woocommerce-Button').click();
  })

  Cypress.Commands.add('detalhesConta', (primeiroNome,segundoNome,usuario) =>{
    cy.get('#account_first_name').type(primeiroNome)
    cy.get('#account_last_name').type(segundoNome)
    cy.get('#account_display_name').type(usuario)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').shoul('contain','Detalhes da conta modificados com sucesso.')
  })

  