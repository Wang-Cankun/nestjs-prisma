import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql'
import { AuthorEntity } from '../../decorators/author.decorator'
import { GetAuthorArgs } from '../../models/args/get-author.args'
import { Author } from '../../models/author.model'
import { Post } from '../../models/post.model'
import { AuthorService } from '../../services/author.service'
import { PostService } from '../../services/post.service'
import { UpdatePostInput } from './dto/update.input'

@Resolver((of) => Author)
export class AuthorResolver {
  constructor(
    private postService: PostService,
    private authorService: AuthorService
  ) {}

  @Query((returns) => Author)
  async getMe(@AuthorEntity() author: Author): Promise<Author> {
    return author
  }

  @Query((returns) => Author, { name: 'author' })
  async getAuthor(@Args() args: GetAuthorArgs): Promise<Author> {
    console.log(args)
    return this.authorService.findOneById(args)
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author
  //   return this.postService.findAll({ authorId: id })
  // }

  @Mutation((returns) => Author)
  async updatePost(
    @Args('upDatePostData') upDatePostData: UpdatePostInput
  ): Promise<Author> {
    return this.postService.updateById(upDatePostData)
  }
}
