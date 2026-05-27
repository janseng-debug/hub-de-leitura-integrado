import { faker } from "@faker-js/faker";

describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });
  it('PRIMEIRO TESTE - Deve preencher formulário de contato com sucesso', () => {
    // PRIMEIRO TESTE  
    cy.get('[name="name"]').type('Maria da Silva')
    cy.get('[name="email"]').type('maria.silva@example.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
    //DEVE PREENCHER FORMULÁRIO DE CONTATO COM SUSCESSO
  });
  it('SEGUNDO TESTE - Limpa o campo nome para simular envio sem preenchê-lo', () => {
    // SEGUNDO TESTE
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('maria.silva@example.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')
    // LIMPA O CAMPO NOME PARA SIMULAR ENVIO SEM PREENCHÊ-LO
  });
  it('TERCEIRO TESTE - Limpa o campo email para simular envio sem preenchê-lo', () => {
    // TERCEIRO TESTE
    cy.get('[name="name"]').type('Maria da Silva')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
    // LIMPA O CAMPO E-MAIL PARA SIMULAR O ENVIO SEM PREENCHÊ-LO
  });
  it('QUARTO TESTE - Limpa o campo assunto para simular envio sem preenchê-lo', () => {
    // QUARTO TESTE
    cy.get('[name="name"]').type('Maria da Silva')
    cy.get('[name="email"]').type('maria.silva@example.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Contato enviado com sucesso!')
    //LIMPA O CAMPO DE ASSUNTO PARA SIMULAR O ENVIO SEM PREENCHÊ-LO
  });
  it('QUINTO TESTE - Limpa o campo mensagem para simular envio sem preenchê-lo', () => {
    // QUINTO TESTE
    cy.get('[name="name"]').type('Maria da Silva')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Parcerias')
    //cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre as parcerias de captação de novos talentos. Obrigada!')
    cy.get('#btn-submit').click()
    //cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')  
    //LIMPA O CAMPO DE MENSAGEM PARA SIMULAR O ENVIO SEM PREENCHÊ-LO
  });
});