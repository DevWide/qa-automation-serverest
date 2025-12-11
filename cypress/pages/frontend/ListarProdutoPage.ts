export class ListarProdutoPage {
  elements = {
    linhas: () => cy.get('table tbody tr'),
  };

  validarCarregamento() {
    cy.get('table tbody tr', { timeout: 15000 })
      .should('have.length.greaterThan', 0);
  }
}
