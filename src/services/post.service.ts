import { UpdatePostInput } from '../resolvers/author/dto/update.input'

export class PostService {
  async updateById(obj: UpdatePostInput) {
    console.log(obj.postId)
    return {
      id: obj.postId || 42,
      firstName: 'fn',
      lastName: 'ln',
      posts: []
    }
  }
}
