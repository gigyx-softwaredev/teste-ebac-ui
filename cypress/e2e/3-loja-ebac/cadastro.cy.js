/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: cadastro', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_password').type('teste@123456');
        cy.get('#reg_email').type(faker.internet.email());
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(faker.person.firstName());
        cy.get('#account_last_name').type(faker.person.lastName());
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });

    it('Deve completar o cadastro com sucesso - Usando variáveis', () => {
        const email = faker.internet.email();
        const nome = faker.person.firstName();
        const sobrenome = faker.person.lastName();

        cy.get('#reg_password').type('teste@123456');
        cy.get('#reg_email').type(email);
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(nome);
        cy.get('#account_last_name').type(sobrenome);
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });

    it('Deve completar o cadastro com sucesso utilizando Comandos Personalizados', () =>{

        cy.preCadastro(faker.internet.email(, 'teste@123', faker.person.firstName(), faker.person.lastName()))
  })
    });
