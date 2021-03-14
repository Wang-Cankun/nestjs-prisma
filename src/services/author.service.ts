import { Author } from '../models/author.model'

export class AuthorService {
  async findOneById(obj: any): Promise<Author> {
    return {
      id: obj.id || 42,
      firstName: obj.firstName || 'fn',
      lastName: obj.lastName || 'ln',
      posts: []
    }
  }
}
