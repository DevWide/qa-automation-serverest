export class ListarProdutoPage {
  elements = {
    linhas: () => cy.get('table tbody tr'),
  };

  validarCarregamento() {
    cy.intercept('GET', '**/produtos').as('getProdutos');

    cy.wait('@getProdutos', { timeout: 15000 });

    this.elements
      .linhas()
      .should('have.length.greaterThan', 0);
  }
}
