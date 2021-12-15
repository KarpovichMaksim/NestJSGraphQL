import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';
import { PostsService } from 'src/posts/posts.service';
import { AuthorsService } from './authors.service';
import { Author } from './models/author.model';

@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query()
  async author(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @Mutation((returns) => Post)
  async upvotePost(@Args({ name: 'postId', type: () => Int }) postId: number) {
    return this.postsService.upvoteById({ id: postId });
  }

  @ResolveField()
  async posts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
