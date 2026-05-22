


describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });
  it('Deve preencher formulário de contato com sucesso', () => {
    // Primeiro teste
    cy.get('[name="name"]').type('Maria da Silva')
    cy.get('[name="email"]').type('maria.silva@example.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  });
  it('Deve validar mensagem de erro ao enviar sem preencher o nome', () => {

    cy.get('[name="name"]').clear() // Limpa o campo de nome para simular o envio sem preenchê-lo
    cy.get('[name="email"]').type('maria.silva@example.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')
  });
  it('Deve validar mensagem de erro ao enviar sem preencher o email', () => {
    cy.get('[name="name"]').type('Maria da Silva')
    cy.get('[name="email"]').clear() // Limpa o campo de email para simular o envio sem preenchê-lo
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher o assunto', () => {

    cy.get('[name="name"]').type('Maria da Silva')
    cy.get('[name="email"]').type('maria.silva@example.com')
    //cy.get('[name="subject"]').select('Parcerias') // Limpa o campo de assunto para simular o envio sem preenchê-lo
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher menssagem', () => {

    cy.get('[name="name"]').type('Maria da Silva')
    cy.get('[name="email"]').type('maria.silva@example.com')
    cy.get('[name="subject"]').select('Parcerias')
    //cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')

  });


});