import { DataGenerator } from '../../utils/dataGenerator';

describe('API - Usuários', () => {
  it('Cenário 1: Criar usuário com sucesso', () => {
    const user = {
      nome: DataGenerator.randomString('api'),
      email: DataGenerator.randomEmail(),
      password: DataGenerator.randomPassword(),
      administrador: 'true',
    };

    cy.request('POST', 'https://serverest.dev/usuarios', user).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });
});

