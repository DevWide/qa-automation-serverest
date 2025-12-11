import { ListarProdutoPage } from '../../pages/frontend/ListarProdutoPage';
import { LoginPage } from '../../pages/frontend/LoginPage';
import { DataGenerator } from '../../utils/dataGenerator';

describe('Listagem de Produtos com usuário dinâmico', () => {
  const listar = new ListarProdutoPage();
  const login = new LoginPage();

  const user = {
    nome: DataGenerator.randomString('user'),
    email: DataGenerator.randomEmail(),
    password: DataGenerator.randomPassword(),
    administrador: 'true',
  };

  before(() => {
    cy.request('POST', 'https://serverest.dev/usuarios', user).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it('Deve exibir produtos', () => {
    cy.visit('/login');
    login.logar(user.email, user.password);

    cy.fixture('produtos').then((mock) => {
      cy.intercept('GET', '**/produtos', {
        statusCode: 200,
        body: {
          quantidade: mock.length,
          produtos: mock,
        },
      }).as('mockProdutos');
    });

    cy.visit('/admin/listarprodutos');
    cy.wait('@mockProdutos');

    listar.validarCarregamento();
  });
});





