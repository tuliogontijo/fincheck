import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDTO: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findManyDTO);
  }

  findFirst(findFirstDTO: Prisma.CategoryFindFirstArgs) {
    return this.prismaService.category.findFirst(findFirstDTO);
  }
}
