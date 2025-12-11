export class CadastroPage {
  elements = {
    nome: () => cy.get('[data-testid="nome"]'),
    email: () => cy.get('[data-testid="email"]'),
    senha: () => cy.get('[data-testid="password"]'),
    adminCheckbox: () => cy.get('input[type="checkbox"]'),
    cadastrarBtn: () => cy.get('[data-testid="cadastrar"]'),
  };

  preencherFormulario(nome: string, email: string, senha: string, admin = false) {
    this.elements.nome().type(nome);
    this.elements.email().type(email);
    this.elements.senha().type(senha);

    if (admin) this.elements.adminCheckbox().click();

    return this;
  }

  enviar() {
    this.elements.cadastrarBtn().click();
  }
}
