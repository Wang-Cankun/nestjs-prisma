import { Module } from '@nestjs/common'
import { AuthorService } from '../../services/author.service'
import { PostService } from '../../services/post.service'
import { AuthorResolver } from './author.resolver'

@Module({
  imports: [],
  providers: [AuthorService, AuthorResolver, PostService]
})
export class AuthorModule {}
