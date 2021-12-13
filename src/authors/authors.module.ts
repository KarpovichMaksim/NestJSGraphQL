import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Module({
  imports: [],
  providers: [AuthorsService],
})
export class AuthorsModule {}
