import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdatePostInput {
  @Field()
  postId: number
}
