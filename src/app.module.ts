import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { AuthorsService } from './authors/authors.service';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [CatsModule],
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthorsService, PostsService],
})
export class AppModule {}
