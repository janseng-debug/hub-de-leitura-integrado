describe('Testes End To End do fluxo de cadastro e login', () => {

    beforeEach(() => {
        cy.visit('index.html')
  });
  it('DEVE FAZER O CADASTRO E VALIDAR O LOGIN CADASTRADO', () => {
    
    // CADASTRO DE USUARIO PARA REALIZAR LOGIN
    cy.visit('http://localhost:3000/register.html')
    cy.get('#name').type('Jansen Guanabara')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone').type('11987654321')
    cy.get('#password').type('987654321')
    cy.get('#confirm-password').type('987654321')
    cy.get('#confirm-password').should('have.value', '987654321')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    // REALIZA LOGIN DE USUARIO CADASTRADO
    cy.visit('http://localhost:3000/login.html')
    cy.get('#email').type('teste@teste.com')
    cy.get('#password').type('987654321')
    cy.get('#login-btn').click()
    cy.get('#user-name').should('contain', 'Jansen Guanabara')
    // RESULTADO ESPERADO: O USUÁRIO DEVE SER REDIRECIONADO PARA A PÁGINA DE DASHBOARD APÓS O LOGIN BEM-SUCEDIDO

  });
  
});
   


   