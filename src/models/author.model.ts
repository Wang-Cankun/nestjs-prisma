import { Field, Int, ObjectType } from '@nestjs/graphql'
import { loggerMiddleware } from '../common/middleware/logger.middleware'
import { Post } from './post.model'

@ObjectType()
export class Author {
  @Field((type) => Int)
  id: number

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string

  @Field((type) => [Post], { nullable: true })
  posts: Post[]
}
