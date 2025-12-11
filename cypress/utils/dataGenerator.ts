export class DataGenerator {
  static randomString(prefix = 'auto'): string {
    return `${prefix}_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 8)}`;
  }

  static randomEmail(): string {
    return `${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 6)}@teste.com`;
  }

  static randomPassword(): string {
    return Math.random().toString(36).substring(2, 10);
  }
}
