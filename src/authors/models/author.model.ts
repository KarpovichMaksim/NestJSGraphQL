import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model';

@ObjectType()
export class Author {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true, description: `Author firstName` })
  firstName?: string;

  @Field({ nullable: true, description: `Author lastName` })
  lastName?: string;

  @Field((type) => [Post])
  posts: Post[];
}
