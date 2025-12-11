export class ListarProdutosPage {
  elements = {
    linhas: () => cy.get('table tbody tr'),
  };

  validarCarregamento() {
    this.elements.linhas().should('have.length.greaterThan', 0);
  }
}

export class ListarProdutoPage {
  elements = {
    linhas: () => cy.get('table tbody tr'),
    firstEditButton: () =>
      cy.get('table tbody tr').first().find('button.btn-info'),
    firstDeleteButton: () =>
      cy.get('table tbody tr').first().find('button.btn-danger'),
  };

  validarLista() {
    this.elements.linhas().should('have.length.greaterThan', 0);
  }
}
