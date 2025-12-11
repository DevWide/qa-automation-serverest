import { DataGenerator } from '../../utils/dataGenerator';

describe('API - Usuários CRUD', () => {
  it('Cenário 3: Criar e deletar usuário', () => {
    const user = {
      nome: DataGenerator.randomString('deleteUser'),
      email: DataGenerator.randomEmail(),
      password: DataGenerator.randomPassword(),
      administrador: 'false',
    };

    cy.request('POST', 'https://serverest.dev/usuarios', user).then((res) => {
      expect(res.status).to.eq(201);

      const userId = res.body._id;

      cy.request('DELETE', `https://serverest.dev/usuarios/${userId}`).then(
        (del) => {
          expect(del.status).to.eq(200);
          expect(del.body.message).to.eq('Registro excluído com sucesso');
        },
      );
    });
  });
});
