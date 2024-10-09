describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Antonio');
    cy.get('input[name="email"]').type('Antonio@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();
  })
  
  it('Deve carregar a página corretamente e clicar no botão ‘Ver pets disponíveis para adoção”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();     
   
  });

  it("Visita a página de principal do AdoPet e testa os botão de home", ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();  

  })

  it("Visita a página de /login do Adopet", ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  })
  
  it("Visita a página de /home do Adopet", ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })
  
  it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click();  
  })

})
