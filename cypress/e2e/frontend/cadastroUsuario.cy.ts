import { CadastroPage } from '../../pages/frontend/CadastroPage';
import { DataGenerator } from '../../utils/dataGenerator';

describe('Cadastro de Usuário', () => {
  const cadastro = new CadastroPage();

  it('Cenário 1: Deve cadastrar um usuário com sucesso', () => {
    cy.visit('/cadastrarusuarios');

    const nome = DataGenerator.randomString('user');
    const email = DataGenerator.randomEmail();
    const senha = DataGenerator.randomString('senha');

    cadastro.preencherFormulario(nome, email, senha).enviar();

    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });
});
