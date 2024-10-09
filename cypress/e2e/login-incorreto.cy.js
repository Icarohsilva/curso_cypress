describe('Página de login', ()=> {
    beforeEach(()=> {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode:400, }).as('stubPost')
        })

    it('Verificar mensagem para preecnher os campos de email e senha', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    })
    it('Verificar mensagem de email e senha incorretos', () => {
        cy.get('[data-test="input-loginEmail"]').type('123');
        cy.get('label[for="email"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.get('[data-test="input-loginPassword"]').type('3434');
        cy.get('label[for="email"]').click();
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {
        cy.login('ana@email.com', 'Senha123')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
})
})