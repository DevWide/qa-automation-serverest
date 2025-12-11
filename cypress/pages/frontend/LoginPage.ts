export class LoginPage {
  elements = {
    email: () => cy.get('[data-testid="email"]'),
    senha: () => cy.get('[data-testid="senha"]'),
    entrar: () => cy.get('[data-testid="entrar"]'),
  };

  logar(email: string, senha: string) {
    this.elements.email().type(email);
    this.elements.senha().type(senha);
    this.elements.entrar().click();
  }
}
