import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  async create(data: Post): Promise<Post> {
    return {} as any;
  }

  async findOneById(id: number): Promise<Post> {
    return {} as any;
  }

  async findAll(arg0: { authorId: number }): Promise<Post[]> {
    return [] as Post[];
  }

  async remove(id: number): Promise<boolean> {
    return true;
  }
}
