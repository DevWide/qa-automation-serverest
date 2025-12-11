describe('API - Produtos', () => {
  it('Cenário 2: Deve listar produtos', () => {
    cy.request('GET', 'https://serverest.dev/produtos').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.quantidade).to.be.greaterThan(0);
    });
  });
});
