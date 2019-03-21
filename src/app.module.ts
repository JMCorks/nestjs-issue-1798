import { Module } from '@nestjs/common';
import { CommonModule } from 'nestjs-issue-module-1798';

@Module({
  imports: [CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
