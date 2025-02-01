export interface IClientRepository {
  create(name: string, email: string, phone: string): Promise<void>
}
