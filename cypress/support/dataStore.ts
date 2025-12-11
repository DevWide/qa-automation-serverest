export class DataStore {
  static saveUser(user: any) {
    Cypress.env('currentUser', user);
  }

  static getUser() {
    return Cypress.env('currentUser');
  }
}
