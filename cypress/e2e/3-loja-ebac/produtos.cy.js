/// <reference types="cypress"/>

import { eq } from "lodash";

describe('Funcionalidade: produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('', () => {
        cy.get('.product-block')
       // .first()
        //eq(2)
        .contains('Aero Daily Fitness Tee')
        .click()

        cy.get('#tab-title-description > a').should('contain','Descrição')
        
    });
});