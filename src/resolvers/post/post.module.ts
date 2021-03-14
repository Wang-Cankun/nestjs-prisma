import { PostResolver } from './post.resolver'
import { Module } from '@nestjs/common'
import { PrismaService } from '../../services/prisma.service'
import { PostService } from '../../services/post.service'

@Module({
  providers: [PostResolver, PrismaService, PostService]
})
export class PostModule {}
