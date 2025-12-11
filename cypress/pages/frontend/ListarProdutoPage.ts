export class ListarProdutoPage {
  elements = {
    tabela: () => cy.get('table'),
  };

  validarCarregamento() {
    this.elements.tabela().should('exist');
  }
}
