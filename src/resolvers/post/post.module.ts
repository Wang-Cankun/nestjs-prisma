import { PostResolver } from './post.resolver'
import { Module } from '@nestjs/common'
import { PrismaService } from '../../services/prisma.service'
import { PostService } from '../../services/post.service'
import { PubSub } from 'apollo-server-express'

@Module({
  providers: [
    PostResolver,
    PrismaService,
    PostService,

    {
      provide: 'PUB_SUB',
      useValue: new PubSub()
    }
  ]
})
export class PostModule {}
