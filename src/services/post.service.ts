import { UpdatePostInput } from '../resolvers/author/dto/update.input'

export class PostService {
  async updateById(obj: UpdatePostInput) {
    console.log('Run post service')
    return {
      id: obj.postId || 42,
      firstName: 'fn',
      lastName: 'ln',
      posts: []
    }
  }

  async addComment(obj) {
    return {
      customInfo1: '123',
      customInfo2: '456',
      obj
    }
  }
}
