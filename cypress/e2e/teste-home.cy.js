describe('Página de home', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('deve  clicar no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.get('.button').click()     
       
    });

    it("deve testar os botão de home", ()=>{
       cy.get('.header__home').click()  

    })

    it("Deve testar os botão de mensagens", ()=>{
        cy.get('.header__message').click()  
    })

    it('deve clicar no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.title().should('eq', 'AdoPet');
     
    });

    it('Verifica mensagem de texto', () =>{
        cy.contains('p', 'Quem ama adota!').should('be.visible')
    })

    it('Verifica mensagem de texto', () =>{
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    })


});