import { MinLength } from 'class-validator'
import { Field, ArgsType } from '@nestjs/graphql'

@ArgsType()
export class GetAuthorArgs {
  @Field({ nullable: true, defaultValue: 114514 })
  id?: number

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true, defaultValue: 'defaultLastName' })
  @MinLength(1)
  lastName: string
}
