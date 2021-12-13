import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  async create(data: Author): Promise<Author> {
    return {} as any;
  }

  async findOneById(id: number): Promise<Author> {
    return {} as any;
  }

  async findAll(recipesArgs: Author[]): Promise<Author[]> {
    return [] as Author[];
  }

  async remove(id: number): Promise<boolean> {
    return true;
  }
}
