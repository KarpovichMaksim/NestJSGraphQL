import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Post model' })
export class Post {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true, description: `Post title` })
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}
