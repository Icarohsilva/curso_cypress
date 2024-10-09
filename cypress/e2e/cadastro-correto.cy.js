describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
  })

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.get('input[name="nome"]').type('Antonio');
    cy.get('input[name="email"]').type('Antonio@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();
  })

})
