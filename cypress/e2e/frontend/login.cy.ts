import { LoginPage } from '../../pages/frontend/LoginPage';
import { DataGenerator } from '../../utils/dataGenerator';
import { DataStore } from '../../support/dataStore';

describe('Login dinâmico', () => {
  const login = new LoginPage();

  before(() => {
    const user = {
      nome: DataGenerator.randomString('user'),
      email: DataGenerator.randomEmail(),
      password: DataGenerator.randomPassword(),
      administrador: 'true',
    };

    cy.request('POST', 'https://serverest.dev/usuarios', user).then((res) => {
      expect(res.status).to.eq(201);

      DataStore.saveUser(user);
    });
  });

  it('Deve logar com o usuário recém criado', () => {
    const { email, password } = DataStore.getUser();

    cy.visit('/login');

    login.logar(email, password);

    cy.url().should('include', '/admin/home');
  });
});
